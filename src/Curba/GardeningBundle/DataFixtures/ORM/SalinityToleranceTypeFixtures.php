<?php

namespace Curba\GardeningBundle\DataFixtures\ORM;

use Doctrine\Common\DataFixtures\AbstractFixture;
use Doctrine\Common\DataFixtures\OrderedFixtureInterface;
use Curba\GardeningBundle\Entity\SalinityToleranceType;

class SalinityToleranceTypeFixtures extends AbstractFixture implements OrderedFixtureInterface
{
    public function load($manager)
    {
        $fix1 = new SalinityToleranceType();
        $fix1->setName('Nothing');
        $fix1->setDescription('Nothing');
        $fix1->setTranslatableLocale('en');
        $manager->persist($fix1);

        $fix2 = new SalinityToleranceType();
        $fix2->setName('Normal');
        $fix2->setDescription('Normal');
        $fix2->setTranslatableLocale('en');
        $manager->persist($fix2);

        $fix3 = new SalinityToleranceType();
        $fix3->setName('Hight');
        $fix3->setDescription('Hight');
        $fix3->setTranslatableLocale('en');
        $manager->persist($fix3);

        $manager->flush();

        //Reference to make a relation with StationFixtures
        $this->addReference('salinity-tolerance-type-1', $fix1);
        $this->addReference('salinity-tolerance-type-2', $fix2);
        $this->addReference('salinity-tolerance-type-3', $fix3);
    }
    
    public function getOrder()
    {
        return 1; // the order in which fixtures will be loaded
    }
}