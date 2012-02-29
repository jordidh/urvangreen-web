<?php

namespace Curba\GardeningBundle\Entity;

use Doctrine\ORM\EntityRepository;

class PlantRepository extends EntityRepository
{
    /**
     * Returns all the PlantCares for one plant that have a specific initialCropPeriod
     *
     * @param $crop: crop
     * @param $region: region of the garden
     */
    public function getPlantCareFromCropPeriod($crop, $region)
    {
        $em = $this->getEntityManager();

        //TODO
        $query = $em->createQueryBuilder()
            ->select('p')
            ->from('CurbaGardeningBundle:PlantCares', 'p')
            ->leftJoin('p.initial_crop_period', 'cp')
            ->where('p.plant = :plant')
            ->orderBy('pt.id')
            ->setParameter('plant', $crop->getPlant()->getId(), \Doctrine\DBAL\Types\Type::INTEGER)
            ->getQuery();
/*
        return $query->getResult();
        $query = $em->createQueryBuilder()
            ->select('p')
            ->from('CurbaGardeningBundle:CropPeriod', 'p')
            ->leftJoin('p.crop_period_type', 'pt')
            ->where('p.plant = :plant')
            ->orderBy('pt.id')
            ->setParameter('plant', $plantId, \Doctrine\DBAL\Types\Type::INTEGER)
            ->getQuery();

        return $query->getResult();
*/
    }
}