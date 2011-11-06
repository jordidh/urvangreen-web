<?php

namespace Curba\GardeningBundle\DataFixtures\ORM;

use Doctrine\Common\DataFixtures\AbstractFixture;
use Doctrine\Common\DataFixtures\OrderedFixtureInterface;
use Curba\GardeningBundle\Entity\CropPeriodType;

class CropPeriodTypeFixtures extends AbstractFixture implements OrderedFixtureInterface
{
    public function load($manager)
    {
        $fix1 = new CropPeriodType();
        $fix1->setName('Protected crop');
        $fix1->setDescription('Protected crop');
        $fix1->setTranslatableLocale('en');
        $manager->persist($fix1);

        $fix2 = new CropPeriodType();
        $fix2->setName('Open air crop');
        $fix2->setDescription('Open air crop');
        $fix2->setTranslatableLocale('en');
        $manager->persist($fix2);

        $fix3 = new CropPeriodType();
        $fix3->setName('Brotus');
        $fix3->setDescription('Brotus');
        $fix3->setTranslatableLocale('en');
        $manager->persist($fix3);

        $fix4 = new CropPeriodType();
        $fix4->setName('Transplant');
        $fix4->setDescription('Transplant');
        $fix4->setTranslatableLocale('en');
        $manager->persist($fix4);

        $fix5 = new CropPeriodType();
        $fix5->setName('Division');
        $fix5->setDescription('Diision');
        $fix5->setTranslatableLocale('en');
        $manager->persist($fix5);

        $fix6 = new CropPeriodType();
        $fix6->setName('Green collect');
        $fix6->setDescription('Green collect');
        $fix6->setTranslatableLocale('en');
        $manager->persist($fix6);

        $fix7 = new CropPeriodType();
        $fix7->setName('Yellow collect');
        $fix7->setDescription('Yellow collect');
        $fix7->setTranslatableLocale('en');
        $manager->persist($fix7);

        $manager->flush();
    }
    
    public function getOrder()
    {
        return 1; // the order in which fixtures will be loaded
    }
}