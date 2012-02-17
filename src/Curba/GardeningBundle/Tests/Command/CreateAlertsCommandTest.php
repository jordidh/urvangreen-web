<?php

namespace Curba\GardeningBundle\Tests\Command;

require_once __DIR__.'/../../../../../app/AppKernel.php';

use Symfony\Component\Console\Tester\CommandTester;
use Symfony\Bundle\FrameworkBundle\Console\Application;
use Curba\GardeningBundle\Command\CreateAlertsCommand;

class CreateAlertsCommandTest extends \PHPUnit_Framework_TestCase
{
    //Ex: app/console gardening:create_alerts
    public function testExecute()
    {
        // mock the Kernel or create one depending on your needs;
        $kernel = new \AppKernel('test', true);
        $kernel->boot();
        $application = new Application($kernel);
        $application->add(new CreateAlertsCommand());
        $command = $application->find('gardening:create_alerts');
        $commandTester = new CommandTester($command);
        $arguments = array(
            'command' => 'gardening:create_alerts',
        );
        $commandTester->execute(array('command' => $command->getName()), $arguments);

        //$command = $this->getApplication()->find('security:delete_inactive_users');
        //$arguments = array(
        //    'command' => 'security:delete_inactive_users',
        //    'time'    => 48,
        //    '--send_last_alert'  => 24,
        //);
        //$input = new ArrayInput($arguments);
        //$returnCode = $command->run($input, $output);

        //$this->assertRegExp('/.../', $commandTester->getDisplay());
        
        //$commandTester = new CommandTester($command = $application->get('console'));
        //$commandTester->execute(array('command' => $command->getName()), array('security:delete_inactive_users' => 41));
        
        
        //$commandTester = new CommandTester($command = $application->get('list'));
        //$commandTester->execute(array('command' => $command->getName()), array('decorated' => false));
        //$this->assertRegExp('/help   Displays help for a command/', $commandTester->getDisplay(), '->execute() returns a list of available commands');
        
        
        //$commandTester->execute(array('command' => $command->getName()), array('decorated' => false));

        $this->assertRegExp('/Default time. Delete inactive users older than 48 hours/', $commandTester->getDisplay());

        //$commandTester = new CommandTester($application->get('help'));
        //$commandTester->execute(array('command_name' => 'list'));
        //$this->assertRegExp('/list \[--xml\] \[namespace\]/', $commandTester->getDisplay(), '->execute() returns a text help for the given command');
    }
}