<?php

namespace Curba\GardeningBundle\DataFixtures\ORM;

use Doctrine\Common\DataFixtures\AbstractFixture;
use Doctrine\Common\DataFixtures\OrderedFixtureInterface;
use Curba\GardeningBundle\Entity\ActionType;

class ActionTypeFixtures extends AbstractFixture implements OrderedFixtureInterface
{
    public function load($manager)
    {
        $fix1 = new ActionType();
        $fix1->setName('Harvest');
        $fix1->setDescription('Harvest');
        $fix1->setTranslatableLocale('en');
        $manager->persist($fix1);

        $fix2 = new ActionType();
        $fix2->setName('Watering');
        $fix2->setDescription('Watering a crop');
        $fix2->setTranslatableLocale('en');
        $manager->persist($fix2);

        $fix3 = new ActionType();
        $fix3->setName('Prune');
        $fix3->setDescription('Prune');
        $fix3->setTranslatableLocale('en');
        $manager->persist($fix3);
/*
        $fix4 = new ActionType();
        $fix4->setName('');
        $fix4->setDescription('');
        $fix4->setTranslatableLocale('en');
        $manager->persist($fix4);
*/
        $manager->flush();

        //Reference to make a relation with StationFixtures
        $this->addReference('action-type-1', $fix1);
        $this->addReference('action-type-2', $fix2);
        $this->addReference('action-type-3', $fix3);
        //$this->addReference('action-type-4', $fix4);
    }
    
    public function getOrder()
    {
        return 1; // the order in which fixtures will be loaded
    }
}