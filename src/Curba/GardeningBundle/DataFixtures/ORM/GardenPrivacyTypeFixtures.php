<?php

namespace Curba\GardeningBundle\DataFixtures\ORM;

use Doctrine\Common\DataFixtures\AbstractFixture;
use Doctrine\Common\DataFixtures\OrderedFixtureInterface;
use Curba\GardeningBundle\Entity\GardenPrivacyType;

class GardenPrivacyTypeFixtures extends AbstractFixture implements OrderedFixtureInterface
{
    public function load($manager)
    {
        $fix1 = new GardenPrivacyType();
        $fix1->setName('Private');
        $fix1->setDescription('Private');
        $fix1->setTranslatableLocale('en');
        $manager->persist($fix1);

        $fix2 = new GardenPrivacyType();
        $fix2->setName('Parcially private');
        $fix2->setDescription('Parcially private');
        $fix2->setTranslatableLocale('en');
        $manager->persist($fix2);

        $fix3 = new GardenPrivacyType();
        $fix3->setName('Public');
        $fix3->setDescription('Public');
        $fix3->setTranslatableLocale('en');
        $manager->persist($fix3);

        $manager->flush();
        
        
        //Translate to ca
        $fix1->setName('Privat');
        $fix1->setDescription('Privat');
        $fix1->setTranslatableLocale('ca');
        $manager->persist($fix1);

        $fix2->setName('Parcialment privat');
        $fix2->setDescription('Parcialment privat');
        $fix2->setTranslatableLocale('ca');
        $manager->persist($fix2);

        $fix3->setName('Públic');
        $fix3->setDescription('Públic');
        $fix3->setTranslatableLocale('ca');
        $manager->persist($fix3);

        $manager->flush();
        
        
        //Translate to ca
        $fix1->setName('Privado');
        $fix1->setDescription('Privado');
        $fix1->setTranslatableLocale('es');
        $manager->persist($fix1);

        $fix2->setName('Parcialmente privado');
        $fix2->setDescription('Parcialmente privado');
        $fix2->setTranslatableLocale('es');
        $manager->persist($fix2);

        $fix3->setName('Público');
        $fix3->setDescription('Público');
        $fix3->setTranslatableLocale('es');
        $manager->persist($fix3);

        $manager->flush();

    }
    
    public function getOrder()
    {
        return 1; // the order in which fixtures will be loaded
    }
}