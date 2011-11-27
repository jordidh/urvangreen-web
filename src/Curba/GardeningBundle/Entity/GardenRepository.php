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
    
    /**
     * Returns all the plants used in the crops
     *
     * @param $gardenId: GardenId to get all current zones
     */
    public function getPlantsUsed($gardenId)
    {
        $em = $this->getEntityManager();

        $query = $em->createQuery('
            SELECT DISTINCT p FROM CurbaGardeningBundle:Plant p
            JOIN p.crops c
            JOIN c.zone z
            WHERE z.garden = :id AND c.finalRealDate is not null'
        )->setParameter('id', $gardenId);

        try {
            return $query->getResult();
        } catch (\Doctrine\ORM\NoResultException $e) {
            return null;
        }
    }
    
    /**
     * Returns an array with all the actions, crops, plants and zones for a garden
     *
     * @param $gardenId: GardenId to get all current zones
     */
    public function getActionsAndCropsFinished($gardenId, $zoneId, $plantId)
    {
        $em = $this->getEntityManager();

        $sql = 'SELECT a, t, p, c, z FROM CurbaGardeningBundle:Action a
            JOIN a.crop c
            JOIN c.zone z
            JOIN c.plant p
            JOIN a.action_type t
            WHERE z.garden = :id AND c.finalRealDate is not null';

        if ($zoneId)
        {
            $sql = $sql.' AND z.id ='.$zoneId;
        }
        
        if ($plantId)
        {
            $sql = $sql.' AND p.id ='.$plantId;
        }
        
        $sql = $sql.' ORDER BY c.initialRealDate ASC, a.createdAt ASC';
        
        $query = $em->createQuery($sql)->setParameter('id', $gardenId);

        try {
            return $query->getArrayResult();
        } catch (\Doctrine\ORM\NoResultException $e) {
            return null;
        }
    }
    
    /**
     * Returns an array with all the crops, plants and zones for a garden
     *
     * @param $gardenId: GardenId to get all current zones
     */
    public function getCropsWithTotalsFinished($gardenId, $zoneId, $plantId)
    {
        $em = $this->getEntityManager();

        $sql = 'SELECT z, p, c, sum(a.quantityA), sum(a.quantityB), DATE_DIFF(c.finalRealDate, c.initialRealDate)
            FROM CurbaGardeningBundle:Crop c
            JOIN c.zone z
            JOIN c.plant p
            JOIN c.actions a
            WHERE z.garden = :id AND c.finalRealDate is not null';

        if ($zoneId)
        {
            $sql = $sql.' AND z.id ='.$zoneId;
        }
        
        if ($plantId)
        {
            $sql = $sql.' AND p.id ='.$plantId;
        }
        
        $sql .= ' GROUP BY z, p, c';
        
        $sql = $sql.' ORDER BY c.initialRealDate ASC, a.createdAt ASC';
        
        $query = $em->createQuery($sql)->setParameter('id', $gardenId);

        try {
            return $query->getArrayResult();
        } catch (\Doctrine\ORM\NoResultException $e) {
            return null;
        }
    }
}