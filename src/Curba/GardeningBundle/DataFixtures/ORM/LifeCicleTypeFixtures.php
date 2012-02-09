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
        $fix3->setName('Pluriannual');
        $fix3->setDescription('Pluriannual');
        $fix3->setTranslatableLocale('en');
        $manager->persist($fix3);

        /*
        $fix4 = new LifeCicleType();
        $fix4->setName('Undefined');
        $fix4->setDescription('Undefined');
        $fix4->setTranslatableLocale('en');
        $manager->persist($fix4);
        */
        $manager->flush();

        
        //Translate to ca
        $fix1->setName('Anual');
        $fix1->setDescription('Anual');
        $fix1->setTranslatableLocale('ca');
        $manager->persist($fix1);

        $fix2->setName('Bianual');
        $fix2->setDescription('Bianual');
        $fix2->setTranslatableLocale('ca');
        $manager->persist($fix2);

        $fix3->setName('Plurianual');
        $fix3->setDescription('Plurianual');
        $fix3->setTranslatableLocale('ca');
        $manager->persist($fix3);

        /*
        $fix4->setName('Indefinit');
        $fix4->setDescription('Indefinit');
        $fix4->setTranslatableLocale('ca');
        $manager->persist($fix4);
         * 
         */

        $manager->flush();

        
        //Translate to es
        $fix1->setName('Anual');
        $fix1->setDescription('Anual');
        $fix1->setTranslatableLocale('es');
        $manager->persist($fix1);

        $fix2->setName('Bianual');
        $fix2->setDescription('Bianual');
        $fix2->setTranslatableLocale('es');
        $manager->persist($fix2);

        $fix3->setName('Plurianual');
        $fix3->setDescription('Plurianual');
        $fix3->setTranslatableLocale('es');
        $manager->persist($fix3);

        /*
        $fix4->setName('Indefinido');
        $fix4->setDescription('Indefinido');
        $fix4->setTranslatableLocale('es');
        $manager->persist($fix4);
         * 
         */

        $manager->flush();
        
        
        //Reference to make a relation with StationFixtures
        $this->addReference('life-cicle-type-1', $fix1);
        $this->addReference('life-cicle-type-2', $fix2);
        $this->addReference('life-cicle-type-3', $fix3);
        //$this->addReference('life-cicle-type-4', $fix4);
    }
    
    public function getOrder()
    {
        return 1; // the order in which fixtures will be loaded
    }
}