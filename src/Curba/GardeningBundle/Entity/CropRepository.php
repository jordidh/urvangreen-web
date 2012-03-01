<?php

namespace Curba\GardeningBundle\Entity;

use Doctrine\ORM\EntityRepository;

class CropRepository extends EntityRepository
{
    /**
     * Returns all the actions for one crop ordered by createdAt
     *
     * Param $cropId: cropId to get all actions
     *
    public function getCurrentActions($cropId)
    {
        $em = $this->getEntityManager();

        $query = $em->createQueryBuilder()
            ->select('a')
            ->from('CurbaGardeningBundle:Action', 'a')
            ->where('a.crop = :crop')
            ->setParameter('crop', $cropId, \Doctrine\DBAL\Types\Type::INTEGER)
            ->getQuery();

        return $query->getResult();
    }
     * 
     */    
}

