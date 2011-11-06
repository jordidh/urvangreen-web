<?php

namespace Curba\SecurityBundle\Entity;

use Doctrine\ORM\EntityRepository;

class UserGardenRepository extends EntityRepository
{
    /**
     * Returns all the UserGardens from one user and garden
     *
     * @param $userId: user id
     * @param $gardenId: garden id
     */
    /*
    public function findOneFrom($userId, $gardenId)
    {
        $em = $this->getEntityManager();

        $query = $em->createQueryBuilder()
            ->select('g')
            ->from('CurbaSecurityBundle:UserGarden', 'g')
            ->where('g.user_id = :user')
            ->andWhere('g.user_id = :garden')
            ->setParameter('user', $userId, \Doctrine\DBAL\Types\Type::INTEGER)
            ->setParameter('garden', $gardenId, \Doctrine\DBAL\Types\Type::INTEGER)
            ->getQuery();

        return $query->getOneOrNullResult();
    }
     * 
     */
}
