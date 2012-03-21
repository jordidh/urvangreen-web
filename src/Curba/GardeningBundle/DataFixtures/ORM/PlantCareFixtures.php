<?php

namespace Curba\GardeningBundle\DataFixtures\ORM;

use Doctrine\Common\DataFixtures\AbstractFixture;
use Doctrine\Common\DataFixtures\OrderedFixtureInterface;
use Curba\GardeningBundle\Entity\PlantCare;

class PlantCareFixtures extends AbstractFixture implements OrderedFixtureInterface
{
    public function load($manager)
    {
        //Tomatoe plant cares
        $fix1 = new PlantCare();
        $fix1->setName('Begin harvest');
        $fix1->setDescription('Begin the collection of tomatoes');
        $fix1->addPlants($manager->merge($this->getReference('plant-16')));
        $fix1->setAlertType($manager->merge($this->getReference('alert-type-1')));
        $fix1->setCropPeriodType($manager->merge($this->getReference('crop_period_type-6')));
        $fix1->setDaysFromBegining(60);
        $fix1->setDurationDays(60);
        $fix1->setRegion($manager->merge($this->getReference('region-1')));
        $fix1->setRepeatEachHours(0);
        $fix1->setRepeatMaxTimes(0);
        $fix1->setTranslatableLocale('en');
        $manager->persist($fix1);

        $manager->flush();
        
        
        //Translate to ca
        $fix1->setName('Inici de la collita');
        $fix1->setDescription('Inici de la collita de tomàquets');
        $fix1->setTranslatableLocale('ca'); // change locale
        $manager->persist($fix1);
		
        $manager->flush();

        
        //Translate to es
        $fix1->setName('Inicio de la cosecha');
        $fix1->setDescription('Inicio de la cosecha de tomàtes');
        $fix1->setTranslatableLocale('es');
        $manager->persist($fix1);
		
        $manager->flush();
    }

    public function getOrder()
    {
        return 4; // the order in which fixtures will be loaded
    }
}