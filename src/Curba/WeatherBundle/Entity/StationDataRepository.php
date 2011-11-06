<?php

namespace Curba\WeatherBundle\Entity;

use Doctrine\ORM\EntityRepository;

class StationDataRepository extends EntityRepository
{
    /**
     * Returns all the data from a station between two dates. For each day it 
     * returns:
     * - temperature, humidity, bar, wind_speed: max, min, average
     * - rain: total
     * - wind_direction: predominant direction
     *
     * @param $stationId: StationId
     * @param $dateBegin: Date from the first data to return
     * @param $dateEnd: Date from the last data to return
     */
    public function getDaysStationDataBetween($stationId, $dateBegin, $dateEnd)
    {
        $em = $this->getEntityManager();

        $query = $em->createQueryBuilder()
            ->select('d')
            ->from('CurbaWeatherBundle:StationData', 'd')
            ->where('d.station = :station')
            ->andWhere('d.data_time between :begin and :end')
            ->orderBy('d.data_time')
            ->setParameter('station', $stationId, \Doctrine\DBAL\Types\Type::INTEGER)
            ->setParameter('begin', $dateBegin, \Doctrine\DBAL\Types\Type::DATETIME)
            ->setParameter('end', $dateEnd, \Doctrine\DBAL\Types\Type::DATETIME)
            ->getQuery();

        $stationData = $query->getResult();
        
        $oldDay = null;
        $sData = null;
        $result = array();
        
        $num = 0;
        
        $temperature_max = 0;
        $temperature_min = 0;
        $temperature_avg = 0;
        $humidity_max = 0;
        $humidity_min = 0;
        $humidity_avg = 0;
        $wind_speed_max = 0;
        $wind_speed_min = 0;
        $wind_speed_avg = 0;
        $rain = 0;
        
        foreach($stationData as $singleData)
        {
            if ($oldDay == null || $oldDay->format('Y-m-d') != $singleData->getDataTime()->format('Y-m-d'))
            {
                if ($oldDay != null)
                {
                    $result[] = array($oldDay->format('Y'), $oldDay->format('m'), $oldDay->format('d'),
                        $temperature_max, $temperature_min, $temperature_avg / $num,
                        $humidity_max, $humidity_min, $humidity_avg / $num,
                        $wind_speed_max, $wind_speed_min, $wind_speed_avg / $num,
                        $rain);
                }
                
                $temperature_max = $singleData->getTemperatureOut();
                $temperature_min = $singleData->getTemperatureOut();
                $temperature_avg = $singleData->getTemperatureOut();
                $humidity_max = $singleData->getHumidityOut();
                $humidity_min = $singleData->getHumidityOut();
                $humidity_avg = $singleData->getHumidityOut();
                $wind_speed_max = $singleData->getWindSpeed();
                $wind_speed_min = $singleData->getWindSpeed();
                $wind_speed_avg = $singleData->getWindSpeed();
                $rain = $singleData->getRain();
        
                $num = 1;
                
                $oldDay = $singleData->getDataTime();
            }
            else
            {
                //temperature, humidity, bar, wind_speed: max, min, average
                //rain: total
                //wind_direction: predominant direction
                if ($temperature_max < $singleData->getTemperatureOut()) $temperature_max = $singleData->getTemperatureOut();
                if ($temperature_min > $singleData->getTemperatureOut()) $temperature_min = $singleData->getTemperatureOut();
                $temperature_avg += $singleData->getTemperatureOut();
                if ($humidity_max < $singleData->getHumidityOut()) $humidity_max = $singleData->getHumidityOut();
                if ($humidity_min > $singleData->getHumidityOut()) $humidity_min = $singleData->getHumidityOut();
                $humidity_avg += $singleData->getHumidityOut();
                if ($wind_speed_max < $singleData->getWindSpeed()) $wind_speed_max = $singleData->getWindSpeed();
                if ($wind_speed_min > $singleData->getWindSpeed()) $wind_speed_min = $singleData->getWindSpeed();
                $wind_speed_avg += $singleData->getWindSpeed();
                $rain += $singleData->getRain();
                
                $num++;
            }            
        }
        
        if ($oldDay != null)
        {
            $result[] = array($oldDay->format('Y'), $oldDay->format('m'), $oldDay->format('d'),
                $temperature_max, $temperature_min, $temperature_avg / $num,
                $humidity_max, $humidity_min, $humidity_avg / $num,
                $wind_speed_max, $wind_speed_min, $wind_speed_avg / $num,
                $rain);
        }

        
        return $result;
        //return $stationData;
    }
    
    /**
     * Returns all the data from a station between two dates.
     *
     * @param $stationId: StationId
     * @param $dateBegin: Date from the first data to return
     * @param $dateEnd: Date from the last data to return
     */
    public function getStationDataBetween($stationId, $dateBegin, $dateEnd)
    {
        $em = $this->getEntityManager();
        
        $query = $em->createQueryBuilder()
            ->select('d')
            ->from('CurbaWeatherBundle:StationData', 'd')
            ->where('d.station = :station')
            ->andWhere('d.data_time between :begin and :end')
            ->orderBy('d.data_time')
            ->setParameter('station', $stationId, \Doctrine\DBAL\Types\Type::INTEGER)
            ->setParameter('begin', $dateBegin, \Doctrine\DBAL\Types\Type::DATETIME)
            ->setParameter('end', $dateEnd, \Doctrine\DBAL\Types\Type::DATETIME)
            ->getQuery();

        return $query->getResult();
    }
    
    /**
     * Returns all the data from a station for a day
     *
     * @param $stationId: StationId
     * @param $day: Date to data to return
     */
    public function getStationDataFromDay($stationId, $day)
    {
        $em = $this->getEntityManager();
        
        $dateBegin = new \DateTime($day->format('Y-m-d').'00:00:00');
        $dateEnd = new \DateTime($day->format('Y-m-d').'23:59:59');
        
        $query = $em->createQueryBuilder()
            ->select('d')
            ->from('CurbaWeatherBundle:StationData', 'd')
            ->where('d.station = :station')
            ->andWhere('d.data_time between :begin and :end')
            ->orderBy('d.data_time')
            ->setParameter('station', $stationId, \Doctrine\DBAL\Types\Type::INTEGER)
            ->setParameter('begin', $dateBegin, \Doctrine\DBAL\Types\Type::DATETIME)
            ->setParameter('end', $dateEnd, \Doctrine\DBAL\Types\Type::DATETIME)
            ->getQuery();

        return $query->getResult();
    }
}