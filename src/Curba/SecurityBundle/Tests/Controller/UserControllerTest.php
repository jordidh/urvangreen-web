<?php

namespace Curba\SecurityBundle\Tests\Controller;

use Symfony\Bundle\FrameworkBundle\Test\WebTestCase;

class UserControllerTest extends WebTestCase
{
    public function testLogin()
    {
        $client = $this->createClient();

        $crawler = $client->request('GET', '/login/ca');

        //Check that the page has a submit button
        $this->assertTrue($crawler->selectButton('LOGIN')->count() > 0);
    }
}