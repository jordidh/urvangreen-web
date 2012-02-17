<?php

namespace Curba\GardeningBundle\DataFixtures\ORM;

use Doctrine\Common\DataFixtures\AbstractFixture;
use Doctrine\Common\DataFixtures\OrderedFixtureInterface;
use Curba\GardeningBundle\Entity\PlantFamily;

class PlantFamilyFixtures extends AbstractFixture implements OrderedFixtureInterface
{
    public function load($manager)
    {
//(1,'Umbrel·líferes','Són plantes molt conegudes com a condiments o pels seus valors medicinals. \r\nTenen nombroses i diminutes flors agrupades en tiges radials en forma d\'ombrel·la.\r\nLes seves llavors germinen amb gran lentitud.\r\n','ca','umbrel-liferes'),
//(1,'Umbreliferes','?','en','umbreliferes'),
//(1,'Umbrelíferas','?','es','umbreliferas'),
        $fix1 = new PlantFamily();
        $fix1->setName('Umbreliferes');
        $fix1->setDescription('Umbreliferes');
        $fix1->setScientificName('Umbrelliferae');
        $fix1->setTranslatableLocale('en');
        $manager->persist($fix1);

//(2,'Liliàcies','Està formada majoritàriament per herbes proveïdes de bulbs, rizomes o tubercles. especialment útils en els llocs on aquestes plantes més abunden per la seva capacitat de regeneració davant de situacions adeverses, com el foc o la sequera.\r\n','ca','liliacies'),
//(2,'Liliacieds','?','en','liliacieds'),
//(2,'Liliácias','?','es','liliacias'),
        $fix2 = new PlantFamily();
        $fix2->setName('Liliacieds');
        $fix2->setDescription('Liliacieds');
        $fix2->setScientificName('Liliaceae');
        $fix2->setTranslatableLocale('en');
        $manager->persist($fix2);

//(3,'Labiades','Són fonamentalment herbes i arbustus, molt aromàtiques per la presència de glàndules amb olis essencials, responsables de les aromes que els caracteritzen i riques en principis actius. \r\nSón molt estimades en medicina natural i farmacopea.\r\n','ca','labiades'),
//(3,'Labiads','?','en','labiads'),
//(3,'Labiadas','?','es','labiadas'),
        $fix3 = new PlantFamily();
        $fix3->setName('Labiads');
        $fix3->setDescription('Labiads');
        $fix3->setScientificName('Labiatae');
        $fix3->setTranslatableLocale('en');
        $manager->persist($fix3);

//(4,'Solanàcies','Comprèn espècies ombrívoles i tropicals. la majoria de les solanàcies comestibles procedeixen d\'Amèrica central i meridional pel que requereixen un sòl molt ric, humit i fèrtil\r\n\r\n','ca','solanacies'),
//(4,'Solanacieds','?','en','solanacieds'),
//(4,'Solanácias','?','es','solanacias'),
        $fix4 = new PlantFamily();
        $fix4->setName('Solanacieds');
        $fix4->setDescription('Solanacieds');
        $fix4->setScientificName('Solanaceae');
        $fix4->setTranslatableLocale('en');
        $manager->persist($fix4);

//(5,'Convolvulàcies','És una família de arbusts i arbres, moltes d\'elles enfiladisses. Algunes especies de origen americà es conrean a molts llocs del món pels seus tubercles.\r\n','ca','convolvulacies'),
//(5,'Convolvulaciades','?','en','convolvulaciades'),
//(5,'Convolvulácias','?','es','convolvulacias'),
        $fix5 = new PlantFamily();
        $fix5->setName('Convolvulaciades');
        $fix5->setDescription('Convolvulaciades');
        $fix5->setScientificName('Convolvulaceae');
        $fix5->setTranslatableLocale('en');
        $manager->persist($fix5);

//(6,'Cucurbitàcies','Està àmpliament representada, tant per espècies silvestres com conreades, les quins constitueixen una part important de la dieta bàsica. Són plantes enfiladisses anuals que tenen un gran valor pels seus voluminosos fruits comestibles\r\n','ca','cucurbitacies'),
//(6,'Cucurbitacieds','?','en','cucurbitacieds'),
//(6,'Cucurbitácias','?','es','cucurbitacias'),
        $fix6 = new PlantFamily();
        $fix6->setName('Cucurbitacieds');
        $fix6->setDescription('Cucurbitacieds');
        $fix6->setScientificName('Cucurbitaceae');
        $fix6->setTranslatableLocale('en');
        $manager->persist($fix6);

//(7,'Lleguminoses','Moltes espècies d\'aquesta família tenen gran importància com aliment humà, proporcionen proteïnes. Tenen la capacitat de fixar nitrogen en els nòduls de les seves arrels.\r\nTotes les plantes de la família fabaceae tenen 5 pètals i l\'ovari forma una beina o llegum.','ca','lleguminoses'),
//(7,'Leguminoses','?','en','leguminoses'),
//(7,'Leguminosas','?','es','leguminosas'),
        $fix7 = new PlantFamily();
        $fix7->setName('Leguminoses');
        $fix7->setDescription('Leguminoses');
        $fix7->setScientificName('Leguminosae - Fabaceae');
        $fix7->setTranslatableLocale('en');
        $manager->persist($fix7);

//(8,'Gramínies','AÉs una família cosmopolita, que ha conquistat la majoria dels nínxols ecològics del planeta.\r\nConstitueixen la font d\'alimentació animal bàsica i humana.\r\nPresenten una estructura floral molt característica, agrupant-se les flors en espiguillas!!!!\r\n','ca','graminies'),
//(8,'Graminieds','?','en','graminieds'),
//(8,'Gramínias','?','es','graminias'),
        $fix8 = new PlantFamily();
        $fix8->setName('Graminieds');
        $fix8->setDescription('Graminieds');
        $fix8->setScientificName('Gramineae - Poaceae');
        $fix8->setTranslatableLocale('en');
        $manager->persist($fix8);

//(9,'Valerianàcies','Les plantes de la família són generalment herbàcies i amb unes fulles amb olor desagradable. Algunes espècies són cultivades com ornamentals i d\'altres són medicinals per induir la relaxació i la son.','ca','valerianacies'),
//(9,'Valerianacieds','?','en','valerianacieds'),
//(9,'Valerianácias','?','es','valerianacias'),
        $fix9 = new PlantFamily();
        $fix9->setName('Valerianacieds');
        $fix9->setDescription('Valerianacieds');
        $fix9->setScientificName('Valerianaceae');
        $fix9->setTranslatableLocale('en');
        $manager->persist($fix9);

//(10,'Quenopodiàcies','Procedeixen de zones costaneres, per aquest motiu les fulles estan cobertes amb una capa de cutina que els permet mantenir la humitat.\r\nProdueixen les seves llavors dins de petits fruits que es mantenen intactes fins a germinar en el sòl, raó per la qual les plantes sorgeixen agrupades en massissos.\r\n','ca','quenopodiacies'),
//(10,'Quenopodiacieds','?','en','quenopodiacieds'),
//(10,'Quenopodiácias','?','es','quenopodiacias'),
        $fix10 = new PlantFamily();
        $fix10->setName('Quenopodiacieds');
        $fix10->setDescription('Quenopodiacieds');
        $fix10->setScientificName('Chenopodiaceae');
        $fix10->setTranslatableLocale('en');
        $manager->persist($fix10);

//(11,'Compostes','Inclou moltes espècies conreades. Les flors són cúmuls de nombroses floretas de tal manera que semblen una. \r\nAquesta família comprèn dos grups importants, el de les amanides: són plantes de desenvolupament ràpid i tija tova i el dels cards: en general necessiten una cocció\r\n','ca','compostes'),
//(11,'Composted','?','en','composted'),
//(11,'Compuestas','?','es','compuestas'),
        $fix11 = new PlantFamily();
        $fix11->setName('Composted');
        $fix11->setDescription('Composted');
        $fix11->setScientificName('Compositae');
        $fix11->setTranslatableLocale('en');
        $manager->persist($fix11);

//(12,'Crucíferes','Força crucíferes són conreades perquè són comestibles. Necessiten molt poca aigua i estan adaptades per emmagatzemar l\'aigua que reben.\r\nSón biennals, emmagatzemen aliments durant el primer any de vida i en el segon floreixen t donen llavors.\r\n\r\n\r\n','ca','cruciferes'),
//(12,'Crucifereds','?','en','crucifereds'),
//(12,'Crucíferas','?','es','cruciferas')
        $fix12 = new PlantFamily();
        $fix12->setName('Crucifereds');
        $fix12->setDescription('Crucifereds');
        $fix12->setScientificName('Cruciferae');
        $fix12->setTranslatableLocale('en');
        $manager->persist($fix12);
		
		$fix13 = new PlantFamily();
        $fix13->setName('Rosaceae');
        $fix13->setDescription('Crucifereds');
        $fix13->setScientificName('Cruciferae');
        $fix13->setTranslatableLocale('en');
        $manager->persist($fix13);

        $manager->flush();
        
        
        //Translate to ca
        $fix1->setName('Umbelíferas');
        $fix1->setDescription('All');
        $fix1->setTranslatableLocale('ca'); // change locale
        $manager->persist($fix1);

        $fix2->setName('Liláceas');
        $fix2->setDescription('Julivert');
        $fix2->setTranslatableLocale('ca'); // change locale
        $manager->persist($fix2);
        
        $fix3->setName('Labiades');
        $fix3->setDescription('Chard');
        $fix3->setTranslatableLocale('ca');
        $manager->persist($fix3);
        
        $fix4->setName('Solanàcies');
        $fix4->setDescription('Chard');
        $fix4->setTranslatableLocale('ca');
        $manager->persist($fix4);
        
        $fix5->setName('Convolvulàcies');
        $fix5->setDescription('Chard');
        $fix5->setTranslatableLocale('ca');
        $manager->persist($fix5);
        
        $fix6->setName('Cucurbitàcies');
        $fix6->setDescription('Chard');
        $fix6->setTranslatableLocale('ca');
        $manager->persist($fix6);
        
        $fix7->setName('Lleguminoses');
        $fix7->setDescription('Chard');
        $fix7->setTranslatableLocale('ca');
        $manager->persist($fix7);
        
        $fix8->setName('Gramínies');
        $fix8->setDescription('Chard');
        $fix8->setTranslatableLocale('ca');
        $manager->persist($fix8);
        
        $fix9->setName('Valerianàcies');
        $fix9->setDescription('Chard');
        $fix9->setTranslatableLocale('ca');
        $manager->persist($fix9);
        
        $fix10->setName('Quenopodiàcies');
        $fix10->setDescription('Chard');
        $fix10->setTranslatableLocale('ca');
        $manager->persist($fix10);
        
        $fix11->setName('Crucíferes');
        $fix11->setDescription('Chard');
        $fix11->setTranslatableLocale('ca');
        $manager->persist($fix11);
        
        $fix12->setName('Crucíferes');
        $fix12->setDescription('Chard');
        $fix12->setTranslatableLocale('ca');
        $manager->persist($fix12);

		
        $fix13->setName('Rosàcies');
        $fix13->setDescription('Crucifereds');
        $fix13->setTranslatableLocale('ca');
        $manager->persist($fix13);
        
        $manager->flush();
        
        
                
        //Translate to es
        $fix1->setName('Umbelíferas');
        $fix1->setDescription('All');
        $fix1->setTranslatableLocale('es');
        $manager->persist($fix1);

        $fix2->setName('Liliáceas');
        $fix2->setDescription('Julivert');
        $fix2->setTranslatableLocale('es');
        $manager->persist($fix2);
        
        $fix3->setName('Labiadas');
        $fix3->setDescription('Chard');
        $fix3->setTranslatableLocale('es');
        $manager->persist($fix3);
        
        $fix4->setName('Solanáceas');
        $fix4->setDescription('Chard');
        $fix4->setTranslatableLocale('es');
        $manager->persist($fix4);
        
        $fix5->setName('Convolvuláceas');
        $fix5->setDescription('Chard');
        $fix5->setTranslatableLocale('es');
        $manager->persist($fix5); 
        
        $fix6->setName('Cucurbitáceas');
        $fix6->setDescription('Chard');
        $fix6->setTranslatableLocale('es');
        $manager->persist($fix6);

        $fix7->setName('Leguminosas');
        $fix7->setDescription('Son útiles para plantar nuestros propios alimentos porque proporcionan proteínas y tienen la capacidad de fijar nitrógeno en los nódulos de las raices.  Las leguminosas se alimentan con todo lo que necesitan menos el nitrógeno, fijan el del aire y lo utilizan para alimentarse. Si se pican y entierran en el huerto cuando están saludables y verdes, se descomponen rapidamente dejando el nitrógeno a las bacterias de putrefacción el cual será liberado mas tarde en el suelo. También se pueden incorporar al compost y tendrán el mismo efecto.
<br/>Es muy habitual que sufran ataques de pulgón');
        $fix7->setTranslatableLocale('es');
        $manager->persist($fix7);
        
        $fix8->setName('Gramíneas');
        $fix8->setDescription('Chard');
        $fix8->setTranslatableLocale('es');
        $manager->persist($fix8); 
        
        $fix9->setName('Valerianáceas');
        $fix9->setDescription('Chard');
        $fix9->setTranslatableLocale('es');
        $manager->persist($fix9);
        
        $fix10->setName('Quenopodiáceas');
        $fix10->setDescription('Chard');
        $fix10->setTranslatableLocale('es');
        $manager->persist($fix10); 
        
        $fix11->setName('Compuestas');
        $fix11->setDescription('Chard');
        $fix11->setTranslatableLocale('es');
        $manager->persist($fix11); 
        
        $fix12->setName('Crucíferas');
        $fix12->setDescription('Chard');
        $fix12->setTranslatableLocale('es');
        $manager->persist($fix12); 

		$fix13->setName('Rosáceas');
        $fix13->setDescription('Crucifereds');
        $fix13->setTranslatableLocale('es');
        $manager->persist($fix13);
		
        $manager->flush();
        
        

        //Reference to make a relation with StationFixtures
        $this->addReference('plant-family-1', $fix1);
        $this->addReference('plant-family-2', $fix2);
        $this->addReference('plant-family-3', $fix3);
        $this->addReference('plant-family-4', $fix4);
        $this->addReference('plant-family-5', $fix5);
        $this->addReference('plant-family-6', $fix6);
        $this->addReference('plant-family-7', $fix7);
        $this->addReference('plant-family-8', $fix8);
        $this->addReference('plant-family-9', $fix9);
        $this->addReference('plant-family-10', $fix10);
        $this->addReference('plant-family-11', $fix11);
        $this->addReference('plant-family-12', $fix12);
	    $this->addReference('plant-family-13', $fix13);
    }

    public function getOrder()
    {
        return 1; // the order in which fixtures will be loaded
    }
}