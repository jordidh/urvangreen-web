<?php

namespace Curba\GardeningBundle\DataFixtures\ORM;

use Doctrine\Common\DataFixtures\AbstractFixture;
use Doctrine\Common\DataFixtures\OrderedFixtureInterface;
use Curba\GardeningBundle\Entity\PestType;

class PestTypeFixtures extends AbstractFixture implements OrderedFixtureInterface
{
    public function load($manager)
    {

//(1,'Insectes','Insectes','ca','insectes'),(1,'Insects','?','en','insects'),(1,'Insectos','?','es','insectos'),
        $fix1 = new PestType();
        $fix1->setName('Insects');
        $fix1->setDescription('Insects');
        $fix1->setScientificName('Insects');
        $fix1->setTranslatableLocale('en');
        $manager->persist($fix1);

//(2,'Fongs','Fongs','ca','fongs'),(2,'Fungi','?','en','fungi'),(2,'Hongos','?','es','hongos'),
        $fix2 = new PestType();
        $fix2->setName('Fungi');
        $fix2->setDescription('Fungi');
        $fix2->setScientificName('Fungi');
        $fix2->setTranslatableLocale('en');
        $manager->persist($fix2);

//(3,'Acars','Acars','ca','acars'),(3,'Acarus','?','en','acarus'),(3,'Acaros','?','es','acaros'),
        $fix3 = new PestType();
        $fix3->setName('Acarus');
        $fix3->setDescription('Acarus');
        $fix3->setScientificName('Acarus');
        $fix3->setTranslatableLocale('en');
        $manager->persist($fix3);

//(4,'Bacteris','Bacteris','ca','bacteris'),(4,'Bacteria','?','en','bacteria'),(4,'Bacterias','?','es','bacterias'),
        $fix4 = new PestType();
        $fix4->setName('Bacteria');
        $fix4->setDescription('Bacteria');
        $fix4->setScientificName('Bacteria');
        $fix4->setTranslatableLocale('en');
        $manager->persist($fix4);

//(5,'Altres','Altres','ca','altres'),(5,'Other','?','en','other'),(5,'Otros','?','es','otros');
        $fix5 = new PestType();
        $fix5->setName('Other');
        $fix5->setDescription('Other');
        $fix5->setScientificName('Other');
        $fix5->setTranslatableLocale('en');
        $manager->persist($fix5);

        $manager->flush();

        
        //Reference to make a relation with StationFixtures
        $this->addReference('pest-type-insects', $fix1);
        $this->addReference('pest-type-fungi', $fix2);
        $this->addReference('pest-type-acarus', $fix3);
        $this->addReference('pest-type-bacteria', $fix4);
        $this->addReference('pest-type-other', $fix5);
    }

    public function getOrder()
    {
        return 1; // the order in which fixtures will be loaded
    }
}