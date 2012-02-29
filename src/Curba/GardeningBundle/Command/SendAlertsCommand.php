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
        
        //For each garden of the site
        foreach($gardens as $garden)
        {
            //For each garden get all zones
            foreach($garden->getZones() as $zone)
            {
                //For each zone get all crops
                foreach($garden->getCrops() as $crop)
                {
                    //Get all plantCares
                    $plantCares = $crop->getPlant()->getPlantCares();
                    
                    //For each plantCare of the crop
                    foreach($plantCares as $plantCare)
                    {
                        //Check if the PlantCare can be executed (and create an alert):
                        // Get the var CropHistoryPeriodType = the last CropHistory with the CropPeriodType different from NULL equal to PlantCare->CropPeriodType
                        // If the CropHistoryPeriodType exists
                        // If there isn't an Alert from the same AlertType attached to the same crop
                        // AND the days passed from the CropHistoryPeriodType are between PlantCare->DaysFromBegining and PlantCare->DaysFromBegining + PlantCare->DurationDays
                        // AND the last CropHistory with the same AlertType has a InstanceDate older than CropHistory->RepeatEachHours
                        // AND the number of CropHistory with the same AlertType with a InstanceDate bigger than the CropHistoryPeriodType->InstanceDate are lower than PlantCare->RepeatMaxTimes

                        
                        
                        
                        
                    }
                }
            }
        }
        

        $output->writeln('<info>Process finished at '.date("d/m/Y H:i:s", time()).'</info>');
    }
}