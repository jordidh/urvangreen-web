<?php

namespace Curba\GardeningBundle\DataFixtures\ORM;

use Doctrine\Common\DataFixtures\AbstractFixture;
use Doctrine\Common\DataFixtures\OrderedFixtureInterface;
use Curba\GardeningBundle\Entity\UnitsOfMeasurementType;

class UnitsOfMeasurementTypeFixtures extends AbstractFixture implements OrderedFixtureInterface
{
    public function load($manager)
    {
        $fix1 = new UnitsOfMeasurementType();
        $fix1->setName('length');
        $fix1->setDescription('length unit');
        $fix1->setTranslatableLocale('en');
        $manager->persist($fix1);

        $fix2 = new UnitsOfMeasurementType();
        $fix2->setName('mass');
        $fix2->setDescription('mass unit');
        $fix2->setTranslatableLocale('en');
        $manager->persist($fix2);

        $fix3 = new UnitsOfMeasurementType();
        $fix3->setName('volume');
        $fix3->setDescription('volume unit');
        $fix3->setTranslatableLocale('en');
        $manager->persist($fix3);

        $fix4 = new UnitsOfMeasurementType();
        $fix4->setName('temperature');
        $fix4->setDescription('temperature unit');
        $fix4->setTranslatableLocale('en');
        $manager->persist($fix4);

        $fix5 = new UnitsOfMeasurementType();
        $fix5->setName('pression');
        $fix5->setDescription('pression unit');
        $fix5->setTranslatableLocale('en');
        $manager->persist($fix5);

        $manager->flush();


        //Translate to ca
        $fix1->setName('longitud');
        $fix1->setDescription('unitats de longitud');
        $fix1->setTranslatableLocale('ca');
        $manager->persist($fix1);

        $fix2->setName('massa');
        $fix2->setDescription('unitats de massa');
        $fix2->setTranslatableLocale('ca');
        $manager->persist($fix2);

        $fix3->setName('volum');
        $fix3->setDescription('unitats de volum');
        $fix3->setTranslatableLocale('ca');
        $manager->persist($fix3);

        $fix4->setName('temperatura');
        $fix4->setDescription('unitats de temperatura');
        $fix4->setTranslatableLocale('ca');
        $manager->persist($fix4);

        $fix5->setName('pressió');
        $fix5->setDescription('unitats de pressió');
        $fix5->setTranslatableLocale('ca');
        $manager->persist($fix5);

        $manager->flush();


        //Translate to es
        $fix1->setName('longitud');
        $fix1->setDescription('unidades de longitud');
        $fix1->setTranslatableLocale('es');
        $manager->persist($fix1);

        $fix2->setName('masa');
        $fix2->setDescription('unidades de masa');
        $fix2->setTranslatableLocale('es');
        $manager->persist($fix2);

        $fix3->setName('volumen');
        $fix3->setDescription('unidades de volumen');
        $fix3->setTranslatableLocale('es');
        $manager->persist($fix3);

        $fix4->setName('temperatura');
        $fix4->setDescription('unidades de temperatura');
        $fix4->setTranslatableLocale('es');
        $manager->persist($fix4);

        $fix5->setName('presión');
        $fix5->setDescription('unidades de presión');
        $fix5->setTranslatableLocale('es');
        $manager->persist($fix5);

        $manager->flush();

        $this->addReference('unit-type-length', $fix1);
        $this->addReference('unit-type-mass', $fix2);
        $this->addReference('unit-type-volume', $fix3);
        $this->addReference('unit-type-temperature', $fix4);
        $this->addReference('unit-type-pression', $fix5);
    }
    
    public function getOrder()
    {
        return 1; // the order in which fixtures will be loaded
    }
}