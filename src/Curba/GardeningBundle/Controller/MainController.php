<?php

namespace Curba\GardeningBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Template;

class MainController extends Controller
{
    /**
     * @Route("/gardening/main/{_locale}", requirements={"_locale" = "ca|en|es"}, name="main")
     * @Template()
     */
    public function indexAction()
    {
        $user = $this->get('security.context')->getToken()->getUser();
        $this->get('session')->setLocale($user->getLocale());
        $em = $this->get('doctrine')->getEntityManager();
        
        //Get all the gardens from the user logged
        $gardens = array();
        foreach($user->getGardens() as $userGarden)
        {
            $gardens[] = $em->getRepository('CurbaGardeningBundle:Garden')->find($userGarden->getGarden());
        }              
        
        //Get all weather stations
        $stations = array();
        foreach($user->getStations() as $userStation)
        {
            $stations[] = $em->getRepository('CurbaWeatherBundle:Station')->find($userStation->getWeatherStation());
        }              
        
        //Get all the users that are friends and his last activity
        
        
        return array(
            'gardens' => $gardens,
            'stations' => $stations,
        );
    }
}
