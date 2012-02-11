<?php

namespace Curba\GardeningBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Template;

class StaticController extends Controller
{
    /**
     * @Route("/gardening/help/{_locale}", requirements={"_locale" = "ca|en|es"}, name="help")
     * @Template()
     */
    public function helpAction()
    {
        return array();
    }

    /**
     * @Route("/public/about/{_locale}", requirements={"_locale" = "ca|en|es"}, name="about")
     * @Template()
     */
    public function aboutAction()
    {
        return array();
    }

    /**
     * @Route("/public/copyright/{_locale}", requirements={"_locale" = "ca|en|es"}, name="copyright")
     * @Template()
     */
    public function copyrightAction()
    {
        return array();
    }

    /**
     * @Route("/public/license/{_locale}", requirements={"_locale" = "ca|en|es"}, name="license")
     * @Template()
     */
    public function licenseAction()
    {
        return array();
    }

    /**
     * @Route("/public/plant/{_locale}", requirements={"_locale" = "ca|en|es"}, name="plant")
     * @Template()
     */
    public function plantAction()
    {
        //Get the plant id
        $request = $this->getRequest();
        $id = null;
        if ($request->getMethod() == 'POST') {
            $form = $request->get('form');
            $id = $form['plant'];
        }
        
        $em = $this->get('doctrine')->getEntityManager();
        $plantRepository = $em->getRepository('CurbaGardeningBundle:Plant');
        $plants = $plantRepository->findAll();
                        
        //Create the form to show plant card 
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
        
        if ($id)
        {
            $plants = array();
            $plants[0] = $plantRepository->find($id);
            if (!$plants) {
                throw $this->createNotFoundException('No plant found for id='.$id);
            }
        }
        else
        {
            $plants = $plantRepository->findAll();
        }

        $format = $this->getRequest()->getRequestFormat();
        
        return $this->render('CurbaGardeningBundle:Static:plant.'.$format.'.twig', array(
            'plants' => $plants,
            'form'      => $form->createView(),
        ));
    }
    
    /**
     * @Route("/public/compplant/{_locale}", requirements={"_locale" = "ca|en|es"}, name="comp_plant")
     * @Template()
     */
    public function compplantAction()
    {
        $em = $this->get('doctrine')->getEntityManager();

        $plantRepository = $em->getRepository('CurbaGardeningBundle:Plant');
        $plants = $plantRepository->findAll();
        
        $compRepository = $em->getRepository('CurbaGardeningBundle:CompatibilityPlant');
        
        $plantArray = array();
        
        foreach($plants as $plantA)
        {
            //$plantArray[$plant->getId()] = $compRepository->findAllFrom($plant->getId());
            foreach($plants as $plantB)
            {
                $plantArray[$plantA->getId()][$plantB->getId()] = $compRepository->findCompatibility($plantA->getId(), $plantB->getId());
            }
        }

        return array(
            'plants' => $plants,
            'plantArray' => $plantArray,
        );
    }
    
    /**
     * @Route("/public/cropperiod/{_locale}", requirements={"_locale" = "ca|en|es"}, name="crop_period")
     * @Template()
     */
    public function cropperiodAction()
    {
        $em = $this->get('doctrine')->getEntityManager();

        $plantRepository = $em->getRepository('CurbaGardeningBundle:Plant');
        $plants = $plantRepository->findAll();
        
        $cropPeriodRepository = $em->getRepository('CurbaGardeningBundle:CropPeriod');
        
        //Array with 3 dimensions: Plant id, CropPeriodType id [1 - 7], Month [1-12] = active or not (0 or 1)
        $cropPeriodArray = array();
        
        foreach($plants as $plant)
        {
            $cropPeriods = $cropPeriodRepository->findAllFrom($plant->getId());
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
            
            //$cropPeriodArray[$plant->getId()] = $cropPeriodRepository->findAllFrom($plant->getId());
            
        }

        return array(
            'plants' => $plants,
            'cropPeriodArray' => $cropPeriodArray,
        );
    }
}