<?php

namespace Curba\GardeningBundle\DataFixtures\ORM;

use Doctrine\Common\DataFixtures\AbstractFixture;
use Doctrine\Common\DataFixtures\OrderedFixtureInterface;
use Curba\GardeningBundle\Entity\LifeCicleType;

class LifeCicleTypeFixtures extends AbstractFixture implements OrderedFixtureInterface
{
    public function load($manager)
    {
        $fix1 = new LifeCicleType();
        $fix1->setName('Annual');
        $fix1->setDescription('Annual');
        $fix1->setTranslatableLocale('en');
        $manager->persist($fix1);

        $fix2 = new LifeCicleType();
        $fix2->setName('Biannual');
        $fix2->setDescription('Biannual');
        $fix2->setTranslatableLocale('en');
        $manager->persist($fix2);

        $fix3 = new LifeCicleType();
        $fix3->setName('Multiannual');
        $fix3->setDescription('Multiannual');
        $fix3->setTranslatableLocale('en');
        $manager->persist($fix3);

        $fix4 = new LifeCicleType();
        $fix4->setName('Undefined');
        $fix4->setDescription('Undefined');
        $fix4->setTranslatableLocale('en');
        $manager->persist($fix4);

        $manager->flush();

        //Reference to make a relation with StationFixtures
        $this->addReference('life-cicle-type-1', $fix1);
        $this->addReference('life-cicle-type-2', $fix2);
        $this->addReference('life-cicle-type-3', $fix3);
        $this->addReference('life-cicle-type-4', $fix4);
    }
    
    public function getOrder()
    {
        return 1; // the order in which fixtures will be loaded
    }
}