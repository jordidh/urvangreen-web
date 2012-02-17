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
                ;
            //->addArgument('name', InputArgument::OPTIONAL, 'Who do you want to greet?')
            //->addOption('yell', null, InputOption::VALUE_NONE, 'If set, the task will yell in uppercase letters')
            //;
    }

    protected function execute(InputInterface $input, OutputInterface $output)
    {
        $output->writeln('<info>Process start at '.date("d/m/Y H:i:s", time()).'</info>');
        
        $em = $this->getContainer()->get('doctrine')->getEntityManager('default');
        
        //Get all gardens
        $gardens = $em->getRepository('CurbaGardeningBundle:Garden')->findAll();
        
        //For each garden of the site
        foreach($gardens as $garden)
        {
            //For each garden get all zones
            foreach($garden->getZones() as $zone)
            {
                //For each zone get all crops
                foreach($garden->getCrops() as $crop)
                {
                    //For each plantCare of the crop
                    foreach($crop->getPlant()->getPlantCareFromCropPeriod($crop->getInitialCropPeriod()) as $plantCare)
                    {
                        //Generate the alert
                        
                        
                        
                        
                    }
                }
            }
        }
        

        $output->writeln('<info>Process finished at '.date("d/m/Y H:i:s", time()).'</info>');
    }
}