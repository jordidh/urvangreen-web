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
        $fix1->setValueUnitType($this->getReference('unit-type-mass'));
        $fix1->setTranslatableLocale('en');
        $manager->persist($fix1);

        $fix2 = new ActionType();
        $fix2->setName('Watering');
        $fix2->setDescription('Watering');
        $fix2->setValueUnitType($this->getReference('unit-type-volume'));
        $fix2->setTranslatableLocale('en');
        $manager->persist($fix2);

        $fix3 = new ActionType();
        $fix3->setName('Prune');
        $fix3->setDescription('Prune');
        $fix3->setValueUnitType($this->getReference('unit-type-mass'));
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


        //Translate to ca
        $fix1->setName('Collita');
        $fix1->setDescription('Collita');
        $fix1->setTranslatableLocale('ca');
        $manager->persist($fix1);

        $fix2->setName('Reg');
        $fix2->setDescription('Reg');
        $fix2->setTranslatableLocale('ca');
        $manager->persist($fix2);

        $fix3->setName('Poda');
        $fix3->setDescription('Poda');
        $fix3->setTranslatableLocale('ca');
        $manager->persist($fix3);

        $manager->flush();


        //Translate to es
        $fix1->setName('Cosecha');
        $fix1->setDescription('Cosecha');
        $fix1->setTranslatableLocale('es');
        $manager->persist($fix1);

        $fix2->setName('Riego');
        $fix2->setDescription('Riego');
        $fix2->setTranslatableLocale('es');
        $manager->persist($fix2);

        $fix3->setName('Poda');
        $fix3->setDescription('Poda');
        $fix3->setTranslatableLocale('es');
        $manager->persist($fix3);

        $manager->flush();

        
        //Reference to make a relation with StationFixtures
        $this->addReference('action-type-harvest', $fix1);
        $this->addReference('action-type-watering', $fix2);
        $this->addReference('action-type-prune', $fix3);
        //$this->addReference('action-type-4', $fix4);
    }
    
    public function getOrder()
    {
        return 2; // the order in which fixtures will be loaded
    }
}