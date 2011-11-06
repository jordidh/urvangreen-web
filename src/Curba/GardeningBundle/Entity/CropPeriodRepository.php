<?php

namespace Curba\GardeningBundle\Entity;

use Doctrine\ORM\EntityRepository;

class CropPeriodRepository extends EntityRepository
{
    /**
     * Returns all the CropPeriods for one plantn ordered by CropPeriodType.Id
     *
     * @param $plantId: plantId to get all crop periods
     */
    public function findAllFrom($plantId)
    {
        $em = $this->getEntityManager();

        $query = $em->createQueryBuilder()
            ->select('p')
            ->from('CurbaGardeningBundle:CropPeriod', 'p')
            ->leftJoin('p.crop_period_type', 'pt')
            ->where('p.plant = :plant')
            ->orderBy('pt.id')
            ->setParameter('plant', $plantId, \Doctrine\DBAL\Types\Type::INTEGER)
            ->getQuery();

        return $query->getResult();
    }
}

