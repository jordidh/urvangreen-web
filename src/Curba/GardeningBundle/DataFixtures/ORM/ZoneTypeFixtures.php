<?php

namespace Curba\GardeningBundle\DataFixtures\ORM;

use Doctrine\Common\DataFixtures\AbstractFixture;
use Doctrine\Common\DataFixtures\OrderedFixtureInterface;
use Curba\GardeningBundle\Entity\ZoneType;

class ZoneTypeFixtures extends AbstractFixture implements OrderedFixtureInterface
{
    public function load($manager)
    {
        $fix1 = new ZoneType();
        $fix1->setName('Ground field');
        $fix1->setDescription('Ground field');
        $fix1->setTranslatableLocale('en');
        $manager->persist($fix1);

        $fix2 = new ZoneType();
        $fix2->setName('Pot');
        $fix2->setDescription('Pot');
        $fix2->setTranslatableLocale('en');
        $manager->persist($fix2);

        $fix3 = new ZoneType();
        $fix3->setName('Table');
        $fix3->setDescription('Table');
        $fix3->setTranslatableLocale('en');
        $manager->persist($fix3);

        $manager->flush();
        
        // translate to ca
        $fix1->setName('Terra');
        $fix1->setDescription('Zona de l\'hort feta a terra');
        $fix1->setTranslatableLocale('ca'); // change locale
        $manager->persist($fix1);
        
        $fix2->setName('Test');
        $fix2->setDescription('Test');
        $fix2->setTranslatableLocale('ca'); // change locale
        $manager->persist($fix2);

        $fix3->setName('Taula');
        $fix3->setDescription('Taula de plantació');
        $fix3->setTranslatableLocale('ca'); // change locale
        $manager->persist($fix3);

        $manager->flush();
        
        // translate to es
        $fix1->setName('Tierra');
        $fix1->setDescription('Zona del huerto hecha a tierra');
        $fix1->setTranslatableLocale('es'); // change locale
        $manager->persist($fix1);
        
        $fix2->setName('Tiesto');
        $fix2->setDescription('Tiesto');
        $fix2->setTranslatableLocale('es'); // change locale
        $manager->persist($fix2);

        $fix3->setName('Mesa');
        $fix3->setDescription('Mesa de plantación');
        $fix3->setTranslatableLocale('es'); // change locale
        $manager->persist($fix3);

        $manager->flush();
    }
    
    public function getOrder()
    {
        return 1; // the order in which fixtures will be loaded
    }
}