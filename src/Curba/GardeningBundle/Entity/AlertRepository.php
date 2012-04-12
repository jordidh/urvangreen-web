<?php

namespace Curba\GardeningBundle\Entity;

use Doctrine\ORM\EntityRepository;

class AlertRepository extends EntityRepository
{
    /**
     * Creates alerts for a Crop
     *
     * Param $crop: Crop to create the alerts
     */
    public function createAlerts($crop)
    {
        //Get all plantCares
        $plantCares = $crop->getPlant()->getPlantCare();
        
        //For each plantCare of the crop
        foreach($plantCares as $plantCare)
        {
            // Check if the PlantCare can be executed (and create an alert):
            // =============================================================
            // Get the var CropHistoryPeriodType = the last CropHistory with the CropPeriodType different from NULL and equal to PlantCare->CropPeriodType
            // If the CropHistoryPeriodType exists
            // If there isn't an Alert from the same AlertType attached to the same crop
            // AND the days passed from the CropHistoryPeriodType are between PlantCare->DaysFromBegining and PlantCare->DaysFromBegining + PlantCare->DurationDays
            // AND the last CropHistory with the same AlertType has a InstanceDate older than CropHistory->RepeatEachHours
            // AND the number of CropHistory with the same AlertType with a InstanceDate bigger than the CropHistoryPeriodType->InstanceDate are lower than PlantCare->RepeatMaxTimes
            $cropHistoryPeriodType = $em->getRepository('CurbaGardeningBundle:CropHistory')->findLastCropHistoryWithPeriodType($crop, $plantCare->getCropPeriodType());
            if ($cropHistoryPeriodType)
            {
                $alert = $em->getRepository('CurbaGardeningBundle:Alert')->find($cropHistoryPeriodType->getAlertType());

                if ($alert == null)
                {
                    
                }
            }
        }
        
        /*
        $em = $this->getEntityManager();

        $query = $em->createQueryBuilder()
            ->select('c')
            ->from('CurbaGardeningBundle:CropHistory', 'c')
            ->where('c.crop = :crop')
            ->andWhere('c.crop_period_type = :periodType')
            ->orderBy('c.instanceDate DESC')
            ->setParameter('crop', $crop->getId(), \Doctrine\DBAL\Types\Type::INTEGER)
            ->setParameter('periodType', $periodType->getId(), \Doctrine\DBAL\Types\Type::INTEGER)
            ->getQuery();

        return $query->getFirstResult();
         *
         */
    }
    
}

