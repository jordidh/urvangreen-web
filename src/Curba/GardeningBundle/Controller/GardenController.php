<?php

namespace Curba\GardeningBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Template;
use Symfony\Component\HttpFoundation\Request;
use Doctrine\ORM\EntityRepository;
use Curba\GardeningBundle\Form\GardenType;
use Curba\GardeningBundle\Entity\Garden;
use Curba\GardeningBundle\Entity\Action;
use Curba\GardeningBundle\Form\ActionType;
use Curba\GardeningBundle\Entity\Zone;
use Curba\GardeningBundle\Entity\Crop;
use Curba\SecurityBundle\Entity\UserGarden;

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
        
        //Create the form to create zones
        $zoneTypeRepository = $em->getRepository('CurbaGardeningBundle:ZoneType');
        $zoneTypes = $zoneTypeRepository->findAll();
        $zoneTypesArray = array();
        foreach($zoneTypes as $t)
        {
            $zoneTypesArray[$t->getId()] = $t->getName();
        }
        $zone = new Zone();
        $zone->setName('new zone name');
        $zone->setDescription('new zone description');
        $zone->setInitialPointX(1);
        $zone->setInitialPointY(1);
        $zone->setFinalPointX(300);
        $zone->setFinalPointY(300);
        $zone->setGarden($garden);
        $zone->setRotationAngle(0);
        $zone->setDepth(200);
        $formZone = $this->createFormBuilder($zone)
            ->add('name', 'text')
            ->add('description', 'text')
            ->add('initialPointX', 'integer')
            ->add('initialPointY', 'integer')
            ->add('finalPointX', 'integer')
            ->add('finalPointY', 'integer')
            ->add('depth', 'integer')
           ->add('zoneType', 'entity', array(
                'class' => 'CurbaGardeningBundle:ZoneType',
            ))
            ->getForm();
        
        //Create the form to create crops
        $crop = new Crop();
        $crop->setRotationAngle(0);
        $crop->setPointX(1);
        $crop->setPointY(1);
        $crop->setNumPlants(1);
        $formCrop = $this->createFormBuilder($crop)
            ->add('pointX', 'integer')
            ->add('pointY', 'integer')
            ->add('numPlants', 'integer')
            ->add('zone', 'entity', array(
                'class' => 'CurbaGardeningBundle:Zone',
                'query_builder' => function(EntityRepository $er) use ($id) {
                    return $er->createQueryBuilder('z')
                            ->where('z.garden = :id')
                            ->orderBy('z.name', 'ASC')
                            ->setParameter('id', $id);
                },
            ))
            ->add('plant', 'entity', array(
                'class' => 'CurbaGardeningBundle:Plant',
            ))
            ->getForm();

        //Get the garden data
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
                
        return array(
            'garden' => $garden,
            'zonesAndCropsAndActions' => $zonesAndCropsAndActions,
            'formZone' => $formZone->createView(),
            'formCrop' => $formCrop->createView(),
        );
    }

    /**
     * @Route("/gardening/garden/zone/new/{_locale}", requirements={"_locale" = "ca|en|es"}, name="garden_new_zone")
     * @Template()
     */
    public function newZoneAction()
    {
        $request = $this->get('request');
        $id = $request->get('id');
        
        $em = $this->get('doctrine')->getEntityManager();

        if (null == $garden = $em->find('CurbaGardeningBundle:Garden', $id)) {
            throw new NotFoundHttpException('Garden not found, database error, contact with ... ?');
        }
        
        //Create the form to create zones
        $zone = new Zone();
        $zone->setName('new zone name');
        $zone->setDescription('new zone description');
        $zone->setInitialPointX(1);
        $zone->setInitialPointY(1);
        $zone->setFinalPointX(300);
        $zone->setFinalPointY(300);
        $zone->setGarden($garden);
        $zone->setRotationAngle(0);
        $zone->setDepth(200);
        $formZone = $this->createFormBuilder($zone)
            ->add('name', 'text')
            ->add('description', 'text')
            ->add('initialPointX', 'integer')
            ->add('initialPointY', 'integer')
            ->add('finalPointX', 'integer')
            ->add('finalPointY', 'integer')
            ->add('depth', 'integer')
            ->add('zoneType', 'entity', array(
                'class' => 'CurbaGardeningBundle:ZoneType',
            ))
            ->getForm();

        //Handle submissions       
        if ($request->getMethod() == 'POST') 
        {
            $formZone->bindRequest($request);
            if ($formZone->isValid()) {
                //Save the zone
                $em->persist($zone);
                $em->flush();
            }
        }
        
        return $this->redirect($this->generateUrl('garden_index', array('id' => $id)));
    }
    
    /**
     * @Route("/gardening/garden/crop/new/{_locale}", requirements={"_locale" = "ca|en|es"}, name="garden_new_crop")
     * @Template()
     */
    public function newCropAction()
    {
        $request = $this->get('request');
        $id = $request->get('id');
        
        $em = $this->get('doctrine')->getEntityManager();

        if (null == $garden = $em->find('CurbaGardeningBundle:Garden', $id)) {
            throw new NotFoundHttpException('Garden not found, database error, contact with ... ?');
        }
               
        //Create the form to create crops
        $crop = new Crop();
        $crop->setRotationAngle(0);
        $crop->setPointX(1);
        $crop->setPointY(1);
        $crop->setNumPlants(1);
        $formCrop = $this->createFormBuilder($crop)
            ->add('pointX', 'integer')
            ->add('pointY', 'integer')
            ->add('numPlants', 'integer')
            ->add('zone', 'entity', array(
                'class' => 'CurbaGardeningBundle:Zone',
                'query_builder' => function(EntityRepository $er) use ($id) {
                    return $er->createQueryBuilder('z')
                            ->where('z.garden = :id')
                            ->orderBy('z.name', 'ASC')
                            ->setParameter('id', $id);
                },
            ))
            ->add('plant', 'entity', array(
                'class' => 'CurbaGardeningBundle:Plant',
            ))
            ->getForm();

        //Handle submissions       
        if ($request->getMethod() == 'POST') 
        {
            $formCrop->bindRequest($request);
            if ($formCrop->isValid()) {
                //Save the crop
                $crop->setInitialRealDate(new \DateTime());
                $crop->setInitialPlannedDate(new \DateTime());
                $em->persist($crop);
                $em->flush();
            }
        }
        
        return $this->redirect($this->generateUrl('garden_index', array('id' => $id)));
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
        $cropRepository = $em->getRepository('CurbaGardeningBundle:Crop');
        $crop = $cropRepository->find($id);
        if (!$crop) { throw $this->createNotFoundException('No crop found for id '.$id);  }

        //ActionType
        $actionTypeRepository = $em->getRepository('CurbaGardeningBundle:ActionType');
        $actionType = $actionTypeRepository->find(1);
        if (!$actionType) { throw $this->createNotFoundException('No ActionType found for id 1');  }
        
        //ValueUnitType
        $unitsOfMeasurementTypeRepository = $em->getRepository('CurbaGardeningBundle:UnitsOfMeasurementType');
        $valueUnitType = $unitsOfMeasurementTypeRepository->find(2); //mass
        
        $entity  = new Action();
        $entity->setCrop($crop);
        $entity->setValue(0);
        $entity->setValueUnitType($valueUnitType);
        $entity->setActionType($actionType);
        $entity->setDescription('Harvest');
        $em->persist($entity);
        $em->flush();

        return $this->redirect($this->generateUrl('garden_index', array('id' => $crop->getZone()->getGarden()->getId())));
        
        
        /*
        $request = $this->getRequest();
        $id = $request->get('id');
        if (!$id) { throw $this->createNotFoundException('No crop id found in request');  }

        //Crop
        $em = $this->get('doctrine')->getEntityManager();
        $cropRepository = $em->getRepository('CurbaGardeningBundle:Crop');
        $crop = $cropRepository->find($id);
        if (!$crop) { throw $this->createNotFoundException('No crop found for id '.$id);  }
        $entity = new Action();
        $entity->setCrop($crop);
        $form = $this->createForm(new Action(), $entity);
        
        if ('POST' === $request->getMethod()) {
            $form->bindRequest($request);

            if ($form->isValid()) {
                //$em = $this->getDoctrine()->getEntityManager();
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
         *
         */
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

        //Get the user
        $user = $this->get('security.context')->getToken()->getUser();
        if (!$user) { throw $this->createNotFoundException('No user logged has found');  }
        
        //Crop
        $em = $this->get('doctrine')->getEntityManager();
        $cropRepository = $em->getRepository('CurbaGardeningBundle:Crop');
        $crop = $cropRepository->find($id);
        if (!$crop) { throw $this->createNotFoundException('No crop found for id '.$id);  }

        //ActionType
        $actionTypeRepository = $em->getRepository('CurbaGardeningBundle:ActionType');
        $actionType = $actionTypeRepository->find(2);
        if (!$actionType) { throw $this->createNotFoundException('No ActionType found for id 2');  }
        
        //ValueUnitType
        $unitsOfMeasurementTypeRepository = $em->getRepository('CurbaGardeningBundle:UnitsOfMeasurementType');
        $valueUnitType = $unitsOfMeasurementTypeRepository->find(3); //volume
        
        $entity  = new Action();
        $entity->setCrop($crop);
        $entity->setValue(0);
        $entity->setValueUnit($user->getVolumeUnit());
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

        //Get the user
        $user = $this->get('security.context')->getToken()->getUser();
        if (!$user) { throw $this->createNotFoundException('No user logged has found');  }
        
        //Crop
        $em = $this->get('doctrine')->getEntityManager();
        $gardenRepository = $em->getRepository('CurbaGardeningBundle:Crop');
        $crop = $gardenRepository->find($id);
        if (!$crop) { throw $this->createNotFoundException('No crop found for id '.$id);  }

        //ActionType
        $gardenRepository = $em->getRepository('CurbaGardeningBundle:ActionType');
        $actionType = $gardenRepository->find(3);
        if (!$actionType) { throw $this->createNotFoundException('No ActionType found for id 3');  }
        
        //ValueUnitType
        $unitsOfMeasurementTypeRepository = $em->getRepository('CurbaGardeningBundle:UnitsOfMeasurementType');
        $valueUnitType = $unitsOfMeasurementTypeRepository->find(2); //mass
        
        $entity  = new Action();
        $entity->setCrop($crop);
        $entity->setValue(0);
        $entity->setValueUnit($user->getMassUnit());
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
    
    /**
     * @Route("/gardening/garden/showPlantInfo/{_locale}", requirements={"_locale" = "ca|en|es"}, name="show_plant_info")
     * @Template()
     */
    public function showPlantInfoAction()
    {
        $id = null;

        //Get the plant id
        $request = $this->getRequest();
        $id = $request->get('id');
        
        //If the plant id is not in the url search the id in the post variables
        if (!$id)
        {
            if ($request->getMethod() == 'POST') {
                $form = $request->get('form');
                $id = $form['plant'];
            }
        }
        
        //if (!$id) { throw $this->createNotFoundException('No plant id found in request');  }

        $plant = null;
        $cropPeriodArray = null;
        
        $em = $this->get('doctrine')->getEntityManager();
        $plantRepository = $em->getRepository('CurbaGardeningBundle:Plant');
        
        $regionRepository = $em->getRepository('CurbaGardeningBundle:Region');
        $region = $regionRepository->findOneByName('Barcelona');

        if ($id)
        {
            //Get the plant
            $plant = $plantRepository->find($id);
            if (!$plant) {
                throw $this->createNotFoundException('No plant found for id='.$id);
            }

            //Get the crop periods
            $cropPeriodRepository = $em->getRepository('CurbaGardeningBundle:CropPeriod');

            //Array with 3 dimensions: Plant id, CropPeriodType id [1 - 7], Month [1-12] = active or not (0 or 1)
            $cropPeriodArray = array();

            $cropPeriods = $cropPeriodRepository->findAllFrom($plant->getId(), $region);
            foreach($cropPeriods as $cropPeriod)
            {
                //Initialize the array for a specific CropPeriodType
                if (!isset($cropPeriodArray[$plant->getId()][$cropPeriod->getCropPeriodType()->getId()]))
                {
                    $cropPeriodArray[$plant->getId()][$cropPeriod->getCropPeriodType()->getId()][0] = $cropPeriod->getCropPeriodType();
                    for ($i = 1; $i <= 12; $i++)
                    {
                        $cropPeriodArray[$plant->getId()][$cropPeriod->getCropPeriodType()->getId()][$i] = 0;
                    }
                }

                //Set the values
                $initialMonth = $cropPeriod->getInitialDate()->format('n');
                $finalMonth = $cropPeriod->getFinalDate()->format('n');
                if ($initialMonth < $finalMonth)
                {
                    for ($i = 1; $i <= 12; $i++)
                    {
                        if ($i >= $initialMonth && $i <= $finalMonth)
                        {
                            $cropPeriodArray[$plant->getId()][$cropPeriod->getCropPeriodType()->getId()][$i] = 1;
                        }
                    }
                }
                else
                {
                    for ($i = 1; $i <= 12; $i++)
                    {
                        if ($i >= $initialMonth || $i <= $finalMonth)
                        {
                            $cropPeriodArray[$plant->getId()][$cropPeriod->getCropPeriodType()->getId()][$i] = 1;
                        }
                    }                    
                }
            }
        }
        
        //Create the form to show plant card 
        //$plantRepository = $em->getRepository('CurbaGardeningBundle:Plant');
        $plants = $plantRepository->findAll();
        $plantArray = array();
        foreach($plants as $p)
        {
            $plantArray[$p->getid()] = $p->getName();
        }
        $form = $this->createFormBuilder()
                ->add('plant', 'choice', array(
                'choices' => $plantArray,
                'required'  => true,
            ))
            ->getForm();
        
        return array(
            'plant' => $plant,
            'region' => $region,
            'cropPeriodArray' => $cropPeriodArray,
            'form'      => $form->createView(),
        );
    }
    
    /**
     * @Route("/gardening/garden/showPlantFamilyInfo/{_locale}", requirements={"_locale" = "ca|en|es"}, name="show_plant_family_info")
     * @Template()
     */
    public function showPlantFamilyInfoAction()
    {
        $id = null;

        //Get the plant family id
        $request = $this->getRequest();
        $id = $request->get('id');
        
        //If the plant family id is not in the url search the id in the post variables
        if (!$id)
        {
            if ($request->getMethod() == 'POST') {
                $form = $request->get('form');
                $id = $form['family'];
            }
        }
        
        //if (!$id) { throw $this->createNotFoundException('No plant id found in request');  }

        $em = $this->get('doctrine')->getEntityManager();
        $plantFamilyRepository = $em->getRepository('CurbaGardeningBundle:PlantFamily');

        if ($id)
        {
            //Get the plant family
            $family = $plantFamilyRepository->find($id);
            if (!$family) {
                throw $this->createNotFoundException('No plant family found for id='.$id);
            }
        }
        
        //Create the form to show plant family card 
        //$plantRepository = $em->getRepository('CurbaGardeningBundle:Plant');
        $families = $plantFamilyRepository->findAll();
        $familyArray = array();
        foreach($families as $f)
        {
            $familyArray[$f->getId()] = $f->getName();
        }
        $form = $this->createFormBuilder()
                ->add('family', 'choice', array(
                'choices' => $familyArray,
                'required'  => true,
            ))
            ->getForm();
        
        return array(
            'family' => $family,
            'form'   => $form->createView(),
        );
    }
}
