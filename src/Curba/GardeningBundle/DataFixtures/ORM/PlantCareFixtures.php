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
        $fixTomatoe01 = new PlantCare();
        $fixTomatoe01->setName('Begin harvest');
        $fixTomatoe01->setDescription('Begin the collection of tomatoes');
        $fixTomatoe01->addPlants($manager->merge($this->getReference('plant-16')));
        $fixTomatoe01->setAlertType($manager->merge($this->getReference('alert-type-1')));
        $fixTomatoe01->setCropPeriodType($manager->merge($this->getReference('crop_period_type-6')));
        $fixTomatoe01->setDaysFromBegining(60);
        $fixTomatoe01->setDurationDays(60);
        $fixTomatoe01->setRegion($manager->merge($this->getReference('region-1')));
        $fixTomatoe01->setRepeatEachHours(0);
        $fixTomatoe01->setRepeatMaxTimes(0);   //no repeat
        $fixTomatoe01->setTranslatableLocale('en');
        $manager->persist($fixTomatoe01);

        $fixTomatoe02 = new PlantCare();
        $fixTomatoe02->setName('Prune');
        $fixTomatoe02->setDescription('Prune the new plant heads to avoid more than one or two heads');
        $fixTomatoe02->addPlants($manager->merge($this->getReference('plant-16')));
        $fixTomatoe02->setAlertType($manager->merge($this->getReference('alert-type-3')));
        $fixTomatoe02->setCropPeriodType(null);
        $fixTomatoe02->setDaysFromBegining(40);
        $fixTomatoe02->setDurationDays(90);
        $fixTomatoe02->setRegion($manager->merge($this->getReference('region-1')));
        $fixTomatoe02->setRepeatEachHours(48);
        $fixTomatoe02->setRepeatMaxTimes(10000); //repeat for all plant live
        $fixTomatoe02->setTranslatableLocale('en');
        $manager->persist($fixTomatoe02);

        $fixTomatoe03 = new PlantCare();
        $fixTomatoe03->setName('Transplant');
        $fixTomatoe03->setDescription('Transplant from protected to open air');
        $fixTomatoe03->addPlants($manager->merge($this->getReference('plant-16')));
        $fixTomatoe03->setAlertType($manager->merge($this->getReference('alert-type-4')));
        $fixTomatoe03->setCropPeriodType($manager->merge($this->getReference('crop_period_type-4')));
        $fixTomatoe03->setDaysFromBegining(30);
        $fixTomatoe03->setDurationDays(0);
        $fixTomatoe03->setRegion($manager->merge($this->getReference('region-1')));
        $fixTomatoe03->setRepeatEachHours(0);
        $fixTomatoe03->setRepeatMaxTimes(0); //don't repeat
        $fixTomatoe03->setTranslatableLocale('en');
        $manager->persist($fixTomatoe03);

        
        $manager->flush();
        
        
        //Translate to ca
        $fixTomatoe01->setName('Inici de la collita');
        $fixTomatoe01->setDescription('Inici de la collita de tomàquets');
        $fixTomatoe01->setTranslatableLocale('ca'); // change locale
        $manager->persist($fixTomatoe01);
		
        $fixTomatoe02->setName('Poda');
        $fixTomatoe02->setDescription('Poda dels nous llucs de la planta per deixar-ne només un o dos');
        $fixTomatoe02->setTranslatableLocale('ca'); // change locale
        $manager->persist($fixTomatoe02);

        $fixTomatoe03->setName('Transplantament');
        $fixTomatoe03->setDescription('Transplantament');
        $fixTomatoe03->setTranslatableLocale('ca'); // change locale
        $manager->persist($fixTomatoe03);

        $manager->flush();

        
        //Translate to es
        $fixTomatoe01->setName('Inicio de la cosecha');
        $fixTomatoe01->setDescription('Inicio de la cosecha de tomàtes');
        $fixTomatoe01->setTranslatableLocale('es');
        $manager->persist($fixTomatoe01);
		
        $fixTomatoe02->setName('Poda');
        $fixTomatoe02->setDescription('Poda de los nuevos brotes para dejar sólo uno o dos');
        $fixTomatoe02->setTranslatableLocale('es'); // change locale
        $manager->persist($fixTomatoe02);

        $fixTomatoe03->setName('Transplantamiento');
        $fixTomatoe03->setDescription('Transplantamiento');
        $fixTomatoe03->setTranslatableLocale('es'); // change locale
        $manager->persist($fixTomatoe03);

        $manager->flush();
    }

    public function getOrder()
    {
        return 4; // the order in which fixtures will be loaded
    }
}