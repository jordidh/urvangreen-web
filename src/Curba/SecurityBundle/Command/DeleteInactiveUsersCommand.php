<?php

namespace Curba\SecurityBundle\Command;

use Symfony\Bundle\FrameworkBundle\Command\ContainerAwareCommand;
use Symfony\Component\Console\Input\InputArgument;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Input\InputOption;
use Symfony\Component\Console\Output\OutputInterface;

class DeleteInactiveUsersCommand extends ContainerAwareCommand
{
    protected function configure()
    {
        $this
            ->setName('security:delete_inactive_users')
            ->setDescription('Deletes all users that had been registered but not activated')
            ->addArgument('time', InputArgument::OPTIONAL, 'Minimum user\'s inactive time in hours to begin delete the user')
            ->addOption('send_last_alert', null, InputOption::VALUE_REQUIRED, 'Time in hours to send a message remaining to activate the user. If set, it will send a message remainding beetwen time and send_last_alert that the user will be deleted')
        ;
    }

    //Ex: app/console security:delete_inactive_users
    //Ex: app/console security:delete_inactive_users 48
    //Ex: app/console security:delete_inactive_users 48 --send_last_alert=24
    protected function execute(InputInterface $input, OutputInterface $output)
    {
        //$output->writeln('<info>Process start at '.date("d/m/Y H:i:s", time()).'</info>');

        $hours = $input->getArgument('time');
        if ($hours) {
            $output->writeln('<comment>Delete inactive users older than '.$hours.' hours</comment>');
        } else {
            $output->writeln('<comment>Default time. Delete inactive users older than 48 hours</comment>');
            $hours = 48;
        }

        $sendLastAlert = false;
        $hourToSendAlert = 0;
        if ($input->getOption('send_last_alert')) {
            $sendLastAlert = true;
            $hourToSendAlert = $input->getOption('send_last_alert');
            
            $output->writeln('<comment>Send email to users older than '.$hourToSendAlert.' hours</comment>');
        }

        $em = $this->getContainer()->get('doctrine')->getEntityManager('default');
        
        //Get all inactive users to delete
        $usersToDelete = $em->getRepository('CurbaSecurityBundle:User')->findAllInactiveForMoreThan($hours);
        //Delete the users
        foreach($usersToDelete as $userToDelete)
        {
            $em->remove($userToDelete);
            $em->flush();
            $output->writeln('<info>Deleted user '.$userToDelete->getEmail().'</info>');
        }
        
        if ($sendLastAlert)
        {
            //Get all inactive users to send last alert
            $usersToSendAlert = $em->getRepository('CurbaSecurityBundle:User')->findAllInactiveForMoreThan($hourToSendAlert);
            //Send alert to users
            foreach($usersToSendAlert as $userToSendAlert)
            {
                //TODO: Send email to user
                $locale = "en";
                $message = \Swift_Message::newInstance()
                ->setSubject('Hort registration activation email')
                ->setFrom('hort@hort.com')
                ->setTo($userToSendAlert->getEmail())
                //->setBody($this->renderView('HelloBundle:Hello:email.txt.twig', array('name' => $name)))
                ->setBody("<html><body><h1>Your user is still inactive and will be deleted shortly. If you want join urvangarden follow the link to activate your account</h1>".
                        "<p><A href=\"http://www.hort.com/app_dev.php/activateUser/".$locale."/".$userToSendAlert->getId()."/".$userToSendAlert->getActivationToken()."\">Click me to activate your account<A></p></body></html>",
                        "text/html")
                ;
                $this->getContainer()->get('mailer')->send($message);
                
                $output->writeln('<info>Sent email to user'.$userToSendAlert->getEmail().'</info>');
            }
        }
        
        //$output->writeln('<info>Process finished at '.date("d/m/Y H:i:s", time()).'</info>');
    }
}