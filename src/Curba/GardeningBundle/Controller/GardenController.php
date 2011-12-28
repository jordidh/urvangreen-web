<?php

namespace Curba\GardeningBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Template;
use Curba\GardeningBundle\Form\GardenType;
use Curba\GardeningBundle\Entity\Garden;
use Curba\SecurityBundle\Entity\UserGarden;
use Symfony\Component\HttpFoundation\Request;
use Curba\GardeningBundle\Entity\Action;
use Curba\GardeningBundle\Form\ActionType;
use Doctrine\ORM\EntityRepository;

use Ivory\GoogleMapBundle\Model\MapTypeId;
use Ivory\GoogleMapBundle\Model\Overlays\Animation;

class GardenController extends Controller
{
    /**
     * @Route("/gardening/garden/{_locale}", requirements={"_locale" = "ca|en|es"}, name="garden_index")
     * @Template()
     */
    public function indexAction()
    {
        $request = $this->get('request');
        $id = $request->get('id');
        
        $em = $this->get('doctrine')->getEntityManager();

        if (null == $garden = $em->find('CurbaGardeningBundle:Garden', $id)) {
            throw new NotFoundHttpException('Garden not found, database error, contact with ... ?');
        }
        
        $gardenRepository = $em->getRepository('CurbaGardeningBundle:Garden');
        $zoneRepository = $em->getRepository('CurbaGardeningBundle:Zone');
        
        $zonesAndCropsAndActions = array();
        $currentZones = $gardenRepository->getCurrentZones($garden->getId());
        foreach ($currentZones as $currentZone)
        {
            $zone = array();
            $zone[] = $currentZone;
            
            $crops = array();
            $currentCrops = $zoneRepository->getCurrentCrops($currentZone->getId());
            foreach ($currentCrops as $currentCrop)
            {
                $currentActions = $currentCrop->getActions();
                $crop = array();
                $crop[] = $currentCrop;
                $crop[] = $currentActions;
                $crops[] = $crop;
            }
            $zone[] = $crops;
            
            $zonesAndCropsAndActions[] = $zone;
        }
        
        //var_dump($currentActions);
        
        return array(
            'garden' => $garden,
            'zonesAndCropsAndActions' => $zonesAndCropsAndActions,
        );
    }
    
    /**
     * @Route("/gardening/garden/new/{_locale}", requirements={"_locale" = "ca|en|es"}, name="garden_new")
     * @Template()
     */
    public function newAction()
    {
        $request = $this->get('request');
        
        // create a task and give it some dummy data for this example
        $garden = new Garden();
        $garden->setName('Set the garden name');
        $garden->setDescription('Write a short description');

        $form = $this->createForm(new GardenType(), $garden);
        
        if ($request->getMethod() == 'POST') {
            $form->bindRequest($request);

            if ($form->isValid()) {
                // Save the garden and the relation user-garden
                $user = $this->get('security.context')->getToken()->getUser();
                
                $em = $this->get('doctrine')->getEntityManager();
                
                $em->persist($garden);
   
                $em->flush();
                
                $userGarden = new UserGarden();
                $userGarden->setUser($user);
                $userGarden->setGarden($garden->getId());
                $userGarden->setCrud('YYYY');
                $em->persist($userGarden);
                
                $em->flush();

                //$request->getSession()->setFlash('notice', 'Garden created successfully');

                return $this->redirect($this->generateUrl('main'));
            }
        }
        
        // Requests the ivory google map service
        $map = $this->get('ivory_google_map.map');
        // Disable the auto zoom flag
        $map->setAutoZoom(false);
        // Sets the center
        $map->setCenter(39.571822, 2.653198, true);
        // Sets the zoom
        $map->setMapOption('zoom', 3);
        
        // Sets your map type
        $map->setMapOption('mapTypeId', MapTypeId::HYBRID);
        //$map->setMapOption('mapTypeId', MapTypeId::ROADMAP);
        //$map->setMapOption('mapTypeId', MapTypeId::SATELLITE);
        //$map->setMapOption('mapTypeId', MapTypeId::TERRAIN);
        
        $map->setStylesheetOption('width', '600px');
        $map->setStylesheetOption('height', '300px');
        
        // Requests the ivory google map marker service
        $marker = $this->get('ivory_google_map.marker');
        
        // Configure your marker options
        $marker->setPrefixJavascriptVariable('marker_');
        $marker->setPosition(39.571822, 2.653198, true);
        $marker->setAnimation(Animation::DROP);
        //$marker->setAnimation(Animation::BOUNCE);

        $marker->setOption('clickable', true);
        $marker->setOption('flat', true);

        // Add your marker to the map
        $map->addMarker($marker);

        $handle = 'function(event){
            '.$marker->getJavascriptVariable().'.setPosition(event.latLng);
            document.getElementById("garden_latitude").value = event.latLng.lat().toFixed(6);
            document.getElementById("garden_longitude").value = event.latLng.lng().toFixed(6);
            }';
        $instance = $map->getJavascriptVariable();
        
        // Requests the ivory google map event service
        $event = $this->get('ivory_google_map.event');

        // Configure your event
        $event->setInstance($instance);
        $event->setEventName('click');
        $event->setHandle($handle);

        // It can only be used with a DOM event
        // By default, the capture flag is false
        $event->setCapture(true);

        // Add a DOM event
        $map->getEventManager()->addDomEvent($event);

        
        return $this->render('CurbaGardeningBundle:Garden:new.html.twig', array(
            'form' => $form->createView(),
            'map' => $map,
        ));
    }
    
    /**
     * @Route("/gardening/garden/edit/{_locale}", requirements={"_locale" = "ca|en|es"}, name="garden_edit")
     * @Template()
     */
    public function editAction()
    {
        $request = $this->get('request');
        $id = $request->get('id');
        
        $em = $this->get('doctrine')->getEntityManager();
        
        // create a task and give it some dummy data for this example
        $gardenRepository = $em->getRepository('CurbaGardeningBundle:Garden');
        $garden = $gardenRepository->find($id);
        if (!$garden) { throw $this->createNotFoundException('No garden found for id '.$id);  }

        $form = $this->createForm(new GardenType(), $garden);
        
        if ($request->getMethod() == 'POST') {
            $form->bindRequest($request);

            if ($form->isValid()) {
                // Save the garden and the relation user-garden
                //$user = $this->get('security.context')->getToken()->getUser();
                
                $garden = $form->getData();
                
                $garden->setLongitude($_POST["garden"]["longitude"]);
                $garden->setLatitude($_POST["garden"]["latitude"]);
                
                //print_r($garden->getLongitude());
                //print_r($_POST);
                //exit;       
                
                $em = $this->get('doctrine')->getEntityManager();
                
                $em->persist($garden);
   
                $em->flush();
                
                //$request->getSession()->setFlash('notice', 'Garden created successfully');

                return $this->redirect($this->generateUrl('main'));
            }
        }
        
        // Requests the ivory google map service
        $map = $this->get('ivory_google_map.map');
        // Disable the auto zoom flag
        $map->setAutoZoom(false);
        // Sets the center
        $map->setCenter($garden->getLatitude(), $garden->getLongitude(), true);
        // Sets the zoom
        $map->setMapOption('zoom', 12);
        
        // Sets your map type
        $map->setMapOption('mapTypeId', MapTypeId::HYBRID);
        //$map->setMapOption('mapTypeId', MapTypeId::ROADMAP);
        //$map->setMapOption('mapTypeId', MapTypeId::SATELLITE);
        //$map->setMapOption('mapTypeId', MapTypeId::TERRAIN);
        
        $map->setStylesheetOption('width', '600px');
        $map->setStylesheetOption('height', '300px');
        
        // Requests the ivory google map marker service
        $marker = $this->get('ivory_google_map.marker');
        
        // Configure your marker options
        $marker->setPrefixJavascriptVariable('marker_');
        $marker->setPosition($garden->getLatitude(), $garden->getLongitude(), true);
        $marker->setAnimation(Animation::DROP);
        //$marker->setAnimation(Animation::BOUNCE);

        $marker->setOption('clickable', true);
        $marker->setOption('flat', true);

        // Add your marker to the map
        $map->addMarker($marker);

        $handle = 'function(event){
            '.$marker->getJavascriptVariable().'.setPosition(event.latLng);
            document.getElementById("garden_latitude").value = event.latLng.lat().toFixed(6);
            document.getElementById("garden_longitude").value = event.latLng.lng().toFixed(6);
            }';
        $instance = $map->getJavascriptVariable();
        
        // Requests the ivory google map event service
        $event = $this->get('ivory_google_map.event');

        // Configure your event
        $event->setInstance($instance);
        $event->setEventName('click');
        $event->setHandle($handle);

        // It can only be used with a DOM event
        // By default, the capture flag is false
        $event->setCapture(true);

        // Add a DOM event
        $map->getEventManager()->addDomEvent($event);
        
        
        return $this->render('CurbaGardeningBundle:Garden:edit.html.twig', array(
            'form' => $form->createView(),
            'garden' => $garden,
            'map' => $map,
        ));
    }
    
    /**
     * @Route("/gardening/garden/silverlight/{_locale}", requirements={"_locale" = "ca|en|es"}, name="garden_silverlight")
     * @Template()
     */
    public function silverlightAction()
    {
        $request = $this->get('request');
        $id = $request->get('id');
        
        $em = $this->get('doctrine')->getEntityManager();
        
        //Garden
        $gardenRepository = $em->getRepository('CurbaGardeningBundle:Garden');
        $garden = $gardenRepository->find($id);
        if (!$garden) { throw $this->createNotFoundException('No garden found for id '.$id);  }
        $gardenJson = $garden->asArray();
        
        //Zones and Crops
        $zonesJson = array();
        $cropsJson = array();
        
        $zoneRepository = $em->getRepository('CurbaGardeningBundle:Zone');
        
        $zones = $gardenRepository->getCurrentZones($garden->getId());
        foreach($zones as $zone)
        {
            $crops = $zoneRepository->getCurrentCrops($zone->getId());
            $zonesJson[] = $zone->asArray();
            foreach($crops as $crop)
            {
                $cropsJson[] = $crop->asArray();
            }
        }
        
        //Plants
        $plantRepository = $em->getRepository('CurbaGardeningBundle:Plant');
        $plants = $plantRepository->findAll();
        $plantsJson = array();
        foreach($plants as $plant)
        {
            $plantsJson[] = $plant->asArray();
        }        
        
        //ZoneTypes
        $zoneTypeRepository = $em->getRepository('CurbaGardeningBundle:ZoneType');
        $zoneTypes = $zoneTypeRepository->findAll();
        $zoneTypesJson = array();
        foreach($zoneTypes as $zoneType)
        {
            $zoneTypesJson[] = $zoneType->asArray();
        }
        
        //Regions
        $regionRepository = $em->getRepository('CurbaGardeningBundle:Region');
        $regions = $regionRepository->findAll();
        $regionsJson = array();
        foreach($regions as $region)
        {
            $regionsJson[] = $region->asArray();
        }
        
        //GardenTypes
        $gardenTypeRepository = $em->getRepository('CurbaGardeningBundle:GardenType');
        $gardenTypes = $gardenTypeRepository->findAll();
        $gardenTypesJson = array();
        foreach($gardenTypes as $gardenType)
        {
            $gardenTypesJson[] = $gardenType->asArray();
        }
        
        return $this->render('CurbaGardeningBundle:Garden:silverlight.html.twig', array(
            'plants' => json_encode($plantsJson),
            'zoneTypes' => json_encode($zoneTypesJson),
            'regions' => json_encode($regionsJson),
            'crops' => json_encode($cropsJson),
            'zones' => json_encode($zonesJson),
            'garden' => json_encode($gardenJson),
            'gardenTypes' => json_encode($gardenTypesJson),
        ));
        
        /*
        return $this->render('CurbaGardeningBundle:Garden:edit.html.twig', array(
            'plants' => json_encode($plantsJson),
            'zoneTypes' => json_encode($zoneTypesJson),
            'regions' => json_encode($regionsJson),
            'crops' => json_encode($cropsJson),
            'zones' => json_encode($zonesJson),
            'garden' => json_encode($gardenJson),
        ));
         * 
         */
        
    }

    /**
     * @Route("/gardening/garden/editor/{_locale}", requirements={"_locale" = "ca|en|es"}, name="garden_editor")
     * @Template()
     */
    public function editorAction()
    {
        $request = $this->get('request');
        $id = $request->get('id');
        
        $em = $this->get('doctrine')->getEntityManager();
        
        //Garden
        $gardenRepository = $em->getRepository('CurbaGardeningBundle:Garden');
        $garden = $gardenRepository->find($id);
        if (!$garden) { throw $this->createNotFoundException('No garden found for id '.$id);  }
        $gardenJson = $garden->asArray();
        
        //Zones and Crops
        $zonesJson = array();
        $cropsJson = array();
        
        $zoneRepository = $em->getRepository('CurbaGardeningBundle:Zone');
        
        $zones = $gardenRepository->getCurrentZones($garden->getId());
        foreach($zones as $zone)
        {
            $crops = $zoneRepository->getCurrentCrops($zone->getId());
            $zonesJson[] = $zone->asArray();
            foreach($crops as $crop)
            {
                $cropsJson[] = $crop->asArray();
            }
        }
        
        //Plants
        $plantRepository = $em->getRepository('CurbaGardeningBundle:Plant');
        $plants = $plantRepository->findAll();
        $plantsJson = array();
        foreach($plants as $plant)
        {
            $plantsJson[] = $plant->asArray();
        }        
        
        //ZoneTypes
        $zoneTypeRepository = $em->getRepository('CurbaGardeningBundle:ZoneType');
        $zoneTypes = $zoneTypeRepository->findAll();
        $zoneTypesJson = array();
        foreach($zoneTypes as $zoneType)
        {
            $zoneTypesJson[] = $zoneType->asArray();
        }
        
        //Regions
        $regionRepository = $em->getRepository('CurbaGardeningBundle:Region');
        $regions = $regionRepository->findAll();
        $regionsJson = array();
        foreach($regions as $region)
        {
            $regionsJson[] = $region->asArray();
        }
        
        //GardenTypes
        $gardenTypeRepository = $em->getRepository('CurbaGardeningBundle:GardenType');
        $gardenTypes = $gardenTypeRepository->findAll();
        $gardenTypesJson = array();
        foreach($gardenTypes as $gardenType)
        {
            $gardenTypesJson[] = $gardenType->asArray();
        }
        
        //ActionTypes
        $actionTypeRepository = $em->getRepository('CurbaGardeningBundle:ActionType');
        $actionTypes = $actionTypeRepository->findAll();
        $actionTypesJson = array();
        foreach($actionTypes as $actionType)
        {
            $actionTypesJson[] = $actionType->asArray();
        }
        
        //We use json_encode with JSON_NUMERIC_CHECK to parse floats and integers as numbers and not as strings 
        return $this->render('CurbaGardeningBundle:Garden:editor.html.twig', array(
            'plants'        => json_encode($plantsJson),
            'zoneTypes'     => json_encode($zoneTypesJson),
            'regions'       => json_encode($regionsJson),
            'crops'         => json_encode($cropsJson),
            'zones'         => json_encode($zonesJson),
            'garden'        => json_encode($gardenJson, JSON_NUMERIC_CHECK),
            'gardenTypes'   => json_encode($gardenTypesJson),
            'actionTypes'   => json_encode($actionTypesJson),
        ));
    }
    
    /**
     * @Route("/gardening/garden/harvest/{_locale}", requirements={"_locale" = "ca|en|es"}, name="garden_harvest")
     * @Template()
     */
    public function harvestAction()
    {
        $request = $this->getRequest();
        $id = $request->get('id');
        if (!$id) { throw $this->createNotFoundException('No crop id found in request');  }
        
        //Crop
        $em = $this->get('doctrine')->getEntityManager();
        $gardenRepository = $em->getRepository('CurbaGardeningBundle:Crop');
        $crop = $gardenRepository->find($id);
        if (!$crop) { throw $this->createNotFoundException('No crop found for id '.$id);  }

        $entity  = new Action();
        $entity->setCrop($crop);
        $form    = $this->createForm(new ActionType(), $entity);

        if ('POST' === $request->getMethod()) {
            $form->bindRequest($request);

            if ($form->isValid()) {
                $em = $this->getDoctrine()->getEntityManager();
                $entity->setCrop($crop);
                $em->persist($entity);
                $em->flush();

                return $this->redirect($this->generateUrl('garden_index', array('id' => $entity->getCrop()->getZone()->getGarden()->getId())));
            }
        }

        return array(
            'entity' => $entity,
            'form'   => $form->createView()
        );
    }
    
    /**
     * @Route("/gardening/garden/watering/{_locale}", requirements={"_locale" = "ca|en|es"}, name="garden_watering")
     * @Template()
     */
    public function wateringAction()
    {
        $request = $this->getRequest();
        $id = $request->get('id');
        if (!$id) { throw $this->createNotFoundException('No crop id found in request');  }

        //Crop
        $em = $this->get('doctrine')->getEntityManager();
        $gardenRepository = $em->getRepository('CurbaGardeningBundle:Crop');
        $crop = $gardenRepository->find($id);
        if (!$crop) { throw $this->createNotFoundException('No crop found for id '.$id);  }

        //ActionType
        $gardenRepository = $em->getRepository('CurbaGardeningBundle:ActionType');
        $actionType = $gardenRepository->find(2);
        if (!$actionType) { throw $this->createNotFoundException('No ActionType found for id 2');  }
        
        $entity  = new Action();
        $entity->setCrop($crop);
        $entity->setQuantityA(0);
        $entity->setQuantityB(0);
        $entity->setActionType($actionType);
        $entity->setDescription('Watering');
        $em->persist($entity);
        $em->flush();

        return $this->redirect($this->generateUrl('garden_index', array('id' => $crop->getZone()->getGarden()->getId())));
    }
    
    /**
     * @Route("/gardening/garden/prune/{_locale}", requirements={"_locale" = "ca|en|es"}, name="garden_prune")
     * @Template()
     */
    public function pruneAction()
    {
        $request = $this->getRequest();
        $id = $request->get('id');
        if (!$id) { throw $this->createNotFoundException('No crop id found in request');  }

        //Crop
        $em = $this->get('doctrine')->getEntityManager();
        $gardenRepository = $em->getRepository('CurbaGardeningBundle:Crop');
        $crop = $gardenRepository->find($id);
        if (!$crop) { throw $this->createNotFoundException('No crop found for id '.$id);  }

        //ActionType
        $gardenRepository = $em->getRepository('CurbaGardeningBundle:ActionType');
        $actionType = $gardenRepository->find(3);
        if (!$actionType) { throw $this->createNotFoundException('No ActionType found for id 3');  }
        
        $entity  = new Action();
        $entity->setCrop($crop);
        $entity->setQuantityA(0);
        $entity->setQuantityB(0);
        $entity->setActionType($actionType);
        $entity->setDescription('Prune');
        $em->persist($entity);
        $em->flush();

        return $this->redirect($this->generateUrl('garden_index', array('id' => $crop->getZone()->getGarden()->getId())));
    }
    
    /**
     * @Route("/gardening/garden/finishCrop/{_locale}", requirements={"_locale" = "ca|en|es"}, name="garden_finish_crop")
     * @Template()
     */
    public function finishCropAction()
    {
        $request = $this->getRequest();
        $id = $request->get('id');
        if (!$id) { throw $this->createNotFoundException('No crop id found in request');  }

        //Crop
        $em = $this->get('doctrine')->getEntityManager();
        $gardenRepository = $em->getRepository('CurbaGardeningBundle:Crop');
        $crop = $gardenRepository->find($id);
        if (!$crop) { throw $this->createNotFoundException('No crop found for id '.$id);  }
        
        $crop->setFinalRealDate(new \DateTime());
        $em->persist($crop);
        $em->flush();

        return $this->redirect($this->generateUrl('garden_index', array('id' => $crop->getZone()->getGarden()->getId())));
    }
    
    /**
     * @Route("/gardening/garden/history/{_locale}", requirements={"_locale" = "ca|en|es"}, name="garden_history")
     * @Template()
     */
    public function historyAction()
    {
        $request = $this->getRequest();
        $id = $request->get('id');
        if (!$id) { throw $this->createNotFoundException('No garden id found in request');  }
        $em = $this->get('doctrine')->getEntityManager();
        $gardenRepository = $em->getRepository('CurbaGardeningBundle:Garden');
        $garden = $gardenRepository->find($id);
        if (!$garden) { throw $this->createNotFoundException('No garden found with id='.$id);  }
        $zones = $garden->getZones();
        //$plantRepository = $em->getRepository('CurbaGardeningBundle:Plant');
        $plants = $gardenRepository->getPlantsUsed($id);

        $plantArray = array();
        foreach($plants as $p)
        {
            $plantArray[$p->getid()] = $p->getName();
        }
        $zoneArray = array();
        foreach($zones as $z)
        {
            $zoneArray[$z->getid()] = $z->getName();
        }
        
        $zone = null;
        $plant = null;
        if ($request->getMethod() == 'POST') {
            $form = $request->get('form');
            $zone = $form['zone'];
            $plant = $form['plant'];
        }
        
        $crops = $gardenRepository->getCropsWithTotalsFinished($id, $zone, $plant);
        
        $actions = $gardenRepository->getActionsAndCropsFinished($id, $zone, $plant);
        
        $defaultData = array('zone' => $zone, 'plant' => $plant);
        $form = $this->createFormBuilder($defaultData)
                /*
            ->add('zone', 'entity', array(
                'class'         => 'Curba\\GardeningBundle\\Entity\\Zone',
                'query_builder' => function ($repositori) use ($garden) {
                    return $repositori->createQueryBuilder('z')
                            ->where('z.garden = :garden')
                            ->setParameter('garden', $garden)
                            ->orderBy('z.name', 'ASC');
                },
            ))
            ->add('plant', 'choice', array(
                'choices' => $plants,
            ))
                 * 
                 */
            ->add('plant', 'choice', array(
                'choices' => $plantArray,
                'required'  => false,
            ))
            ->add('zone', 'choice', array(
                'choices' => $zoneArray,
                'required'  => false,
            ))
            ->getForm();
        
                
        return array(
            'garden'       => $garden,
            'zones'        => $zones,
            'plants'       => $plants,
            'crops'        => $crops,
            'actions'      => $actions,
            'form'         => $form->createView(),
        );
    }
}
