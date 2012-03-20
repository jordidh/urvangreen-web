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
     * @ORM\ManyToOne(targetEntity="AlertType")
     * @ORM\JoinColumn(name="alert_type_id", referencedColumnName="id")
     */
    private $alert_type;
    
    /**
     * Unidirectional
     * @ORM\ManyToOne(targetEntity="ActionType")
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
     * 
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
    private $value;
    
    /**
     * @ORM\ManyToOne(targetEntity="UnitsOfMeasurement")
     * @ORM\JoinColumn(name="value_unit_id", referencedColumnName="id")
     **/
    private $valueUnit;

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
     * Set instanceDate
     *
     * @param datetime $instanceDate
     */
    public function setInstanceDate($instanceDate)
    {
        $this->instanceDate = $instanceDate;
    }

    /**
     * Get instanceDate
     *
     * @return datetime
     */
    public function getInstanceDate()
    {
        return $this->instanceDate;
    }
   
    /**
     * Set value
     *
     * @param decimal $value
     */
    public function setValue($value)
    {
        $this->value = $value;
    }

    /**
     * Get value
     *
     * @return decimal 
     */
    public function getValue()
    {
        return $this->value;
    }
    
    /**
     * Set valueUnit
     *
     * @param Curba\GardeningBundle\Entity\UnitsOfMeasurement $valueUnit
     */
    public function setValueUnit($valueUnit)
    {
        $this->valueUnit = $valueUnit;
    }

    /**
     * Get valueUnit
     *
     * @return Curba\GardeningBundle\Entity\UnitsOfMeasurement $valueUnit 
     */
    public function getValueUnit()
    {
        return $this->valueUnit;
    }
        
    /**
     * Set description
     *
     * @param string $description
     */
    public function setDescription($description)
    {
        $this->description = $description;
    }

    /**
     * Get description
     *
     * @return string
     */
    public function getDescription()
    {
        return $this->description;
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
     * Set pest
     *
     * @param Curba\GardeningBundle\Entity\Pest $pest
     */
    public function setPest(\Curba\GardeningBundle\Entity\Pest $pest)
    {
        $this->pest = $pest;
    }

    /**
     * Get pest
     *
     * @return Curba\GardeningBundle\Entity\Pest 
     */
    public function getPest()
    {
        return $this->pest;
    }

    /**
     * Set crop
     *
     * @param Curba\GardeningBundle\Entity\Crop $crop
     */
    public function setCrop(\Curba\GardeningBundle\Entity\Crop $crop)
    {
        $this->crop = $crop;
    }

    /**
     * Get crop
     *
     * @return Curba\GardeningBundle\Entity\Crop
     */
    public function getCrop()
    {
        return $this->crop;
    }
    
    /**
     * Set crop_period_type
     *
     * @param Curba\GardeningBundle\Entity\CropPeriodType $crop_period_type
     */
    public function setCropPeriodType(\Curba\GardeningBundle\Entity\CropPeriodType $crop_period_type)
    {
        $this->crop_period_type = $crop_period_type;
    }

    /**
     * Get crop_period_type
     *
     * @return Curba\GardeningBundle\Entity\Crop
     */
    public function getCropPeriodType()
    {
        return $this->crop_period_type;
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