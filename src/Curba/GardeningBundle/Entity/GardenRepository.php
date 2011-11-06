<?php

namespace Curba\GardeningBundle\Entity;

use Doctrine\ORM\EntityRepository;

class GardenRepository extends EntityRepository
{
    /**
     * Returns all the zones for a garden that exists
     *
     * @param $gardenId: GardenId to get all current zones
     */
    public function getCurrentZones($gardenId)
    {
        $em = $this->getEntityManager();

        $query = $em->createQueryBuilder()
            ->select('z')
            ->from('CurbaGardeningBundle:Zone', 'z')
            ->where('z.garden = :garden')
            ->andWhere('z.deletedAt is null')
            ->setParameter('garden', $gardenId, \Doctrine\DBAL\Types\Type::INTEGER)
            ->getQuery();

        return $query->getResult();
    }
}

