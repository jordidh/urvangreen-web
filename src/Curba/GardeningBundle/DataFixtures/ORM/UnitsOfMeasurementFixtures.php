<?php

namespace Curba\GardeningBundle\DataFixtures\ORM;

use Doctrine\Common\DataFixtures\AbstractFixture;
use Doctrine\Common\DataFixtures\OrderedFixtureInterface;
use Curba\GardeningBundle\Entity\UnitsOfMeasurement;

class UnitsOfMeasurementFixtures extends AbstractFixture implements OrderedFixtureInterface
{
    public function load($manager)
    {
        $fix1 = new UnitsOfMeasurement();
        $fix1->setName('kg');
        $fix1->setDescription('Kilogram');
        $fix1->setUnitsOfMeasurementType($this->getReference('unit-type-mass'));
        $fix1->setTranslatableLocale('en');
        $manager->persist($fix1);

        $fix2 = new UnitsOfMeasurement();
        $fix2->setName('m');
        $fix2->setDescription('metre');
        $fix2->setUnitsOfMeasurementType($this->getReference('unit-type-length'));
        $fix2->setTranslatableLocale('en');
        $manager->persist($fix2);

        $fix3 = new UnitsOfMeasurement();
        $fix3->setName('l');
        $fix3->setDescription('litre');
        $fix3->setUnitsOfMeasurementType($this->getReference('unit-type-volume'));
        $fix3->setTranslatableLocale('en');
        $manager->persist($fix3);

        $fix4 = new UnitsOfMeasurement();
        $fix4->setName('C');
        $fix4->setDescription('Celcius');
        $fix4->setUnitsOfMeasurementType($this->getReference('unit-type-temperature'));
        $fix4->setTranslatableLocale('en');
        $manager->persist($fix4);

        $fix5 = new UnitsOfMeasurement();
        $fix5->setName('K');
        $fix5->setDescription('Kelvin');
        $fix5->setUnitsOfMeasurementType($this->getReference('unit-type-temperature'));
        $fix5->setTranslatableLocale('en');
        $manager->persist($fix5);

        $fix6 = new UnitsOfMeasurement();
        $fix6->setName('mBa');
        $fix6->setDescription('Milibars');
        $fix6->setUnitsOfMeasurementType($this->getReference('unit-type-pression'));
        $fix6->setTranslatableLocale('en');
        $manager->persist($fix6);

        $fix7 = new UnitsOfMeasurement();
        $fix7->setName('Pa');
        $fix7->setDescription('Pascal');
        $fix7->setUnitsOfMeasurementType($this->getReference('unit-type-pression'));
        $fix7->setTranslatableLocale('en');
        $manager->persist($fix7);
        
        $fix8 = new UnitsOfMeasurement();
        $fix8->setName('Un');
        $fix8->setDescription('Unit');
        $fix8->setUnitsOfMeasurementType($this->getReference('unit-type-unit'));
        $fix8->setTranslatableLocale('en');
        $manager->persist($fix8);

        $manager->flush();


        //Translate to ca
        $fix1->setName('Kg');
        $fix1->setDescription('Kilogram');
        $fix1->setTranslatableLocale('ca');
        $manager->persist($fix1);

        $fix2->setName('m');
        $fix2->setDescription('Metre');
        $fix2->setTranslatableLocale('ca');
        $manager->persist($fix2);

        $fix3->setName('l');
        $fix3->setDescription('Litre');
        $fix3->setTranslatableLocale('ca');
        $manager->persist($fix3);

        $fix4->setName('C');
        $fix4->setDescription('Celsius');
        $fix4->setTranslatableLocale('ca');
        $manager->persist($fix4);

        $fix5->setName('K');
        $fix5->setDescription('Kelvin');
        $fix5->setTranslatableLocale('ca');
        $manager->persist($fix5);

        $fix6->setName('mBa');
        $fix6->setDescription('Milibars');
        $fix6->setTranslatableLocale('ca');
        $manager->persist($fix6);

        $fix7->setName('Pa');
        $fix7->setDescription('Pascals');
        $fix7->setTranslatableLocale('ca');
        $manager->persist($fix7);
        
        $fix8->setName('Un');
        $fix8->setDescription('Unitat');
        $fix8->setTranslatableLocale('ca');
        $manager->persist($fix8);

        $manager->flush();


        //Translate to es
        $fix1->setName('Kg');
        $fix1->setDescription('Kilogramo');
        $fix1->setTranslatableLocale('es');
        $manager->persist($fix1);

        $fix2->setName('m');
        $fix2->setDescription('Metro');
        $fix2->setTranslatableLocale('es');
        $manager->persist($fix2);

        $fix3->setName('l');
        $fix3->setDescription('Litro');
        $fix3->setTranslatableLocale('es');
        $manager->persist($fix3);

        $fix4->setName('C');
        $fix4->setDescription('Celsius');
        $fix4->setTranslatableLocale('es');
        $manager->persist($fix4);

        $fix5->setName('K');
        $fix5->setDescription('Kelvin');
        $fix5->setTranslatableLocale('es');
        $manager->persist($fix5);

        $fix6->setName('mBa');
        $fix6->setDescription('Milibars');
        $fix6->setTranslatableLocale('es');
        $manager->persist($fix6);

        $fix7->setName('Pa');
        $fix7->setDescription('Pascals');
        $fix7->setTranslatableLocale('es');
        $manager->persist($fix7);

        $fix8->setName('Un');
        $fix8->setDescription('Unidad');
        $fix8->setTranslatableLocale('ca');
        $manager->persist($fix8);

        $manager->flush();

        
        //Reference to make a relation with StationFixtures
        $this->addReference('unit-1', $fix1);
        $this->addReference('unit-2', $fix2);
        $this->addReference('unit-3', $fix3);
        $this->addReference('unit-4', $fix4);
        $this->addReference('unit-5', $fix5);
        $this->addReference('unit-6', $fix6);
        $this->addReference('unit-7', $fix7);
        $this->addReference('unit-8', $fix8);
        //$this->addReference('action-type-4', $fix4);
    }
    
    public function getOrder()
    {
        return 2; // the order in which fixtures will be loaded
    }
}