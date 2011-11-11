<?php

namespace Curba\WeatherBundle\Entity;

use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;

/**
 * Curba\WeatherBundle\Entity\StationData
 *
 * @ORM\Table()
 * @ORM\Entity
 * @ORM\Entity(repositoryClass="Curba\WeatherBundle\Entity\StationDataRepository")
 */
class StationData
{
    /**
     * @var integer $id
     *
     * @ORM\Column(name="id", type="integer")
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="AUTO")
     */
    private $id;

    /**
     * @ORM\ManyToOne(targetEntity="Station")
     * @ORM\JoinColumn(name="station_id", referencedColumnName="id")
     */
    private $station;

    /**
     * @ORM\Column(type="datetime")
     */
    private $data_time;

    /**
     * @ORM\Column(type="decimal", scale=2)
     */
    private $wind_direction;

    /**
     * @ORM\Column(type="decimal", scale=2)
     */
    private $wind_speed;

    /**
     * @ORM\Column(type="decimal", scale=2)
     */
    private $wind_gust;

    /**
     * @ORM\Column(type="decimal", scale=2)
     */
    private $humidity_in;

    /**
     * @ORM\Column(type="decimal", scale=2)
     */
    private $humidity_out;

    /**
     * @ORM\Column(type="decimal", scale=2)
     */
    private $temperature_in;

    /**
     * @ORM\Column(type="decimal", scale=2)
     */
    private $temperature_out;

    /**
     * @ORM\Column(type="decimal", scale=2)
     */
    private $bar;

    /**
     * @ORM\Column(type="decimal", scale=2)
     */
    private $rain;

    /**
     * Get id
     *
     * @return integer 
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * Set data_time
     *
     * @param datetime $dataTime
     */
    public function setDataTime($dataTime)
    {
        $this->data_time = $dataTime;
    }

    /**
     * Get data_time
     *
     * @return datetime 
     */
    public function getDataTime()
    {
        return $this->data_time;
    }
    
    /**
     * Set wind_direction
     *
     * @param decimal $windDirection
     */
    public function setWindDirection($windDirection)
    {
        $this->wind_direction = $windDirection;
    }

    /**
     * Get wind_direction
     *
     * @return decimal 
     */
    public function getWindDirection()
    {
        return $this->wind_direction;
    }

    /**
     * Set wind_speed
     *
     * @param decimal $windSpeed
     */
    public function setWindSpeed($windSpeed)
    {
        $this->wind_speed = $windSpeed;
    }

    /**
     * Get wind_speed
     *
     * @return decimal 
     */
    public function getWindSpeed()
    {
        return $this->wind_speed;
    }

    /**
     * Set wind_gust
     *
     * @param decimal $windGust
     */
    public function setWindGust($windGust)
    {
        $this->wind_gust = $windGust;
    }

    /**
     * Get wind_gust
     *
     * @return decimal 
     */
    public function getWindGust()
    {
        return $this->wind_gust;
    }

    /**
     * Set humidity_in
     *
     * @param decimal $humidityIn
     */
    public function setHumidityIn($humidityIn)
    {
        $this->humidity_in = $humidityIn;
    }

    /**
     * Get humidity_in
     *
     * @return decimal 
     */
    public function getHumidityIn()
    {
        return $this->humidity_in;
    }

    /**
     * Set humidity_out
     *
     * @param decimal $humidityOut
     */
    public function setHumidityOut($humidityOut)
    {
        $this->humidity_out = $humidityOut;
    }

    /**
     * Get humidity_out
     *
     * @return decimal 
     */
    public function getHumidityOut()
    {
        return $this->humidity_out;
    }

    /**
     * Set temperature_in
     *
     * @param decimal $temperatureIn
     */
    public function setTemperatureIn($temperatureIn)
    {
        $this->temperature_in = $temperatureIn;
    }

    /**
     * Get temperature_in
     *
     * @return decimal 
     */
    public function getTemperatureIn()
    {
        return $this->temperature_in;
    }

    /**
     * Set temperature_out
     *
     * @param decimal $temperatureOut
     */
    public function setTemperatureOut($temperatureOut)
    {
        $this->temperature_out = $temperatureOut;
    }

    /**
     * Get temperature_out
     *
     * @return decimal 
     */
    public function getTemperatureOut()
    {
        return $this->temperature_out;
    }

    /**
     * Set bar
     *
     * @param decimal $bar
     */
    public function setBar($bar)
    {
        $this->bar = $bar;
    }

    /**
     * Get bar
     *
     * @return decimal 
     */
    public function getBar()
    {
        return $this->bar;
    }

    /**
     * Set rain
     *
     * @param decimal $rain
     */
    public function setRain($rain)
    {
        $this->rain = $rain;
    }

    /**
     * Get rain
     *
     * @return decimal 
     */
    public function getRain()
    {
        return $this->rain;
    }

    /**
     * Set station
     *
     * @param Curba\WeatherBundle\Entity\Station $station
     */
    public function setStation(\Curba\WeatherBundle\Entity\Station $station)
    {
        $this->station = $station;
    }

    /**
     * Get station
     *
     * @return Curba\WeatherBundle\Entity\Station 
     */
    public function getStation()
    {
        return $this->station;
    }
    
    public function __toString()
    {
       return $this->getDataTime()->format('Y-m-d H:i:s');
    }
    
    public function LoadFromString($data, $station)
    {
        //              Temp	Hi	Low	Out	Dew	Wind	Wind	
        //Date	Time	Out	Temp	Temp	Hum	Pt.	Speed	Dir	
        //0     1       2       3       4       5       6       7       8       
        //28/11/10 13:30 13.6	13.6	12.9	34	-2.0	1.6	SW	
        //
        //Wind	Hi	Hi	Wind	Heat	THW			Rain	
        //Run	Speed	Dir	Chill	Index	Index	Bar  	Rain	Rate	
        //9     10      11      12      13      14      15      16      17    
        //0.27	4.8	WSW	13.6	11.9	11.9	1000.0	0.00	0.0	
        //
        //Heat	Cool	In 	In	In 	In 	In 	In Air	Wind	Wind	ISS 	Arc.
        //D-D 	D-D 	Temp	Hum	Dew	Heat	EMC	Density	Samp	Tx 	Recept	Int.
        //18    19      20      21      22      23      24      25      26      27      28      29
        //0.033	0.000	16.2	56	7.4	15.4	10.45	 .0744	222	1	97.4	10
        //
        if (strlen(trim($data)) <= 0) return 0;
        
        $dataValues = explode("\t", $data);

        if (is_null($dataValues[0])) return 0;
        
        if (count($dataValues) == 30)
        {
            $date = explode("/", $dataValues[0]);
            $time = explode(":", $dataValues[1]);

            //$this->setDataTime(mktime($time[0], $time[1], '0', $date[1], $date[0], '20'.$date[2]));
            //$this->setDataTime(date('c', mktime(12,0,0,2,1,2011)));
            $this->setDataTime(new \DateTime('20'.$date[2].'-'.$date[1].'-'.$date[0].' '.$dataValues[1].':00'));

            $this->setStation($station);
            $this->setTemperatureIn($dataValues[20]);
            $this->setTemperatureOut($dataValues[2]);
            $this->setHumidityIn($dataValues[21]);
            $this->setHumidityOut($dataValues[5]);
            $this->setRain($dataValues[16]);
            $this->setBar($dataValues[15]);
            switch($dataValues[8])
            {
                case 'N': $this->setWindDirection(0); break;
                case 'NNE': $this->setWindDirection(23); break;
                case 'NE': $this->setWindDirection(45); break;
                case 'ENE': $this->setWindDirection(67); break;
                case 'E': $this->setWindDirection(90); break;
                case 'ESE': $this->setWindDirection(113); break;
                case 'SE': $this->setWindDirection(135); break;
                case 'SSE': $this->setWindDirection(157); break;
                case 'S': $this->setWindDirection(180); break;
                case 'SSW': $this->setWindDirection(203); break;
                case 'SW': $this->setWindDirection(225); break;
                case 'WSW': $this->setWindDirection(247); break;
                case 'W': $this->setWindDirection(270); break;
                case 'WNW': $this->setWindDirection(293); break;
                case 'NW': $this->setWindDirection(315); break;
                case 'NNW': $this->setWindDirection(337); break;
                default:
                    $this->setWindDirection(0);
            }
            $this->setWindSpeed($dataValues[7]);
            $this->setWindGust($dataValues[12]);
        }
        return count($dataValues);
    }
}