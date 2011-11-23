<?php

namespace Curba\WeatherBundle\Entity;

use Doctrine\ORM\EntityRepository;

class StationDataRepository extends EntityRepository
{
    /**
     * Returns an array with all the data from a station between two dates. 
     * For each day it returns:
     * - temperature, humidity, bar, wind_speed, bar: max, min, average
     * - rain: total
     * - wind_direction: predominant direction
     *
     * @param $station: Station
     * @param $dateBegin: Date from the first data to return
     * @param $dateEnd: Date from the last data to return
     */
    public function getDaysStationDataBetween($station, $dateBegin, $dateEnd)
    {
        $em = $this->getEntityManager();
        
        $query = $em->createQueryBuilder()
            ->select('d')
            ->from('CurbaWeatherBundle:StationData', 'd')
            ->where('d.station = :station')
            ->andWhere('d.data_time between :begin and :end')
            ->orderBy('d.data_time')
            ->setParameter('station', $station->getId(), \Doctrine\DBAL\Types\Type::INTEGER)
            ->setParameter('begin', $dateBegin, \Doctrine\DBAL\Types\Type::DATETIME)
            ->setParameter('end', $dateEnd, \Doctrine\DBAL\Types\Type::DATETIME)
            ->getQuery();

        $stationData = $query->getResult();
        
        $oldDay = null;
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
        $bar_max = 0;
        $bar_min = 0;
        $bar_avg = 0;
        
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
                        $rain, $bar_max, $bar_min, $bar_avg / $num);
                }
                
                $temperature_max = $singleData->getTemperatureOut() + $station->getTemperatureCorrection();
                $temperature_min = $temperature_max;
                $temperature_avg = $temperature_max;
                $humidity_max = $singleData->getHumidityOut() + $station->getHumidityCorrection();
                $humidity_min = $humidity_max;
                $humidity_avg = $humidity_max;
                $wind_speed_max = $singleData->getWindSpeed();
                $wind_speed_min = $singleData->getWindSpeed();
                $wind_speed_avg = $singleData->getWindSpeed();
                $rain = $singleData->getRain() * $station->getRainCorrection();
                $bar_max = $singleData->getBar() + $station->getBarCorrection();
                $bar_min = $bar_max;
                $bar_avg = $bar_max;
        
                $num = 1;
                
                $oldDay = $singleData->getDataTime();
            }
            else
            {
                //temperature, humidity, bar, wind_speed: max, min, average
                //rain: total
                //wind_direction: predominant direction
                if ($temperature_max < ($singleData->getTemperatureOut() + $station->getTemperatureCorrection())) $temperature_max = $singleData->getTemperatureOut() + $station->getTemperatureCorrection();
                if ($temperature_min > ($singleData->getTemperatureOut() +  + $station->getTemperatureCorrection())) $temperature_min = $singleData->getTemperatureOut() + $station->getTemperatureCorrection();
                $temperature_avg += $singleData->getTemperatureOut() + $station->getTemperatureCorrection();
                if ($humidity_max < ($singleData->getHumidityOut() + $station->getHumidityCorrection())) $humidity_max = $singleData->getHumidityOut() + $station->getHumidityCorrection();
                if ($humidity_min > ($singleData->getHumidityOut() + $station->getHumidityCorrection())) $humidity_min = $singleData->getHumidityOut() + $station->getHumidityCorrection();
                $humidity_avg += $singleData->getHumidityOut() + $station->getHumidityCorrection();
                if ($wind_speed_max < $singleData->getWindSpeed()) $wind_speed_max = $singleData->getWindSpeed();
                if ($wind_speed_min > $singleData->getWindSpeed()) $wind_speed_min = $singleData->getWindSpeed();
                $wind_speed_avg += $singleData->getWindSpeed();
                $rain += $singleData->getRain() * $station->getRainCorrection();
                if ($bar_max < ($singleData->getBar() + $station->getBarCorrection())) $bar_max = $singleData->getBar() + $station->getBarCorrection();
                if ($bar_min > ($singleData->getBar() + $station->getBarCorrection())) $bar_min = $singleData->getBar() + $station->getBarCorrection();
                $bar_avg += $singleData->getBar() + $station->getBarCorrection();
                
                $num++;
            }            
        }
        
        if ($oldDay != null)
        {
            $result[] = array($oldDay->format('Y'), $oldDay->format('m'), $oldDay->format('d'),
                $temperature_max, $temperature_min, $temperature_avg / $num,
                $humidity_max, $humidity_min, $humidity_avg / $num,
                $wind_speed_max, $wind_speed_min, $wind_speed_avg / $num,
                $rain, $bar_max, $bar_min, $bar_avg / $num);
        }

        
        return $result;
        //return $stationData;
    }
    
    /**
     * Returns an array with the data summary from a station between two dates:
     * - temperature, humidity, bar, wind_speed: max, min, average
     * - rain: total
     * - wind_direction: predominant direction
     *
     * @param $station: Station
     * @param $dateBegin: Date from the first data to return
     * @param $dateEnd: Date from the last data to return
     */
    public function getStationSummaryBetween($station, $dateBegin, $dateEnd)
    {
        $em = $this->getEntityManager();

        $query = $em->createQueryBuilder()
            ->select('d')
            ->from('CurbaWeatherBundle:StationData', 'd')
            ->where('d.station = :station')
            ->andWhere('d.data_time between :begin and :end')
            ->orderBy('d.data_time')
            ->setParameter('station', $station->getId(), \Doctrine\DBAL\Types\Type::INTEGER)
            ->setParameter('begin', $dateBegin, \Doctrine\DBAL\Types\Type::DATETIME)
            ->setParameter('end', $dateEnd, \Doctrine\DBAL\Types\Type::DATETIME)
            ->getQuery();

        $stationData = $query->getResult();
        
        $oldDay = null;
        $num = 1;
        
        $temperature_max = 0;
        $temperature_min = 0;
        $temperature_avg = 0;
        $humidity_max = 0;
        $humidity_min = 0;
        $humidity_avg = 0;
        $bar_max = 0;
        $bar_min = 0;
        $bar_avg = 0;
        $wind_speed_max = 0;
        $wind_speed_min = 0;
        $wind_speed_avg = 0;
        $rain = 0;
        
        foreach($stationData as $singleData)
        {
            if ($oldDay == null)
            {
                $temperature_max = $singleData->getTemperatureOut();
                $temperature_min = $singleData->getTemperatureOut();
                $temperature_avg = $singleData->getTemperatureOut();
                $humidity_max = $singleData->getHumidityOut();
                $humidity_min = $singleData->getHumidityOut();
                $humidity_avg = $singleData->getHumidityOut();
                $bar_max = $singleData->getBar();
                $bar_min = $singleData->getBar();
                $bar_avg = $singleData->getBar();
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
                if ($bar_max < $singleData->getBar()) $bar_max = $singleData->getBar();
                if ($bar_min > $singleData->getBar()) $bar_min = $singleData->getBar();
                $bar_avg += $singleData->getBar();
                if ($wind_speed_max < $singleData->getWindSpeed()) $wind_speed_max = $singleData->getWindSpeed();
                if ($wind_speed_min > $singleData->getWindSpeed()) $wind_speed_min = $singleData->getWindSpeed();
                $wind_speed_avg += $singleData->getWindSpeed();
                $rain += $singleData->getRain();
                
                $num++;
            }            
        }
        
        return array(
            'Temperatura màxima: '.($temperature_max + $station->getTemperatureCorrection()),
            'Temperatura mínima: '.($temperature_min + $station->getTemperatureCorrection()),
            'Temperatura mitjana: '.($temperature_avg / $num + $station->getTemperatureCorrection()),
            'Humitat màxima: '.($humidity_max + $station->getHumidityCorrection()),
            'Humitat mínima: '.($humidity_min + $station->getHumidityCorrection()),
            'Humitat mitjana: '.($humidity_avg / $num + $station->getHumidityCorrection()),
            'Pressió màxima: '.($bar_max + $station->getBarCorrection()),
            'Pressió mínima: '.($bar_min + $station->getBarCorrection()),
            'Pressió mitjana: '.($bar_avg / $num + $station->getBarCorrection()),
            'Velocitat màxima: '.$wind_speed_max,
            'Velocitat mínima: '.$wind_speed_min,
            'Velocitat mitjana: '.$wind_speed_avg / $num,
            'Pluja: '.($rain * $station->getRainCorrection())
            );
    }

    /**
     * Returns an array with all the data from a station between two dates.
     *
     * @param $station: Station
     * @param $dateBegin: Date from the first data to return
     * @param $dateEnd: Date from the last data to return
     */
    public function getStationDataBetween($station, $dateBegin, $dateEnd)
    {
        $em = $this->getEntityManager();
        
        $query = $em->createQueryBuilder()
            //->select('d')   //Array ( [id] => 106806 [data_time] => DateTime Object ( [date] => 2011-01-01 00:00:00 [timezone_type] => 3 [timezone] => Europe/Berlin ) [wind_direction] => 315.00 [wind_speed] => 1.60 [wind_gust] => 8.80 [humidity_in] => 81.00 [humidity_out] => 96.00 [temperature_in] => 13.60 [temperature_out] => 8.80 [bar] => 1020.30 [rain] => 0.00 ) 
            //->select('d, d.rain + 3 as rain_final') //Array ( [0] => Array ( [id] => 106806 [data_time] => DateTime Object ( [date] => 2011-01-01 00:00:00 [timezone_type] => 3 [timezone] => Europe/Berlin ) [wind_direction] => 315.00 [wind_speed] => 1.60 [wind_gust] => 8.80 [humidity_in] => 81.00 [humidity_out] => 96.00 [temperature_in] => 13.60 [temperature_out] => 8.80 [bar] => 1020.30 [rain] => 0.00 ) [rain_final] => 3.00 )
            ->select('d.id, 
                d.data_time, 
                d.wind_direction, 
                d.wind_speed, 
                d.wind_gust, 
                d.humidity_in + '.$station->getHumidityCorrection().' as humidity_in, 
                d.humidity_out + '.$station->getHumidityCorrection().' as humidity_out, 
                d.temperature_in + '.$station->getTemperatureCorrection().' as temperature_in, 
                d.temperature_out + '.$station->getTemperatureCorrection().' as temperature_out, 
                d.bar + '.$station->getBarCorrection().' as bar, 
                d.rain * '.$station->getRainCorrection().' as rain')
            //->expr()->sum('d.temperature_in', $station->getTemperatureCorrection())
            //->sum('d.temperature_out', $station->getTemperatureCorrection())
            ->from('CurbaWeatherBundle:StationData', 'd')
            ->where('d.station = :station')
            ->andWhere('d.data_time between :begin and :end')
            ->orderBy('d.data_time')
            ->setParameter('station', $station->getId(), \Doctrine\DBAL\Types\Type::INTEGER)
            ->setParameter('begin', $dateBegin, \Doctrine\DBAL\Types\Type::DATETIME)
            ->setParameter('end', $dateEnd, \Doctrine\DBAL\Types\Type::DATETIME)
            ->getQuery();
        
        //$res = $query->getArrayResult();
        //print_r($res[0]);
        //exit;

        return $query->getArrayResult();
        //return $query->getResult();
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
    
    /**
     * Returns an array with all the years that had data
     *
     * @param $stationId: StationId
     */
    public function getYearsWithData($stationId)
    {
        $em = $this->getEntityManager();
        
        $query = $em->createQuery('SELECT DISTINCT SUBSTRING(s.data_time, 1, 4) FROM Curba\WeatherBundle\Entity\StationData s WHERE s.station = :id');
        $query->setParameter('id', $stationId);
        $yearsArray = $query->getResult(); 
        
        $years = array();
        foreach($yearsArray as $key => $value)
        {
            $years[] = array($value[1] => $value[1]);
        }
        
        return $years;
    }
}