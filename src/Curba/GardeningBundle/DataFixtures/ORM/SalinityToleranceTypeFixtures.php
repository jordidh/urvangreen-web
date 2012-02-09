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
        $fix1->setName('Not at all');
        $fix1->setDescription('Not at all');
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
        
        //Translate to ca
        $fix1->setName('Baixa');
        $fix1->setDescription('Baixa');
        $fix1->setTranslatableLocale('ca');
        $manager->persist($fix1);

        $fix2->setName('Normal');
        $fix2->setDescription('Normal');
        $fix2->setTranslatableLocale('ca');
        $manager->persist($fix2);

        $fix3->setName('Alta');
        $fix3->setDescription('Alta');
        $fix3->setTranslatableLocale('ca');
        $manager->persist($fix3);

        $manager->flush();

        
        //Translate to es
        $fix1->setName('Baja');
        $fix1->setDescription('Baja');
        $fix1->setTranslatableLocale('es');
        $manager->persist($fix1);

        $fix2->setName('Normal');
        $fix2->setDescription('Normal');
        $fix2->setTranslatableLocale('es');
        $manager->persist($fix2);

        $fix3->setName('Alta');
        $fix3->setDescription('Alta');
        $fix3->setTranslatableLocale('es');
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