<?php

namespace Curba\GardeningBundle\Entity;

use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;

/**
 * Curba\GardeningBundle\Entity\CropHistory
 *
 * @ORM\Table()
 * @ORM\Entity
 * @ORM\Entity(repositoryClass="Curba\GardeningBundle\Entity\CropHistoryRepository")
 */
class CropHistory
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
     * Unidirectional
     * @ORM\OneToOne(targetEntity="AlertType")
     * @ORM\JoinColumn(name="alert_type_id", referencedColumnName="id")
     */
    private $alert_type;
    
    /**
     * Unidirectional
     * @ORM\OneToOne(targetEntity="ActionType")
     * @ORM\JoinColumn(name="action_type_id", referencedColumnName="id")
     */
    private $action_type;
    

    /**
     * @ORM\Column(name="instance_date", type="date", nullable=false)
     */
    private $instanceDate;

    /**
     * @ORM\Column(name="created_at", type="datetime", nullable=false)
     */
    private $createdAt;

    /**
     * @ORM\Column(name="updated_at", type="datetime", nullable=false)
     */
    private $updatedAt;
    
    /**
     * Unidirectional
     * @ORM\ManyToOne(targetEntity="Garden")
     * @ORM\JoinColumn(name="garden_id", referencedColumnName="id")
     */
    private $garden;

    /**
     * Unidirectional
     * @ORM\ManyToOne(targetEntity="Zone")
     * @ORM\JoinColumn(name="zone_id", referencedColumnName="id")
     */
    private $zone;

    /**
     * Unidirectional
     * @ORM\ManyToOne(targetEntity="Crop", inversedBy="history")
     * @ORM\JoinColumn(name="crop_id", referencedColumnName="id")
     */
    private $crop;
    
    /**
     * Unidirectional
     * @ORM\ManyToOne(targetEntity="Pest")
     * @ORM\JoinColumn(name="pest_id", referencedColumnName="id")
     */
    private $pest;
    
    /**
     * @ORM\Column(type="decimal", length=10, scale=3)
     */
    private $quantityA;
    
    /**
     * @ORM\Column(type="decimal", length=10, scale=3)
     */
    private $quantityB;
    
    /**
     * @ORM\Column(type="string", length="1000", nullable=true)
     */
    private $description;

    /**
     * If is NOT NULL shows when a crop period begins
     * @ORM\ManyToOne(targetEntity="CropPeriodType")
     * @ORM\JoinColumn(name="crop_period_type_id", referencedColumnName="id")
     */
    private $crop_period_type;


    public function __construct()
    {
        $this->createdAt = new \DateTime();
        $this->updatedAt = new \DateTime();
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
    
    /**
     * Set alert_type
     *
     * @param Curba\GardeningBundle\Entity\AlertType $alertType
     */
    public function setAlertType(\Curba\GardeningBundle\Entity\AlertType $alertType)
    {
        $this->alert_type = $alertType;
    }

    /**
     * Get alert_type
     *
     * @return Curba\GardeningBundle\Entity\AlertType 
     */
    public function getAlertType()
    {
        return $this->alert_type;
    }
    
    /**
     * Set action_type
     *
     * @param Curba\GardeningBundle\Entity\ActionType $actionType
     */
    public function setActionType(\Curba\GardeningBundle\Entity\ActionType $actionType)
    {
        $this->action_type = $actionType;
    }

    /**
     * Get action_type
     *
     * @return Curba\GardeningBundle\Entity\ActionType 
     */
    public function getActionType()
    {
        return $this->action_type;
    }
}