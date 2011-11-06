<?php

namespace Curba\GardeningBundle\Tests\Controller;

use Symfony\Bundle\FrameworkBundle\Test\WebTestCase;

class DefaultControllerTest extends WebTestCase
{
    /*
    [Pagina inicial]
    Quan posi l'adreça de la web vull veure:
    1- Com a usuari nou: 
    1.1- Informació per saber que fa la web per així poder decidir si registrar-me o no per utilitzar-la.
    1.2- Un hort de prova per poder-lo inspeccionar i veure quina informació em proporciona i que puc fer.
    1.3- Una vídeo on vegi les funcionalitats més atractives de la web.
    1.4- Un botó per registrar-me => em portarà a la pàgina de registre.
    2- Com a usuari ja registrat: 
    2.1- Un espai per posar les meves dades de login per accedir a la web => em portarà a la pàgina principal.
    */
    public function testIndex()
    {
        $client = $this->createClient();

        $crawler = $client->request('GET', '/');

        //$this->assertTrue($crawler->filter('html:contains("Urvan Green")')->count() > 0);
        $this->assertTrue($crawler->filter('object')->count() > 0);
    }
}
