<?php

namespace Curba\SecurityBundle\Entity;

use Doctrine\ORM\EntityRepository;

class UserRepository extends EntityRepository
{
    /**
     * Returns all the Users that arent deleted, are inactive and are created for more than $hours
     *
     * @param $hours: user id
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
}