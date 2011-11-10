<?php

namespace Curba\GardeningBundle\Command;

use Symfony\Bundle\FrameworkBundle\Command\ContainerAwareCommand;
use Symfony\Component\Console\Input\InputArgument;
use Symfony\Component\Console\Input\InputInterface;
use Symfony\Component\Console\Input\InputOption;
use Symfony\Component\Console\Output\OutputInterface;

class CreateAlertsCommand extends ContainerAwareCommand
{
    protected function configure()
    {
        $this
            ->setName('gardening:create_alerts')
            ->setDescription('Creates alerts for each user')
            ->addArgument('name', InputArgument::OPTIONAL, 'Who do you want to greet?')
            ->addOption('yell', null, InputOption::VALUE_NONE, 'If set, the task will yell in uppercase letters')
        ;
    }

    protected function execute(InputInterface $input, OutputInterface $output)
    {
        $output->writeln('<info>Process start at '.date("d/m/Y H:i:s", time()).'</info>');

        $output->writeln('<info>Process finished at '.date("d/m/Y H:i:s", time()).'</info>');
    }
}