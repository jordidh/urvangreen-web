<?php
namespace Curba\GardeningBundle\Form;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilder;

class ActionType extends AbstractType
{
    public function buildForm(FormBuilder $builder, array $options)
    {
        $builder->add('createdAt');
        $builder->add('updatedAt');
        $builder->add('action_type', 'entity', array(
            'class'         => 'Curba\\GardeningBundle\\Entity\\ActionType',
            'query_builder' => function ($repositori) {
                return $repositori->createQueryBuilder('p')->orderBy('p.name', 'ASC');
            },
        ));
        $builder->add('crop');
        /*
        $builder->add('crop', 'entity', array(
            'class'         => 'Curba\\GardeningBundle\\Entity\\Crop',
            'query_builder' => function ($repositori) {
                return $repositori->createQueryBuilder('p')->orderBy('p.initialRealDate', 'ASC');
            },
        ));
        */
        $builder->add('pest');
        /*
        $builder->add('pest', 'entity', array(
            'class'         => 'Curba\\GardeningBundle\\Entity\\Pest',
            'query_builder' => function ($repositori) {
                return $repositori->createQueryBuilder('p')->orderBy('p.name', 'ASC');
            },
        ));
         * 
         */
        $builder->add('quantityA');
        $builder->add('quantityB');
        $builder->add('description');
    }

    public function getDefaultOptions(array $options)
    {
        return array(
            'data_class' => 'Curba\GardeningBundle\Entity\Action',
        );
    }
    
    public function getName()
    {
        return 'action';
    }    
}