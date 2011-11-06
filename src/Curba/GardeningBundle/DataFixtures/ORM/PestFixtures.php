<?php

namespace Curba\GardeningBundle\DataFixtures\ORM;

use Doctrine\Common\DataFixtures\AbstractFixture;
use Doctrine\Common\DataFixtures\OrderedFixtureInterface;
use Curba\GardeningBundle\Entity\Pest;

class PestFixtures extends AbstractFixture implements OrderedFixtureInterface
{
    public function load($manager)
    {
        //$this->addReference('pest-type-insects', $fix1);
        //$this->addReference('pest-type-fungi', $fix2);
        //$this->addReference('pest-type-acarus', $fix3);
        //$this->addReference('pest-type-bacteria', $fix4);
        //$this->addReference('pest-type-other', $fix5);  

//(1,'Aphis brassicae',1,'2011-01-08 18:05:39','2011-01-08 18:15:09'),
//(1,'Pugó','','','','','ca','pugo'),(1,'Pugned','','','','','en','pugned'),(1,'Pulgón','','','','','es','pulgon'),
        $fix1 = new Pest();
        $fix1->setName('Pugned');
        $fix1->setDescription('Pugned');
        $fix1->setScientificName('Aphis brassicae');
        $fix1->setSymptom('');
        $fix1->setConsequence('');
        $fix1->setPestType($manager->merge($this->getReference('pest-type-insects')));
        $fix1->setTranslatableLocale('en');
        $manager->persist($fix1);

//(2,'Trialeurodes vaporariorum',1,'2011-01-08 18:06:13','2011-01-08 18:22:15'),
//(2,'Mosca blanca','','','','','ca','mosca-blanca'),(2,'White fly','','','','','en','white-fly'),(2,'Palomita','','','','','es','palomita'),
        $fix2 = new Pest();
        $fix2->setName('White fly');
        $fix2->setDescription('White fly');
        $fix2->setScientificName('Trialeurodes vaporariorum');
        $fix2->setSymptom('');
        $fix2->setConsequence('');
        $fix2->setPestType($manager->merge($this->getReference('pest-type-insects')));
        $fix2->setTranslatableLocale('en');
        $manager->persist($fix2);

//(3,'Formicidae',1,'2011-01-08 18:06:27','2011-01-08 18:24:48'),
//(3,'Formigues','','','','','ca','formigues'),(3,'Ants','','','','','en','ants'),(3,'Hormigas','','','','','es','hormigas'),
        $fix3 = new Pest();
        $fix3->setName('Ants');
        $fix3->setDescription('Ants');
        $fix3->setScientificName('Formicidae');
        $fix3->setSymptom('');
        $fix3->setConsequence('');
        $fix3->setPestType($manager->merge($this->getReference('pest-type-insects')));
        $fix3->setTranslatableLocale('en');
        $manager->persist($fix3);

//(4,'Heliothis armígera',1,'2011-01-08 18:06:48','2011-01-30 12:12:38'),
//(4,'Erugues','','','','','ca','erugues'),(4,'Caterpillar','','','','','en','caterpillar'),(4,'Oruga','','','','','es','oruga'),
        $fix4 = new Pest();
        $fix4->setName('Caterpillar');
        $fix4->setDescription('Caterpillar');
        $fix4->setScientificName('Heliothis armígera');
        $fix4->setSymptom('');
        $fix4->setConsequence('');
        $fix4->setPestType($manager->merge($this->getReference('pest-type-insects')));
        $fix4->setTranslatableLocale('en');
        $manager->persist($fix4);

//(5,'Trialeurodes vaporariorum',1,'2011-01-08 18:07:03','2011-01-30 12:14:38'),
//(5,'Mosques blanques','','','','','ca','mosques-blanques'),(5,'White flies','','','','','en','white-flies'),(5,'Palomitas','','','','','es','palomitas'),
        $fix5 = new Pest();
        $fix5->setName('White flies');
        $fix5->setDescription('White flies');
        $fix5->setScientificName('Trialeurodes vaporariorum');
        $fix5->setSymptom('');
        $fix5->setConsequence('');
        $fix5->setPestType($manager->merge($this->getReference('pest-type-insects')));
        $fix5->setTranslatableLocale('en');
        $manager->persist($fix5);

//(6,'Ascomicets ericifals',2,'2011-01-08 18:07:41','2011-01-30 12:17:23'),
//(6,'Oïdi','','','','','ca','oidi'),(6,'Powder mildew','','','','','en','powder-mildew'),(6,'Oidio','','','','','es','oidio'),
        $fix6 = new Pest();
        $fix6->setName('Powder mildew');
        $fix6->setDescription('Powder mildew');
        $fix6->setScientificName('Ascomicets ericifals');
        $fix6->setSymptom('');
        $fix6->setConsequence('');
        $fix6->setPestType($manager->merge($this->getReference('pest-type-fungi')));
        $fix6->setTranslatableLocale('en');
        $manager->persist($fix6);

//(7,'Familia vaporariorum',2,'2011-01-08 18:08:06','2011-01-30 12:21:37'),
//(7,'Míldiu','','','','','ca','mildiu'),(7,'Mildew','','','','','en','mildew'),(7,'Mildio','','','','','es','mildio'),
        $fix7 = new Pest();
        $fix7->setName('Mildew');
        $fix7->setDescription('Mildew');
        $fix7->setScientificName('Familia vaporariorum');
        $fix7->setSymptom('');
        $fix7->setConsequence('');
        $fix7->setPestType($manager->merge($this->getReference('pest-type-fungi')));
        $fix7->setTranslatableLocale('en');
        $manager->persist($fix7);

//(8,'Tetranychus urticae',1,'2011-01-08 18:08:35','2011-01-30 17:22:55'),
//(8,'Aranya roja','','','','','ca','aranya-roja'),(8,'Red spider','','','','','en','red-spider'),(8,'Araña roja','','','','','es','arana-roja'),
        $fix8 = new Pest();
        $fix8->setName('Red spider');
        $fix8->setDescription('Red spider');
        $fix8->setScientificName('Tetranychus urticae');
        $fix8->setSymptom('');
        $fix8->setConsequence('');
        $fix8->setPestType($manager->merge($this->getReference('pest-type-acarus')));
        $fix8->setTranslatableLocale('en');
        $manager->persist($fix8);

//(9,'Helix Vulgaris',5,'2011-01-08 18:09:31','2011-01-08 18:12:49'),
//(9,'Cargols','','','','','ca','cargols'),(9,'Screws','','','','','en','screws'),(9,'Caracloes','','','','','es','caracloes'),
        $fix9 = new Pest();
        $fix9->setName('Screws');
        $fix9->setDescription('Screws');
        $fix9->setScientificName('Helix Vulgaris');
        $fix9->setSymptom('');
        $fix9->setConsequence('');
        $fix9->setPestType($manager->merge($this->getReference('pest-type-other')));
        $fix9->setTranslatableLocale('en');
        $manager->persist($fix9);

//(10,'Limax sp',5,'2011-01-08 18:09:41','2011-01-08 18:14:00'),
//(10,'Llimacs','','','','','ca','llimacs'),(10,'Slugs','','','','','en','slugs'),(10,'Babosas','','','','','es','babosas'),
        $fix10 = new Pest();
        $fix10->setName('Slugs');
        $fix10->setDescription('Slugs');
        $fix10->setScientificName('Limax sp');
        $fix10->setSymptom('');
        $fix10->setConsequence('');
        $fix10->setPestType($manager->merge($this->getReference('pest-type-other')));
        $fix10->setTranslatableLocale('en');
        $manager->persist($fix10);

//(11,'',5,'2011-01-08 18:10:09','2011-01-08 18:10:09'),
//(11,'Ocells','','','','','ca','ocells'),(11,'Birds','','','','','en','birds'),(11,'Pájaros','','','','','es','pajaros'),
        $fix11 = new Pest();
        $fix11->setName('Birds');
        $fix11->setDescription('Birds');
        $fix11->setScientificName('');
        $fix11->setSymptom('');
        $fix11->setConsequence('');
        $fix11->setPestType($manager->merge($this->getReference('pest-type-other')));
        $fix11->setTranslatableLocale('en');
        $manager->persist($fix11);

//(12,'',5,'2011-01-08 18:10:20','2011-01-08 18:10:20'),
//(12,'Gats','','','','','ca','gats'),(12,'Cats','','','','','en','cats'),(12,'Gatos','','','','','es','gatos'),
        $fix12 = new Pest();
        $fix12->setName('Cats');
        $fix12->setDescription('Cats');
        $fix12->setScientificName('');
        $fix12->setSymptom('');
        $fix12->setConsequence('');
        $fix12->setPestType($manager->merge($this->getReference('pest-type-other')));
        $fix12->setTranslatableLocale('en');
        $manager->persist($fix12);


//(13,'Leptinotarsa decemlineata',1,'2011-01-30 12:30:23','2011-01-30 12:30:23'),
//(13,'Escarabat de la patata','','','','','ca','escarabat-de-la-patata'),(13,'Colorado potato beetle','','','','','en','colorado-potato-beetle'),(13,'Escarabajo de la patata','','','','','es','escarabajo-de-la-patata'),
        $fix13 = new Pest();
        $fix13->setName('Colorado potato beetle');
        $fix13->setDescription('Colorado potato beetle');
        $fix13->setScientificName('Leptinotarsa decemlineata');
        $fix13->setSymptom('');
        $fix13->setConsequence('');
        $fix13->setPestType($manager->merge($this->getReference('pest-type-insects')));
        $fix13->setTranslatableLocale('en');
        $manager->persist($fix13);

//(14,'Pieris brassicae',1,'2011-01-30 12:32:00','2011-01-30 12:32:00'),
//(14,'Papallona de la col','','','','','ca','papallona-de-la-col'),(14,'Butterfly co','','','','','en','butterfly-co'),(14,'Mariposa de la col','','','','','es','mariposa-de-la-col'),
        $fix14 = new Pest();
        $fix14->setName('Butterfly co');
        $fix14->setDescription('Butterfly co');
        $fix14->setScientificName('Pieris brassicae');
        $fix14->setSymptom('');
        $fix14->setConsequence('');
        $fix14->setPestType($manager->merge($this->getReference('pest-type-insects')));
        $fix14->setTranslatableLocale('en');
        $manager->persist($fix14);

//(15,'Thysanoptera',1,'2011-01-30 17:29:45','2011-01-30 17:29:45'),
//(15,'Tisanòpters','Solen ser de color marró o negre.','','','','ca','tisanopters'),(15,'Tisanopterus','Solen ser de color marró o negre.','','','','en','tisanopterus'),(15,'Tisanópteros','Solen ser de color marró o negre.','','','','es','tisanopteros'),
        $fix15 = new Pest();
        $fix15->setName('Tisanopterus');
        $fix15->setDescription('Tisanopterus');
        $fix15->setScientificName('Thysanoptera');
        $fix15->setSymptom('');
        $fix15->setConsequence('');
        $fix15->setPestType($manager->merge($this->getReference('pest-type-insects')));
        $fix15->setTranslatableLocale('en');
        $manager->persist($fix15);

//(16,'Venturia inaequalis',2,'2011-01-30 17:35:58','2011-01-30 17:43:36'),
//(16,'Clapejat','Malaltia d’orígen fúngic ','','','','ca','clapejat'),(16,'Mottle','Malaltia d’orígen fúngic ','','','','en','mottle'),(16,'Moteado','Malaltia d’orígen fúngic ','','','','es','moteado'),
        $fix16 = new Pest();
        $fix16->setName('Mottle');
        $fix16->setDescription('Mottle');
        $fix16->setScientificName('Venturia inaequalis');
        $fix16->setSymptom('');
        $fix16->setConsequence('');
        $fix16->setPestType($manager->merge($this->getReference('pest-type-fungi')));
        $fix16->setTranslatableLocale('en');
        $manager->persist($fix16);

//(17,'Colletotrichum',2,'2011-01-30 17:42:58','2011-01-30 17:42:58'),
//(17,'Antracnosi','Malaltia d’orígen fúngic ','Aparició de taques negroses, ja sigui a les fulles com en el conjunt de la planta.','','','ca','antracnosi'),(17,'Anthracnose','Malaltia d’orígen fúngic ','Aparició de taques negroses, ja sigui a les fulles com en el conjunt de la planta.','','','en','anthracnose'),(17,'Antracnosis','Malaltia d’orígen fúngic ','Aparició de taques negroses, ja sigui a les fulles com en el conjunt de la planta.','','','es','antracnosis'),
        $fix17 = new Pest();
        $fix17->setName('Anthracnose');
        $fix17->setDescription('Anthracnose');
        $fix17->setScientificName('Colletotrichum');
        $fix17->setSymptom('');
        $fix17->setConsequence('');
        $fix17->setPestType($manager->merge($this->getReference('pest-type-fungi')));
        $fix17->setTranslatableLocale('en');
        $manager->persist($fix17);

//(18,'agrotis segetum',1,'2011-01-30 18:14:48','2011-01-30 18:14:48');
//(18,'Cuc gris','','','','','ca','cuc-gris'),(18,'Worm - gray cutter','','','','','en','worm-gray-cutter'),(18,'Cortador','','','','','es','cortador');
        $fix18 = new Pest();
        $fix18->setName('Worm - gray cutter');
        $fix18->setDescription('Worm - gray cutter');
        $fix18->setScientificName('Agrotis segetum');
        $fix18->setSymptom('');
        $fix18->setConsequence('');
        $fix18->setPestType($manager->merge($this->getReference('pest-type-insects')));
        $fix18->setTranslatableLocale('en');
        $manager->persist($fix18);

        $manager->flush();
        
        
        //Translate to ca
        $fix1->setName('Pugó');
        $fix1->setDescription('Pugó');
        $fix1->setSymptom('');
        $fix1->setConsequence('');
        $fix1->setTranslatableLocale('ca');
        $manager->persist($fix1);
        
        $manager->flush();
    }

    public function getOrder()
    {
        return 2; // the order in which fixtures will be loaded
    }
}