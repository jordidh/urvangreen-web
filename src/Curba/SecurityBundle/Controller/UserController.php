<?php

namespace Curba\SecurityBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Template;

use Symfony\Component\Security\Core\SecurityContext;
use Symfony\Component\Security\Core\Authentication\Token\UsernamePasswordToken;

use Curba\SecurityBundle\Form\UserType;


class UserController extends Controller
{
    /**
     * @Route("/login/{_locale}", requirements={"_locale" = "ca|en|es"}, name="login")
     * @Template()
     */
    public function loginAction()
    {
        //Set the language from the users web browser
        //$arrayOfSupportedLanguages = array('ca', 'es', 'en');
        //$language = $this->get('request')->getPreferredLanguage($arrayOfSupportedLanguages);
        //$this->get('session')->setLocale($language);
        
        
        if ($this->get('request')->attributes->has(SecurityContext::AUTHENTICATION_ERROR)) {
            $error = $this->get('request')->attributes->get(SecurityContext::AUTHENTICATION_ERROR);
        } else {
            $error = $this->get('request')->getSession()->get(SecurityContext::AUTHENTICATION_ERROR);
        }

        return $this->render('CurbaSecurityBundle:User:login.html.twig', array(
            'last_username' => $this->get('request')->getSession()->get(SecurityContext::LAST_USERNAME),
            'error'         => $error,
        ));
    }

    /**
     * @Route("/register/{_locale}", requirements={"_locale" = "ca|en|es"}, name="register")
     * @Template()
     */
    public function registerAction()
    {
        $user = new \Curba\SecurityBundle\Entity\User();
        $form = $this->get('form.factory')->create(new UserType(), $user);

        $request = $this->get('request');
        if ($request->getMethod() == 'POST') {
            $form->bindRequest($request);

            if ($form->isValid()) {

                // Mensaje para notificar al usuario que todo ha salido bien
                $session = $this->get('request')->getSession();
                $session->setFlash('notice', 'Thanks for register in Gardening, you must activate your account, check your email');

                // Obtenemos el usuario
                $user = $form->getData();
                
                // Codificamos el password
                $factory = $this->get('security.encoder_factory');
                $codificador = $factory->getEncoder($user);
                $password = $codificador->encodePassword($user->getPassword(), $user->getSalt());
                $user->setPassword($password);

                // Guardamos el objeto en base de datos
                $em = $this->get('doctrine')->getEntityManager();
                $em->persist($user);
                $em->flush();

                // Logueamos al usuario
                $token = new UsernamePasswordToken($user, null, 'main', $user->getRoles());
                $this->get('security.context')->setToken($token);

                $this->get('session')->setLocale($user->getLocale());
                
                return $this->redirect($this->generateUrl('check_mail'));
            }
        }
        return $this->render('CurbaSecurityBundle:User:register.html.twig', array('form' => $form->createView()));
    }

    /**
     * @Route("/denied/{_locale}", requirements={"_locale" = "ca|en|es"}, name="denied")
     * @Template()
     */
    public function deniedAction()
    {
        return $this->render('CurbaSecurityBundle:User:denied.html.twig');
    }
    
    /**
     * @Route("/activateUser/{_locale}/{user_id}/{token}", requirements={"_locale" = "ca|en|es"}, name="activateUser")
     * @Template()
     */
    public function activateUserAction($user_id, $token)
    {
        //Check if the user and the token match
        $em = $this->get('doctrine')->getEntityManager();
        
        if (null == $userToActivate = $em->find('CurbaSecurityBundle:User', $user_id)) {
            throw new NotFoundHttpException('User not found, database error, contact with ... ?');
        }

        $t = $userToActivate->getActivationToken();
        if ($t == $token)
        {
            //Activate the user
            $userToActivate->setIsActive(true);
            $em->persist($userToActivate);
            $em->flush();

            //Log the user
            $token = new UsernamePasswordToken($userToActivate, null, 'main', $userToActivate->getRoles());
            $this->get('security.context')->setToken($token);
            
            return $this->redirect($this->generateUrl('main'));
        }
        else
        {
            return $this->render($this->generateUrl('denied'));
        }
    }
    
    /**
     * @Route("/profile/{_locale}", requirements={"_locale" = "ca|en|es"}, name="profile")
     * @Template()
     */
    public function profileAction()
    {
        return array();
    }
    
    /**
     * @Route("/checkmail/{_locale}", requirements={"_locale" = "ca|en|es"}, name="check_mail")
     * @Template()
     */
    public function checkmailAction()
    {
        $user = $this->get('security.context')->getToken()->getUser();
        //$locale = $this->get('session')->getLocale();
        $this->get('session')->setLocale($user->getLocale());
     
        $message = \Swift_Message::newInstance()
            ->setSubject('Hort registration activation email')
            ->setFrom('hort@hort.com')
            ->setTo($user->getEmail())
            //->setBody($this->renderView('HelloBundle:Hello:email.txt.twig', array('name' => $name)))
            ->setBody("<html><body><h1>Follow the link to activate your account</h1>".
                    "<p><A href=\"http://www.hort.com/app_dev.php/activateUser/".$user->getLocale()."/".$user->getId()."/".$user->getActivationToken()."\">Click me to activate your account<A></p></body></html>",
                    "text/html")
            ;
        $this->get('mailer')->send($message);
    
        return array();
    }
}