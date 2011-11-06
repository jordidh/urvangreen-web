<?php

namespace Curba\WeatherBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Template;
use Curba\WeatherBundle\Entity\Station;
use Curba\WeatherBundle\Entity\StationData;
use Curba\SecurityBundle\Entity\UserWeatherStation;
use Curba\WeatherBundle\Form\StationType;

/**
 * Default controller.
 *
 * @Route("/weather")
 */
class DefaultController extends Controller
{
    /**
     * Lists all Station entities.
     *
     * Route("/", name="stations")
     * Template()
     *
    public function indexAction()
    {
        $user = $this->get('security.context')->getToken()->getUser();
        
        $em = $this->get('doctrine')->getEntityManager();
        $stations = array();
        foreach($user->getStations() as $userStation)
        {
            $stations[] = $em->getRepository('CurbaWeatherBundle:Station')->find($userStation->getWeatherStation());
        }              
        
        return array(
            'stations' => $stations,
        );
    }
    */
    
    /**
     * @Route("/station/edit/{_locale}", requirements={"_locale" = "ca|en|es"}, name="station_edit")
     * @Template()
     */
    public function editAction()
    {
        $request = $this->get('request');
        $id = $request->get('id');
        
        $em = $this->get('doctrine')->getEntityManager();
        
        //Station
        $stationRepository = $em->getRepository('CurbaWeatherBundle:Station');
        $station = $stationRepository->find($id);
        if (!$station) { throw $this->createNotFoundException('No station found for id '.$id);  }

        $editForm = $this->createForm(new StationType(), $station);
        $deleteForm = $this->createDeleteForm($id);

        return array(
            'entity'      => $station,
            'edit_form'   => $editForm->createView(),
            'delete_form' => $deleteForm->createView(),
        );
    }
    
    /**
     * Displays a form to create a new Station entity.
     *
     * @Route("/station/new", name="station_new")
     * @Template()
     */
    public function newAction()
    {
        $entity = new Station();
        $form   = $this->createForm(new StationType(), $entity);

        return array(
            'entity' => $entity,
            'form'   => $form->createView()
        );
    }
    
    /**
     * Edits an existing Station entity.
     *
     * @Route("/station/{id}/update", name="station_update")
     * Method("post")
     * @Template("CurbaWeatherBundle:Station:edit.html.twig")
     */
    public function updateAction($id)
    {
        $em = $this->getDoctrine()->getEntityManager();

        $entity = $em->getRepository('CurbaWeatherBundle:Station')->find($id);

        if (!$entity) {
            throw $this->createNotFoundException('Unable to find Station entity.');
        }

        $editForm   = $this->createForm(new StationType(), $entity);
        $deleteForm = $this->createDeleteForm($id);

        $request = $this->getRequest();

        if ('POST' === $request->getMethod()) {
            $editForm->bindRequest($request);

            if ($editForm->isValid()) {
                $em = $this->getDoctrine()->getEntityManager();
                $em->persist($entity);
                $em->flush();

                return $this->redirect($this->generateUrl('main'));
            }
        }

        return array(
            'entity'      => $entity,
            'edit_form'   => $editForm->createView(),
            'delete_form' => $deleteForm->createView(),
        );
    }

    /**
     * Deletes a Station entity.
     *
     * @Route("/station/{id}/delete", name="station_delete")
     * Method("post")
     */
    public function deleteAction($id)
    {
        $form = $this->createDeleteForm($id);
        $request = $this->getRequest();

        if ('POST' === $request->getMethod()) {
            $form->bindRequest($request);

            if ($form->isValid()) {
                $em = $this->getDoctrine()->getEntityManager();
                
                $entity = $em->getRepository('CurbaWeatherBundle:Station')->find($id);
                if (!$entity) {
                    throw $this->createNotFoundException('Unable to find Station entity.');
                }
                $em->remove($entity);
                
                $userWeatherStations = $em->getRepository('CurbaSecurityBundle:UserWeatherStation')->findByWeatherStation($id);
                if (!$userWeatherStations) {
                    throw $this->createNotFoundException('Unable to find UserWeatherStation entity.');
                }
                foreach($userWeatherStations as $userWeatherStation)
                {
                    $em->remove($userWeatherStation);
                }
                
                $em->flush();
            }
        }

        return $this->redirect($this->generateUrl('main'));
    }

    private function createDeleteForm($id)
    {
        return $this->createFormBuilder(array('id' => $id))
            ->add('id', 'hidden')
            ->getForm()
        ;
    }
    
    /**
     * Creates a new Station entity.
     *
     * @Route("/station/create", name="station_create")
     * Method("post")
     * @Template("CurbaWeatherBundle:Station:new.html.twig")
     */
    public function createAction()
    {
        $entity  = new Station();
        $request = $this->getRequest();
        $form    = $this->createForm(new StationType(), $entity);

        if ('POST' === $request->getMethod()) {
            $form->bindRequest($request);

            if ($form->isValid()) {
                $user = $this->get('security.context')->getToken()->getUser();
                
                $em = $this->getDoctrine()->getEntityManager();
                $em->persist($entity);
                $em->flush();
                
                $userWeatherStation = new userWeatherStation();
                $userWeatherStation->setUser($user);
                $userWeatherStation->setWeatherStation($entity->getId());
                $userWeatherStation->setCrud('YYYY');
                $em->persist($userWeatherStation);
                
                $em->flush();

                return $this->redirect($this->generateUrl('main'));
                
            }
        }

        return array(
            'entity' => $entity,
            'form'   => $form->createView()
        );
    }
    
    
    /**
     * @Route("/station/upload/{_locale}", requirements={"_locale" = "ca|en|es"}, name="station_upload")
     * @Template()
     */
    public function uploadAction()
    {       
        /*
         * 
         $batchSize = 20;
        for ($i = 1; $i <= 10000; ++$i) {
            $user = new CmsUser;
            $user->setStatus('user');
            $user->setUsername('user' . $i);
            $user->setName('Mr.Smith-' . $i);
            $em->persist($user);
            if (($i % $batchSize) == 0) {
                $em->flush();
                $em->clear(); // Detaches all objects from Doctrine!
            }
        }
         */
        $aux = '';
        
        $logger = $this->get('logger');
        $logger->info('Uploading file to DB');

        
        $request = $this->get('request');
        $id = $request->get('id');
        
        $em = $this->get('doctrine')->getEntityManager();
        
        //Station
        $stationRepository = $em->getRepository('CurbaWeatherBundle:Station');
        $station = $stationRepository->find($id);
        if (!$station) { throw $this->createNotFoundException('No station found for id '.$id);  }

        $editForm = $this->createForm(new \Curba\WeatherBundle\Form\StationDataFileUploadedType(), $station);

        if ($request->getMethod() == 'POST') {
            $editForm->bindRequest($request);
            if ($editForm->isValid()) {
                if ($editForm['file']->isValid())
                {
                    try
                    {
                        $logger->info('Start reading data fromf ile to DB');

                        echo "Memory usage after: " . (memory_get_usage() / 1024) . " KB" . PHP_EOL;

                        $time = microtime(true);
                        $fileContent = file_get_contents($editForm['file']->getData());
                        $time = microtime(true) - $time;
                        $logger->info('Time to read file '.$time);
                        echo 'Time to read file '.$time;

                        $time = microtime(true);
                        $fileLines = explode("\n", $fileContent);
                        $time = microtime(true) - $time;
                        $logger->info('Time to explode file '.$time);
                        echo 'Time to explode file '.$time;

                        $time = microtime(true);
                        unset($fileLines[0]);
                        unset($fileLines[1]);
                        $batchSize = 1000;
                        $i=0;

                        $em->getConnection()->beginTransaction();

                        foreach ($fileLines as $line)
                        {
                            $i++;
                            $data = new StationData();
                            if ($data->LoadFromString($line, $station) > 0)
                            {
                                $em->persist($data);
                            }
                            if (($i % $batchSize) == 0) {
                                $em->flush();
                                //$em->clear(); // Nona error
                            }
                        }

                        $time = microtime(true) - $time;
                        $logger->info('Time to persist data '.$time);
                        echo 'Time to persist '.$time;

                        $time = microtime(true);
                        $em->flush();
                        //$em->clear(); // Detaches all objects from Doctrine!
                        $time = microtime(true) - $time;
                        $logger->info('Time to flush data '.$time);
                        echo 'Time to flush '.$time;

                        $em->getConnection()->commit();

                        echo "Memory usage before: " . (memory_get_usage() / 1024) . " KB" . PHP_EOL;

                        $aux = 'Uploading successfully '.count($fileLines);
                    }
                    catch(Exception $e)
                    {
                        $em->getConnection()->rollback();
                        $em->close();
                        throw $e;
                    }
                }
                else
                {
                    $aux = 'Error uploading: '.$editForm['file']->getErrors();
                }
            }
        }
        
        return array(
            'entity'      => $station,
            'edit_form'   => $editForm->createView(),
            'aux'         => $aux,
        );
    }
    
    /**
     * @Route("/station/chart/{_locale}", requirements={"_locale" = "ca|en|es"}, name="station_chart")
     * @Template()
     */
    public function chartAction()
    {
        $request = $this->get('request');
        $id = $request->get('id');  //station id
        
        //1 => $temperatures (average, max, min)
        //2 => $humidities (average, max, min)
        //3 => $wind (average, max, min)
        //4 => $rain
        $indexToShow = $request->get('index');  //value to show
        
        $em = $this->get('doctrine')->getEntityManager();
        
        //Station
        $stationRepository = $em->getRepository('CurbaWeatherBundle:Station');
        $station = $stationRepository->find($id);
        if (!$station) { throw $this->createNotFoundException('No station found for id '.$id);  }
        
        //StationData
        $stationDataRepository = $em->getRepository('CurbaWeatherBundle:StationData');
        $stationData = $stationDataRepository->getDaysStationDataBetween($id, new \DateTime('2010-12-01 10:00:00'), new \DateTime('2010-12-31 20:00:00'));
        //$detailedStationData = $stationDataRepository->getStationDataBetween($id, new \DateTime('2010-12-01 10:00:00'), new \DateTime('2010-12-31 20:00:00'));
        //$stationData = $stationDataRepository->getStationDataFromDay($id, new \DateTime('2010-12-18 10:00:00'));
        
        return array(
            'station'      => $station,
            'data'         => $stationData,
            //'detailedData' => $detailedStationData,
            'index'        => $indexToShow,
        );
    }
    
    /**
     * @Route("/station/detailedChart/{_locale}", requirements={"_locale" = "ca|en|es"}, name="station_detailed_chart")
     * @Template()
     */
    public function detailedChartAction()
    {
        $request = $this->get('request');
        $id = $request->get('id');  //station id
        
        //1 => $temperatures (average, max, min)
        //2 => $humidities (average, max, min)
        //3 => $wind (average, max, min)
        //4 => $rain
        $indexToShow = $request->get('index');  //value to show
        
        $em = $this->get('doctrine')->getEntityManager();
        
        //Station
        $stationRepository = $em->getRepository('CurbaWeatherBundle:Station');
        $station = $stationRepository->find($id);
        if (!$station) { throw $this->createNotFoundException('No station found for id '.$id);  }
        
        //StationData
        $stationDataRepository = $em->getRepository('CurbaWeatherBundle:StationData');
        //$stationData = $stationDataRepository->getDaysStationDataBetween($id, new \DateTime('2010-12-01 10:00:00'), new \DateTime('2010-12-31 20:00:00'));
        $detailedStationData = $stationDataRepository->getStationDataBetween($id, new \DateTime('2010-12-01 10:00:00'), new \DateTime('2010-12-31 20:00:00'));
        //$stationData = $stationDataRepository->getStationDataFromDay($id, new \DateTime('2010-12-18 10:00:00'));
        
        return array(
            'station'      => $station,
            //'data'         => $stationData,
            'detailedData' => $detailedStationData,
            'index'        => $indexToShow,
        );
    }
}
