<?php

namespace Curba\SecurityBundle\Form;

use Doctrine\ORM\EntityRepository;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilder;
use CurbaGardeningBundle\Entity\UnitsOfMeasurement;

class UserType extends AbstractType
{
    public function buildForm(FormBuilder $builder, array $options)
    {
        $builder->add('firstName');
        $builder->add('lastName');
        $builder->add('email', 'email');
        $builder->add('password', 'repeated', array('type' => 'password'));
        $builder->add('userLicenseAccepted');
        $builder->add('locale', 'choice', array(
            'choices'   => array('ca' => 'Català', 'es' => 'Español', 'en' => 'English'),
            'required'  => true,
        ));
        
        $builder->add('lengthUnit', 'choice', array(
            'choices'   => array(2 => 'm'),
            'required'  => true,
        ));
        
        $builder->add('massUnit', 'choice', array(
            'choices'   => array(1 => 'kg'),
            'required'  => true,
        ));
        
        $builder->add('volumeUnit', 'choice', array(
            'choices'   => array(3 => 'l'),
            'required'  => true,
        ));
        
        $builder->add('temperatureUnit', 'choice', array(
            'choices'   => array(4 => 'C', 5 => 'K'),
            'required'  => true,
        ));

        $builder->add('pressionUnit', 'choice', array(
            'choices'   => array(6 => 'mBa', 7 => 'Pa'),
            'required'  => true,
        ));
        
        /*
        $builder->add('lengthUnit', 'entity', array(
            'class' => 'CurbaGardeningBundle:UnitsOfMeasurement',
            'query_builder' => function(EntityRepository $er) {
                    return $er->createQueryBuilder('u')
                            ->where('u.unitsOfMeasurementType = 1')
                            ->orderBy('u.name', 'ASC');
                },
            ));
        $builder->add('massUnit', 'entity', array(
            'class' => 'CurbaGardeningBundle:UnitsOfMeasurement',
            'query_builder' => function(EntityRepository $er) {
                    return $er->createQueryBuilder('u')
                            ->where('u.unitsOfMeasurementType = 2')
                            ->orderBy('u.name', 'ASC');
                },
            ));
        $builder->add('volumeUnit', 'entity', array(
            'class' => 'CurbaGardeningBundle:UnitsOfMeasurement',
            'query_builder' => function(EntityRepository $er) {
                    return $er->createQueryBuilder('u')
                            ->where('u.unitsOfMeasurementType = 3')
                            ->orderBy('u.name', 'ASC');
                },
            ));
        $builder->add('temperatureUnit', 'entity', array(
            'class' => 'CurbaGardeningBundle:UnitsOfMeasurement',
            'query_builder' => function(EntityRepository $er) {
                    return $er->createQueryBuilder('u')
                            ->where('u.unitsOfMeasurementType = 4')
                            ->orderBy('u.name', 'ASC');
                },
            ));
        $builder->add('pressionUnit', 'entity', array(
            'class' => 'CurbaGardeningBundle:UnitsOfMeasurement',
            'query_builder' => function(EntityRepository $er) {
                    return $er->createQueryBuilder('u')
                            ->where('u.unitsOfMeasurementType = 5')
                            ->orderBy('u.name', 'ASC');
                },
            ));
         * 
         */
    }

    public function getDefaultOptions(array $options)
    {
        return array(
            'data_class' => 'Curba\SecurityBundle\Entity\User',
        );
    }
    
    public function getName() 
    {
        return 'UserType';
    }
}
