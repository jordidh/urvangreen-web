<?php

namespace Curba\SecurityBundle\Entity;

use Doctrine\ORM\EntityRepository;
use CurbaGardeningBundle\Entity\UnitsOfMeasurementType;

class UserRepository extends EntityRepository
{
    /**
     * Returns all the Users that aren't deleted, are inactive and are created for more than $hours
     *
     * @param $hours: number of hours a user has created
     */
    public function findAllInactiveForMoreThan($hours)
    {
        $time = time() - ($hours * 3600);
        $limitTime = new \DateTime(date("Y-m-d H:i:s",$time));
        
        $em = $this->getEntityManager();

        $query = $em->createQueryBuilder()
            ->select('u')
            ->from('CurbaSecurityBundle:User', 'u')
            ->where('u.isActive = false')
            ->andWhere('u.deletedAt is null')
            ->andWhere('u.createdAt < :time')
            ->setParameter('time', $limitTime, \Doctrine\DBAL\Types\Type::DATETIME)
            ->getQuery();

        return $query->getResult();
    }
    
    /**
     * Returns the UnitOfMeasurement for a UnitMeasurementType
     *
     * @param $user: user
     * @param $unitOfMeasurementType: unit of measurement type
     */
    public function getUnitOfMeasurementFor($user, $unitOfMeasurementType)
    {
        switch($unitOfMeasurementType->getUnitsOfMeasurement()->getid())
        {
            case 1:
                return $user->getLengthUnit();
            case 2:
                return $user->getMassUnit();
            case 3:
                return $user->getVolumeUnit();
            case 4:
                return $user->getTemperatureUnit();
            case 5:
                return $user->getPressionUnit();
            default:
                break;
        }
        
        return null;
    }
}