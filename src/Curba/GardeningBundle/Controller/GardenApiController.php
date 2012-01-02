<?php

namespace Curba\GardeningBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Template;

use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Curba\GardeningBundle\Entity\Garden;
use Curba\GardeningBundle\Entity\Zone;
use Curba\GardeningBundle\Entity\Plant;
use Curba\GardeningBundle\Entity\Crop;
use Curba\SecurityBundle\Entity\UserGarden;

class GardenApiController extends Controller
{
    /**
     * @Route("/gardeningapi/entity/{_locale}/{object}/{format}", requirements={"format" = "json", "_locale" = "ca|en|es"}, name="garden_api_get_objects")
     * @Method({"GET"})
     * @Template()
     */
    public function getObjectsAction($object, $format)
    {
        $em = $this->get('doctrine')->getEntityManager();
        $objectRepository = $em->getRepository('CurbaGardeningBundle:'.$object);
        $objects = $objectRepository->findAll();
        //return new Response(json_encode(array('plants' => $plants));
                
        $jsonObjects = array();
        foreach($objects as $obj)
        {
            $jsonObjects[] = $obj->asArray();
        }        
        return new Response(json_encode($jsonObjects));
    }
    
    /**
     * @Route("/gardeningapi/entity/{_locale}/{object}/{format}/{id}", requirements={"format" = "json", "_locale" = "ca|en|es"}, name="garden_api_delete_objects")
     * @Method({"DELETE"})
     * @Template()
     */
    public function deleteObjectsAction($object, $format, $id)
    {
        $response = new Response();
        $response->headers->set('Content-Type', 'text/html');

        $em = $this->get('doctrine')->getEntityManager();
        $objectRepository = $em->getRepository('CurbaGardeningBundle:'.$object);
        $res = $objectRepository->find($id);
        
        if (!$res) 
        {
            $response->setStatusCode(404);
            $response->setContent('<html><body><h1>No '.$object.' found with id='.$id.'</h1></body></html>');
            return $response;
        }
        else
        {
            $em->remove($res);
            switch($object)
            {
                case 'Garden':
                    $user = $this->get('security.context')->getToken()->getUser();
                    $userGardenRepository = $em->getRepository('CurbaSecurityBundle:UserGarden');
                    $ugFound = $userGardenRepository->findOneBy(array('user' => $user->getId(), 'Garden' => $id));
                    $em->remove($ugFound);
                    break;
            }
            $em->flush();
            
            $response->setStatusCode(200);
            $response->setContent('<html><body><h1>'.$object.' with id='.$id.' deleted!</h1></body></html>');
            return $response;
        }
    }
    
    /**
     * @Route("/gardeningapi/entity/{_locale}/{object}/{format}", requirements={"format" = "json", "_locale" = "ca|en|es"}, name="garden_api_post_objects")
     * @Method({"POST"})
     * @Template()
     */
    public function postObjectsAction($object, $format)
    {
        $request = $this->getRequest();
        $array = get_object_vars(json_decode($request->getContent()));
        
        $em = $this->get('doctrine')->getEntityManager();
        $objectFull = 'Curba\GardeningBundle\Entity\\'.$object;
        $res = new $objectFull;
        $res->fromArray($array);
        
        switch($object)
        {
            case 'Crop':
                $zoneRepository = $em->getRepository('CurbaGardeningBundle:Zone');
                $plantRepository = $em->getRepository('CurbaGardeningBundle:Plant');
                $res->setZone($zoneRepository->find($array['zoneId']));
                $res->addPlant($plantRepository->find($array['plantId']));
                $em->persist($res);
                $em->flush();
                break;
            case 'Zone':
                $gardenRepository = $em->getRepository('CurbaGardeningBundle:Garden');
                $zoneTypeRepository = $em->getRepository('CurbaGardeningBundle:ZoneType');
                $res->setGarden($gardenRepository->find($array['gardenId']));
                $res->setZoneType($zoneTypeRepository->find($array['zoneTypeId']));
                $em->persist($res);
                $em->flush();
                break;
            case 'Garden':
                $regionRepository = $em->getRepository('CurbaGardeningBundle:Region');
                $res->setRegion($regionRepository->find($array['regionId']));
                $em->persist($res);
                $em->flush();

                $user = $this->get('security.context')->getToken()->getUser();
                $userGarden = new UserGarden();
                $userGarden->setCrud('YYYY');
                $userGarden->setGarden($res->getId());
                $userGarden->setUser($user);
                $em->persist($userGarden);
                $em->flush();
                break;
        }        
        $response = new Response();
        $response->setStatusCode(200);
        $response->headers->set('Content-Type', 'text/html');
        $response->setContent('<html><body><h1>'.$object.' with id='.$res->getId().' created!</h1></body></html>');
        //$response->setContent('<html><body><h1>'.$object.' created!</h1></body></html>');
        return $response;
    }

    /**
     * @Route("/gardeningapi/entity/{_locale}/{object}/{format}/{id}", requirements={"format" = "json", "_locale" = "ca|en|es"}, name="garden_api_put_objects")
     * @Method({"PUT"})
     * @Template()
     */
    public function putObjectsAction($object, $format, $id)
    {
        $request = $this->getRequest();
        $array = get_object_vars(json_decode($request->getContent()));
        
        $em = $this->get('doctrine')->getEntityManager();
        $objectRepository = $em->getRepository('CurbaGardeningBundle:'.$object);
        //$objectFull = 'Curba\GardeningBundle\Entity\\'.$object;
        //$res = new $objectFull;
        $res = $objectRepository->find($id);
        $res->fromArray($array);
        
        switch($object)
        {
            case 'Crop':
                $zoneRepository = $em->getRepository('CurbaGardeningBundle:Zone');
                $plantRepository = $em->getRepository('CurbaGardeningBundle:Plant');
                $res->setZone($zoneRepository->find($array['zoneId']));
                $res->addPlant($plantRepository->find($array['plantId']));
                break;
            case 'Zone':
                $gardenRepository = $em->getRepository('CurbaGardeningBundle:Garden');
                $zoneTypeRepository = $em->getRepository('CurbaGardeningBundle:ZoneType');
                $res->setGarden($gardenRepository->find($array['gardenId']));
                $res->setZoneType($zoneTypeRepository->find($array['zoneTypeId']));
                break;
            case 'Garden':
                $regionRepository = $em->getRepository('CurbaGardeningBundle:Region');
                $res->setRegion($regionRepository->find($array['regionId']));
                break;
        }
        
        $em->persist($res);
        $em->flush();

        $response = new Response();
        $response->setStatusCode(200);
        $response->headers->set('Content-Type', 'text/html');
        $response->setContent('<html><body><h1>'.$object.' with id='.$res->getId().' modified!</h1></body></html>');
        return $response;
    }
    
    
    
    /**
     * Saves all the garden (garden, zones and crops)
     * Called by the GardenEditor (user interface app.)
     * 
     * @Route("/gardeningapi/save/garden/{_locale}/{format}", requirements={"format" = "json", "_locale" = "ca|en|es"}, name="garden_api_post_garden")
     * @Method({"POST"})
     * @Template()
     */
    public function postGardenAction($format)
    {
        $logger = $this->get('logger');
        $logger->info("postGardenAction");

        $request = $this->getRequest();
     
        try
        {
            $jsonData = urldecode($request->getContent());
            $logger->info("5: ".urldecode($request->getContent()));
            //Decode the string received
            $array = json_decode($jsonData);
            $logger->info("6: ".json_last_error());
            
            $garden = get_object_vars($array[0]);
            $zonesArray = array();
            foreach($array[1] as $zone)
            {
                $zonesArray[] = get_object_vars($zone);
            }
            $cropsArray = array();
            foreach($array[2] as $crop)
            {
                $cropsArray[] = get_object_vars($crop);
            }

            //Get all the repositories
            $em = $this->get('doctrine')->getEntityManager();
            $gardenRepository = $em->getRepository('CurbaGardeningBundle:Garden');
            $zoneRepository = $em->getRepository('CurbaGardeningBundle:Zone');
            $zoneTypeRepository = $em->getRepository('CurbaGardeningBundle:ZoneType');
            $cropRepository = $em->getRepository('CurbaGardeningBundle:Crop');
            $plantRepository = $em->getRepository('CurbaGardeningBundle:Plant');
            $gardenTypeRepository = $em->getRepository('CurbaGardeningBundle:GardenType');
            $regionRepository = $em->getRepository('CurbaGardeningBundle:Region');

            //$user = $this->get('security.context')->getToken()->getUser();
            $user = 1;
            if ($user)
            {
                //Create or update the garden
                //silverlight{"description":"Hort de prova","gardenTypeId":1,"height":600,"id":-1,"latitude":0,"longitude":0,"name":"Hort","regionId":1,"width":800}
                //gwt{ "id": 1, "region_id": 1, "garden_type_id": 2, "name": "Set the garden name", "description": "Write a short description", "latitude": 43.123, "longitude": 5.00023, "width": 2000, "height": 2000}
                $gardenObj = $gardenRepository->find($garden['id']);
                if ($gardenObj)
                {
                    //Update garden
                    $gardenObj->setUpdatedAt(new \DateTime());
                }
                else
                {
                    //Create garden
                    $gardenObj = new Garden();
                }
                $gardenObj->setName($garden['name']);
                $gardenObj->setDescription($garden['description']);
                $gardenObj->setRegion($regionRepository->find($garden['region_id']));
                $gardenObj->setGardenType($gardenTypeRepository->find($garden['garden_type_id']));
                $gardenObj->setHeight($garden['height']);
                $gardenObj->setWidth($garden['width']);
                $gardenObj->setLatitude($garden['latitude']);
                $gardenObj->setLongitude($garden['longitude']);
                $em->persist($gardenObj);
                $em->flush();
/*
                //Link the garden with the user
                $userGarden = new UserGarden();
                $userGarden->setUser($user);
                $userGarden->setGarden($gardenObj);
                $userGarden->setCrud('YYYY');
                $em->persist($userGarden);
                $em->flush();
*/
                //Delete the zones present in the DB but not returned by the GardenEditor
                foreach($gardenObj->getZones() as $zoneToDelete)
                {
                    //Delete the crops present in the DB not returned by the GardenEditor
                    foreach($zoneToDelete->getCrops() as $cropToDelete)
                    {
                        //If the cropId is not present in the crops returned => delete the DB crop
                        $deleteCrop = true;
                        foreach($cropsArray as $crop)
                        {
                            if ($crop['id'] == $cropToDelete->getId())
                            {
                                $deleteCrop = false;
                                break;
                            }
                        }
                        if ($deleteCrop)
                        {
                            $cropToDelete->setFinalRealDate(new \DateTime());
                            $em->persist($cropToDelete);
                            //$em->remove($cropToDelete);
                        }
                    }
                    
                    //If the zoneId is not present in the zones returned => delete the DB zone
                    $deleteZone = true;
                    foreach($zonesArray as $zone)
                    {
                        if ($zone['id'] == $zoneToDelete->getId())
                        {
                            $deleteZone = false;
                            break;
                        }
                    }
                    if ($deleteZone)
                    {
                        $zoneToDelete->setDeletedAt(new \DateTime());
                        $em->persist($zoneToDelete);
                        //$em->remove($zoneToDelete);
                    }
                }
                $em->flush();
                

                //Create or update zones
                //silverlight[{"__type":"ServerZone:#GardenEditor2","depth":20,"description":"z","finalPointX":393,"finalPointY":335,"gardenId":0,"id":-1,"initialPointX":193,"initialPointY":135,"name":"z","zoneTypeId":1}]
                //gwt{ "id": 1, "garden_id": 1, "zone_type_id": 1, "name": "a", "description": "a", "initial_point_x": 1, "initial_point_y": 1, "final_point_x": 500, "final_point_y": 500, "depth": 200}
                foreach($zonesArray as $zone)
                {
                    $zoneObj = $zoneRepository->find($zone['id']);
                    if ($zoneObj)
                    {
                        //Update garden
                        $zoneObj->setUpdatedAt(new \DateTime());
                    }
                    else
                    {
                        //Create garden
                        $zoneObj = new Zone();
                    }
                    $zoneObj->setName($zone['name']);
                    $zoneObj->setDescription($zone['description']);
                    $zoneObj->setGarden($gardenObj);
                    $zoneObj->setZoneType($zoneTypeRepository->find($zone['zone_type_id']));
                    $zoneObj->setInitialPointX($zone['initial_point_x']);
                    $zoneObj->setInitialPointY($zone['initial_point_y']);
                    $zoneObj->setFinalPointX($zone['final_point_x']);
                    $zoneObj->setFinalPointY($zone['final_point_y']);
                    $zoneObj->setDepth($zone['depth']);
                    $zoneObj->setRotationAngle(0);
                    $em->persist($zoneObj);
                    $em->flush();

                    //Create, update or delete crops
                    //silverlight[{"__type":"ServerCrop:#GardenEditor2","id":-1,"numPlants":1,"plantId":1,"pointX":254,"pointY":193,"zoneId":0}]
                    //gwt{ "id": 1, "zone_id": 1, "plant_id": 2, "initial_real_date": "null", "initial_planned_date": "null", "final_real_date": "null", "final_planned_date": "null", "point_x": 50, "point_y": 50, "num_plants": 1}
                    foreach($cropsArray as $crop)
                    {
                        if ($crop['zone_id'] == $zone['id'])
                        {
                            $cropObj = $cropRepository->find($crop['id']);
                            if ($cropObj)
                            {
                                //Update garden
                                $cropObj->setUpdatedAt(new \DateTime());
                            }
                            else
                            {
                                //Create garden
                                $cropObj = new Crop();
                            }
                            $cropObj->setZone($zoneObj);
                            $cropObj->setPointX($crop['point_x']);
                            $cropObj->setPointY($crop['point_y']);
                            $cropObj->setNumPlants($crop['num_plants']);
                            $cropObj->setPlant($plantRepository->find($crop['plant_id']));
                            //$cropObj->setInitialCropPeriod($initialCropPeriod);
                            $cropObj->setInitialPlannedDate(new \DateTime());
                            $cropObj->setInitialRealDate(new \DateTime());
                            $cropObj->setRotationAngle(0);
                            //$cropObj->setFinalPlannedDate($finalPlannedDate);
                            //$cropObj->setFinalRealDate($finalRealDate);
                            $em->persist($cropObj);
                        }
                    }
                    $em->flush();
                }
                //$em->flush();
                
                $response = new Response();
                $response->setStatusCode(200);
                $response->headers->set('Content-Type', 'text/html');
                $response->setContent('<html><body><h1>OK</h1></body></html>');
                return $response;
            }
            else
            {
                $response = new Response();
                $response->setStatusCode(200);
                $response->headers->set('Content-Type', 'text/html');
                $response->setContent('<html><body><h1>User unknown</h1></body></html>');
                return $response;
            }
        }
        catch(Exception $ex)
        {
            $response = new Response();
            $response->setStatusCode(200);
            $response->headers->set('Content-Type', 'text/html');
            $response->setContent('<html><body><h1>'.$ex.'</h1></body></html>');
            return $response;
        }
    }
    
    
    
    /**
     * @Route("/gardeningapi/usergarden/{_locale}/{garden_id}/{format}", requirements={"format" = "json", "_locale" = "ca|en|es"}, name="garden_api_get_user_garden")
     * @Method({"GET"})
     * @Template()
     */
    public function getUserGardenAction($garden_id, $format)
    {
        $zoneArray = array();
        $cropArray = array();

        $em = $this->get('doctrine')->getEntityManager();
        $gardenRepository = $em->getRepository('CurbaGardeningBundle:Garden');
        
        $garden = $gardenRepository->find($garden_id);
        if (!$garden) {
            throw $this->createNotFoundException('No garden found for id '.$garden_id);
        }
        $zones = $garden->getZones();
        foreach($zones as $zone)
        {
            $zoneArray[] = $zone->asArray();
            foreach($zone->getCrops() as $crop)
            {
                $cropArray[] = $crop->asArray();
            }
        }
        
        $jsonResult = array(
            'garden' => $garden->asArray(),
            'zones' => $zoneArray,
            'crops' => $cropArray,
        );
        return new Response(json_encode($jsonResult));
    }
    
    /**
     * @Route("/gardeningapi/usergarden/garden/{_locale}/{garden_id}/{format}", requirements={"format" = "json", "_locale" = "ca|en|es"}, name="garden_api_get_user_garden_garden")
     * @Method({"GET"})
     * @Template()
     */
    public function getUserGardenGardenAction($garden_id, $format)
    {
        $em = $this->get('doctrine')->getEntityManager();
        $gardenRepository = $em->getRepository('CurbaGardeningBundle:Garden');
        
        $garden = $gardenRepository->find($garden_id);
        if (!$garden) {
            throw $this->createNotFoundException('No garden found for id '.$garden_id);
        }
        return new Response(json_encode($garden->asArray()));
    }
    
    /**
     * @Route("/gardeningapi/usergarden/zones/{_locale}/{garden_id}/{format}", requirements={"format" = "json", "_locale" = "ca|en|es"}, name="garden_api_get_user_garden_zones")
     * @Method({"GET"})
     * @Template()
     */
    public function getUserGardenZonesAction($garden_id, $format)
    {
        $zoneArray = array();

        $em = $this->get('doctrine')->getEntityManager();
        $gardenRepository = $em->getRepository('CurbaGardeningBundle:Garden');
        
        $garden = $gardenRepository->find($garden_id);
        if (!$garden) {
            throw $this->createNotFoundException('No garden found for id '.$garden_id);
        }
        $zones = $garden->getZones();
        foreach($zones as $zone)
        {
            $zoneArray[] = $zone->asArray();
        }
        return new Response(json_encode($zoneArray));
    }

    /**
     * @Route("/gardeningapi/usergarden/crops/{_locale}/{garden_id}/{format}", requirements={"format" = "json", "_locale" = "ca|en|es"}, name="garden_api_get_user_garden_crops")
     * @Method({"GET"})
     * @Template()
     */
    public function getUserGardenCropsAction($garden_id, $format)
    {
        $em = $this->get('doctrine')->getEntityManager();
        $gardenRepository = $em->getRepository('CurbaGardeningBundle:Garden');
        
        $garden = $gardenRepository->find($garden_id);
        if (!$garden) {
            throw $this->createNotFoundException('No garden found for id '.$garden_id);
        }
        $zones = $garden->getZones();
        foreach($zones as $zone)
        {
            foreach($zone->getCrops() as $crop)
            {
                $cropArray[] = $crop->asArray();
            }
        }
        return new Response(json_encode($cropArray));
    }
}
