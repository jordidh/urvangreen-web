<?php

namespace Curba\GardeningBundle\DataFixtures\ORM;

use Doctrine\Common\DataFixtures\AbstractFixture;
use Doctrine\Common\DataFixtures\OrderedFixtureInterface;
use Curba\GardeningBundle\Entity\Plant;

class PlantFixtures extends AbstractFixture implements OrderedFixtureInterface
{
    public function load($manager)
    {
        //$repository = $manager->getRepository('Gedmo\\Translatable\\Entity\\Translation');
        
        //(1,'All','','ca','all'),
        //(1,'Garlic','','en','garlic'),
        //(1,'Ajo','','es','ajo'),
        //(1,'Allium sativum',2,3,200,200,3,2,2,1,1,2,0,0,0,0,0,0,0,2,2,'0000-00-00 00:00:00','2010-12-12 18:55:52')
        $fix1 = new Plant();
        $fix1->setCode('garlic');
        $fix1->setName('Garlic');
        $fix1->setDescription('Garlic');
        $fix1->setScientificName('Allium sativum');
        $fix1->setPlantFamily($manager->merge($this->getReference('plant-family-2')));
        $fix1->setProductivity(3);
        $fix1->setWidthSpacing(250);
        $fix1->setHeightSpacing(150);
        $fix1->setSoilVolume(3);
        $fix1->setSoilType($manager->merge($this->getReference('soil-type-2')));
        $fix1->setClimateType($manager->merge($this->getReference('climate-type-2')));
        $fix1->setIrrigationType($manager->merge($this->getReference('irrigation-type-1')));
        $fix1->setFertilizerType($manager->merge($this->getReference('fertilizer-type-1')));
        $fix1->setLifeCicleType($manager->merge($this->getReference('life-cicle-type-2')));
        $fix1->setRootDepth(250);
        $fix1->setPlantHeight(400);
        $fix1->setSeedDepth(60);
        $fix1->setPhMinimum(5.5);
        $fix1->setPhMaximum(7);
        $fix1->setTemperatureMinimum(5);
        $fix1->setTemperatureMaximum(30);
        $fix1->setFrostResistanceType($manager->merge($this->getReference('frost-resistance-type-2')));
        $fix1->setSalinityToleranceType($manager->merge($this->getReference('salinity-tolerance-type-2')));
        $fix1->setTranslatableLocale('en');
        $manager->persist($fix1);

        //(2,'Petroselinum sativum',1,1,100,50,5,2,2,2,2,2,0,0,0,0,0,0,0,1,2,'2010-10-31 18:36:10','2010-11-21 18:28:18'),
        //(2,'Julivert','','ca','julivert'),
        //(2,'Parsley','','en','parsley'),
        //(2,'Perejil','','es','perejil'),
        $fix2 = new Plant();
        $fix2->setCode('parsley');
        $fix2->setName('Parsley');
        $fix2->setDescription('Parsley');
        $fix2->setScientificName('Petroselinum sativum');
        $fix2->setPlantFamily($manager->merge($this->getReference('plant-family-1')));
        $fix2->setProductivity(1);
        $fix2->setWidthSpacing(100);
        $fix2->setHeightSpacing(50);
        $fix2->setSoilVolume(5);
        $fix2->setSoilType($manager->merge($this->getReference('soil-type-2')));
        $fix2->setClimateType($manager->merge($this->getReference('climate-type-2')));
        $fix2->setIrrigationType($manager->merge($this->getReference('irrigation-type-3')));
        $fix2->setFertilizerType($manager->merge($this->getReference('fertilizer-type-2')));
        $fix2->setLifeCicleType($manager->merge($this->getReference('life-cicle-type-2')));
        $fix2->setRootDepth(0);
        $fix2->setPlantHeight(500);
        $fix2->setSeedDepth(10);
        $fix2->setPhMinimum(5.5);
        $fix2->setPhMaximum(6.8);
        $fix2->setTemperatureMinimum(10);
        $fix2->setTemperatureMaximum(25);
        $fix2->setFrostResistanceType($manager->merge($this->getReference('frost-resistance-type-1')));
        $fix2->setSalinityToleranceType($manager->merge($this->getReference('salinity-tolerance-type-2')));
        $fix2->setTranslatableLocale('en');
        $manager->persist($fix2);

        //(3,'Allium porrum',2,6,300,100,4,2,2,2,2,2,0,0,0,0,0,0,0,2,2,'2010-10-31 18:49:59','2010-11-21 18:31:39'),
        //(3,'Porro','','ca','porro'),
        //(3,'Leek','','en','leek'),
        //(3,'Puerro','','es','puerro'),
        $fix3 = new Plant();
        $fix3->setCode('leek');
        $fix3->setName('Leek');
        $fix3->setDescription('Leek');
        $fix3->setScientificName('Allium porrum');
        $fix3->setPlantFamily($manager->merge($this->getReference('plant-family-2')));
        $fix3->setProductivity(6);
        $fix3->setWidthSpacing(300);
        $fix3->setHeightSpacing(100);
        $fix3->setSoilVolume(4);
        $fix3->setSoilType($manager->merge($this->getReference('soil-type-3')));
        $fix3->setClimateType($manager->merge($this->getReference('climate-type-2')));
        $fix3->setIrrigationType($manager->merge($this->getReference('irrigation-type-3')));
        $fix3->setFertilizerType($manager->merge($this->getReference('fertilizer-type-2')));
        $fix3->setLifeCicleType($manager->merge($this->getReference('life-cicle-type-2')));
        $fix3->setRootDepth(250);
        $fix3->setPlantHeight(450);
        $fix3->setSeedDepth(10);
        $fix3->setPhMinimum(6);
        $fix3->setPhMaximum(7);
        $fix3->setTemperatureMinimum(13);
        $fix3->setTemperatureMaximum(25);
        $fix3->setFrostResistanceType($manager->merge($this->getReference('frost-resistance-type-3')));
        $fix3->setSalinityToleranceType($manager->merge($this->getReference('salinity-tolerance-type-2')));
        $fix3->setTranslatableLocale('en');
        $manager->persist($fix3);

        //(4,'Ocimum basilicum',3,3,100,100,5,3,1,1,2,1,0,0,0,0,0,0,0,1,2,'2010-11-20 19:33:11','2010-11-20 19:33:11'),
        //(4,'Alfàbrega','','ca','alfabrega'),
        //(4,'Basil','','en','basil'),
        //(4,'Albahaca','','es','albahaca'),
        $fix4 = new Plant();
        $fix4->setCode('basil');
        $fix4->setName('Basil');
        $fix4->setDescription('Basil');
        $fix4->setScientificName('Ocimum basilicum');
        $fix4->setPlantFamily($manager->merge($this->getReference('plant-family-3')));
        $fix4->setProductivity(3);
        $fix4->setWidthSpacing(250);
        $fix4->setHeightSpacing(250);
        $fix4->setSoilVolume(5);
        $fix4->setSoilType($manager->merge($this->getReference('soil-type-2')));
        $fix4->setClimateType($manager->merge($this->getReference('climate-type-2')));
        $fix4->setIrrigationType($manager->merge($this->getReference('irrigation-type-3')));
        $fix4->setFertilizerType($manager->merge($this->getReference('fertilizer-type-2')));
        $fix4->setLifeCicleType($manager->merge($this->getReference('life-cicle-type-1')));
        $fix4->setRootDepth(0);
        $fix4->setPlantHeight(400);
        $fix4->setSeedDepth(0);
        $fix4->setPhMinimum(5.5);
        $fix4->setPhMaximum(6.8);
        $fix4->setTemperatureMinimum(10);
        $fix4->setTemperatureMaximum(30);
        $fix4->setFrostResistanceType($manager->merge($this->getReference('frost-resistance-type-1')));
        $fix4->setSalinityToleranceType($manager->merge($this->getReference('salinity-tolerance-type-2')));
        $fix4->setTranslatableLocale('en');
        $manager->persist($fix4);

        //(5,'Solanum melongena',4,20,500,500,30,3,1,2,2,3,0,0,0,0,0,0,0,1,2,'2010-11-20 19:38:17','2010-11-20 19:38:17'),
        //(5,'Albergínia','','ca','alberginia'),
        //(5,'Eggplant','','en','eggplant'),
        //(5,'Berenjena','','es','berenjena'),
        $fix5 = new Plant();
        $fix5->setCode('eggplant');
        $fix5->setName('Eggplant');
        $fix5->setDescription('Eggplant');
        $fix5->setScientificName('Solanum melongena');
        $fix5->setPlantFamily($manager->merge($this->getReference('plant-family-4')));
        $fix5->setProductivity(20);
        $fix5->setWidthSpacing(600);
        $fix5->setHeightSpacing(300);
        $fix5->setSoilVolume(30);
        $fix5->setSoilType($manager->merge($this->getReference('soil-type-3')));
        $fix5->setClimateType($manager->merge($this->getReference('climate-type-1')));
        $fix5->setIrrigationType($manager->merge($this->getReference('irrigation-type-1')));
        $fix5->setFertilizerType($manager->merge($this->getReference('fertilizer-type-2')));
        $fix5->setLifeCicleType($manager->merge($this->getReference('life-cicle-type-3')));
        $fix5->setRootDepth(400);
        $fix5->setPlantHeight(800);
        $fix5->setSeedDepth(10);
        $fix5->setPhMinimum(5.5);
        $fix5->setPhMaximum(6.8);
        $fix5->setTemperatureMinimum(15);
        $fix5->setTemperatureMaximum(30);
        $fix5->setFrostResistanceType($manager->merge($this->getReference('frost-resistance-type-1')));
        $fix5->setSalinityToleranceType($manager->merge($this->getReference('salinity-tolerance-type-1')));
        $fix5->setTranslatableLocale('en');
        $manager->persist($fix5);

        //(6,'Ipomoea batatas',5,2,800,300,10,2,2,3,3,1,0,0,0,0,0,0,0,1,2,'2010-11-20 19:48:48','2010-11-20 19:48:48'),
        //(6,'Moniato','','ca','moniato'),
        //(6,'Ipomoea batatas','','en','ipomoea-batatas'),(
        //6,'Boniato','','es','boniato'),
        $fix6 = new Plant();
        $fix6->setCode('moniato');
        $fix6->setName('Ipomoea batatas');
        $fix6->setDescription('Ipomoea batatas');
        $fix6->setScientificName('Ipomoea batatas');
        $fix6->setPlantFamily($manager->merge($this->getReference('plant-family-5')));
        $fix6->setProductivity(2);
        $fix6->setWidthSpacing(800);
        $fix6->setHeightSpacing(300);
        $fix6->setSoilVolume(10);
        $fix6->setSoilType($manager->merge($this->getReference('soil-type-3')));
        $fix6->setClimateType($manager->merge($this->getReference('climate-type-2')));
        $fix6->setIrrigationType($manager->merge($this->getReference('irrigation-type-3')));
        $fix6->setFertilizerType($manager->merge($this->getReference('fertilizer-type-3')));
        $fix6->setLifeCicleType($manager->merge($this->getReference('life-cicle-type-3')));
        $fix6->setRootDepth(0);
        $fix6->setPlantHeight(200);
        $fix6->setSeedDepth(0);
        $fix6->setPhMinimum(4.5);
        $fix6->setPhMaximum(7.5);
        $fix6->setTemperatureMinimum(15);
        $fix6->setTemperatureMaximum(35);
        $fix6->setFrostResistanceType($manager->merge($this->getReference('frost-resistance-type-1')));
        $fix6->setSalinityToleranceType($manager->merge($this->getReference('salinity-tolerance-type-2')));
        $fix6->setTranslatableLocale('en');
        $manager->persist($fix6);
        
        //(7,'Cucurbita pepo',6,20,1000,600,40,3,1,3,3,3,0,0,0,0,0,0,0,1,2,'2010-11-20 20:00:33','2010-11-20 20:00:33'),
        //(7,'Carbassó','','ca','carbasso'),
        //(7,'Zucchini','','en','zucchini'),
        //(7,'Calabacín','','es','calabacin'),
        $fix7 = new Plant();
        $fix7->setCode('zucchini');
        $fix7->setName('Zucchini');
        $fix7->setDescription('Zucchini');
        $fix7->setScientificName('Cucurbita pepo');
        $fix7->setPlantFamily($manager->merge($this->getReference('plant-family-6')));
        $fix7->setProductivity(20);
        $fix7->setWidthSpacing(1000);
        $fix7->setHeightSpacing(600);
        $fix7->setSoilVolume(40);
        $fix7->setSoilType($manager->merge($this->getReference('soil-type-2')));
        $fix7->setClimateType($manager->merge($this->getReference('climate-type-1')));
        $fix7->setIrrigationType($manager->merge($this->getReference('irrigation-type-3')));
        $fix7->setFertilizerType($manager->merge($this->getReference('fertilizer-type-3')));
        $fix7->setLifeCicleType($manager->merge($this->getReference('life-cicle-type-1')));
        $fix7->setRootDepth(400);
        $fix7->setPlantHeight(600);
        $fix7->setSeedDepth(20);
        $fix7->setPhMinimum(5.5);
        $fix7->setPhMaximum(6.8);
        $fix7->setTemperatureMinimum(20);
        $fix7->setTemperatureMaximum(35);
        $fix7->setFrostResistanceType($manager->merge($this->getReference('frost-resistance-type-1')));
        $fix7->setSalinityToleranceType($manager->merge($this->getReference('salinity-tolerance-type-1')));
        $fix7->setTranslatableLocale('en');
        $manager->persist($fix7);
        
        //(8,'Cucurbita ',6,10,1200,600,60,3,1,3,2,1,0,0,0,0,0,0,0,1,2,'2010-11-20 20:05:20','2010-11-20 20:05:20'),
        //(8,'Carbassa','','ca','carbassa'),
        //(8,'Pumkin','','en','pumkin'),
        //(8,'Calabaza','','es','calabaza'),
        $fix8 = new Plant();
        $fix8->setCode('pumkin');
        $fix8->setName('Pumkin');
        $fix8->setDescription('Pumkin');
        $fix8->setScientificName('Cucurbita maxima');
        $fix8->setPlantFamily($manager->merge($this->getReference('plant-family-6')));
        $fix8->setProductivity(10);
        $fix8->setWidthSpacing(1000);
        $fix8->setHeightSpacing(1000);
        $fix8->setSoilVolume(80);
        $fix8->setSoilType($manager->merge($this->getReference('soil-type-2')));
        $fix8->setClimateType($manager->merge($this->getReference('climate-type-1')));
        $fix8->setIrrigationType($manager->merge($this->getReference('irrigation-type-3')));
        $fix8->setFertilizerType($manager->merge($this->getReference('fertilizer-type-2')));
        $fix8->setLifeCicleType($manager->merge($this->getReference('life-cicle-type-1')));
        $fix8->setRootDepth(40);
        $fix8->setPlantHeight(50);
        $fix8->setSeedDepth(20);
        $fix8->setPhMinimum(5.5);
        $fix8->setPhMaximum(6.8);
        $fix8->setTemperatureMinimum(15);
        $fix8->setTemperatureMaximum(35);
        $fix8->setFrostResistanceType($manager->merge($this->getReference('frost-resistance-type-1')));
        $fix8->setSalinityToleranceType($manager->merge($this->getReference('salinity-tolerance-type-2')));
        $fix8->setTranslatableLocale('en');
        $manager->persist($fix8);

        //(9,'Phaseolus vulgaris',7,2,500,600,15,1,2,3,1,1,0,0,0,0,0,0,0,1,2,'2010-11-20 20:10:48','2010-11-20 20:10:48'),
        //(9,'Mongeta','','ca','mongeta'),
        //(9,'Bean','','en','bean'),
        //(9,'Alubias','','es','alubias'),
        $fix9 = new Plant();
        $fix9->setCode('bean');
        $fix9->setName('Bean');
        $fix9->setDescription('Bean');
        $fix9->setScientificName('Phaseolus vulgaris');
        $fix9->setPlantFamily($manager->merge($this->getReference('plant-family-7')));
        $fix9->setProductivity(2);
        $fix9->setWidthSpacing(500);
        $fix9->setHeightSpacing(600);
        $fix9->setSoilVolume(15);
        $fix9->setSoilType($manager->merge($this->getReference('soil-type-2')));
        $fix9->setClimateType($manager->merge($this->getReference('climate-type-1')));
        $fix9->setIrrigationType($manager->merge($this->getReference('irrigation-type-3')));
        $fix9->setFertilizerType($manager->merge($this->getReference('fertilizer-type-1')));
        $fix9->setLifeCicleType($manager->merge($this->getReference('life-cicle-type-1')));
        $fix9->setRootDepth(300);
        $fix9->setPlantHeight(1500);
        $fix9->setSeedDepth(30);
        $fix9->setPhMinimum(6);
        $fix9->setPhMaximum(7.5);
        $fix9->setTemperatureMinimum(12);
        $fix9->setTemperatureMaximum(30);
        $fix9->setFrostResistanceType($manager->merge($this->getReference('frost-resistance-type-1')));
        $fix9->setSalinityToleranceType($manager->merge($this->getReference('salinity-tolerance-type-1')));
        $fix9->setTranslatableLocale('en');
        $manager->persist($fix9);

        //(10,'Zea mays',8,3,700,300,10,3,1,3,3,1,0,0,0,0,0,0,0,1,2,'2010-11-20 20:13:05','2010-11-20 20:13:05'),
        //(10,'Blat de moro','','ca','blat-de-moro'),
        //(10,'Corn','','en','corn'),
        //(10,'Maiz','','es','maiz'),
        $fix10 = new Plant();
        $fix10->setCode('corn');
        $fix10->setName('Corn');
        $fix10->setDescription('Corn');
        $fix10->setScientificName('Zea mays');
        $fix10->setPlantFamily($manager->merge($this->getReference('plant-family-8')));
        $fix10->setProductivity(3);
        $fix10->setWidthSpacing(600);
        $fix10->setHeightSpacing(500);
        $fix10->setSoilVolume(10);
        $fix10->setSoilType($manager->merge($this->getReference('soil-type-2')));
        $fix10->setClimateType($manager->merge($this->getReference('climate-type-1')));
        $fix10->setIrrigationType($manager->merge($this->getReference('irrigation-type-3')));
        $fix10->setFertilizerType($manager->merge($this->getReference('fertilizer-type-3')));
        $fix10->setLifeCicleType($manager->merge($this->getReference('life-cicle-type-1')));
        $fix10->setRootDepth(400);
        $fix10->setPlantHeight(2000);
        $fix10->setSeedDepth(40);
        $fix10->setPhMinimum(6);
        $fix10->setPhMaximum(7.5);
        $fix10->setTemperatureMinimum(15);
        $fix10->setTemperatureMaximum(30);
        $fix10->setFrostResistanceType($manager->merge($this->getReference('frost-resistance-type-1')));
        $fix10->setSalinityToleranceType($manager->merge($this->getReference('salinity-tolerance-type-2')));
        $fix10->setTranslatableLocale('en');
        $manager->persist($fix10);

        //(11,'Cucumis melo',6,6,1000,500,30,1,1,2,2,1,0,0,0,0,0,0,0,1,2,'2010-11-20 20:16:42','2010-11-20 20:16:42'),
        //(11,'Melons','','ca','melons'),
        //(11,'Melon','','en','melon'),
        //(11,'Melones','','es','melones'),
        $fix11 = new Plant();
        $fix11->setCode('melon');
        $fix11->setName('Melon');
        $fix11->setDescription('Melon');
        $fix11->setScientificName('Cucumis melo');
        $fix11->setPlantFamily($manager->merge($this->getReference('plant-family-6')));
        $fix11->setProductivity(6);
        $fix11->setWidthSpacing(1000);
        $fix11->setHeightSpacing(500);
        $fix11->setSoilVolume(30);
        $fix11->setSoilType($manager->merge($this->getReference('soil-type-2')));
        $fix11->setClimateType($manager->merge($this->getReference('climate-type-1')));
        $fix11->setIrrigationType($manager->merge($this->getReference('irrigation-type-2')));
        $fix11->setFertilizerType($manager->merge($this->getReference('fertilizer-type-3')));
        $fix11->setLifeCicleType($manager->merge($this->getReference('life-cicle-type-1')));
        $fix11->setRootDepth(0);
        $fix11->setPlantHeight(300);
        $fix11->setSeedDepth(20);
        $fix11->setPhMinimum(7);
        $fix11->setPhMaximum(8);
        $fix11->setTemperatureMinimum(10);
        $fix11->setTemperatureMaximum(27);
        $fix11->setFrostResistanceType($manager->merge($this->getReference('frost-resistance-type-1')));
        $fix11->setSalinityToleranceType($manager->merge($this->getReference('salinity-tolerance-type-2')));
        $fix11->setTranslatableLocale('en');
        $manager->persist($fix11);

        //(12,'Cucumis sativus',6,25,1000,500,20,2,1,2,2,1,0,0,0,0,0,0,0,1,2,'2010-11-20 20:21:36','2010-11-20 20:21:36'),
        //(12,'Cogombre','','ca','cogombre'),
        //(12,'Cucumber','','en','cucumber'),
        //(12,'Pepino','','es','pepino'),
        $fix12 = new Plant();
        $fix12->setCode('cucumber');
        $fix12->setName('Cucumber');
        $fix12->setDescription('Cucumber');
        $fix12->setScientificName('Cucumis sativus');
        $fix12->setPlantFamily($manager->merge($this->getReference('plant-family-6')));
        $fix12->setProductivity(25);
        $fix12->setWidthSpacing(1000);
        $fix12->setHeightSpacing(600);
        $fix12->setSoilVolume(20);
        $fix12->setSoilType($manager->merge($this->getReference('soil-type-2')));
        $fix12->setClimateType($manager->merge($this->getReference('climate-type-1')));
        $fix12->setIrrigationType($manager->merge($this->getReference('irrigation-type-3')));
        $fix12->setFertilizerType($manager->merge($this->getReference('fertilizer-type-3')));
        $fix12->setLifeCicleType($manager->merge($this->getReference('life-cicle-type-1')));
        $fix12->setRootDepth(300);
        $fix12->setPlantHeight(1200);
        $fix12->setSeedDepth(20);
        $fix12->setPhMinimum(5.5);
        $fix12->setPhMaximum(7);
        $fix12->setTemperatureMinimum(15);
        $fix12->setTemperatureMaximum(35);
        $fix12->setFrostResistanceType($manager->merge($this->getReference('frost-resistance-type-1')));
        $fix12->setSalinityToleranceType($manager->merge($this->getReference('salinity-tolerance-type-2')));
        $fix12->setTranslatableLocale('en');
        $manager->persist($fix12);
        
        //(13,'Capsicum annuum',4,10,500,400,15,3,1,2,2,1,0,0,0,0,0,0,0,1,2,'2010-11-20 20:44:32','2010-11-20 20:44:32'),
        //(13,'Pebrot','','ca','pebrot'),
        //(13,'Pepper','','en','pepper'),
        //(13,'Pimiento','','es','pimiento'),
        $fix13 = new Plant();
        $fix13->setCode('pepper');
        $fix13->setName('Pepper');
        $fix13->setDescription('Pepper');
        $fix13->setScientificName('Capsicum annuum');
        $fix13->setPlantFamily($manager->merge($this->getReference('plant-family-4')));
        $fix13->setProductivity(10);
        $fix13->setWidthSpacing(600);
        $fix13->setHeightSpacing(500);
        $fix13->setSoilVolume(15);
        $fix13->setSoilType($manager->merge($this->getReference('soil-type-2')));
        $fix13->setClimateType($manager->merge($this->getReference('climate-type-1')));
        $fix13->setIrrigationType($manager->merge($this->getReference('irrigation-type-3')));
        $fix13->setFertilizerType($manager->merge($this->getReference('fertilizer-type-3')));
        $fix13->setLifeCicleType($manager->merge($this->getReference('life-cicle-type-3')));
        $fix13->setRootDepth(400);
        $fix13->setPlantHeight(800);
        $fix13->setSeedDepth(20);
        $fix13->setPhMinimum(5.5);
        $fix13->setPhMaximum(7);
        $fix13->setTemperatureMinimum(15);
        $fix13->setTemperatureMaximum(35);
        $fix13->setFrostResistanceType($manager->merge($this->getReference('frost-resistance-type-1')));
        $fix13->setSalinityToleranceType($manager->merge($this->getReference('salinity-tolerance-type-2')));
        $fix13->setTranslatableLocale('en');
        $manager->persist($fix13);
        
        //(14,'Valerianella locusta',9,2,200,200,1,2,3,3,2,1,0,0,0,0,0,0,0,2,2,'2010-11-20 20:48:46','2010-11-20 20:48:46'),
        //(14,'Herba dels canonges','','ca','herba-dels-canonges'),
        //(14,'Herb of the canons','','en','herb-of-the-canons'),
        //(14,'Canonigos','','es','canonigos'),
        $fix14 = new Plant();
        $fix14->setCode('canons');
        $fix14->setName('Herb of the canons');
        $fix14->setDescription('Herb of the canons');
        $fix14->setScientificName('Valerianella locusta');
        $fix14->setPlantFamily($manager->merge($this->getReference('plant-family-9')));
        $fix14->setProductivity(2);
        $fix14->setWidthSpacing(200);
        $fix14->setHeightSpacing(200);
        $fix14->setSoilVolume(1);
        $fix14->setSoilType($manager->merge($this->getReference('soil-type-2')));
        $fix14->setClimateType($manager->merge($this->getReference('climate-type-3')));
        $fix14->setIrrigationType($manager->merge($this->getReference('irrigation-type-2')));
        $fix14->setFertilizerType($manager->merge($this->getReference('fertilizer-type-2')));
        $fix14->setLifeCicleType($manager->merge($this->getReference('life-cicle-type-1')));
        $fix14->setRootDepth(100);
        $fix14->setPlantHeight(200);
        $fix14->setSeedDepth(10);
        $fix14->setPhMinimum(6);
        $fix14->setPhMaximum(7);
        $fix14->setTemperatureMinimum(10);
        $fix14->setTemperatureMaximum(25);
        $fix14->setFrostResistanceType($manager->merge($this->getReference('frost-resistance-type-1')));
        $fix14->setSalinityToleranceType($manager->merge($this->getReference('salinity-tolerance-type-2')));
        $fix14->setTranslatableLocale('en');
        $manager->persist($fix14);
        
        //(15,'Citrullus vulgaris',6,8,1000,500,40,2,1,3,2,1,0,0,0,0,0,0,0,1,2,'2010-11-20 20:51:23','2010-11-20 20:51:23'),
        //(15,'Sindria','','ca','sindria'),
        //(15,'Watermelon','','en','watermelon'),
        //(15,'Sandia','','es','sandia'),
        $fix15 = new Plant();
        $fix15->setCode('watermelon');
        $fix15->setName('Watermelon');
        $fix15->setDescription('Watermelon');
        $fix15->setScientificName('Citrullus vulgaris');
        $fix15->setPlantFamily($manager->merge($this->getReference('plant-family-6')));
        $fix15->setProductivity(8);
        $fix15->setWidthSpacing(1000);
        $fix15->setHeightSpacing(500);
        $fix15->setSoilVolume(50);
        $fix15->setSoilType($manager->merge($this->getReference('soil-type-2')));
        $fix15->setClimateType($manager->merge($this->getReference('climate-type-1')));
        $fix15->setIrrigationType($manager->merge($this->getReference('irrigation-type-3')));
        $fix15->setFertilizerType($manager->merge($this->getReference('fertilizer-type-3')));
        $fix15->setLifeCicleType($manager->merge($this->getReference('life-cicle-type-1')));
        $fix15->setRootDepth(300);
        $fix15->setPlantHeight(500);
        $fix15->setSeedDepth(20);
        $fix15->setPhMinimum(6);
        $fix15->setPhMaximum(7);
        $fix15->setTemperatureMinimum(15);
        $fix15->setTemperatureMaximum(35);
        $fix15->setFrostResistanceType($manager->merge($this->getReference('frost-resistance-type-1')));
        $fix15->setSalinityToleranceType($manager->merge($this->getReference('salinity-tolerance-type-2')));
        $fix15->setTranslatableLocale('en');
        $manager->persist($fix15);
        
        //(16,'Lycopersicum esculentum',4,20,500,300,20,3,1,2,2,1,0,0,0,0,0,0,0,1,2,'2010-11-20 20:57:18','2010-11-20 20:57:18'),
        //(16,'Tomàquet','','ca','tomaquet'),
        //(16,'Tomato','','en','tomato'),
        //(16,'Tomate','','es','tomate'),
        $fix16 = new Plant();
        $fix16->setCode('tomato');
        $fix16->setName('Tomato');
        $fix16->setDescription('Tomato');
        $fix16->setScientificName('Lycopersicum esculentum');
        $fix16->setPlantFamily($manager->merge($this->getReference('plant-family-4')));
        $fix16->setProductivity(20);
        $fix16->setWidthSpacing(600);
        $fix16->setHeightSpacing(400);
        $fix16->setSoilVolume(25);
        $fix16->setSoilType($manager->merge($this->getReference('soil-type-2')));
        $fix16->setClimateType($manager->merge($this->getReference('climate-type-1')));
        $fix16->setIrrigationType($manager->merge($this->getReference('irrigation-type-3')));
        $fix16->setFertilizerType($manager->merge($this->getReference('fertilizer-type-3')));
        $fix16->setLifeCicleType($manager->merge($this->getReference('life-cicle-type-1')));
        $fix16->setRootDepth(300);
        $fix16->setPlantHeight(1000);
        $fix16->setSeedDepth(10);
        $fix16->setPhMinimum(5.5);
        $fix16->setPhMaximum(7);
        $fix16->setTemperatureMinimum(18);
        $fix16->setTemperatureMaximum(35);
        $fix16->setFrostResistanceType($manager->merge($this->getReference('frost-resistance-type-1')));
        $fix16->setSalinityToleranceType($manager->merge($this->getReference('salinity-tolerance-type-2')));
        $fix16->setTranslatableLocale('en');
        $manager->persist($fix16);
        
        //(17,'Beta vulgaris',10,15,400,300,25,2,2,2,2,2,0,0,0,0,0,0,0,2,2,'2010-11-20 21:00:41','2010-11-20 21:00:41'),
        //(17,'Bleda','','ca','bleda'),
        //(17,'Chard','','en','chard'),
        //(17,'Acelga','','es','acelga'),
        $fix17 = new Plant();
        $fix17->setCode('chard');
        $fix17->setName('Chard');
        $fix17->setDescription('Chard');
        $fix17->setScientificName('Beta vulgaris');
        $fix17->setPlantFamily($manager->merge($this->getReference('plant-family-10')));
        $fix17->setProductivity(15);
        $fix17->setWidthSpacing(500);
        $fix17->setHeightSpacing(300);
        $fix17->setSoilVolume(25);
        $fix17->setSoilType($manager->merge($this->getReference('soil-type-2')));
        $fix17->setClimateType($manager->merge($this->getReference('climate-type-2')));
        $fix17->setIrrigationType($manager->merge($this->getReference('irrigation-type-3')));
        $fix17->setFertilizerType($manager->merge($this->getReference('fertilizer-type-3')));
        $fix17->setLifeCicleType($manager->merge($this->getReference('life-cicle-type-2')));
        $fix17->setRootDepth(300);
        $fix17->setPlantHeight(400);
        $fix17->setSeedDepth(20);
        $fix17->setPhMinimum(5.5);
        $fix17->setPhMaximum(7.5);
        $fix17->setTemperatureMinimum(8);
        $fix17->setTemperatureMaximum(27);
        $fix17->setFrostResistanceType($manager->merge($this->getReference('frost-resistance-type-2')));
        $fix17->setSalinityToleranceType($manager->merge($this->getReference('salinity-tolerance-type-2')));
        $fix17->setTranslatableLocale('en');
        $manager->persist($fix17);
        
        //(18,'Apium graveolens',1,12,400,300,10,2,2,2,3,2,0,0,0,0,0,0,0,2,2,'2010-11-20 21:02:46','2010-11-20 21:02:46'),
        //(18,'Api','','ca','api'),
        //(18,'Apium','','en','apium'),
        //(18,'Apio','','es','apio'),
        $fix18 = new Plant();
        $fix18->setCode('apium');
        $fix18->setName('Apium');
        $fix18->setDescription('Apium');
        $fix18->setScientificName('Apium graveolens');
        $fix18->setPlantFamily($manager->merge($this->getReference('plant-family-1')));
        $fix18->setProductivity(12);
        $fix18->setWidthSpacing(300);
        $fix18->setHeightSpacing(300);
        $fix18->setSoilVolume(10);
        $fix18->setSoilType($manager->merge($this->getReference('soil-type-2')));
        $fix18->setClimateType($manager->merge($this->getReference('climate-type-2')));
        $fix18->setIrrigationType($manager->merge($this->getReference('irrigation-type-3')));
        $fix18->setFertilizerType($manager->merge($this->getReference('fertilizer-type-3')));
        $fix18->setLifeCicleType($manager->merge($this->getReference('life-cicle-type-3')));
        $fix18->setRootDepth(300);
        $fix18->setPlantHeight(350);
        $fix18->setSeedDepth(10);
        $fix18->setPhMinimum(5.5);
        $fix18->setPhMaximum(7);
        $fix18->setTemperatureMinimum(5);
        $fix18->setTemperatureMaximum(25);
        $fix18->setFrostResistanceType($manager->merge($this->getReference('frost-resistance-type-2')));
        $fix18->setSalinityToleranceType($manager->merge($this->getReference('salinity-tolerance-type-2')));
        $fix18->setTranslatableLocale('en');
        $manager->persist($fix18);
        
        //(19,'Spinacia oleracea',10,15,200,120,25,2,2,2,3,1,0,0,0,0,0,0,0,1,2,'2010-11-20 21:04:43','2010-11-20 21:04:43'),
        //(19,'Espinacs','','ca','espinacs'),
        //(19,'Spinach','','en','spinach'),
        //(19,'Espinacas','','es','espinacas'),
        $fix19 = new Plant();
        $fix19->setCode('spinach');
        $fix19->setName('Spinach');
        $fix19->setDescription('Spinach');
        $fix19->setScientificName('Spinacia oleracea');
        $fix19->setPlantFamily($manager->merge($this->getReference('plant-family-10')));
        $fix19->setProductivity(15);
        $fix19->setWidthSpacing(200);
        $fix19->setHeightSpacing(150);
        $fix19->setSoilVolume(25);
        $fix19->setSoilType($manager->merge($this->getReference('soil-type-2')));
        $fix19->setClimateType($manager->merge($this->getReference('climate-type-3')));
        $fix19->setIrrigationType($manager->merge($this->getReference('irrigation-type-3')));
        $fix19->setFertilizerType($manager->merge($this->getReference('fertilizer-type-3')));
        $fix19->setLifeCicleType($manager->merge($this->getReference('life-cicle-type-1')));
        $fix19->setRootDepth(200);
        $fix19->setPlantHeight(200);
        $fix19->setSeedDepth(20);
        $fix19->setPhMinimum(6);
        $fix19->setPhMaximum(6.8);
        $fix19->setTemperatureMinimum(5);
        $fix19->setTemperatureMaximum(25);
        $fix19->setFrostResistanceType($manager->merge($this->getReference('frost-resistance-type-3')));
        $fix19->setSalinityToleranceType($manager->merge($this->getReference('salinity-tolerance-type-2')));
        $fix19->setTranslatableLocale('en');
        $manager->persist($fix19);
        
        //(20,'Lactuca sativa',11,8,300,200,3,2,2,2,2,1,0,0,0,0,0,0,0,2,2,'2010-11-21 18:15:13','2010-11-21 18:15:13'),
        //(20,'Enciam','','ca','enciam'),
        //(20,'Lettuce','','en','lettuce'),
        //(20,'Lechuga','','es','lechuga'),
        $fix20 = new Plant();
        $fix20->setCode('lettuce');
        $fix20->setName('Lettuce');
        $fix20->setDescription('Lettuce');
        $fix20->setScientificName('Lactuca sativa');
        $fix20->setPlantFamily($manager->merge($this->getReference('plant-family-11')));
        $fix20->setProductivity(8);
        $fix20->setWidthSpacing(300);
        $fix20->setHeightSpacing(200);
        $fix20->setSoilVolume(3);
        $fix20->setSoilType($manager->merge($this->getReference('soil-type-2')));
        $fix20->setClimateType($manager->merge($this->getReference('climate-type-2')));
        $fix20->setIrrigationType($manager->merge($this->getReference('irrigation-type-3')));
        $fix20->setFertilizerType($manager->merge($this->getReference('fertilizer-type-2')));
        $fix20->setLifeCicleType($manager->merge($this->getReference('life-cicle-type-1')));
        $fix20->setRootDepth(150);
        $fix20->setPlantHeight(200);
        $fix20->setSeedDepth(10);
        $fix20->setPhMinimum(6);
        $fix20->setPhMaximum(6.8);
        $fix20->setTemperatureMinimum(5);
        $fix20->setTemperatureMaximum(25);
        $fix20->setFrostResistanceType($manager->merge($this->getReference('frost-resistance-type-2')));
        $fix20->setSalinityToleranceType($manager->merge($this->getReference('salinity-tolerance-type-2')));
        $fix20->setTranslatableLocale('en');
        $manager->persist($fix20);
        
        //(21,'Solanum tuberosum',4,3,700,300,10,2,2,2,3,1,0,0,0,0,0,0,0,1,2,'2010-11-21 18:23:08','2010-11-21 18:23:08'),
        //(21,'Patates','','ca','patates'),
        //(21,'Potatoes','','en','potatoes'),
        //(21,'Patatas','','es','patatas'),
        $fix21 = new Plant();
        $fix21->setCode('potatoes');
        $fix21->setName('Potatoes');
        $fix21->setDescription('Potatoes');
        $fix21->setScientificName('Solanum tuberosum');
        $fix21->setPlantFamily($manager->merge($this->getReference('plant-family-4')));
        $fix21->setProductivity(3);
        $fix21->setWidthSpacing(700);
        $fix21->setHeightSpacing(300);
        $fix21->setSoilVolume(10);
        $fix21->setSoilType($manager->merge($this->getReference('soil-type-2')));
        $fix21->setClimateType($manager->merge($this->getReference('climate-type-2')));
        $fix21->setIrrigationType($manager->merge($this->getReference('irrigation-type-3')));
        $fix21->setFertilizerType($manager->merge($this->getReference('fertilizer-type-3')));
        $fix21->setLifeCicleType($manager->merge($this->getReference('life-cicle-type-1')));
        $fix21->setRootDepth(500);
        $fix21->setPlantHeight(400);
        $fix21->setSeedDepth(15);
        $fix21->setPhMinimum(5);
        $fix21->setPhMaximum(6.8);
        $fix21->setTemperatureMinimum(5);
        $fix21->setTemperatureMaximum(20);
        $fix21->setFrostResistanceType($manager->merge($this->getReference('frost-resistance-type-1')));
        $fix21->setSalinityToleranceType($manager->merge($this->getReference('salinity-tolerance-type-2')));
        $fix21->setTranslatableLocale('en');
        $manager->persist($fix21);
        
        //(22,'Raphanus sativus',12,2,100,50,1,2,2,2,2,1,0,0,0,0,0,0,0,3,2,'2010-11-21 18:34:25','2010-11-21 18:34:25'),
        //(22,'Rave','','ca','rave'),
        //(22,'Radish','','en','radish'),
        //(22,'Rabano','','es','rabano'),
        $fix22 = new Plant();
        $fix22->setCode('radish');
        $fix22->setName('Radish');
        $fix22->setDescription('Radish');
        $fix22->setScientificName('Raphanus sativus');
        $fix22->setPlantFamily($manager->merge($this->getReference('plant-family-12')));
        $fix22->setProductivity(2);
        $fix22->setWidthSpacing(100);
        $fix22->setHeightSpacing(50);
        $fix22->setSoilVolume(1);
        $fix22->setSoilType($manager->merge($this->getReference('soil-type-2')));
        $fix22->setClimateType($manager->merge($this->getReference('climate-type-2')));
        $fix22->setIrrigationType($manager->merge($this->getReference('irrigation-type-3')));
        $fix22->setFertilizerType($manager->merge($this->getReference('fertilizer-type-2')));
        $fix22->setLifeCicleType($manager->merge($this->getReference('life-cicle-type-1')));
        $fix22->setRootDepth(200);
        $fix22->setPlantHeight(100);
        $fix22->setSeedDepth(10);
        $fix22->setPhMinimum(5.5);
        $fix22->setPhMaximum(6.8);
        $fix22->setTemperatureMinimum(6);
        $fix22->setTemperatureMaximum(30);
        $fix22->setFrostResistanceType($manager->merge($this->getReference('frost-resistance-type-3')));
        $fix22->setSalinityToleranceType($manager->merge($this->getReference('salinity-tolerance-type-1')));
        $fix22->setTranslatableLocale('en');
        $manager->persist($fix22);
        
        //(23,'Beta vulgaris ',10,4,300,200,4,2,2,2,2,2,0,0,0,0,0,0,0,2,2,'2010-11-21 18:38:16','2010-11-21 18:38:16'),
        //(23,'Remolatxa','','ca','remolatxa'),
        //(23,'Beet','','en','beet'),
        //(23,'Remolacha','','es','remolacha'),
        $fix23 = new Plant();
        $fix23->setCode('beet');
        $fix23->setName('Beet');
        $fix23->setDescription('Beet');
        $fix23->setScientificName('Beta vulgaris');
        $fix23->setPlantFamily($manager->merge($this->getReference('plant-family-10')));
        $fix23->setProductivity(4);
        $fix23->setWidthSpacing(250);
        $fix23->setHeightSpacing(250);
        $fix23->setSoilVolume(4);
        $fix23->setSoilType($manager->merge($this->getReference('soil-type-2')));
        $fix23->setClimateType($manager->merge($this->getReference('climate-type-2')));
        $fix23->setIrrigationType($manager->merge($this->getReference('irrigation-type-3')));
        $fix23->setFertilizerType($manager->merge($this->getReference('fertilizer-type-2')));
        $fix23->setLifeCicleType($manager->merge($this->getReference('life-cicle-type-2')));
        $fix23->setRootDepth(250);
        $fix23->setPlantHeight(250);
        $fix23->setSeedDepth(20);
        $fix23->setPhMinimum(6);
        $fix23->setPhMaximum(6.8);
        $fix23->setTemperatureMinimum(10);
        $fix23->setTemperatureMaximum(22);
        $fix23->setFrostResistanceType($manager->merge($this->getReference('frost-resistance-type-2')));
        $fix23->setSalinityToleranceType($manager->merge($this->getReference('salinity-tolerance-type-1')));
        $fix23->setTranslatableLocale('en');
        $manager->persist($fix23);
        
        //(24,'Eruca vesicaria',12,3,100,100,1,2,2,2,1,1,0,0,0,0,0,0,0,2,2,'2010-11-21 18:47:37','2010-11-21 18:47:37'),
        //(24,'Ruca','','ca','ruca'),
        //(24,'Ruca?','','en','ruca'),
        //(24,'Rúcula','','es','rucula'),
        $fix24 = new Plant();
        $fix24->setCode('ruca');
        $fix24->setName('Ruca');
        $fix24->setDescription('Ruca');
        $fix24->setScientificName('Eruca vesicaria');
        $fix24->setPlantFamily($manager->merge($this->getReference('plant-family-12')));
        $fix24->setProductivity(3);
        $fix24->setWidthSpacing(150);
        $fix24->setHeightSpacing(150);
        $fix24->setSoilVolume(1);
        $fix24->setSoilType($manager->merge($this->getReference('soil-type-2')));
        $fix24->setClimateType($manager->merge($this->getReference('climate-type-2')));
        $fix24->setIrrigationType($manager->merge($this->getReference('irrigation-type-3')));
        $fix24->setFertilizerType($manager->merge($this->getReference('fertilizer-type-1')));
        $fix24->setLifeCicleType($manager->merge($this->getReference('life-cicle-type-1')));
        $fix24->setRootDepth(150);
        $fix24->setPlantHeight(150);
        $fix24->setSeedDepth(10);
        $fix24->setPhMinimum(5.5);
        $fix24->setPhMaximum(7);
        $fix24->setTemperatureMinimum(10);
        $fix24->setTemperatureMaximum(25);
        $fix24->setFrostResistanceType($manager->merge($this->getReference('frost-resistance-type-2')));
        $fix24->setSalinityToleranceType($manager->merge($this->getReference('salinity-tolerance-type-2')));
        $fix24->setTranslatableLocale('en');
        $manager->persist($fix24);
        
        //(25,'Daucus carota',1,5,200,50,2,2,2,2,2,2,0,0,0,0,0,0,0,2,2,'2010-11-21 18:49:25','2010-11-21 18:49:25'),
        //(25,'Pastanaga','','ca','pastanaga'),
        //(25,'Carrot','','en','carrot'),
        //(25,'Zanahoria','','es','zanahoria'),
        $fix25 = new Plant();
        $fix25->setCode('carrot');
        $fix25->setName('Carrot');
        $fix25->setDescription('Carrot');
        $fix25->setScientificName('Daucus carota');
        $fix25->setPlantFamily($manager->merge($this->getReference('plant-family-1')));
        $fix25->setProductivity(5);
        $fix25->setWidthSpacing(100);
        $fix25->setHeightSpacing(150);
        $fix25->setSoilVolume(2);
        $fix25->setSoilType($manager->merge($this->getReference('soil-type-3')));
        $fix25->setClimateType($manager->merge($this->getReference('climate-type-2')));
        $fix25->setIrrigationType($manager->merge($this->getReference('irrigation-type-3')));
        $fix25->setFertilizerType($manager->merge($this->getReference('fertilizer-type-2')));
        $fix25->setLifeCicleType($manager->merge($this->getReference('life-cicle-type-2')));
        $fix25->setRootDepth(250);
        $fix25->setPlantHeight(200);
        $fix25->setSeedDepth(20);
        $fix25->setPhMinimum(5.5);
        $fix25->setPhMaximum(6.8);
        $fix25->setTemperatureMinimum(10);
        $fix25->setTemperatureMaximum(25);
        $fix25->setFrostResistanceType($manager->merge($this->getReference('frost-resistance-type-2')));
        $fix25->setSalinityToleranceType($manager->merge($this->getReference('salinity-tolerance-type-2')));
        $fix25->setTranslatableLocale('en');
        $manager->persist($fix25);
        
        //(26,'Allium cepa',2,15,200,100,3,2,2,2,2,2,0,0,0,0,0,0,0,2,2,'2010-11-21 18:56:36','2010-11-21 18:56:36'),
        //(26,'Ceba','','ca','ceba'),
        //(26,'Onion','','en','onion'),
        //(26,'Cebolla','','es','cebolla'),
        $fix26 = new Plant();
        $fix26->setCode('onion');
        $fix26->setName('Onion');
        $fix26->setDescription('Onion');
        $fix26->setScientificName('Allium cepa');
        $fix26->setPlantFamily($manager->merge($this->getReference('plant-family-2')));
        $fix26->setProductivity(15);
        $fix26->setWidthSpacing(200);
        $fix26->setHeightSpacing(100);
        $fix26->setSoilVolume(3);
        $fix26->setSoilType($manager->merge($this->getReference('soil-type-3')));
        $fix26->setClimateType($manager->merge($this->getReference('climate-type-3')));
        $fix26->setIrrigationType($manager->merge($this->getReference('irrigation-type-2')));
        $fix26->setFertilizerType($manager->merge($this->getReference('fertilizer-type-2')));
        $fix26->setLifeCicleType($manager->merge($this->getReference('life-cicle-type-2')));
        $fix26->setRootDepth(300);
        $fix26->setPlantHeight(400);
        $fix26->setSeedDepth(10);
        $fix26->setPhMinimum(6);
        $fix26->setPhMaximum(6.8);
        $fix26->setTemperatureMinimum(5);
        $fix26->setTemperatureMaximum(30);
        $fix26->setFrostResistanceType($manager->merge($this->getReference('frost-resistance-type-2')));
        $fix26->setSalinityToleranceType($manager->merge($this->getReference('salinity-tolerance-type-2')));
        $fix26->setTranslatableLocale('en');
        $manager->persist($fix26);
        
        //(27,'Brassica napus',12,5,150,150,3,2,3,2,2,2,0,0,0,0,0,0,0,2,2,'2010-11-21 18:59:42','2010-11-21 18:59:42'),
        //(27,'Nap','','ca','nap'),
        //(27,'Nap?','','en','nap'),
        //(27,'Nabo','','es','nabo'),
        $fix27 = new Plant();
        $fix27->setCode('nap');
        $fix27->setName('Nap');
        $fix27->setDescription('Nap');
        $fix27->setScientificName('Brassica napus');
        $fix27->setPlantFamily($manager->merge($this->getReference('plant-family-12')));
        $fix27->setProductivity(5);
        $fix27->setWidthSpacing(150);
        $fix27->setHeightSpacing(150);
        $fix27->setSoilVolume(3);
        $fix27->setSoilType($manager->merge($this->getReference('soil-type-3')));
        $fix27->setClimateType($manager->merge($this->getReference('climate-type-3')));
        $fix27->setIrrigationType($manager->merge($this->getReference('irrigation-type-3')));
        $fix27->setFertilizerType($manager->merge($this->getReference('fertilizer-type-3')));
        $fix27->setLifeCicleType($manager->merge($this->getReference('life-cicle-type-2')));
        $fix27->setRootDepth(250);
        $fix27->setPlantHeight(150);
        $fix27->setSeedDepth(10);
        $fix27->setPhMinimum(5.5);
        $fix27->setPhMaximum(6.8);
        $fix27->setTemperatureMinimum(5);
        $fix27->setTemperatureMaximum(25);
        $fix27->setFrostResistanceType($manager->merge($this->getReference('frost-resistance-type-2')));
        $fix27->setSalinityToleranceType($manager->merge($this->getReference('salinity-tolerance-type-2')));
        $fix27->setTranslatableLocale('en');
        $manager->persist($fix27);
        
        //(28,'Brassica oleracea capitata',12,8,600,400,25,2,2,2,2,2,0,0,0,0,0,0,0,2,2,'2010-11-21 19:05:31','2010-11-21 19:05:31'),
        //(28,'Col de Cabdell','','ca','col-de-cabdell'),
        //(28,'Cabbage','','en','cabbage'),
        //(28,'Col','','es','col'),
        $fix28 = new Plant();
        $fix28->setCode('cabbage');
        $fix28->setName('Cabbage');
        $fix28->setDescription('Cabbage');
        $fix28->setScientificName('Brassica oleracea viridis');
        $fix28->setPlantFamily($manager->merge($this->getReference('plant-family-12')));
        $fix28->setProductivity(8);
        $fix28->setWidthSpacing(600);
        $fix28->setHeightSpacing(400);
        $fix28->setSoilVolume(25);
        $fix28->setSoilType($manager->merge($this->getReference('soil-type-2')));
        $fix28->setClimateType($manager->merge($this->getReference('climate-type-2')));
        $fix28->setIrrigationType($manager->merge($this->getReference('irrigation-type-3')));
        $fix28->setFertilizerType($manager->merge($this->getReference('fertilizer-type-2')));
        $fix28->setLifeCicleType($manager->merge($this->getReference('life-cicle-type-2')));
        $fix28->setRootDepth(250);
        $fix28->setPlantHeight(0);
        $fix28->setSeedDepth(30);
        $fix28->setPhMinimum(6);
        $fix28->setPhMaximum(6.8);
        $fix28->setTemperatureMinimum(5);
        $fix28->setTemperatureMaximum(28);
        $fix28->setFrostResistanceType($manager->merge($this->getReference('frost-resistance-type-2')));
        $fix28->setSalinityToleranceType($manager->merge($this->getReference('salinity-tolerance-type-2')));
        $fix28->setTranslatableLocale('en');
        $manager->persist($fix28);
        
        //(29,'Brassica oleracea botrytis',12,5,600,400,15,2,3,2,2,1,0,0,0,0,0,0,0,2,2,'2010-11-21 19:12:40','2010-11-21 19:12:40'),
        //(29,'Coliflors','','ca','coliflors'),
        //(29,'Cauliflower','','en','cauliflower'),
        //(29,'Coliflores','','es','coliflores'),
        $fix29 = new Plant();
        $fix29->setCode('cauliflower');
        $fix29->setName('Cauliflower');
        $fix29->setDescription('Cauliflower');
        $fix29->setScientificName('Brassica oleracea botrytis');
        $fix29->setPlantFamily($manager->merge($this->getReference('plant-family-12')));
        $fix29->setProductivity(5);
        $fix29->setWidthSpacing(600);
        $fix29->setHeightSpacing(400);
        $fix29->setSoilVolume(15);
        $fix29->setSoilType($manager->merge($this->getReference('soil-type-2')));
        $fix29->setClimateType($manager->merge($this->getReference('climate-type-3')));
        $fix29->setIrrigationType($manager->merge($this->getReference('irrigation-type-3')));
        $fix29->setFertilizerType($manager->merge($this->getReference('fertilizer-type-3')));
        $fix29->setLifeCicleType($manager->merge($this->getReference('life-cicle-type-1')));
        $fix29->setRootDepth(350);
        $fix29->setPlantHeight(200);
        $fix29->setSeedDepth(10);
        $fix29->setPhMinimum(6);
        $fix29->setPhMaximum(6.8);
        $fix29->setTemperatureMinimum(5);
        $fix29->setTemperatureMaximum(25);
        $fix29->setFrostResistanceType($manager->merge($this->getReference('frost-resistance-type-3')));
        $fix29->setSalinityToleranceType($manager->merge($this->getReference('salinity-tolerance-type-2')));
        $fix29->setTranslatableLocale('en');
        $manager->persist($fix29);
        
        //(30,'Cichorium endivia',11,5,400,300,4,2,3,2,2,4,0,0,0,0,0,0,0,3,2,'2010-11-21 19:17:32','2010-11-21 19:17:32'),
        //(30,'Escaroles','','ca','escaroles'),
        //(30,'Endives','','en','endives'),
        //(30,'Escarolas','','es','escarolas'),
        $fix30 = new Plant();
        $fix30->setCode('endives');
        $fix30->setName('Endives');
        $fix30->setDescription('Endives');
        $fix30->setScientificName('Cichorium endivia');
        $fix30->setPlantFamily($manager->merge($this->getReference('plant-family-11')));
        $fix30->setProductivity(5);
        $fix30->setWidthSpacing(400);
        $fix30->setHeightSpacing(300);
        $fix30->setSoilVolume(4);
        $fix30->setSoilType($manager->merge($this->getReference('soil-type-2')));
        $fix30->setClimateType($manager->merge($this->getReference('climate-type-3')));
        $fix30->setIrrigationType($manager->merge($this->getReference('irrigation-type-2')));
        $fix30->setFertilizerType($manager->merge($this->getReference('fertilizer-type-2')));
        $fix30->setLifeCicleType($manager->merge($this->getReference('life-cicle-type-2')));
        $fix30->setRootDepth(200);
        $fix30->setPlantHeight(300);
        $fix30->setSeedDepth(10);
        $fix30->setPhMinimum(6);
        $fix30->setPhMaximum(7);
        $fix30->setTemperatureMinimum(6);
        $fix30->setTemperatureMaximum(30);
        $fix30->setFrostResistanceType($manager->merge($this->getReference('frost-resistance-type-3')));
        $fix30->setSalinityToleranceType($manager->merge($this->getReference('salinity-tolerance-type-2')));
        $fix30->setTranslatableLocale('en');
        $manager->persist($fix30);
        
        //(31,'Pisum sativum',7,1,500,400,5,2,3,2,1,1,0,0,0,0,0,0,0,2,2,'2010-11-21 19:19:32','2010-11-21 19:19:32'),
        //(31,'Pèsol','','ca','pesol'),
        //(31,'Pea','','en','pea'),
        //(31,'Alberja o guisante','','es','alberja-o-guisante'),
        $fix31 = new Plant();
        $fix31->setCode('pea');
        $fix31->setName('Pea');
        $fix31->setDescription('Pea');
        $fix31->setScientificName('Pisum sativum');
        $fix31->setPlantFamily($manager->merge($this->getReference('plant-family-7')));
        $fix31->setProductivity(1);
        $fix31->setWidthSpacing(500);
        $fix31->setHeightSpacing(400);
        $fix31->setSoilVolume(5);
        $fix31->setSoilType($manager->merge($this->getReference('soil-type-2')));
        $fix31->setClimateType($manager->merge($this->getReference('climate-type-3')));
        $fix31->setIrrigationType($manager->merge($this->getReference('irrigation-type-2')));
        $fix31->setFertilizerType($manager->merge($this->getReference('fertilizer-type-1')));
        $fix31->setLifeCicleType($manager->merge($this->getReference('life-cicle-type-1')));
        $fix31->setRootDepth(400);
        $fix31->setPlantHeight(1000);
        $fix31->setSeedDepth(40);
        $fix31->setPhMinimum(5.5);
        $fix31->setPhMaximum(6.8);
        $fix31->setTemperatureMinimum(5);
        $fix31->setTemperatureMaximum(30);
        $fix31->setFrostResistanceType($manager->merge($this->getReference('frost-resistance-type-2')));
        $fix31->setSalinityToleranceType($manager->merge($this->getReference('salinity-tolerance-type-2')));
        $fix31->setTranslatableLocale('en');
        $manager->persist($fix31);

        //(32,'Vicia fava',7,2,500,300,5,2,3,3,1,1,0,0,0,0,0,0,0,3,2,'2010-11-21 19:21:23','2010-11-21 19:21:23');
        //(32,'Fava','','ca','fava'),
        //(32,'Fava?','','en','fava'),
        //(32,'Haba','','es','haba')
        $fix32 = new Plant();
        $fix32->setCode('fava');
        $fix32->setName('Fava');
        $fix32->setDescription('Fava');
        $fix32->setScientificName('Vicia fava');
        $fix32->setPlantFamily($manager->merge($this->getReference('plant-family-7')));
        $fix32->setProductivity(2);
        $fix32->setWidthSpacing(500);
        $fix32->setHeightSpacing(300);
        $fix32->setSoilVolume(5);
        $fix32->setSoilType($manager->merge($this->getReference('soil-type-2')));
        $fix32->setClimateType($manager->merge($this->getReference('climate-type-3')));
        $fix32->setIrrigationType($manager->merge($this->getReference('irrigation-type-3')));
        $fix32->setFertilizerType($manager->merge($this->getReference('fertilizer-type-1')));
        $fix32->setLifeCicleType($manager->merge($this->getReference('life-cicle-type-1')));
        $fix32->setRootDepth(400);
        $fix32->setPlantHeight(1200);
        $fix32->setSeedDepth(40);
        $fix32->setPhMinimum(7.3);
        $fix32->setPhMaximum(8.2);
        $fix32->setTemperatureMinimum(0);
        $fix32->setTemperatureMaximum(25);
        $fix32->setFrostResistanceType($manager->merge($this->getReference('frost-resistance-type-3')));
        $fix32->setSalinityToleranceType($manager->merge($this->getReference('salinity-tolerance-type-2')));
        $fix32->setTranslatableLocale('en');
        $manager->persist($fix32);
        
$fix33 = new Plant();
        $fix33->setCode('brussel');
        $fix33->setName('Brussel Sprouts');
        $fix33->setDescription('Cabbage');
        $fix33->setScientificName('Brassica oleracea gemmifera ');
        $fix33->setPlantFamily($manager->merge($this->getReference('plant-family-12')));
        $fix33->setProductivity(8);
        $fix33->setWidthSpacing(600);
        $fix33->setHeightSpacing(400);
        $fix33->setSoilVolume(25);
        $fix33->setSoilType($manager->merge($this->getReference('soil-type-2')));
        $fix33->setClimateType($manager->merge($this->getReference('climate-type-3')));
        $fix33->setIrrigationType($manager->merge($this->getReference('irrigation-type-3')));
        $fix33->setFertilizerType($manager->merge($this->getReference('fertilizer-type-2')));
        $fix33->setLifeCicleType($manager->merge($this->getReference('life-cicle-type-2')));
        $fix33->setRootDepth(300);
        $fix33->setPlantHeight(0);
        $fix33->setSeedDepth(10);
        $fix33->setPhMinimum(6);
        $fix33->setPhMaximum(6.8);
        $fix33->setTemperatureMinimum(5);
        $fix33->setTemperatureMaximum(30);
        $fix33->setFrostResistanceType($manager->merge($this->getReference('frost-resistance-type-3')));
        $fix33->setSalinityToleranceType($manager->merge($this->getReference('salinity-tolerance-type-2')));
        $fix33->setTranslatableLocale('en');
        $manager->persist($fix33);

$fix34 = new Plant();
        $fix34->setCode('strawberries');
        $fix34->setName('Strawberries');
        $fix34->setDescription('Cabbage');
        $fix34->setScientificName('Fragaria vesca ');
        $fix34->setPlantFamily($manager->merge($this->getReference('plant-family-13')));
        $fix34->setProductivity(2);
        $fix34->setWidthSpacing(400);
        $fix34->setHeightSpacing(400);
        $fix34->setSoilVolume(0);
        $fix34->setSoilType($manager->merge($this->getReference('soil-type-2')));
        $fix34->setClimateType($manager->merge($this->getReference('climate-type-2')));
        $fix34->setIrrigationType($manager->merge($this->getReference('irrigation-type-3')));
        $fix34->setFertilizerType($manager->merge($this->getReference('fertilizer-type-3')));
        $fix34->setLifeCicleType($manager->merge($this->getReference('life-cicle-type-3')));
        $fix34->setRootDepth(200);
        $fix34->setPlantHeight(250);
        $fix34->setSeedDepth(0);
        $fix34->setPhMinimum(6);
        $fix34->setPhMaximum(7);
        $fix34->setTemperatureMinimum(0);
        $fix34->setTemperatureMaximum(35);
        $fix34->setFrostResistanceType($manager->merge($this->getReference('frost-resistance-type-2')));
        $fix34->setSalinityToleranceType($manager->merge($this->getReference('salinity-tolerance-type-2')));
        $fix34->setTranslatableLocale('en');
        $manager->persist($fix34);

$fix35 = new Plant();
        $fix35->setCode('artichoke');
        $fix35->setName('Artichoke');
        $fix35->setDescription('Cabbage');
        $fix35->setScientificName('Cynara scolymus ');
        $fix35->setPlantFamily($manager->merge($this->getReference('plant-family-11')));
        $fix35->setProductivity(0);
        $fix35->setWidthSpacing(1000);
        $fix35->setHeightSpacing(800);
        $fix35->setSoilVolume(0);
        $fix35->setSoilType($manager->merge($this->getReference('soil-type-2')));
        $fix35->setClimateType($manager->merge($this->getReference('climate-type-3')));
        $fix35->setIrrigationType($manager->merge($this->getReference('irrigation-type-3')));
        $fix35->setFertilizerType($manager->merge($this->getReference('fertilizer-type-2')));
        $fix35->setLifeCicleType($manager->merge($this->getReference('life-cicle-type-3')));
        $fix35->setRootDepth(300);
        $fix35->setPlantHeight(1000);
        $fix35->setSeedDepth(0);
        $fix35->setPhMinimum(6.5);
        $fix35->setPhMaximum(7.5);
        $fix35->setTemperatureMinimum(7);
        $fix35->setTemperatureMaximum(29);
        $fix35->setFrostResistanceType($manager->merge($this->getReference('frost-resistance-type-2')));
        $fix35->setSalinityToleranceType($manager->merge($this->getReference('salinity-tolerance-type-2')));
        $fix35->setTranslatableLocale('en');
        $manager->persist($fix35);

$fix36 = new Plant();
        $fix36->setCode('broccoli');
        $fix36->setName('Broccoli');
        $fix36->setDescription('Cabbage');
        $fix36->setScientificName('Brassica oleracea ');
        $fix36->setPlantFamily($manager->merge($this->getReference('plant-family-12')));
        $fix36->setProductivity(0);
        $fix36->setWidthSpacing(700);
        $fix36->setHeightSpacing(400);
        $fix36->setSoilVolume(0);
        $fix36->setSoilType($manager->merge($this->getReference('soil-type-2')));
        $fix36->setClimateType($manager->merge($this->getReference('climate-type-3')));
        $fix36->setIrrigationType($manager->merge($this->getReference('irrigation-type-3')));
        $fix36->setFertilizerType($manager->merge($this->getReference('fertilizer-type-2')));
        $fix36->setLifeCicleType($manager->merge($this->getReference('life-cicle-type-2')));
        $fix36->setRootDepth(3000);
        $fix36->setPlantHeight(900);
        $fix36->setSeedDepth(10);
        $fix36->setPhMinimum(6.5);
        $fix36->setPhMaximum(7);
        $fix36->setTemperatureMinimum(5);
        $fix36->setTemperatureMaximum(24);
        $fix36->setFrostResistanceType($manager->merge($this->getReference('frost-resistance-type-2')));
        $fix36->setSalinityToleranceType($manager->merge($this->getReference('salinity-tolerance-type-2')));
        $fix36->setTranslatableLocale('en');
        $manager->persist($fix36);

$fix37 = new Plant();
        $fix37->setCode('calçots');
        $fix37->setName('Calçots');
        $fix37->setDescription('Cabbage');
        $fix37->setScientificName('Allium Cepa');
        $fix37->setPlantFamily($manager->merge($this->getReference('plant-family-2')));
        $fix37->setProductivity(0);
        $fix37->setWidthSpacing(500);
        $fix37->setHeightSpacing(300);
        $fix37->setSoilVolume(4);
        $fix37->setSoilType($manager->merge($this->getReference('soil-type-3')));
        $fix37->setClimateType($manager->merge($this->getReference('climate-type-3')));
        $fix37->setIrrigationType($manager->merge($this->getReference('irrigation-type-2')));
        $fix37->setFertilizerType($manager->merge($this->getReference('fertilizer-type-2')));
        $fix37->setLifeCicleType($manager->merge($this->getReference('life-cicle-type-2')));
        $fix37->setRootDepth(250);
        $fix37->setPlantHeight(250);
        $fix37->setSeedDepth(0);
        $fix37->setPhMinimum(6);
        $fix37->setPhMaximum(6.8);
        $fix37->setTemperatureMinimum(5);
        $fix37->setTemperatureMaximum(25);
        $fix37->setFrostResistanceType($manager->merge($this->getReference('frost-resistance-type-2')));
        $fix37->setSalinityToleranceType($manager->merge($this->getReference('salinity-tolerance-type-2')));
        $fix37->setTranslatableLocale('en');
        $manager->persist($fix37);

        $manager->flush();
        
        
        
        //Translate to ca
        $fix1->setName('All');
        $fix1->setDescription('All');
        $fix1->setTranslatableLocale('ca'); // change locale
        $manager->persist($fix1);

        $fix2->setName('Julivert');
        $fix2->setDescription('Julivert');
        $fix2->setTranslatableLocale('ca'); // change locale
        $manager->persist($fix2);
        
        $fix3->setName('Porro');
        $fix3->setDescription('Chard');
        $fix3->setTranslatableLocale('ca');
        $manager->persist($fix3);
        
        $fix4->setName('Alfàbrega');
        $fix4->setDescription('Chard');
        $fix4->setTranslatableLocale('ca');
        $manager->persist($fix4);
        
        $fix5->setName('Albergínia');
        $fix5->setDescription('Chard');
        $fix5->setTranslatableLocale('ca');
        $manager->persist($fix5);
        
        $fix6->setName('Moniato');
        $fix6->setDescription('Chard');
        $fix6->setTranslatableLocale('ca');
        $manager->persist($fix6);
        
        $fix7->setName('Carbassó');
        $fix7->setDescription('Chard');
        $fix7->setTranslatableLocale('ca');
        $manager->persist($fix7);
        
        $fix8->setName('Carbassa');
        $fix8->setDescription('Chard');
        $fix8->setTranslatableLocale('ca');
        $manager->persist($fix8);
        
        $fix9->setName('Mongeta');
        $fix9->setDescription('Chard');
        $fix9->setTranslatableLocale('ca');
        $manager->persist($fix9);
        
        $fix10->setName('Blat-de-moro');
        $fix10->setDescription('Chard');
        $fix10->setTranslatableLocale('ca');
        $manager->persist($fix10);
        
        $fix11->setName('Meló');
        $fix11->setDescription('Chard');
        $fix11->setTranslatableLocale('ca');
        $manager->persist($fix11);
        
        $fix12->setName('Cogombre');
        $fix12->setDescription('Chard');
        $fix12->setTranslatableLocale('ca');
        $manager->persist($fix12);
        
        $fix13->setName('Pebrot');
        $fix13->setDescription('Chard');
        $fix13->setTranslatableLocale('ca');
        $manager->persist($fix13);
        
        $fix14->setName('Herva dels canonges');
        $fix14->setDescription('Chard');
        $fix14->setTranslatableLocale('ca');
        $manager->persist($fix14);
        
        $fix15->setName('Sindria');
        $fix15->setDescription('Chard');
        $fix15->setTranslatableLocale('ca');
        $manager->persist($fix15);
        
        $fix16->setName('Tomàquet');
        $fix16->setDescription('Chard');
        $fix16->setTranslatableLocale('ca');
        $manager->persist($fix16);
        
        $fix17->setName('Bleda');
        $fix17->setDescription('Chard');
        $fix17->setTranslatableLocale('ca');
        $manager->persist($fix17);
        
        $fix18->setName('Àpi');
        $fix18->setDescription('Chard');
        $fix18->setTranslatableLocale('ca');
        $manager->persist($fix18);
        
        $fix19->setName('Espinacs');
        $fix19->setDescription('Chard');
        $fix19->setTranslatableLocale('ca');
        $manager->persist($fix19);
        
        $fix20->setName('Enciam');
        $fix20->setDescription('Chard');
        $fix20->setTranslatableLocale('ca');
        $manager->persist($fix20);
        
        $fix21->setName('Patata');
        $fix21->setDescription('Chard');
        $fix21->setTranslatableLocale('ca');
        $manager->persist($fix21);
        
        $fix22->setName('Rave');
        $fix22->setDescription('Chard');
        $fix22->setTranslatableLocale('ca');
        $manager->persist($fix22);
        
        $fix23->setName('Remolatxa');
        $fix23->setDescription('Chard');
        $fix23->setTranslatableLocale('ca');
        $manager->persist($fix23);
        
        $fix24->setName('Ruca');
        $fix24->setDescription('Chard');
        $fix24->setTranslatableLocale('ca');
        $manager->persist($fix24);
        
        $fix25->setName('Pastanaga');
        $fix25->setDescription('Chard');
        $fix25->setTranslatableLocale('ca');
        $manager->persist($fix25);
        
        $fix26->setName('Ceba');
        $fix26->setDescription('Chard');
        $fix26->setTranslatableLocale('ca');
        $manager->persist($fix26);
        
        $fix27->setName('Nap');
        $fix27->setDescription('Chard');
        $fix27->setTranslatableLocale('ca');
        $manager->persist($fix27);
        
        $fix28->setName('Col comú');
        $fix28->setDescription('Chard');
        $fix28->setTranslatableLocale('ca');
        $manager->persist($fix28);
        
        $fix29->setName('Coliflor');
        $fix29->setDescription('Chard');
        $fix29->setTranslatableLocale('ca');
        $manager->persist($fix29);
        
        $fix30->setName('Endivia');
        $fix30->setDescription('Chard');
        $fix30->setTranslatableLocale('ca');
        $manager->persist($fix30);
        
        $fix31->setName('Pèsol');
        $fix31->setDescription('Chard');
        $fix31->setTranslatableLocale('ca');
        $manager->persist($fix31);

        $fix32->setName('Fava');
        $fix32->setDescription('Chard');
        $fix32->setTranslatableLocale('ca');
        $manager->persist($fix32);

        $fix33->setName('Col de Brusseles');
        $fix33->setDescription('Chard');
        $fix33->setTranslatableLocale('ca');
        $manager->persist($fix33);

		$fix34->setName('Maduixes');
        $fix34->setDescription('Chard');
        $fix34->setTranslatableLocale('ca');
        $manager->persist($fix34);
		
		$fix35->setName('Carxofa');
        $fix35->setDescription('Chard');
        $fix35->setTranslatableLocale('ca');
        $manager->persist($fix35);
		
		$fix36->setName('Bròquil');
        $fix36->setDescription('Chard');
        $fix36->setTranslatableLocale('ca');
        $manager->persist($fix36);
		
		$fix37->setName('Calçots');
        $fix37->setDescription('Chard');
        $fix37->setTranslatableLocale('ca');
        $manager->persist($fix37);
		
        $manager->flush();
        
        
                
        //Translate to es
        $fix1->setName('Ajo');
        $fix1->setDescription('Es una planta de otoño-invierno,  bianual aunque muchas veces se cultiva como anual, de ciclo largo y de siembra directa. <br/> Es un bulbo subterráneo formado por dientes reunidos en su base alrededor de un tallo, cubiertos por una película delgada. Sus raíces son numerosas y finas y alcanzan poca profundidad. Sus hojas verdes son planas, alargadas y plegadas. <br/> Es rico en sales minerales, azufre, encimas y vitaminas. Tiene propiedades medicinales. Es uno de los ingredientes fundamentales de la cocina mediterránea <br/> Existen variedades según el color: Blanco, Rosa o morado. <br/> Es una de las hortalizas más fáciles de cultivar, ya que requiere pocos cuidados y es muy resistente a cualquier tipo de suelo y clima. Se aconseja sembrar los dientes más grandes y con la parte plana hacia abajo. <br/> Los mejores ajos tanto en sabor como en tamaño, son los que se plantan en otoño. Para obtener unas buenas cabezas de ajo la planta debe pasar varias semanas a bajas temperaturas.  Se debe regar poco ya que el exceso de humedad puede pudrir los bulbos. <br/> El último riego, antes de recolectarlo, se debe realizar a los 15 o 20 días antes. La recolección se inicia cuando las hojas se han doblado y son de color amarillo. <br/>Es una planta pequeña que permite aprovechar espacios pequeños entre plantas más grandes y aumentar el rendimiento del huerto. Conveniente  asociarla con las fresas para que se desarrollen más sanas y dulces y con plantas que sufran ataques de pulgón para evitarlos gracias s sus propiedades insecticidas y fungicidas. ');
        $fix1->setTranslatableLocale('es');
        $manager->persist($fix1);

        $fix2->setName('Perejil');
        $fix2->setDescription('Julivert');
        $fix2->setTranslatableLocale('es');
        $manager->persist($fix2);
        
        $fix3->setName('Puerro');
        $fix3->setDescription('Es una planta de primavera - otoño, bianual aunque muchas veces se cultiva como  anual, de ciclo largo y se puede hacer plantel o siembra directa. <br/> Planta formada por hojas verdes planas, estrechas y alargadas. Sus flores son hermafroditas de color blanco rojizo y están agrupadas en umbelas. La parte comestible es el bulbo que crece bajo tierra, alargado de color blanco formado por finas membranas y terminado en un grupo de raíces pequeñas. <br/> Es rico en nutrientes y moléculas que protegen de las enfermedades cardiovasculares, vitamina C, E y fibra. Se le atribuyen propiedades diuréticas. <br/> Existen variedades según su tamaño: : Largas: puerro más fino que se siembra en otoño-invierno y Cortas: puerro más grueso que se siembra en verano. <br/> Planta rústica resistente a climas fríos. Le agradan los suelos profundos, sueltos y esponjosos. Se debe mantener una humedad constante durante su cultivo.  Para obtener bulbos gruesos y tiernos conviene regarlos regularmente y plantarlos  en zonas sombreadas los meses más calurosos. <br/> Un mes antes de su recolección es aconsejable realizar un blanqueamiento para eliminar el color verde de la base de las hojas. Se arranca la planta completa cuando adquiere un tamaño adecuado. <br/> Es recomendable asociarlo con la zanahoria ya que proporciona una protección mutua ante las puestas de mariposas cuyas orugas les dañan. Como es una planta vertical ocupa poco espacio, por lo que se puede sembrar en el borde de los bacanes o recipientes.');
        $fix3->setTranslatableLocale('es');
        $manager->persist($fix3);
        
        $fix4->setName('Albahaca');
        $fix4->setDescription('Chard');
        $fix4->setTranslatableLocale('es');
        $manager->persist($fix4);
        
        $fix5->setName('Berenjena');
        $fix5->setDescription('Es una planta de verano,  plurianual aunque muchas veces se cultiva como anual, de ciclo largo y se puede hacer plantel o siembra directa. <br/> Tiene un tallo rígido, velludo y ramificado; es frágil y se parte con facilidad por el peso de los frutos. Sus hojas verdes son grandes, alternas, ovaladas, con el envés cubierto de vellosidad blanca y en las nervaduras tienen pequeñas espinas. Sus flores en forma de estrella son de color morado y muy grandes. Su fruto comestible es alargado con la piel fina y brillante cuyo color depende de la variedad. La pulpa es blanca de textura espumosa con algunas semillas amarillas. <br/> Es rica en fibra, vitaminas, minerales (fósforo, magnesio y hierro), flavonoides y baja en calorias. Se le atribuyen propiedades diuréticas y un posible efecto anticancerígeno. Las hojas y el fruto verde tienen solanina (alcaloide tóxico) por lo que se  debe evitar el consumo de las partes verdes. <br/> Existen variedades según el color: oscuro, ralladas o de color más claro. Según la forma del fruto: largo, redondo, ovoideo. <br/> Es una planta exigente en luminosidad y volumen de tierra, tiene raíces muy potentes  que se extienden horizontalmente y puede alcanzar un tamaño muy grande. Si tiene las condiciones adecuadas es muy productiva. Es recomendable aclarar un poco la planta para favorecer la aireación ya que las hojas son muy frondosas y con la humedad se pueden desarrollar hongos. La poda favorece la formación de frutos y una maduración más rápida. <br/> El fruto se debe recolectar inmaduro, cuando es blando en la parte superior y antes de que se formen las semillas para evitar que tenga un gusto amargo. Se debe cortar no arrancar. <br/>Es recomendable asociarla con hortalizas de ciclo de cultivo corto durante las primeras semanas de plantación. Es difícil asociarla con otras hortalizas por el tamaño de la planta y las raíces.');
        $fix5->setTranslatableLocale('es');
        $manager->persist($fix5); 
        
        $fix6->setName('Boniato');
        $fix6->setDescription('Es una planta de verano,  plurianual aunque muchas veces se cultiva como anual, de ciclo largo y de siembra directa. <br/> Es una planta rústica, rastrera o trepadora cuya parte comestible es el tubérculo, de sabor dulce. Tiene abundantes hojas verdes en forma de corazón. Sus flores acampanadas son grandes, de color rojo por dentro y blanco por fuera. Los tubérculos pueden ser alargados o redondos con una extremidad puntiaguda. <br/> Es rica en carbohidratos, potasio y fibra. <br/> Existen variedades según el color de la pulpa: blancos y amarillos.  <br/> Es una planta sensible al frio, exigente en nutrientes y requiere bastante humedad. Tiene un crecimiento rápido e invasivo. <br/> La recolección comienza cuando las hojas empiezan a secarse. No dejar que pase el tiempo de cosecha para evitar la deformación de los tubérculos. Una vez arrancadas, se deben dejar al sol para que suelten al tierra. <br/> Es recomendable asociarla con plantas de ciclo corto debido a su rápido crecimiento.');
        $fix6->setTranslatableLocale('es');
        $manager->persist($fix6);

        $fix7->setName('Calabacín');
        $fix7->setDescription('Es una planta de verano,  anual, de ciclo largo y se puede hacer plantel o siembra directa. <br/> Planta herbácea rastrera de crecimiento indeterminado, con hojas grandes de forma triangular, ásperas y espinosas. Presenta flores masculinas y femeninas de color amarillo, vistosas y acampanadas. El fruto es alargado o esférico cuyo color varía según la variedad pero los más comunes son verdes oscuros, la piel es lisa y muy sensible. Su carne es blanca y tiene semillas. <br/> Es rica en vitamina C, ácido fólico, hierro, potasio y zinc. Es de fácil digestión y tiene propiedades diuréticas. <br/> Existen variedades según el color del fruto: verde, amarillo o blanco. <br/> Es una planta muy productiva exigente en materia orgánica, calor y luz. Precisa riego regular. Es conveniente entutorar la  planta para mejorar la ventilación y aprovechar mejor la iluminación. Es recomendable plantar como mínimo dos plantas y forzar la polinización con un pincel. <br/> El fruto se debe recolectar inmaduro para evitar que se vuelva fibroso y crezcan demasiado las semillas. Como crecen muy rápido, es recomendable recolectarlos diariamente. De esta manera se estimulará el crecimiento de frutos nuevos. La recolección diaria de las flores masculinas (dejando algunas para la polinización) estimula la producción de flores femeninas. <br/> Debido a su gran tamaño es recomendable asociarla con hortalizas de ciclos cortos para que convivan durante el inicio del cultivo. Después de su plantación no se recomienda ninguna planta de la familia de las solanáceas.');
        $fix7->setTranslatableLocale('es');
        $manager->persist($fix7);
        
        $fix8->setName('Calabaza');
        $fix8->setDescription('Es una planta de verano,  anual, de ciclo largo y se puede hacer plantel o siembra directa. <br/> Planta trepadora o rastrera de crecimiento indefinido de tallos flexibles, huecos, semicubiertos de pelillos. Las hojas en forma de corazón son lobuladas y tienen las nervaduras bien marcadas. Sus flores de color amarillo o naranja son grandes, de forma cónica y pétalos carnosos y pueden ser masculinas o femeninas. El fruto tiene diversas formas y colores según la variedad. La pulpa es densa,  de color anaranjado, textura firme y de sabor dulce. Contiene numerosas semillas lisas y ovaladas que son comestibles también. <br/> Es rica en vitamina A, otros antioxidantes, potasio y fibra. <br/> Existen variedades según la época de siembra: verano e invierno. <br/> Es una planta que crecen en cualquier tipo de suelo de calidad, siempre que mantenga la humedad y reciba mucho sol. Necesita mucho espacio para poderse desarrollar. Puede presentar problemas de polinización por lo que es recomendable forzarla con un pincel. La poda favorece el crecimiento de los frutos. <br/> El fruto se recoge en otoño cuando está maduro y con la cáscara dura y bien formada. Es recomendable dejarle un tallo de unos pocos centímetros. <br/> Como es una planta que crece mucho se puede asociar con hortalizas de ciclos cortos para que convivan al comienzo del cultivo. ');
        $fix8->setTranslatableLocale('es');
        $manager->persist($fix8); 
        
        $fix9->setName('Judía');
        $fix9->setDescription('Es una planta de verano, anual, de ciclo largo y se puede hacer plantel o siembra directa. <br/>  Planta trepadora cuyos finos tallos verdes se enroscan en cualquier soporte cercano. Sus hojas son compuestas. La flor es de color blanco y el fruto se encuentra en las vainas planas y alargadas, terminadas en punta. Al interior de las vainas se encuentran las semillas, entre 4 y 6 según la variedad. La vaina es comestible mientras la planta es verde, al madurar se endurece y los frutos serán muy grandes. El aspecto exterior de las vainas y de los frutos cambia según la variedad.  <br/>  Es rica en proteínas, fibra, vitaminas A,C,E y minerales. <br/>  Existen variedades según su crecimiento: Arbustivas o mata baja: tienen velocidad de crecimiento y desarrollo de vainas más rápido y ciclo de producción más corto y  trepadoras: tienen un ciclo más largo. Según el fruto:  largas o cortas, redondas o aplanadas, blancas, amarillas, verdes, pintas, moradas, violetas, negras. <br/>  Planta de clima cálido poco resistente a las heladas. Debido al tamaño de sus semillas tardan mucho en germinar, es recomendable remojarlas antes de sembrarlas para acelerar el proceso. Durante su cultivo conviene mantener húmeda la tierra para evitar los ataques de araña roja y obtener judías mas tiernas y jugosas. El riego es muy importante, si es poco y padecen sed pueden volverse duras y fibrosas; si es excesivo puede causar la caída de las flores. <br/>  Es uno de los cultivos más generosos, además se puede aprovechar el fruto cuando es tierno y cuando ya ha madurado.  La recolección comienza cuando las vainas tiernas alcanzan los 10 cm de largo y las secas 15 cm, se deben recolectar con las dos manos, con una coger la planta y con la otra la vaina para evitar hacerle daño a la planta. La recolección constante estimula el crecimiento de las vainas. Cuando aparecen protuberancias en las vainas es porque se ha dejado madurar más de lo recomendado. Una vez terminada la cosecha es aconsejable cortar la parte aérea de la planta y dejar las raíces para que los futuros cultivos aprovechen el nitrógeno fijado. <br/>  Es recomendable asociarla con el maíz porque le es útil para enfilarse. ');
        $fix9->setTranslatableLocale('es');
        $manager->persist($fix9);
        
        $fix10->setName('Maiz');
        $fix10->setDescription('Es una planta de verano, anual, de ciclo largo y se puede hacer plantel o siembra directa. <br/> Planta vigorosa con un tallo erguido, rígido y hueco de crecimiento rápido, compuesto por tres capas. Sus hojas son anchas y alargadas. Las flores masculinas están agrupadas en panículos terminales  y  las femeninas son axilares agrupadas en densas espigas envueltas en brácteas membranosas, son polinizadas por el viento. En cada mazorca, parte comestible de la planta, se ven las filas de granos, cuyo número puede variar de ocho a treinta. A cada grano le corresponde un largo hilo sedoso que sobresale por el extremo de la mazorca. El tallo de la planta está rematado en el extremo por una gran panoja de pequeñas flores masculinas; cuando el polen ha sido aventado, se vuelven secas y de color pardo. <br/> Es rico en hidratos de carbono y fibra, es una buena fuente de energía. Contiene algo de vitaminas B y C. <br/> Existen seis variedades principales: dentado, duro, blando, o harinoso, dulce, reventón y envainado.  <br/> Planta de temperaturas cálidas poco resistente al frio y exigente en riego. Necesita profundidad para desarrollar sus raíces.   <br/>  La recolección comienza 20 días después de la aparición de los primeros pelos de maíz cuando estos se han secado. Los granos deben estar tiernos, debe salir líquido lechoso cuando se pinchan con la uña. Las mazorcas se deben cosechar con la mano con un rápido y firme empujón hacia abajo.  Una vez terminada la cosecha es aconsejable retirar la planta para evitar que sigan absorbiendo los nutrientes de la tierra.  <br/>  Es recomendable asociarla con leguminosas trepadoras como las judías para que le sirva de soporte. ');
        $fix10->setTranslatableLocale('es');
        $manager->persist($fix10); 
        
        $fix11->setName('Melón');
        $fix11->setDescription('Es una planta de verano, anual, de ciclo largo y se puede hacer plantel o siembra directa. <br/> Planta enredadera de crecimiento muy rápido. Sus flores son amarillas y pueden ser masculinas, femeninas o hermafroditas. Las flores masculinas nacen primero y en grupo en las axilas de las hojas, las flores femeninas y hermafroditas nacen solitarias. El tallo está compuesto de nudos de los que brotan zarcillos, flores y hojas de las que se desprenden a su vez nuevos tallos. Las hojas y los tallos tienen un tacto áspero debido a la presencia de pelos. Los frutos son de gran tamaño, provistos de una corteza dura y presentan formas y colores variables. Las semillas que tiene en su interior son de color crema y están envueltas en una masa gelatinosa <br/> Es rico en azúcares, vitaminas A, C y ácidos orgánicos. Tiene propiedades antioxidantes. <br/> Existen variedades según la época de siembra: Redondos: cantalupos y Galia: no son tan exigentes en temperatura , tienen ciclos más cortos y se cultivan en climas fríos donde el verano es más corto. Ovalados: Piel verde de sapo o amarilla llamas o melones canarios: necesitan veranos más largos. <br/> Planta de clima cálido, muy sensible al frio. La luminosidad es determinante para la fecundación de las flores y la absorción de elementos nutritivos. Es  aconsejable juntar los  tallos ya que ayuda a ventilar las hojas disminuyendo el riesgo del ataque de hongos y acelera la maduración de los frutos. Una vez se ha completado la formación de los frutos es recomendable disminuir el riego para conseguir frutos más dulces. <br/> La recolección comienza cuando los frutos están maduros, no cuando han alcanzado un tamaño determinado. Si el fruto está maduro aparece una grieta o cicatriz en el extremo donde se inserta el pedúnculo y se separa fácilmente del tallo. <br/> Debido a su gran tamaño es recomendable asociarla con plantas de ciclo corto. ');
        $fix11->setTranslatableLocale('es');
        $manager->persist($fix11); 
        
        $fix12->setName('Pepino');
        $fix12->setDescription('Es una planta de verano,  anual, de ciclo largo y se puede hacer plantel o siembra directa. <br/>  Planta herbácea trepadora con un sistema radical muy potente. Tiene un tallo grueso, anguloso y espinoso, del cual nacen zarcillos que permiten que la planta se enfile. Las hojas son grandes, de color verde oscuro, cubiertas por pelos muy finos. Las flores son amarillas en forma de campana. El fruto es alargado de forma cilíndrica, de piel verde, la pulpa es acuosa de color blanco y las semillas están repartidas en su interior a lo largo del fruto. <br/>  Es rico en proteínas, minerales (potasio, sodio y fósforo) y  vitamina C. Es un excelente diurético natural por su alto contenido de agua. <br/>  Existen variedades según el fruto: Tipo Francés, tipo español o cortos y tipo holandés. <br/>  Planta de crecimiento rápido, con elevados requerimientos de humedad que no soporta las heladas. Los pepinos van adquiriendo un peso importante a medida que van creciendo, por lo que es conveniente atar los tallos principales a soportes colocados en posición vertical. <br/>  Si los frutos se recolectan cuando tienen menos de 15 cm de longitud se obtendrán pepinillos, ideales para encurtidos. Es aconsejable recolectarlos cuando estén bien formados y no esperar a que se vuelvan de color amarillo ya que esto es signo de que están formando semillas y hará que la planta pare su desarrollo y por lo tanto la producción. La cosecha dura todo el verano hasta que la planta acaba todos los nutrientes o las bajas temperaturas afectan su crecimiento. <br/>  Es recomendable asociarla con el maíz para que pueda enfilarse. Evitar plantarla con tomates o patatas.');
        $fix12->setTranslatableLocale('es');
        $manager->persist($fix12); 

        $fix13->setName('Pimiento');
        $fix13->setDescription('Es una planta de verano, plurianual aunque muchas veces se cultiva como  anual, de ciclo largo y se puede hacer plantel o siembra directa. <br/> Planta herbácea. Sus flores son pequeñas, blancas, formadas por cinco pétalos y crecen en racimos. Su fruto es una baya hueca cuya forma y color dependen de la variedad. En su interior tiene una semillas pequeñas de color blanco. <br/> Es rico en vitamina C, A, E, B6, carotenoides y ácido fólico. Alto contenido de antioxidantes. <br/> Existen variedades según su sabor: Pimientos dulces: verdes, rojos, amarillos y Pimientos picantes: guindillas, bichos. <br/> Planta que le gusta el calor, la luz y el suelo fértil. Cuando alcanza un estado de desarrollo es aconsejable ponerle tutores  para evitar que los tallos se doblen o se rompan por el peso de los frutos. Se puede podar para limitar el número de brotes. <br/> Es recomendable recolectar algunos pimientos verdes para aumentar la producción de flores y frutos. Los demás dejarlos madurar hasta que se vuelvan rojos o amarillos. El fruto debe cortarse, no arrancarse y dejarle 2 o 3 centímetros de tallo. <br/> Es recomendable asociarla con plantas de ciclo corto para que convivan al comienzo del cultivo. ');
        $fix13->setTranslatableLocale('es');
        $manager->persist($fix13); 

        $fix14->setName('Canonigos');
        $fix14->setDescription('Es una planta de otoño-invierno,  anual, de ciclo largo y  de siembra directa. <br/> Planta herbácea de crecimiento silvestre, con pequeñas  hojas alargadas dispuestas en roseta, de color verde intenso y brillante. Las hojas son comestibles y tienen gusto ligeramente ácido. <br/> Es rica en vitamina C y ácido fólico. Tiene propiedades diuréticas, relajantes, depurativas y laxantes. <br/> Existen variedades según el tamaño de las hojas: Hoja grande y hoja pequeña. <br/> La semilla germina con dificultad, por esto es recomendable ponerla en remojo antes de sembrarla. No se adapta bien al calor ni a la falta de agua. <br/> Se recomienda recolectarla justo antes de consumirla porque es una planta delicada. <br/> Es una planta pequeña, por lo que se puede plantar en los intervalos de plantas con ciclos largos.');
        $fix14->setTranslatableLocale('es');
        $manager->persist($fix14); 

        $fix15->setName('Sandia');
        $fix15->setDescription('Chard');
        $fix15->setTranslatableLocale('es');
        $manager->persist($fix15); 

        $fix16->setName('Tomate');
        $fix16->setDescription('Chard');
        $fix16->setTranslatableLocale('es');
        $manager->persist($fix16);

        $fix17->setName('Acelga');
        $fix17->setDescription('Es una planta de primavera-otoño, bianual aunque muchas veces se cultiva como anual, de ciclo largo y se puede hacer plantel o siembra directa. <br/> Planta de hojas verdes grandes de forma oval, amplias y jugosas. Sus tallos son blancos, planos y anchos. Toda la planta es comestible, no forma raíz o fruto comestible. <br/>  Es rica en vitamina A, C y K, sodio, calcio, hierro, magnesio, fósforo y potasio. Aporta ácido fólico. <br/> Existen variedades según la época de siembra: primavera y otoño y según sus tallos: Verde de penca blanca ancha, Verde de penca blanca alargada, Verde Bressane, Amarilla de Lyón y  Amarilla de penca blanca. <br/> Es una hortaliza muy productiva y su cultivo requiere pocos cuidados.  Es aconsejable mantener el suelo húmedo, si pasan sed se vuelven fibrosas y tienden a espigarse. Necesita un recipiente grande. <br/> Se puede recolectar la planta completa o recolectar las hojas a medida que van teniendo un buen tamaño. Es recomendable cortar las hojas con un cuchillo bien afilado para no hacerle daño a la planta. <br/> Es conveniente asociarla con plantas de ciclo corto y de raíces superficiales para evitar que compitan por los nutrientes. ');
        $fix17->setTranslatableLocale('es');
        $manager->persist($fix17);

        $fix18->setName('Apio');
        $fix18->setDescription('Es una planta de primavera-invierno,  bianual aunque muchas veces se cultiva como anual, de ciclo largo y se puede hacer plantel o siembra directa. <br/> Planta herbácea de tallo estirado, hueco y acanalado. Sus hojas  verde amarillosas brotan en forma de corona y son lobuladas, lisas y brillantes. Las flores son blancas o blanco verdosas de cinco pétalos y están reunidas en umbelas. Es de textura crujiente. <br/> Es diurético, carminativo y depurador de la sangre. Rico en vitamina C, ácido fólico y algunos minerales (potasio, calcio, sodio). <br/> Existen variedades según el color: verdes que necesitan se le haga la práctica de blanqueo si se quieren obtener pencas blancas y variedades amarillas que no necesitan de esa práctica, necesitan menos espacio para crecer. <br/> No es muy exigente en el suelo, pero requiere buen drenaje ya que es necesario mantenemos húmedo para obtener plantas más crujientes y gustosas. Le favorecen las heladas porque la hacen más gustosa pero en algunos casos hace que desarrolle la flor más rápido. <br/> La recolección comienza cuando las plantas son firmes y compactas. Se puede cortar toda la planta o ir cosechando a medida que se va consumiendo usando un cuchillo bien afilado para evitar dañar la planta. <br/> Es recomendable asociarlo con lechugas y rábanos porque se benefician mucho. ');
        $fix18->setTranslatableLocale('es');
        $manager->persist($fix18);

        $fix19->setName('Espinacas');
        $fix19->setDescription('Es una planta de primavera- otoño,  anual, de ciclo corto y se puede hacer plantel o siembra directa. <br/> Planta que forma una roseta de hojas verdes oscuras con un tallo muy fino y de formas variables y planas o rizadas según la variedad. <br/> Es rica en vitaminas y antioxidantes. <br/> Existen variedades según la época de siembra: Espinaca de otoño, Espinaca de verano, Espinaca de invierno. <br/> Es una planta de crecimiento rápido, sencilla de cultivar y no necesita casi espacio. Las temperaturas demasiado frías hacen parar el crecimiento. El riego debe ser regular. <br/> Se puede recolectar la planta entera cuando tenga un buen tamaño o manualmente por hojas, cuando estén verdes y tiernas. La planta rebrota varias veces. <br/> Como es una planta de crecimiento rápido, es recomendable asociarla con cultivos de crecimiento lento. ');
        $fix19->setTranslatableLocale('es');
        $manager->persist($fix19);

        $fix20->setName('Lechuga');
        $fix20->setDescription('Es una planta de primavera- otoño, anual, de ciclo corto y se puede hacer plantel o siembra directa. <br/> Planta de crecimiento rápido, formada por numerosas hojas grandes blandas que forman una roseta, con tallo corto, cilíndrico y ramificado. Sus flores son amarillas. <br/> Es rica en vitaminas  B, A , potasio y calcio. <br/> Existen variedades según el tipo de hoja: Lechuga Romana o larga: de hojas grandes y alargadas; Hoja de roble: tiernas y rizadas; Batavia: tiene hojas arrizadas; Trocadreo: hojas lisas; Iceberg: forma de ovillo, muy densa. <br/> Planta que se adapta  a la mayoría de condiciones climáticas, por esto es uno de los cultivos más populares en los balcones y terrazas. Con las altas temperaturas las hojas pueden tener amargo y se forma el tallo donde se producen flores, el cual se alarga rápidamente (espigar). La semilla de la lechuga no resiste un almacenamiento prolongado por esto es recomendable obtener nuevas semillas cada vez que se quiera sembrar. <br/> Se puede recolectar la planta completa o por hojas a medida que se va consumiendo.  <br/> Como es una planta de ciclo corto es recomendable asociarla con plantas de ciclo largo, para que cuando estos hayan crecido la lechuga ya se haya cosechado. ');
        $fix20->setTranslatableLocale('es');
        $manager->persist($fix20);

        $fix21->setName('Patata');
        $fix21->setDescription('Es una planta de primavera - otoño, anual, de ciclo largo y de siembra directa. <br/> Planta herbácea de hojas alternas, compuestas, con pelos en la superficie y dispuestas en forma de espiral en los tallos. Las flores son hermafroditas, de color blanco, formadas por cinco pétalos.  Los tubérculos, donde se almacenan los nutrientes, son redondeados y carnosos. <br/> Es rica en hidratos de carbono, magnesio, potasio, vitamina B y C. <br/> Existen variedades según el color de la piel: rojo, amarillo o blanco. Y según el color de la carne: amarillo o blanco.  <br/> Hortaliza de clima fresco, poco resistente a las heladas. Los riegos deben ser frecuentes, pero en los sitios calurosos es aconsejable disminuirlos para evitar que se dañen los tubérculos. Su semilla es la propia patata de la cual pueden crecer de 6 a 12 tubérculos. No se deben plantar tubérculos enfermos o defectuosos. <br/> Las patatas tempranas se recolectan cuando las primeras flores comiencen a abrirse. Las otras variedades se recolectan cuando la parte aérea de la planta se marchita. Los tubérculos se deben dejar al sol un día para que se sequen y la piel se endurezca. Si se dejan mas de este tiempo tomarán un color verde y se volverán amargas y venenosas por la solanina. Una vez terminada la cosecha se recomienda dejar descansar la tierra dos semanas para que la solanina, toxina de las solanáceas, no afecte las futuras plantaciones. <br/> Es recomendable asociarla con plantas de ciclo corto para que convivan al comienzo de la plantación. ');
        $fix21->setTranslatableLocale('es');
        $manager->persist($fix21);

        $fix22->setName('Rábano');
        $fix22->setDescription('Es una planta de primavera - otoño, anual, de ciclo corto y de siembra directa. <br/> Planta formada por un tallo corto del cual nacen pequeñas hojas de color verde intenso que forman una roseta.  Las flores están compuestas de cuatro pétalos y se agrupan en racimos. El fruto es la raíz gruesa, carnosa, de pulpa blanca y piel de colores vistosos y sabor picante debido a la presencia de aceite de mostaza en su composición. <br/> Es rico en hierro y vitamina C. <br/> Existen variedades según el tamaño del fruto: raíces grandes: rábanos invernales, de color negro, blanco, rojo o rojo y blanco. Raíces pequeñas: rábanos estivales. <br/> Planta de raíz de fácil cultivo, que no ocupa mucho espacio y crece con gran rapidez. Se adapta a cualquier tipo de clima y de suelo.  Necesita riego constante para evitar que los frutos se vuelvan duros y fibrosos. <br/> Durante el verano es aconsejable no dejar pasar el tiempo de la cosecha porque las raíces adquieren un tamaño excesivo y un sabor picante. Si llueve se rajan y después se ahuecan. Se cosecha manualmente arrancando la planta completa. <br/> Debido a su tamaño y a la duración de su ciclo se puede asociar con plantas de ciclo largo. Las esquinas libres son un buen sitio para sembrarlos. ');
        $fix22->setTranslatableLocale('es');
        $manager->persist($fix22);

        $fix23->setName('Remolacha');
        $fix23->setDescription('Es una planta de primavera - otoño, bianual aunque muchas veces se cultiva como  anual, de ciclo largo y se puede hacer plantel o siembra directa. <br/>  Planta formada por diversos tallos angulares,  rojizos y delgados. Sus hojas verdes son grandes, ovales y tienen el nervio central de color rojo. Las flores son pequeñas y verdosas agrupadas en una espiga. La raíz es esférica, bulbosa y carnosa, aunque en algunas variedades puede ser alargada o plana, su sabor el dulce. Las hojas y la raíz son comestibles.  <br/>  Es rica en : potasio, ácido fólico, fibra, azúcar. <br/>  Existen variedades según la forma de la raíz: alargadas, redondas o aplanadas. Según el uso: para la alimentación humana, pienso para ganado y para la producción de Azúcar. <br/>  Planta de cultivo fácil, de clima fresco y templado que tolera bien las heladas. Con temperaturas superiores a los 25ºC se forman anillos blancos en la raíz y baja el contenido de azúcar. Es poco exigente en nutrientes. Sus raíces son superficiales, por lo que se adapta bien a los cultivos en macetas. Tardan mucho en germinar por lo que es aconsejable dejar en remojo las semillas antes de sembrarlas. <br/>  La planta se recolecta completa, cortar las hojas de las remolachas dejando una pulgada de tallos en la raíz. Si se deja más del tiempo necesario se vuelve fibrosa y menos dulce. <br/>  Es incompatible con la acelga y espinaca. ');
        $fix23->setTranslatableLocale('es');
        $manager->persist($fix23);

        $fix24->setName('Rúcula');
        $fix24->setDescription('Es una planta de verano, aunque muchas veces se cultiva como  anual, de ciclo corto y de siembra directa. <br/> Planta silvestre, ramosa  muy común que se adapta a todos los suelos. Sus hojas verdes oscuras son pequeñas y  redondas agrupadas en forman de rosa. Sus flores son blancas formadas por cuatro pétalos. Su sabor es fuerte, ligeramente picante y amargo. Es aconsejable controlar su crecimiento para que no invada el huerto. <br/> Es rica en vitamina C, potasio, hierro. <br/> Existen dos variedades: silvestres y cultivadas. <br/> Planta fácil de cultivar que crece rápidamente. Es bastante resistente al frío y tiene tendencia a florecer rápidamente con las altas temperaturas. El exceso de calor y el sol hacen que el gusto sea excesivamente amargo. <br/> Antes de recolectarla es conveniente regar abundantemente unos días antes para conseguir hojas tiernas. Se puede cosechar la planta completa o hacerlo a medida que se van consumiendo cosechando las hojas exteriores. <br/> Como es una planta de ciclo corto y tolera bien la sombra es recomendable asociarla con plantas de ciclo mas largo. ');
        $fix24->setTranslatableLocale('es');
        $manager->persist($fix24);

        $fix25->setName('Zanahoria');
        $fix25->setDescription('Chard');
        $fix25->setTranslatableLocale('es');
        $manager->persist($fix25);

        $fix26->setName('Cebolla');
        $fix26->setDescription('Es una planta de otoño-invierno,  bianual aunque muchas veces se cultiva como anual, de ciclo largo y se puede hacer plantel o siembra directa. <br/>  Planta de tallo reducido de porte vertical, con hojas cilíndricas, huecas y terminadas en punta. Tiene raíces cortas y poco ramificadas. El fruto es un bulbo esférico, formado por numerosas capas gruesas y carnosas al interior, recubiertas de membranas secas, delgadas y transparentes, que son base de las hojas. <br/>  Es rica en nutrientes, vitamina B, C y E, glúcidos y fibra. <br/>  Existen muchas variedades de cebolla y presentan bulbos de diversas formas y colores. Las más conocidas son las variedades según la época de siembra: variedad de invierno y variedad de verano. <br/> Es una planta de climas templados que se adapta a diferentes clases de suelos y no necesita casi riego. Es recomendable recortar la mitad de las hojas y un centímetro de las raíces antes de trasplantar para tener un mejor enraizado. No colocar los ejemplares muy enterrados. Su sistema radical se adapta muy bien al cultivo en macetas. <br/>  Una vez los bulbos están formados y las hojas se secan y empiezan a doblarse, es aconsejable dejar de regar. Una vez recolectadas las cebollas se deben dejar secar en la tierra. <br/>  Es recomendable asociarla con la zanahoria para evitar el ataque de la mosca de la zanahoria. Debido a su porte vertical de puede intercalar con otros cultivos. ');
        $fix26->setTranslatableLocale('es');
        $manager->persist($fix26);

        $fix27->setName('Nabo');
        $fix27->setDescription('Es una planta de otoño - invierno, bienal aunque muchas veces se cultiva como  anual, de ciclo corto y de siembra directa. <br/> Planta formada por hojas grandes de color verde azulado y bordes dentados. Sus flores son de color amarillo brillante compuestas por 4 pétalos. El fruto comestible es la raíz, pivotante, carnosa, bulbosa, de carne blanca o amarillenta, cubierta por una piel fina y de sabor dulce o picante. <br/> Es rico en vitamina C y fibra. <br/> Existen variedades según la forma: alargados y redondos. Y el color: blancos, rojos o negros. <br/> Planta de cultivo fácil, de rápido crecimiento, de clima templado y exigente en riego. Con el calor se vuelven duros, fibrosos y dan semillas. <br/> Se deben recolectar cuando su diámetro aún no sobrepasa el de una pelota de tenis para evitar que se dañe la calidad para el consumo no (a mayor tamaño menos calidad para el consumo). <br/> Es recomendable asociarla con plantas de ciclo largo para que convivan al comienzo del cultivo.');
        $fix27->setTranslatableLocale('es');
        $manager->persist($fix27);

        $fix28->setName('Col común');
        $fix28->setDescription('Es una planta de invierno-primavera- otoño,  bianual aunque muchas veces se cultiva como anual, de ciclo largo y se puede hacer plantel o siembra directa. <br/> Planta rústica de gran tamaño formada por un tallo principal del cual crecen hojas hacia fuera. Las hojas son grandes muy divididas y de consistencia carnosa que  forman un característico cogollo compacto que es la parte comestible. Las raíces son fibrosas y abundantes. <br/> Es rica en vitamina A,C y minerales.  <br/> Existen variedades según las características de las hojas: Hoja Lisa, hoja arrizada (coles de Milán) y hoja rojiza o Lombardas. <br/> Planta rústica de crecimiento lento que se desarrollan bien en casi todos los climas. Le gustan los suelos ricos en materia orgánica y húmedos, por lo que el riego debe ser regular. <br/> La recolección comienza cuando el cogollo está bien formado, compacto y tiene un buen tamaño. <br/> Es recomendable asociarla con plantas de ciclos cortos ya que es una planta de crecimiento lento. ');
        $fix28->setTranslatableLocale('es');
        $manager->persist($fix28);
        
        $fix29->setName('Coliflor');
        $fix29->setDescription('Es una planta de otoño- invierno,  anual, de ciclo largo y se puede hacer plantel o siembra directa. <br/> Sus hojas son anchas y ligeramente erguidas, más claras y menos risadas que las del brócoli. No forma brotes laterales. El cogollo o parte comestible está formado por un conjunto de pequeños botones florales carnosos blancos y compactos. <br/> Es rico en vitamina C, B6 y K, potasio, calcio, ácido fólico y fibra. <br/> Existen variedades según la época de siembra: Coliflores invernales: color blanco, amarillo y rojo, Coliflor de otoño, Coliflor de invierno,  Coliflor de primavera. <br/> Es una planta de clima frio y riego frecuente. Es conveniente tapar el cogollo con las hojas exteriores para evitar quemaduras de sol y para prevenir que la cabeza se ponga verde y desarrolle un sabor desagradable. Cualquier interrupción (demasiado frío, calor, sequía o plantas dañadas) puede dañar el desarrollo de la parte comestible.  <br/> Se debe recolectar cuando el cogollo tiene consistencia firme y dura. No se debe dejar que madure más de lo recomendado. Cortar el fruto dejando unas hojas externas pegadas a la cabeza para protegerla. <br/> Como es una planta que crece bastante es aconsejable asociarla con plantas de ciclos más cortos. ');
        $fix29->setTranslatableLocale('es');
        $manager->persist($fix29);
                
        $fix30->setName('Escarola');
        $fix30->setDescription('Es una planta de otoño- invierno,  bianual aunque muchas veces se cultiva como anual, de ciclo largo y se puede hacer plantel o siembra directa. <br/>  Sus hojas son rizadas y de color amarillo y verde. Están unidas por la base y divididas en segmentos estrechos con bordes muy dentados con una gruesa nervadura central.  En el centro desarrolla un corazón blanco bastante compacto que reduce el característico sabor amargo de las hojas.  <br/>  Es rica en potasio, ácido fólico, hierro, calcio, magnesio y antioxidantes. <br/>  Existen variedades según la forma de las hojas: Hoja lisa y ancha: hojas más grandes, onduladas y no tan recortadas. Hoja rizada: son más grandes  y resistentes al frío.  <br/>  Es una planta de clima frio que no tolera el exceso de calor. Su sabor amargo suele aumentar con las altas temperaturas.  Es necesario blanquearla para que el centro tome un color blanco, si se siembran muy juntas no es necesario realizarlo. <br/>  Se cosecha una vez blanqueada y se puede cortar la planta completa o cortar las hojas a medida que se vaya a consumir. Para obtener escarolas más dulces es necesario esperar que pasen días de frio antes de cosecharlas. <br/>  Es recomendable asociarla con plantas de ciclos más largos.');
        $fix30->setTranslatableLocale('es');
        $manager->persist($fix30);
        
        $fix31->setName('Guisantes');
        $fix31->setDescription('Es una planta de otoño - invierno,  anual, de ciclo largo y se puede hacer plantel o siembra directa. <br/> Planta trepadora de hojas verdes terminadas en zarcillos que ayudan a la planta a engancharse a los tutores.  Las flores son blancas y tienen 5 sépalos y las vainas posteriores a su fecundación. Las vainas tienen de 5 a 10 cm de largo y suelen tener de 4 a 10 semillas, tienen forma y color variable según variedades.  <br/> Es rico en vitamina A, B y C, proteínas, sales minerales, potasio, hierro, zinc, luteína y ácido fólico. <br/> Existen variedades según la época de siembra: Tempranos y tardíos.  Según el crecimiento: enanas  y de crecimiento indeterminado. Según las preferencias de consumo: Tirabeques (consumir con la vaina) y  para desgranar. <br/> Es una planta poco exigente en materia orgánica, de clima fresco y húmedo. Cuando aparezcan los primeros zarcillos es recomendable guiar la planta con unas cañas para que se enfile. <br/> Se deben usar las dos manos para recolectar los guisantes, sujetando la planta con una mano y la vaina con la otra para no dañar la planta. Cuando los guisantes son tiernos, tienen un sabor ligeramente dulce y se pueden consumir crudos. El momento ideal para la recolección es cuando las vainas están llenas,  pero no se deben dejar demasiado tiempo para que los granos no se endurezcan  Una vez terminada la recolección  es aconsejable cortar las plantas al nivel del suelo con el objetivo de dejar que las raíces se descompongan para que aporten al suelo el nitrógeno que han fijado y que sea aprovechado por los cultivos siguientes.  <br/> No es recomendable asociarla con el ajo, cebolla o puerro. Se puede asociar con plantas de ciclo corto. ');
        $fix31->setTranslatableLocale('es');
        $manager->persist($fix31);
        
        $fix32->setName('Haba');
        $fix32->setDescription('Es una planta de otoño- invierno,  anual, de ciclo largo y se puede hacer plantel o siembra directa. <br/>  Planta robusta de tallo fuerte rectangular que desarrolla follaje abundante. Las hojas son compuestas, divididas en hojas más pequeñas. El fruto es una legumbre formada por una vaina carnosa de color verde, de 15 a 25 cm de largo, en cuyo interior se hallan 6 ó 7 semillas ovales, aplanadas, de color verde pálido o blanco cremoso. Las flores blancas son axilares y crecen agrupadas en racimos, tienen una mancha negra en los pétalos.  <br/> Es rica en calcio, hierro, fibra y vitaminas B1 y B2. Buena fuente de proteínas. <br/>  Existen variedades según su ciclo y tamaño. <br/> Planta rústica poco exigente que crece bien en la mayoría de las tierras.  El exceso de frio o humedad en la floración puede impedir el desarrollo de las flores y retrasar el crecimiento de las vainas. <br/>  Se pueden recolectar pequeñas y tiernas para consumir la vaina. Cuando la vaina crece y se desarrollan las semillas se extraen las habas del interior. Deben recolectarse cuando las vainas estén todavía verdes y antes de que la piel de las semillas empiece a volverse áspera. Conviene recolectarlas a medida que engrosan los granos con el objetivo de que sigan floreciendo y desarrollando frutos nuevos. <br/> Es recomendable asociarla con maíz, lechuga, espinaca y patata. Es un  buen cultivo protector para otras plantas más delicadas ya que evita que les dé el viento.');
        $fix32->setTranslatableLocale('es');
        $manager->persist($fix32);

		$fix33->setName('Col de Bruselas');
        $fix33->setDescription('Es una planta de otoño- invierno,  bianual aunque muchas veces se cultiva como anual, de ciclo largo y se puede hacer plantel o siembra directa. <br/> Planta de gran altura formada por un tallo principal del cual nacen pequeños cogollos de forma ovalada compuestos  por un tallo corto y engrosado, que sostiene numerosas hojas lisas, pecioladas dispuestas una sobre otra, donde las hojas exteriores cubren y protegen la yema terminal y las hojas más jóvenes. <br/> Es rica en vitamina A,C y ácido fólico. <br/> Existen dos variedades híbridas y estándar. <br/> Como alcanza grandes alturas es recomendable usar tutores en lugares con mucho viento. Cuando las hojas inferiores comienzan a amarillarse es aconsejable arrancarlas. <br/> Se recolectan cuando los cogollos inferiores tienen un tamaño adecuado ya que estos maduran primero. Se pueden cosechar a medida que van madurando o si hay posibles nevadas es preferible cosechar la planta entera.');
        $fix33->setTranslatableLocale('es');
        $manager->persist($fix33);

		$fix34->setName('Fresa');
        $fix34->setDescription('Es una planta de primavera- verano, plurianual aunque muchas veces se cultiva como anual, de ciclo largo y se puede hacer plantel o siembra directa. <br/> Planta que tiene una roseta de base de la cual nacen  las hojas vellosas y los tallos florales. Se multiplica fácilmente por si sola a través de ramificaciones rastreras  (estolones) que produce la misma mata. Las flores son hermafroditas de color blanco, formadas por cinco pétalos. Lo que conocemos como el fruto es un receptáculo floral rojo, engrosado, de sabor dulce y carnoso donde se concentran los nutrientes del  tallo floral, siendo las pequeñas semillas que se encuentran sobre este los frutos secos. <br/> Es rica en Vitamina C, hidratos de carbono, potasio, magnesio, calcio y agua. Ayudan al organismo a depurarse, mejoran el estado de la piel y de los dientes. <br/> Existen más de mil variedades según el tamaño del fruto y la época de cultivo. <br/> Planta exigente en materia orgánica y riego. La floración es muy larga y se solapa con la producción. En balcones y terrazas se pueden sembrar en macetas con aberturas laterales para aumentar producción en poco espacio. En climas muy fríos se pueden proteger con túneles. El cultivo de fresas a través de semillas da muchos problemas. <br/> Los frutos se recolectan cuando tienen un tamaño adecuado y han madurado. <br/> Como es una planta de ciclo largo, es recomendable asociarla con plantas de ciclo corto al inicio del cultivo. El cultivo de ajos entre las fresas hace que se vuelvan más resistentes y estimula su desarrollo. ');
        $fix34->setTranslatableLocale('es');
        $manager->persist($fix34);
		
		$fix35->setName('Alcachofa');
        $fix35->setDescription('Es una planta de primavera-invierno,  plurianual aunque muchas veces se cultiva como anual, de ciclo largo y se puede hacer plantel o siembra directa. <br/> Planta de tallos gruesos, rectos, acanalados y ramificados que superan el metro de altura. Sus hojas son grandes con los nervios centrales muy marcados, cubiertas de pelos suaves y blanquecinos que le dan un aspecto pálido. Sus flores son de tipo terminal en forma de rosetón, muy gruesas, recubiertas por escamas membranosas y carnosas en la base, que son la parte comestible de la planta. <br/> Es rica en vitamina B y hierro. Tiene propiedades diuréticas, depurativas y medicinales. <br/> Existen variedades según la forma: esférica u oval,  según el tamaño y color del capítulo: verde o violeta. <br/> Necesita pasar frío para iniciar la formación de los frutos: la flor. No resiste las heladas ni las altas temperaturas, produciendo frutos con sabor amargo y aspecto poco atractivo. <br/> La recolección es escalonada según van estando apunto las flores. La primera flor en nacer es la flor madre, la cual se debe cosechar cuando han comenzado a salir las otras flores de la planta para no parar la producción. ');
        $fix35->setTranslatableLocale('es');
        $manager->persist($fix35);
		
		$fix36->setName('Brocoli');
        $fix36->setDescription('Es una planta de primavera, otoño-invierno,  bianual aunque muchas veces se cultiva como anual, de ciclo largo y se  puede hacer plantel o siembra directa. <br/> Planta de tallos carnosos y gruesos con hojas verdes grandes laterales, lobuladas, con el nervio central blanco y carnosas que tienen proteínas capaces de hacerles almacenar agua y nutrientes. Las flores tienen 4 pétalos en forma de cruz y son de color amarillo. Forma una cabeza de inflorescencia principal  y otras laterales de color verde oscuro. El fruto es  la inflorescencia principal que está constituida por flores agrupadas en racimos de color verde oscuro. <br/> Es rico en vitamina C, ácido fólico, potasio, calcio, fósforo, magnesio y hierro. <br/> Existen variedades según la duración del cultivo: tempranas, de media estación y tardías. <br/> Le gustan las temperaturas frescas, las altas temperaturas causan el crecimiento prematuro de las flores. El riego debe ser regular. <br/> La recolección comienza cuando las inflorescencias están firmes, compactas y de color verde oscuro. Se debe cortar con las hojas necesarias para cubrir el fruto. Si se deja madurar demasiado se vuelve blando y tiende a espigarse. <br/> Es recomendable asociarla con el tomate para evitar ataque de la mosca de la col');
        $fix36->setTranslatableLocale('es');
        $manager->persist($fix36);
		
		$fix37->setName('Calçots');
        $fix37->setDescription('Es una planta de otoño-invierno,  bianual, de ciclo largo y se puede hacer plantel o siembra directa. <br/> Es una variedad de cebolla dulce y tierna, que se va cubriendo con tierra (calzando) a medida que va creciendo con el objetivo de obtener una cebolla alargada. Sus hojas alargadas son de color verde oscuro y su base es de color blanco y es la parte comestible. <br/> Es rico en de vitaminas y minerales.  Tiene propiedades diuréticas, tonificantes, digestivas y afrodisiacas. <br/> El cultivo del calçot tiene dos fases: La primera es la siembra de una cebolla, la cual se recoge cuando ha germinado y se guarda unos meses. La segunda se realiza  cuando llega la época de plantación, septiembre, se vuelve a sembrar la cebolla y a medida que van creciendo los brotes se debe ir calzando para obtener un fruto blanco y tierno. En los huertos urbanos es recomendable  realizar el cultivo desde la segunda fase. <br/> La recolección comienza cuando los brotes tengan un buen tamaño. Una vez recolectados se separan los brotes. <br/> Es recomendable evitar asociarla con las habas y guisantes porque no son compatibles. ');
        $fix37->setTranslatableLocale('es');
        $manager->persist($fix37);
		
        $manager->flush();
    }

    public function getOrder()
    {
        return 2; // the order in which fixtures will be loaded
    }
}