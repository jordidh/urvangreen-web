<?php

namespace Curba\GardeningBundle\DataFixtures\ORM;

use Doctrine\Common\DataFixtures\AbstractFixture;
use Doctrine\Common\DataFixtures\OrderedFixtureInterface;
use Curba\GardeningBundle\Entity\SoilType;

class SoilTypeFixtures extends AbstractFixture implements OrderedFixtureInterface
{
    public function load($manager)
    {
        $fix1 = new SoilType();
        $fix1->setName('Poor');
        $fix1->setDescription('Poor');
        $fix1->setTranslatableLocale('en');
        $manager->persist($fix1);

        $fix2 = new SoilType();
        $fix2->setName('Normal');
        $fix2->setDescription('Normal');
        $fix2->setTranslatableLocale('en');
        $manager->persist($fix2);

        $fix3 = new SoilType();
        $fix3->setName('Rich');
        $fix3->setDescription('Rich');
        $fix3->setTranslatableLocale('en');
        $manager->persist($fix3);

        $manager->flush();

        //Reference to make a relation with StationFixtures
        $this->addReference('soil-type-1', $fix1);
        $this->addReference('soil-type-2', $fix2);
        $this->addReference('soil-type-3', $fix3);

    }
    
    public function getOrder()
    {
        return 1; // the order in which fixtures will be loaded
    }
}