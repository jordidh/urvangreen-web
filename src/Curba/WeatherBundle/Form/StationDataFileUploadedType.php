<?php

namespace Curba\WeatherBundle\Form;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilder;

class StationDataFileUploadedType extends AbstractType
{
    public function buildForm(FormBuilder $builder, array $options)
    {
        $builder
            ->add('file','file')
        ;
    }
    
    public function getName()
    {
        return 'station2';
    }
}