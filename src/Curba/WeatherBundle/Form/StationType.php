<?php

namespace Curba\WeatherBundle\Form;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilder;

class StationType extends AbstractType
{
    public function buildForm(FormBuilder $builder, array $options)
    {
        $builder
            ->add('name')
            ->add('description')
            ->add('station_type')
            ->add('pointX')
            ->add('pointY')
            ->add('barCorrection')
            ->add('humidityCorrection')
            ->add('temperatureCorrection')
            ->add('rainCorrection')
            //->add('file')
        ;
    }
    
    public function getName()
    {
        return 'station';
    }
}