<?php

namespace Curba\SecurityBundle\Tests\Command;

require_once __DIR__.'/../../../../../app/bootstrap.php.cache';
require_once __DIR__.'/../../../../../app/AppKernel.php';
require_once __DIR__.'/../../../../../app/AppCache.php';

use Symfony\Component\Console\Tester\CommandTester;
use Symfony\Component\Console\Application;
use Curba\SecurityBundle\Command\DeleteInactiveUsersCommand;

class DeleteInactiveUsersCommandTest extends \PHPUnit_Framework_TestCase
{
    //Ex: app/console security:delete_inactive_users
    //Ex: app/console security:delete_inactive_users 10
    //Ex: app/console security:delete_inactive_users 10 --send_last_alert=5
    public function testExecute()
    {
        // mock the Kernel or create one depending on your needs
        //$application = new Application();
        //$kernel = new AppKernel('dev', true);
        $kernel = new AppCache(new AppKernel('prod', false));
        $application = new Application($kernel);
        $application->add(new DeleteInactiveUsersCommand());
        $command = $application->find('security:delete_inactive_users');
        $commandTester = new CommandTester($command);
        $arguments = array(
            'command' => 'security:delete_inactive_users',
            'time'    => 48,
            '--send_last_alert'  => 24,
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
        
        $this->assertRegExp('Default time. Delete inactive users older than 48 hours', $commandTester->getDisplay(), '->execute() returns a text help for the given command');

        //$commandTester = new CommandTester($application->get('help'));
        //$commandTester->execute(array('command_name' => 'list'));
        //$this->assertRegExp('/list \[--xml\] \[namespace\]/', $commandTester->getDisplay(), '->execute() returns a text help for the given command');
    }
}