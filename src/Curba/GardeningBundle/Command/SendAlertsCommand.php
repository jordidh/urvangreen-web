<?php

namespace Curba\GardeningBundle\Command;

use Symfony\Bundle\FrameworkBundle\Command\ContainerAwareCommand;
use Symfony\Component\Console\Input\InputArgument;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Input\InputOption;
use Symfony\Component\Console\Output\OutputInterface;

class SendAlertsCommand extends ContainerAwareCommand
{
    protected function configure()
    {
        $this
            ->setName('gardening:send_alerts')
            ->setDescription('Sends alerts to each user from pending alerts uppon configuration (email, sms, etc.)')
                ;
            //->addArgument('name', InputArgument::OPTIONAL, 'Who do you want to greet?')
            //->addOption('yell', null, InputOption::VALUE_NONE, 'If set, the task will yell in uppercase letters')
            //;
    }

    /*
     * Find all the alerts to send
     * Find user configuration (which AlertTypes has to send)
     * Send
     */
    protected function execute(InputInterface $input, OutputInterface $output)
    {
        $output->writeln('<info>Process start at '.date("d/m/Y H:i:s", time()).'</info>');
        
        $em = $this->getContainer()->get('doctrine')->getEntityManager('default');
        
        //Get all gardens
        $gardens = $em->getRepository('CurbaGardeningBundle:Garden')->findAll();
        
        

        $output->writeln('<info>Process finished at '.date("d/m/Y H:i:s", time()).'</info>');
    }
}