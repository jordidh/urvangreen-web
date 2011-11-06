<?php

namespace Curba\GardeningBundle\Entity;

use Doctrine\ORM\EntityRepository;

class ZoneRepository extends EntityRepository
{
    /**
     * Returns all the compatibilityPlants for one plant ordered by PlantB.Id
     *
     * @param $plantId: plantId to get all compatibility plants
     */
    public function getCurrentCrops($zoneId)
    {
        $em = $this->getEntityManager();

        $query = $em->createQueryBuilder()
            ->select('c')
            ->from('CurbaGardeningBundle:Crop', 'c')
            ->where('c.zone = :zone')
            ->andWhere('c.finalRealDate is null')
            ->setParameter('zone', $zoneId, \Doctrine\DBAL\Types\Type::INTEGER)
            ->getQuery();

        return $query->getResult();
    }
}

