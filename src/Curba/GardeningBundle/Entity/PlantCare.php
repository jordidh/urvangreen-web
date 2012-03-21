<?php

namespace Curba\GardeningBundle\Entity;

use Doctrine\ORM\Mapping as ORM;
use Gedmo\Mapping\Annotation as Gedmo;
use Symfony\Component\Validator\Constraints as Assert;

/**
 * Curba\GardeningBundle\Entity\PlantCare
 * 
 * A PlantCare is a pattern that allows create alerts by the command "CreateAlertsCommand".
 * Creates an alert.
 *
 * @ORM\Table()
 * @ORM\Entity
 */
class PlantCare implements \Gedmo\Translatable\Translatable
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
     * @Gedmo\Translatable
     * @ORM\Column(type="string", length="255", unique=true)
     */
    private $name;

    /**
     * @Gedmo\Translatable
     * @ORM\Column(type="string", length="1000", nullable=true)
     */
    private $description;
    
    /**
     * Unidirectional
     * @ORM\OneToOne(targetEntity="AlertType")
     * @ORM\JoinColumn(name="alert_type_id", referencedColumnName="id")
     */
    private $alert_type;
    
    /**
     * days where begin the crop care relative to the initialCropPeriod: the 
     * crop period can be "protected crop", "open air crop" or "transplant"
     * @ORM\Column(type="integer", name="days_from_begining")
     */
    private $daysFromBegining;

    /**
     * duration of the care: 0 inmediate, null: forever
     * @ORM\Column(type="integer", name="duration_days", nullable=true)
     */
    private $durationDays;
    
    /**
     * repeat each hours until end of period: 0 no repeat
     * @ORM\Column(type="integer", name="repeat_each_hours", nullable=true)
     */
    private $repeatEachHours;
            
    /**
     * repetat each times maximum until end of period: 0 no repeat, -1 repeat always
     * @ORM\Column(type="integer", name="repeat_max_times", nullable=true)
     */
    private $repeatMaxTimes;

    /**
     * @ORM\Column(type="datetime", name="created_at")
     */
    private $createdAt;

    /**
     * @ORM\Column(type="datetime", name="updated_at")
     */
    private $updatedAt;

    /**
     * @ORM\ManyToMany(targetEntity="Plant", inversedBy="plant_care")
     * @ORM\JoinTable(name="plantcares_plants")
     **/
    private $plants;
    
    /**
     * @ORM\ManyToOne(targetEntity="CropPeriodType")
     * @ORM\JoinColumn(name="period_type_id", referencedColumnName="id")
     */
    private $crop_period_type;

    /**
     * @ORM\ManyToOne(targetEntity="Region")
     * @ORM\JoinColumn(name="region_id", referencedColumnName="id")
     */
    private $region;
    
    /**
     * @Gedmo\Locale
     * Used locale to override Translation listener`s locale
     * this is not a mapped field of entity metadata, just a simple property
     */
    private $locale;

    public function __construct()
    {
        $this->createdAt = new \DateTime();
        $this->updatedAt = new \DateTime();
        $this->plants = new \Doctrine\Common\Collections\ArrayCollection();
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
     * Set name
     *
     * @param string $name
     */
    public function setName($name)
    {
        $this->name = $name;
    }

    /**
     * Get name
     *
     * @return string 
     */
    public function getName()
    {
        return $this->name;
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
     * Set daysFromBegining
     *
     * @param integer $daysFromBegining
     */
    public function setDaysFromBegining($daysFromBegining)
    {
        $this->daysFromBegining = $daysFromBegining;
    }

    /**
     * Get daysFromBegining
     *
     * @return integer 
     */
    public function getDaysFromBegining()
    {
        return $this->daysFromBegining;
    }

    /**
     * Set durationDays
     *
     * @param integer $durationDays
     */
    public function setDurationDays($durationDays)
    {
        $this->durationDays = $durationDays;
    }

    /**
     * Get durationDays
     *
     * @return integer 
     */
    public function getDurationDays()
    {
        return $this->durationDays;
    }
    
    /**
     * Set repeatEachHours
     *
     * @param integer $repeatEachHours
     */
    public function setRepeatEachHours($repeatEachHours)
    {
        $this->repeatEachHours = $repeatEachHours;
    }

    /**
     * Get repeatEachHours
     *
     * @return integer 
     */
    public function getRepeatEachHours()
    {
        return $this->repeatEachHours;
    }

    /**
     * Set repeatMaxTimes
     *
     * @param integer $repeatMaxTimes
     */
    public function setRepeatMaxTimes($repeatMaxTimes)
    {
        $this->repeatMaxTimes = $repeatMaxTimes;
    }

    /**
     * Get repeatMaxTimes
     *
     * @return integer 
     */
    public function getRepeatMaxTimes()
    {
        return $this->repeatMaxTimes;
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
     * Add plants
     *
     * @param Curba\GardeningBundle\Entity\Plant $plants
     */
    public function addPlants(\Curba\GardeningBundle\Entity\Plant $plants)
    {
        $this->plants[] = $plants;
    }

    /**
     * Get plants
     *
     * @return Doctrine\Common\Collections\Collection 
     */
    public function getPlants()
    {
        return $this->plants;
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

    public function __toString()
    {
       return $this->getName();
    }
    
    public function setTranslatableLocale($locale)
    {
        $this->locale = $locale;
    }
}