<?php

namespace Curba\GardeningBundle\Entity;

use Doctrine\ORM\EntityRepository;

class CropHistoryRepository extends EntityRepository
{
    /**
     * Returns the last CropHistory with the CropPeriodType different from NULL 
     * and equal to periodType
     *
     * Param $crop: Crop origin of the CropHistory
     * Param $periodType: PeriodType of the CropHistrory
     */
    public function findLastCropHistoryWith($crop, $periodType)
    {
        $em = $this->getEntityManager();

        $query = $em->createQueryBuilder()
            ->select('c')
            ->from('CurbaGardeningBundle:CropHistory', 'c')
            ->where('c.crop = :crop')
            ->andWhere('c.crop_period_type = :periodType')
            ->orderBy('c.instanceDate DESC')
            ->setParameter('crop', $crop->getId(), \Doctrine\DBAL\Types\Type::INTEGER)
            ->setParameter('periodType', $periodType->getId(), \Doctrine\DBAL\Types\Type::INTEGER)
            ->getQuery();

        return $query->getFirstResult();
    }
    
}

