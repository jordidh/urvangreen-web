<?php

namespace Curba\GardeningBundle\DataFixtures\ORM;

use Doctrine\Common\DataFixtures\AbstractFixture;
use Doctrine\Common\DataFixtures\OrderedFixtureInterface;
use Curba\GardeningBundle\Entity\AlertType;

class AlertTypeFixtures extends AbstractFixture implements OrderedFixtureInterface
{
    public function load($manager)
    {
        $fix1 = new AlertType();
        $fix1->setName('Start crop period');
        $fix1->setDescription('Start crop period');
        $fix1->setTranslatableLocale('en');
        $manager->persist($fix1);

        $fix2 = new AlertType();
        $fix2->setName('Watering');
        $fix2->setDescription('Watering');
        $fix2->setTranslatableLocale('en');
        $manager->persist($fix2);

        $fix3 = new AlertType();
        $fix3->setName('Prune');
        $fix3->setDescription('Prune');
        $fix3->setTranslatableLocale('en');
        $manager->persist($fix3);

        $fix4 = new AlertType();
        $fix4->setName('Transplant');
        $fix4->setDescription('Transplant');
        $fix4->setTranslatableLocale('en');
        $manager->persist($fix4);

        $manager->flush();


        //Translate to ca
        $fix1->setName('Inici de període de cultiu');
        $fix1->setDescription('Inici de període de cultiu');
        $fix1->setTranslatableLocale('ca');
        $manager->persist($fix1);

        $fix2->setName('Rega');
        $fix2->setDescription('Rega');
        $fix2->setTranslatableLocale('ca');
        $manager->persist($fix2);

        $fix3->setName('Poda');
        $fix3->setDescription('Poda');
        $fix3->setTranslatableLocale('ca');
        $manager->persist($fix3);

        $fix4->setName('Transplantament');
        $fix4->setDescription('Transplantament');
        $fix4->setTranslatableLocale('ca');
        $manager->persist($fix4);

        $manager->flush();


        //Translate to es
        $fix1->setName('Inicio de período de cultivo');
        $fix1->setDescription('Inicio de período de cultivo');
        $fix1->setTranslatableLocale('es');
        $manager->persist($fix1);

        $fix2->setName('Regar');
        $fix2->setDescription('Regar');
        $fix2->setTranslatableLocale('es');
        $manager->persist($fix2);

        $fix3->setName('Podar');
        $fix3->setDescription('Podar');
        $fix3->setTranslatableLocale('es');
        $manager->persist($fix3);

        $fix4->setName('Transplantamiento');
        $fix4->setDescription('Transplantamiento');
        $fix4->setTranslatableLocale('es');
        $manager->persist($fix4);

        $manager->flush();

        
        //Reference to make a relation with StationFixtures
        $this->addReference('alert-type-1', $fix1);
        $this->addReference('alert-type-2', $fix2);
        $this->addReference('alert-type-3', $fix3);
        $this->addReference('alert-type-4', $fix4);
    }
    
    public function getOrder()
    {
        return 1; // the order in which fixtures will be loaded
    }
}