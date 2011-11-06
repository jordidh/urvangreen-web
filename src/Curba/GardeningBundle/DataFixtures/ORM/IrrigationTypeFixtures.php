<?php

namespace Curba\GardeningBundle\DataFixtures\ORM;

use Doctrine\Common\DataFixtures\AbstractFixture;
use Doctrine\Common\DataFixtures\OrderedFixtureInterface;
use Curba\GardeningBundle\Entity\IrrigationType;

class IrrigationTypeFixtures extends AbstractFixture implements OrderedFixtureInterface
{
    public function load($manager)
    {
        $fix1 = new IrrigationType();
        $fix1->setName('Less exigent');
        $fix1->setDescription('Less exigent');
        $fix1->setTranslatableLocale('en');
        $manager->persist($fix1);

        $fix2 = new IrrigationType();
        $fix2->setName('Normal');
        $fix2->setDescription('Normal');
        $fix2->setTranslatableLocale('en');
        $manager->persist($fix2);

        $fix3 = new IrrigationType();
        $fix3->setName('Plenty');
        $fix3->setDescription('Plenty');
        $fix3->setTranslatableLocale('en');
        $manager->persist($fix3);

        $manager->flush();

        //Reference to make a relation with StationFixtures
        $this->addReference('irrigation-type-1', $fix1);
        $this->addReference('irrigation-type-2', $fix2);
        $this->addReference('irrigation-type-3', $fix3);
    }
    
    public function getOrder()
    {
        return 1; // the order in which fixtures will be loaded
    }
}