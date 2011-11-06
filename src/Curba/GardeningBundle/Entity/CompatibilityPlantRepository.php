<?php

namespace Curba\GardeningBundle\Entity;

use Doctrine\ORM\EntityRepository;

class CompatibilityPlantRepository extends EntityRepository
{
    /**
     * Returns all the compatibilityPlants for one plant ordered by PlantB.Id
     *
     * @param $plantId: plantId to get all compatibility plants
     */
    public function findAllFrom($plantId)
    {
        $em = $this->getEntityManager();

        $query = $em->createQueryBuilder()
            ->select('p')
            ->from('CurbaGardeningBundle:CompatibilityPlant', 'p')
            ->where('p.plantA = :plant')
            ->orderBy('p.plantB')
            ->setParameter('plant', $plantId, \Doctrine\DBAL\Types\Type::INTEGER)
            ->getQuery();

        return $query->getResult();
    }

    /**
     * Returns the compatibility of two plants
     *
     * @param $plantAId: plantId for the first plant
     * @param $plantBId: plantId for the second plant
     */
    public function findCompatibility($plantAId, $plantBId)
    {
        $em = $this->getEntityManager();

        $query = $em->createQueryBuilder()
            ->select('p')
            ->from('CurbaGardeningBundle:CompatibilityPlant', 'p')
            ->where('p.plantA = :plantA')
            ->andWhere('p.plantB = :plantB')
            ->setParameter('plantA', $plantAId, \Doctrine\DBAL\Types\Type::INTEGER)
            ->setParameter('plantB', $plantBId, \Doctrine\DBAL\Types\Type::INTEGER)
            ->getQuery();

        return $query->getOneOrNullResult();
    }
}

