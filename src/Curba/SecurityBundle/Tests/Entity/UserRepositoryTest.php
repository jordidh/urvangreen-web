<?php

namespace Curba\SecurityBundle\Tests\Entity;

use Symfony\Bundle\FrameworkBundle\Test\WebTestCase;
 
class UserRepositoryTest extends WebTestCase {
    private $em;
    private $repo;
 
    public function setUp() {
        $kernel = static::createKernel();
        $this->repo = $kernel->boot();
        $this->em = $kernel->getContainer()->get('doctrine.orm.entity_manager');
        $this->repo = $this->em->getRepository('CurbaSecurityBundle:User');
    }
    
    public function testFindAllInactiveForMoreThan()
    {        
        $createdAt = time() - (11 * 3600);
        
        //Create a user that has to be deleted
        $userInactiveToDelete = new \Curba\SecurityBundle\Entity\User();
        $userInactiveToDelete->setFirstName('ajkdhflajkdhfsla');
        $userInactiveToDelete->setLastName('jlahfdaljhdfjkadhf');
        $userInactiveToDelete->setPassword('hajkhfdjkadlakj');
        $userInactiveToDelete->setUserLicenseAccepted(true);
        $userInactiveToDelete->setIsAdministrator(false);
        $userInactiveToDelete->setEmail('ajkdfhaljdaToDelete@ahdflakjhfdalkjd.com');
        $userInactiveToDelete->setIsActive(false);
        $userInactiveToDelete->setCreatedAt(new \DateTime(date("Y-m-d H:i:s", $createdAt)));
        $userInactiveToDelete->setLocale('ca');
        $this->em->persist($userInactiveToDelete);
        
        //Creeate a user that NOT has to be deleted
        $userInactiveToRemain = new \Curba\SecurityBundle\Entity\User();
        $userInactiveToRemain->setFirstName('ajkdhflajkdhfsla');
        $userInactiveToRemain->setLastName('jlahfdaljhdfjkadhf');
        $userInactiveToRemain->setPassword('hajkhfdjkadlakj');
        $userInactiveToRemain->setUserLicenseAccepted(true);
        $userInactiveToRemain->setIsAdministrator(false);
        $userInactiveToRemain->setEmail('ajkdfhaljdaToRemain@ahdflakjhfdalkjd.com');
        $userInactiveToRemain->setIsActive(false);
        $userInactiveToRemain->setLocale('ca');
        $this->em->persist($userInactiveToRemain);
        
        $this->em->flush();
        
        $inactiveUsersToDeleteFound = $this->repo->findAllInactiveForMoreThan(10);
        
        $foundInactiveUserToDelete = false;
        $foundInactiveUserToRemain = false;
        foreach($inactiveUsersToDeleteFound as $user)
        {
            if ($user->getEmail() == $userInactiveToDelete->getEmail()) $foundInactiveUserToDelete = true;
            if ($user->getEmail() == $userInactiveToRemain->getEmail()) $foundInactiveUserToRemain = true;
        }
                
        $this->em->remove($userInactiveToDelete);
        $this->em->remove($userInactiveToRemain);
        $this->em->flush();
        
        $this->assertTrue($foundInactiveUserToDelete);
        $this->assertFalse($foundInactiveUserToRemain);
    }
}