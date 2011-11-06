<?php

namespace Curba\GardeningBundle\DataFixtures\ORM;

use Doctrine\Common\DataFixtures\AbstractFixture;
use Doctrine\Common\DataFixtures\OrderedFixtureInterface;
use Curba\GardeningBundle\Entity\FertilizerType;

class FertilizerTypeFixtures extends AbstractFixture implements OrderedFixtureInterface
{
    public function load($manager)
    {
        $fertilizerType1 = new FertilizerType();
        $fertilizerType1->setName('Less exigent');
        $fertilizerType1->setDescription('Less exigent');
        $fertilizerType1->setTranslatableLocale('en');
        $manager->persist($fertilizerType1);

        $fertilizerType2 = new FertilizerType();
        $fertilizerType2->setName('Normal');
        $fertilizerType2->setDescription('Normal');
        $fertilizerType2->setTranslatableLocale('en');
        $manager->persist($fertilizerType2);

        $fertilizerType3 = new FertilizerType();
        $fertilizerType3->setName('Exigent');
        $fertilizerType3->setDescription('Exigent');
        $fertilizerType3->setTranslatableLocale('en');
        $manager->persist($fertilizerType3);

        $manager->flush();

        // first load the article
        //$fertilizerType1Ca = $manager->find('Curba\GardeningBundle\Entity\FertilizerType', $fertilizerType1->getId());
        //$fertilizerType1Ca->setName('Poc exigent');
        //$fertilizerType1Ca->setDescription('Poc exigent');
        //$fertilizerType1Ca->setTranslatableLocale('ca');
        //$manager->persist($fertilizerType1Ca);
        //$manager->flush();

        //Reference to make a relation with StationFixtures
        $this->addReference('fertilizer-type-1', $fertilizerType1);
        $this->addReference('fertilizer-type-2', $fertilizerType2);
        $this->addReference('fertilizer-type-3', $fertilizerType3);
        
        //Translate to ca
        $fertilizerType1->setName('Poc exigent');
        $fertilizerType1->setDescription('Poc exigent');
        $fertilizerType1->setTranslatableLocale('ca');
        $manager->persist($fertilizerType1);

        $fertilizerType2->setName('Normal');
        $fertilizerType2->setDescription('Normal');
        $fertilizerType2->setTranslatableLocale('ca');
        $manager->persist($fertilizerType2);

        $fertilizerType3->setName('Exigent');
        $fertilizerType3->setDescription('Exigent');
        $fertilizerType3->setTranslatableLocale('ca');
        $manager->persist($fertilizerType3);

        $manager->flush();
    }
    
    public function getOrder()
    {
        return 1; // the order in which fixtures will be loaded
    }
}