<?php

namespace Curba\GardeningBundle\DataFixtures\ORM;

use Doctrine\Common\DataFixtures\AbstractFixture;
use Doctrine\Common\DataFixtures\OrderedFixtureInterface;
use Curba\GardeningBundle\Entity\PestType;

class PestTypeFixtures extends AbstractFixture implements OrderedFixtureInterface
{
    public function load($manager)
    {

        $fix1 = new PestType();
        $fix1->setName('Insects');
        $fix1->setDescription('Insects');
        $fix1->setScientificName('Insects');
        $fix1->setTranslatableLocale('en');
        $manager->persist($fix1);

        $fix2 = new PestType();
        $fix2->setName('Fungi');
        $fix2->setDescription('Fungi');
        $fix2->setScientificName('Fungi');
        $fix2->setTranslatableLocale('en');
        $manager->persist($fix2);

        $fix3 = new PestType();
        $fix3->setName('Acarus');
        $fix3->setDescription('Acarus');
        $fix3->setScientificName('Acarus');
        $fix3->setTranslatableLocale('en');
        $manager->persist($fix3);

        $fix4 = new PestType();
        $fix4->setName('Bacteria');
        $fix4->setDescription('Bacteria');
        $fix4->setScientificName('Bacteria');
        $fix4->setTranslatableLocale('en');
        $manager->persist($fix4);

        $fix5 = new PestType();
        $fix5->setName('Other');
        $fix5->setDescription('Other');
        $fix5->setScientificName('Other');
        $fix5->setTranslatableLocale('en');
        $manager->persist($fix5);

        $manager->flush();
        
        

        //Translate to ca
        $fix1->setName('Insectes');
        $fix1->setDescription('Insectes');
        $fix1->setTranslatableLocale('ca');
        $manager->persist($fix1);

        $fix2->setName('Fongs');
        $fix2->setDescription('Fongs');
        $fix2->setTranslatableLocale('ca');
        $manager->persist($fix2);

        $fix3->setName('Àcars');
        $fix3->setDescription('Àcars');
        $fix3->setTranslatableLocale('ca');
        $manager->persist($fix3);

        $fix4->setName('Bacteris');
        $fix4->setDescription('Bacteris');
        $fix4->setTranslatableLocale('ca');
        $manager->persist($fix4);

        $fix5->setName('Altres');
        $fix5->setDescription('Altres');
        $fix5->setTranslatableLocale('ca');
        $manager->persist($fix5);

        $manager->flush();
 
        
        //Translate to es
        $fix1->setName('Insectos');
        $fix1->setDescription('Insectos');
        $fix1->setTranslatableLocale('es');
        $manager->persist($fix1);

        $fix2->setName('Hongos');
        $fix2->setDescription('Hongos');
        $fix2->setTranslatableLocale('es');
        $manager->persist($fix2);

        $fix3->setName('Acaros');
        $fix3->setDescription('Acaros');
        $fix3->setTranslatableLocale('es');
        $manager->persist($fix3);

        $fix4->setName('Bacterias');
        $fix4->setDescription('Bacterias');
        $fix4->setTranslatableLocale('es');
        $manager->persist($fix4);

        $fix5->setName('Otros');
        $fix5->setDescription('Otros');
        $fix5->setTranslatableLocale('es');
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