<?php
namespace Curba\GardeningBundle\Form;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilder;

class GardenType extends AbstractType
{
    public function buildForm(FormBuilder $builder, array $options)
    {
        $builder->add('name');
        $builder->add('description');
        $builder->add('latitude');
        $builder->add('longitude');
        $builder->add('width');
        $builder->add('height');
        $builder->add('garden_type', 'entity', array(
            'class'         => 'Curba\\GardeningBundle\\Entity\\GardenType',
            'query_builder' => function ($repositori) {
                return $repositori->createQueryBuilder('p')->orderBy('p.name', 'ASC');
            },
        ));
        $builder->add('region', 'entity', array(
            'class'         => 'Curba\\GardeningBundle\\Entity\\Region',
            'query_builder' => function ($repositori) {
                return $repositori->createQueryBuilder('p')->orderBy('p.name', 'ASC');
            },
        ));
        $builder->add('privacy_type');
    }

    public function getDefaultOptions(array $options)
    {
        return array(
            'data_class' => 'Curba\GardeningBundle\Entity\Garden',
        );
    }
    
    public function getName()
    {
        return 'garden';
    }    
}