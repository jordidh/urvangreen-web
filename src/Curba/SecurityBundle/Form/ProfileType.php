<?php

namespace Curba\SecurityBundle\Form;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilder;

class ProfileType extends AbstractType
{
    public function buildForm(FormBuilder $builder, array $options)
    {
        $builder->add('firstName');
        $builder->add('lastName');
        //$builder->add('email', 'email');
        $builder->add('locale', 'choice', array(
            'choices'   => array('ca' => 'Català', 'es' => 'Español', 'en' => 'English'),
            'required'  => true,
        ));
    }

    public function getDefaultOptions(array $options)
    {
        return array(
            'data_class' => 'Curba\SecurityBundle\Entity\User',
        );
    }
    
    public function getName() 
    {
        return 'ProfileType';
    }
}
