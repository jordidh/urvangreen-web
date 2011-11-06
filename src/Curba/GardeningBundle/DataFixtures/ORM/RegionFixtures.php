<?php

namespace Curba\GardeningBundle\DataFixtures\ORM;

use Doctrine\Common\DataFixtures\AbstractFixture;
use Doctrine\Common\DataFixtures\OrderedFixtureInterface;
use Curba\GardeningBundle\Entity\Region;

class RegionFixtures extends AbstractFixture implements OrderedFixtureInterface
{
    public function load($manager)
    {
        $fix1 = new Region();
        $fix1->setName('Barcelona');
        $fix1->setDescription('Barcelona metropolitan area');
        $fix1->setTranslatableLocale('en'); // change locale
        $manager->persist($fix1);

        $manager->flush();
        
        // translate to ca
        $fix1->setName('Barcelona');
        $fix1->setDescription('Àrea metropolitana de Barcelona');
        $fix1->setTranslatableLocale('ca');
        $manager->persist($fix1);
        
        $manager->flush();
        
        // translate to es
        $fix1->setName('Barcelona');
        $fix1->setDescription('Área metropolitana de Barcelona');
        $fix1->setTranslatableLocale('es');
        $manager->persist($fix1);
        
        $manager->flush();
    }
    
    public function getOrder()
    {
        return 1; // the order in which fixtures will be loaded
    }
}