<?php

namespace Curba\GardeningBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Template;

use Symfony\Component\Security\Core\SecurityContext;
use Symfony\Component\Security\Core\Authentication\Token\UsernamePasswordToken;

class DefaultController extends Controller
{
    /**
     * @Route("/", name="default")
     * @Template()
     */
    public function indexAction()
    {        
        if (false === $this->get('security.context')->isGranted('ROLE_USER')) 
        {
            //Set the language from the users web browser
            $arrayOfSupportedLanguages = array('ca', 'es', 'en');
            $language = $this->get('request')->getPreferredLanguage($arrayOfSupportedLanguages);
            $this->get('session')->setLocale($language);
        }
        else
        {
            $user = $this->get('security.context')->getToken()->getUser();
            $language = $user->getLocale();
            $this->get('session')->setLocale($language);   
        }
        
        //print_r($language);
        
        
        $logger = $this->get('logger');
        $logger->info('Set user locale to '.$language);
        
        //$logger->err('An error occurred');

        if ($this->get('request')->attributes->has(SecurityContext::AUTHENTICATION_ERROR)) {
            $error = $this->get('request')->attributes->get(SecurityContext::AUTHENTICATION_ERROR);
        } else {
            $error = $this->get('request')->getSession()->get(SecurityContext::AUTHENTICATION_ERROR);
        }
     
        $format = $this->getRequest()->getRequestFormat();
        
        return $this->render('CurbaGardeningBundle:Default:index.'.$format.'.twig', array(
            'last_username' => $this->get('request')->getSession()->get(SecurityContext::LAST_USERNAME),
            'error'         => $error,
            'locale'        => $language,
        ));
    }
}
