<?php

namespace Curba\GardeningBundle\DataFixtures\ORM;

use Doctrine\Common\DataFixtures\AbstractFixture;
use Doctrine\Common\DataFixtures\OrderedFixtureInterface;
use Curba\GardeningBundle\Entity\ClimateType;

class ClimateTypeFixtures extends AbstractFixture implements OrderedFixtureInterface
{
    public function load($manager)
    {
        $fix1 = new ClimateType();
        $fix1->setName('Warm');
        $fix1->setDescription('Warm');
        $fix1->setTranslatableLocale('en');
        $manager->persist($fix1);

        $fix2 = new ClimateType();
        $fix2->setName('Temperate');
        $fix2->setDescription('Temperate');
        $fix2->setTranslatableLocale('en');
        $manager->persist($fix2);

        $fix3 = new ClimateType();
        $fix3->setName('Cold');
        $fix3->setDescription('Cold');
        $fix3->setTranslatableLocale('en');
        $manager->persist($fix3);

        $manager->flush();
        
        //Reference to make a relation with StationFixtures
        $this->addReference('climate-type-1', $fix1);
        $this->addReference('climate-type-2', $fix2);
        $this->addReference('climate-type-3', $fix3);
        
        // translate to ca
        $fix1->setName('Càlid');
        $fix1->setDescription('Càlid');
        $fix1->setTranslatableLocale('ca'); // change locale
        $manager->persist($fix1);
        
        $fix2->setName('Temperat');
        $fix2->setDescription('Temperat');
        $fix2->setTranslatableLocale('ca'); // change locale
        $manager->persist($fix2);

        $fix3->setName('Fred');
        $fix3->setDescription('Fred');
        $fix3->setTranslatableLocale('ca'); // change locale
        $manager->persist($fix3);

        $manager->flush();
    }
    
    public function getOrder()
    {
        return 1; // the order in which fixtures will be loaded
    }
}