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
        
        return $this->render('CurbaGardeningBundle:Garden:new.html.twig', array(
            'form' => $form->createView(),
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
}
