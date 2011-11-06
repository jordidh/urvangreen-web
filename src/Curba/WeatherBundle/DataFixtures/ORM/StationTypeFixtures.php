<?php

namespace Curba\WeatherBundle\DataFixtures\ORM;

use Doctrine\Common\DataFixtures\AbstractFixture;
use Doctrine\Common\DataFixtures\OrderedFixtureInterface;
use Curba\WeatherBundle\Entity\StationType;

class StationTypeFixtures extends AbstractFixture implements OrderedFixtureInterface
{
    public function load($manager)
    {
        $davis = new StationType();
        $davis->setName('Davis station');
        $davis->setDescription('Davis instruments station type');
        $davis->setTranslatableLocale('en');
        $oregon = new StationType();
        $oregon->setName('Oregon station');
        $oregon->setDescription('Oregon scientific station type');
        $oregon->setTranslatableLocale('en');
        $manager->persist($davis);
        $manager->persist($oregon);
        $manager->flush();

        // first load the stationtype
        $stationType1Ca = $manager->find('Curba\WeatherBundle\Entity\StationType', $davis->getId());
        $stationType1Ca->setName('Estació Davis');
        $stationType1Ca->setDescription('Estació de tipus Davis Instruments');
        $stationType1Ca->setTranslatableLocale('ca');
        $manager->persist($stationType1Ca);
        $manager->flush();
        
        //Reference to make a relation with StationFixtures
        $this->addReference('davis-station', $davis);
        $this->addReference('oregon-station', $oregon);
    }
    
    public function getOrder()
    {
        return 1; // the order in which fixtures will be loaded
    }
}