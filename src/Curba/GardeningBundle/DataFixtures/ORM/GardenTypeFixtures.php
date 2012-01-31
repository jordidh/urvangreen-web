<?php

namespace Curba\GardeningBundle\DataFixtures\ORM;

use Doctrine\Common\DataFixtures\AbstractFixture;
use Doctrine\Common\DataFixtures\OrderedFixtureInterface;
use Curba\GardeningBundle\Entity\GardenType;

class GardenTypeFixtures extends AbstractFixture implements OrderedFixtureInterface
{
    public function load($manager)
    {
        $fix1 = new GardenType();
        $fix1->setName('Ground field');
        $fix1->setDescription('Ground field');
        $fix1->setTranslatableLocale('en');
        $manager->persist($fix1);

        $fix2 = new GardenType();
        $fix2->setName('Balcony');
        $fix2->setDescription('Balcony');
        $fix2->setTranslatableLocale('en');
        $manager->persist($fix2);

        $fix3 = new GardenType();
        $fix3->setName('Roof');
        $fix3->setDescription('Roof');
        $fix3->setTranslatableLocale('en');
        $manager->persist($fix3);

        $manager->flush();
        
        
        //Translate to ca
        $fix1->setName('Hort a terra');
        $fix1->setDescription('Hort a terra');
        $fix1->setTranslatableLocale('ca');
        $manager->persist($fix1);

        $fix2->setName('Balcó');
        $fix2->setDescription('Balcó');
        $fix2->setTranslatableLocale('ca');
        $manager->persist($fix2);

        $fix3->setName('Terrat');
        $fix3->setDescription('Terrat');
        $fix3->setTranslatableLocale('ca');
        $manager->persist($fix3);

        $manager->flush();
        
        
        //Translate to es
        $fix1->setName('Huerto a tierra');
        $fix1->setDescription('Huerto a tierra');
        $fix1->setTranslatableLocale('es');
        $manager->persist($fix1);

        $fix2->setName('Balcón');
        $fix2->setDescription('Balcón');
        $fix2->setTranslatableLocale('es');
        $manager->persist($fix2);

        $fix3->setName('Terraza');
        $fix3->setDescription('Terraza');
        $fix3->setTranslatableLocale('es');
        $manager->persist($fix3);

        $manager->flush();

    }
    
    public function getOrder()
    {
        return 1; // the order in which fixtures will be loaded
    }
}