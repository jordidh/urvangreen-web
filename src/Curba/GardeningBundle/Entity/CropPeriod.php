<?php

namespace Curba\GardeningBundle\Entity;

use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;

/**
 * Curba\GardeningBundle\Entity\CropPeriod
 *
 * @ORM\Table()
 * @ORM\Entity
 * @ORM\Entity(repositoryClass="Curba\GardeningBundle\Entity\CropPeriodRepository")
 */
class CropPeriod
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
     * @ORM\Column(name="initial_date", type="date", nullable=false)
     */
    private $initialDate;

    /**
     * @ORM\Column(name="final_date", type="date", nullable=false)
     */
    private $finalDate;

    /**
     * @ORM\Column(name="created_at", type="datetime", nullable=false)
     */
    private $createdAt;

    /**
     * @ORM\Column(name="updated_at", type="datetime", nullable=false)
     */
    private $updatedAt;
    
    /**
     * Days that a plant has in this period
     * @ORM\Column(name="average_period_duration", type="integer", nullable=false)
     */
    private $averagePeriodDuration;

    /**
     * @ORM\ManyToOne(targetEntity="Region")
     * @ORM\JoinColumn(name="region_id", referencedColumnName="id")
     */
    private $region;
    
    /**
     * @ORM\ManyToOne(targetEntity="CropPeriodType")
     * @ORM\JoinColumn(name="crop_period_type_id", referencedColumnName="id")
     */
    private $crop_period_type;

    /**
     * @ORM\ManyToOne(targetEntity="Plant")
     * @ORM\JoinColumn(name="plant_id", referencedColumnName="id")
     */
    private $plant;
    
    /**
     * @ORM\OneToMany(targetEntity="Crop", mappedBy="initial_crop_period")
     */
    private $crops;
    
    /**
     * @ORM\OneToMany(targetEntity="PlantCare", mappedBy="initial_crop_period")
     */
    private $plantCares;



    public function __construct()
    {
        $this->createdAt = new \DateTime();
        $this->updatedAt = new \DateTime();
        $this->crops = new \Doctrine\Common\Collections\ArrayCollection();
        $this->plantCares = new \Doctrine\Common\Collections\ArrayCollection();
    }

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
     * Set initialDate
     *
     * @param date $initialDate
     */
    public function setInitialDate($initialDate)
    {
        $this->initialDate = $initialDate;
    }

    /**
     * Get initialDate
     *
     * @return date 
     */
    public function getInitialDate()
    {
        return $this->initialDate;
    }

    /**
     * Set finalDate
     *
     * @param date $finalDate
     */
    public function setFinalDate($finalDate)
    {
        $this->finalDate = $finalDate;
    }

    /**
     * Get finalDate
     *
     * @return date 
     */
    public function getFinalDate()
    {
        return $this->finalDate;
    }
    
    /**
     * Set averagePeriodDuration
     *
     * @param integer $averagePeriodDuration
     */
    public function setAveragePeriodDuration($averagePeriodDuration)
    {
        $this->averagePeriodDuration = $averagePeriodDuration;
    }

    /**
     * Get averagePeriodDuration
     *
     * @return integer 
     */
    public function getAveragePeriodDuration()
    {
        return $this->averagePeriodDuration;
    }
    

    /**
     * Set createdAt
     *
     * @param datetime $createdAt
     */
    public function setCreatedAt($createdAt)
    {
        $this->createdAt = $createdAt;
    }

    /**
     * Get createdAt
     *
     * @return datetime 
     */
    public function getCreatedAt()
    {
        return $this->createdAt;
    }

    /**
     * Set updatedAt
     *
     * @param datetime $updatedAt
     */
    public function setUpdatedAt($updatedAt)
    {
        $this->updatedAt = $updatedAt;
    }

    /**
     * Get updatedAt
     *
     * @return datetime 
     */
    public function getUpdatedAt()
    {
        return $this->updatedAt;
    }

    /**
     * Set region
     *
     * @param Curba\GardeningBundle\Entity\Region $region
     */
    public function setRegion(\Curba\GardeningBundle\Entity\Region $region)
    {
        $this->region = $region;
    }

    /**
     * Get region
     *
     * @return Curba\GardeningBundle\Entity\Region 
     */
    public function getRegion()
    {
        return $this->region;
    }

    /**
     * Set crop_period_type
     *
     * @param Curba\GardeningBundle\Entity\CropPeriodType $cropPeriodType
     */
    public function setCropPeriodType(\Curba\GardeningBundle\Entity\CropPeriodType $cropPeriodType)
    {
        $this->crop_period_type = $cropPeriodType;
    }

    /**
     * Get crop_period_type
     *
     * @return Curba\GardeningBundle\Entity\CropPeriodType 
     */
    public function getCropPeriodType()
    {
        return $this->crop_period_type;
    }

    /**
     * Set plant
     *
     * @param Curba\GardeningBundle\Entity\Plant $plant
     */
    public function setPlant(\Curba\GardeningBundle\Entity\Plant $plant)
    {
        $this->plant = $plant;
    }

    /**
     * Get plant
     *
     * @return Curba\GardeningBundle\Entity\Plant 
     */
    public function getPlant()
    {
        return $this->plant;
    }

    /**
     * Add crops
     *
     * @param Curba\GardeningBundle\Entity\Crop $crops
     */
    public function addCrops(\Curba\GardeningBundle\Entity\Crop $crops)
    {
        $this->crops[] = $crops;
    }

    /**
     * Get crops
     *
     * @return Doctrine\Common\Collections\Collection 
     */
    public function getCrops()
    {
        return $this->crops;
    }

    /**
     * Add plantCares
     *
     * @param Curba\GardeningBundle\Entity\PlantCares $plantCares
     */
    public function addPlantCares(\Curba\GardeningBundle\Entity\PlantCares $plantCares)
    {
        $this->plantCares[] = $plantCares;
    }

    /**
     * Get plantCares
     *
     * @return Doctrine\Common\Collections\Collection 
     */
    public function getPlantCares()
    {
        return $this->plantCares;
    }
}