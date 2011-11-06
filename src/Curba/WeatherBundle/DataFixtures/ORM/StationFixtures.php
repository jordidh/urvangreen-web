<?php

namespace Curba\WeatherBundle\DataFixtures\ORM;

use Doctrine\Common\DataFixtures\AbstractFixture;
use Doctrine\Common\DataFixtures\OrderedFixtureInterface;
use Curba\WeatherBundle\Entity\Station;

class StationFixtures extends AbstractFixture implements OrderedFixtureInterface
{
    public function load($manager)
    {
        /*
        $station = new Station();
        $station->setStationType($manager->merge($this->getReference('davis-station')));
        $station->setName('My station');
        $station->setDescription('My default station');
        $station->setBarCorrection(0);
        $station->setLatitude(0);
        $station->setLongitude(0);
        $manager->persist($station);
        $manager->flush();
        */
    }
    
    public function getOrder()
    {
        return 2; // the order in which fixtures will be loaded
    }
}