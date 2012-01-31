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
        $fix1->setName('Clayey');
        $fix1->setDescription('Clayey');
        $fix1->setTranslatableLocale('en');
        $manager->persist($fix1);

        $fix2 = new SoilType();
        $fix2->setName('Good drain');
        $fix2->setDescription('Good drain');
        $fix2->setTranslatableLocale('en');
        $manager->persist($fix2);

        $fix3 = new SoilType();
        $fix3->setName('Sandy');
        $fix3->setDescription('Sandy');
        $fix3->setTranslatableLocale('en');
        $manager->persist($fix3);

        $manager->flush();

        
        //Translate to ca
        $fix1->setName('Argilós');
        $fix1->setDescription('Argilós');
        $fix1->setTranslatableLocale('ca');
        $manager->persist($fix1);

        $fix2->setName('Bon drenatge');
        $fix2->setDescription('Bon drenatge');
        $fix2->setTranslatableLocale('ca');
        $manager->persist($fix2);

        $fix3->setName('Arenós');
        $fix3->setDescription('Arenós');
        $fix3->setTranslatableLocale('ca');
        $manager->persist($fix3);

        $manager->flush();

        
        //Translate to es
        $fix1->setName('Arcilloso');
        $fix1->setDescription('Arcilloso');
        $fix1->setTranslatableLocale('es');
        $manager->persist($fix1);

        $fix2->setName('Buen drenaje');
        $fix2->setDescription('Buen drenaje');
        $fix2->setTranslatableLocale('es');
        $manager->persist($fix2);

        $fix3->setName('Arenoso');
        $fix3->setDescription('Arenoso');
        $fix3->setTranslatableLocale('es');
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