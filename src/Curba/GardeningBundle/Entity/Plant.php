<?php

namespace Curba\GardeningBundle\Entity;

use Doctrine\ORM\Mapping as ORM;
use Gedmo\Mapping\Annotation as Gedmo;
use Symfony\Component\Validator\Constraints as Assert;

/**
 * Curba\GardeningBundle\Entity\Plant
 *
 * @ORM\Table()
 * @ORM\Entity(repositoryClass="Curba\GardeningBundle\Entity\PlantRepository")
 */
class Plant implements \Gedmo\Translatable\Translatable
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
     * @ORM\Column(type="string", length="20", unique=true)
     */
    private $code;
    
    /**
     * @Gedmo\Translatable
     * @ORM\Column(type="string", length="255", unique=true)
     */
    private $name;

    /**
     * @Gedmo\Translatable
     * @ORM\Column(type="string", length="3000", nullable=true)
     */
    private $description;
    
    /**
     * @ORM\Column(type="string", length="255", name="scientific_name", nullable=true)
     */
    private $scientificName;

    /**
     * Productivity in kg * m2
     * @ORM\Column(type="decimal", length=10, scale=2, nullable=false)
     */
    private $productivity;

    /**
     * @ORM\Column(type="integer", name="witdh_spacing", nullable=false)
     */
    private $widthSpacing;

    /**
     * @ORM\Column(type="integer", name="height_spacing", nullable=false)
     */
    private $heightSpacing;

    /**
     * @ORM\Column(type="integer", name="soil_volume", nullable=false)
     */
    private $soilVolume;

    /**
     * @ORM\Column(type="integer", name="root_depth", nullable=false)
     */
    private $rootDepth;

    /**
     * @ORM\Column(type="integer", name="plant_height", nullable=false)
     */
    private $plantHeight;

    /**
     * @ORM\Column(type="integer", name="seed_depth", nullable=false)
     */
    private $seedDepth;

    /**
     * @ORM\Column(type="decimal", length=10, scale=2, name="ph_minimum", nullable=false)
     */
    private $phMinimum;

    /**
     * @ORM\Column(type="decimal", length=10, scale=2, name="ph_maximum", nullable=false)
     */
    private $phMaximum;

    /**
     * @ORM\Column(type="decimal", length=10, scale=2, name="temperature_minimum", nullable=false)
     */
    private $temperatureMinimum;

    /**
     * @ORM\Column(type="decimal", length=10, scale=2, name="temperature_maximum", nullable=false)
     */
    private $temperatureMaximum;

    /**
     * @ORM\Column(type="datetime", name="created_at")
     */
    private $createdAt;

    /**
     * @ORM\Column(type="datetime", name="updated_at")
     */
    private $updatedAt;

    /**
     * @ORM\ManyToOne(targetEntity="FertilizerType")
     * @ORM\JoinColumn(name="fertilizer_type_id", referencedColumnName="id")
     */
    private $fertilizerType;

    /**
     * @ORM\ManyToOne(targetEntity="LifeCicleType")
     * @ORM\JoinColumn(name="life_cicle_type_id", referencedColumnName="id")
     */
    private $lifeCicleType;

    /**
     * @ORM\ManyToOne(targetEntity="PlantFamily")
     * @ORM\JoinColumn(name="plant_family_id", referencedColumnName="id")
     */
    private $plantFamily;

    /**
     * @ORM\ManyToOne(targetEntity="ClimateType")
     * @ORM\JoinColumn(name="climate_type_id", referencedColumnName="id")
     */
    private $climateType;

    /**
     * @ORM\ManyToOne(targetEntity="SoilType")
     * @ORM\JoinColumn(name="soil_type_id", referencedColumnName="id")
     */
    private $soilType;

    /**
     * @ORM\ManyToOne(targetEntity="IrrigationType")
     * @ORM\JoinColumn(name="irrigation_type_id", referencedColumnName="id")
     */
    private $irrigationType;

    /**
     * @ORM\ManyToOne(targetEntity="FrostResistanceType")
     * @ORM\JoinColumn(name="frost_resistance_type_id", referencedColumnName="id")
     */
    private $frostResistanceType;

    /**
     * @ORM\ManyToOne(targetEntity="SalinityToleranceType")
     * @ORM\JoinColumn(name="salinity_tolerance_type_id", referencedColumnName="id")
     */
    private $salinityToleranceType;

    /**
     * @ORM\ManyToMany(targetEntity="PlantCare", mappedBy="plants")
     **/
    private $plantCare;

    /**
     * @ORM\ManyToOne(targetEntity="ActionType")
     * @ORM\JoinColumn(name="action_type_id", referencedColumnName="id")
     */
    private $actionType;
    
    /**
     * @ORM\OneToMany(targetEntity="Crop", mappedBy="plant")
     */
    private $crops;

    /**
     * @ORM\OneToMany(targetEntity="CropPeriod", mappedBy="plant")
     */
    private $cropPeriods;
    
    /**
     * @ORM\ManyToMany(targetEntity="Pest", inversedBy="plants")
     * @ORM\JoinTable(name="plants_pests")
     */
    private $pests;
    
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
        $this->crops = new \Doctrine\Common\Collections\ArrayCollection();
        $this->cropPeriods = new \Doctrine\Common\Collections\ArrayCollection();
        $this->pests = new \Doctrine\Common\Collections\ArrayCollection();
        $this->plantCare = new \Doctrine\Common\Collections\ArrayCollection();
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
     * Set code
     *
     * @param string $code
     */
    public function setCode($code)
    {
        $this->code = $code;
    }

    /**
     * Get code
     *
     * @return string 
     */
    public function getCode()
    {
        return $this->code;
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
     * Set scientificName
     *
     * @param string $scientificName
     */
    public function setScientificName($scientificName)
    {
        $this->scientificName = $scientificName;
    }

    /**
     * Get scientificName
     *
     * @return string 
     */
    public function getScientificName()
    {
        return $this->scientificName;
    }

    /**
     * Set productivity
     *
     * @param decimal $productivity
     */
    public function setProductivity($productivity)
    {
        $this->productivity = $productivity;
    }

    /**
     * Get productivity
     *
     * @return decimal 
     */
    public function getProductivity()
    {
        return $this->productivity;
    }

    /**
     * Set widthSpacing
     *
     * @param integer $widthSpacing
     */
    public function setWidthSpacing($widthSpacing)
    {
        $this->widthSpacing = $widthSpacing;
    }

    /**
     * Get widthSpacing
     *
     * @return integer 
     */
    public function getWidthSpacing()
    {
        return $this->widthSpacing;
    }

    /**
     * Set heightSpacing
     *
     * @param integer $heightSpacing
     */
    public function setHeightSpacing($heightSpacing)
    {
        $this->heightSpacing = $heightSpacing;
    }

    /**
     * Get heightSpacing
     *
     * @return integer 
     */
    public function getHeightSpacing()
    {
        return $this->heightSpacing;
    }

    /**
     * Set soilVolume
     *
     * @param integer $soilVolume
     */
    public function setSoilVolume($soilVolume)
    {
        $this->soilVolume = $soilVolume;
    }

    /**
     * Get soilVolume
     *
     * @return integer 
     */
    public function getSoilVolume()
    {
        return $this->soilVolume;
    }

    /**
     * Set rootDepth
     *
     * @param integer $rootDepth
     */
    public function setRootDepth($rootDepth)
    {
        $this->rootDepth = $rootDepth;
    }

    /**
     * Get rootDepth
     *
     * @return integer 
     */
    public function getRootDepth()
    {
        return $this->rootDepth;
    }

    /**
     * Set plantHeight
     *
     * @param integer $plantHeight
     */
    public function setPlantHeight($plantHeight)
    {
        $this->plantHeight = $plantHeight;
    }

    /**
     * Get plantHeight
     *
     * @return integer 
     */
    public function getPlantHeight()
    {
        return $this->plantHeight;
    }

    /**
     * Set seedDepth
     *
     * @param integer $seedDepth
     */
    public function setSeedDepth($seedDepth)
    {
        $this->seedDepth = $seedDepth;
    }

    /**
     * Get seedDepth
     *
     * @return integer 
     */
    public function getSeedDepth()
    {
        return $this->seedDepth;
    }

    /**
     * Set phMinimum
     *
     * @param decimal $phMinimum
     */
    public function setPhMinimum($phMinimum)
    {
        $this->phMinimum = $phMinimum;
    }

    /**
     * Get phMinimum
     *
     * @return decimal 
     */
    public function getPhMinimum()
    {
        return $this->phMinimum;
    }

    /**
     * Set phMaximum
     *
     * @param decimal $phMaximum
     */
    public function setPhMaximum($phMaximum)
    {
        $this->phMaximum = $phMaximum;
    }

    /**
     * Get phMaximum
     *
     * @return decimal 
     */
    public function getPhMaximum()
    {
        return $this->phMaximum;
    }

    /**
     * Set temperatureMinimum
     *
     * @param decimal $temperatureMinimum
     */
    public function setTemperatureMinimum($temperatureMinimum)
    {
        $this->temperatureMinimum = $temperatureMinimum;
    }

    /**
     * Get temperatureMinimum
     *
     * @return decimal 
     */
    public function getTemperatureMinimum()
    {
        return $this->temperatureMinimum;
    }

    /**
     * Set temperatureMaximum
     *
     * @param decimal $temperatureMaximum
     */
    public function setTemperatureMaximum($temperatureMaximum)
    {
        $this->temperatureMaximum = $temperatureMaximum;
    }

    /**
     * Get temperatureMaximum
     *
     * @return decimal 
     */
    public function getTemperatureMaximum()
    {
        return $this->temperatureMaximum;
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
     * Set fertilizerType
     *
     * @param Curba\GardeningBundle\Entity\FertilizerType $fertilizerType
     */
    public function setFertilizerType(\Curba\GardeningBundle\Entity\FertilizerType $fertilizerType)
    {
        $this->fertilizerType = $fertilizerType;
    }

    /**
     * Get fertilizerType
     *
     * @return Curba\GardeningBundle\Entity\FertilizerType 
     */
    public function getFertilizerType()
    {
        return $this->fertilizerType;
    }

    /**
     * Set lifeCicleType
     *
     * @param Curba\GardeningBundle\Entity\LifeCicleType $lifeCicleType
     */
    public function setLifeCicleType(\Curba\GardeningBundle\Entity\LifeCicleType $lifeCicleType)
    {
        $this->lifeCicleType = $lifeCicleType;
    }

    /**
     * Get lifeCicleType
     *
     * @return Curba\GardeningBundle\Entity\LifeCicleType 
     */
    public function getLifeCicleType()
    {
        return $this->lifeCicleType;
    }

    /**
     * Set plantFamily
     *
     * @param Curba\GardeningBundle\Entity\PlantFamily $plantFamily
     */
    public function setPlantFamily(\Curba\GardeningBundle\Entity\PlantFamily $plantFamily)
    {
        $this->plantFamily = $plantFamily;
    }

    /**
     * Get plantFamily
     *
     * @return Curba\GardeningBundle\Entity\PlantFamily 
     */
    public function getPlantFamily()
    {
        return $this->plantFamily;
    }

    /**
     * Set climateType
     *
     * @param Curba\GardeningBundle\Entity\ClimateType $climateType
     */
    public function setClimateType(\Curba\GardeningBundle\Entity\ClimateType $climateType)
    {
        $this->climateType = $climateType;
    }

    /**
     * Get climateType
     *
     * @return Curba\GardeningBundle\Entity\ClimateType 
     */
    public function getClimateType()
    {
        return $this->climateType;
    }

    /**
     * Set soilType
     *
     * @param Curba\GardeningBundle\Entity\SoilType $soilType
     */
    public function setSoilType(\Curba\GardeningBundle\Entity\SoilType $soilType)
    {
        $this->soilType = $soilType;
    }

    /**
     * Get soilType
     *
     * @return Curba\GardeningBundle\Entity\SoilType 
     */
    public function getSoilType()
    {
        return $this->soilType;
    }

    /**
     * Set irrigationType
     *
     * @param Curba\GardeningBundle\Entity\IrrigationType $irrigationType
     */
    public function setIrrigationType(\Curba\GardeningBundle\Entity\IrrigationType $irrigationType)
    {
        $this->irrigationType = $irrigationType;
    }

    /**
     * Get irrigationType
     *
     * @return Curba\GardeningBundle\Entity\IrrigationType 
     */
    public function getIrrigationType()
    {
        return $this->irrigationType;
    }

    /**
     * Set frostResistanceType
     *
     * @param Curba\GardeningBundle\Entity\FrostResistanceType $frostResistanceType
     */
    public function setFrostResistanceType(\Curba\GardeningBundle\Entity\FrostResistanceType $frostResistanceType)
    {
        $this->frostResistanceType = $frostResistanceType;
    }

    /**
     * Get frostResistanceType
     *
     * @return Curba\GardeningBundle\Entity\FrostResistanceType 
     */
    public function getFrostResistanceType()
    {
        return $this->frostResistanceType;
    }

    /**
     * Set salinityToleranceType
     *
     * @param Curba\GardeningBundle\Entity\SalinityToleranceType $salinityToleranceType
     */
    public function setSalinityToleranceType(\Curba\GardeningBundle\Entity\SalinityToleranceType $salinityToleranceType)
    {
        $this->salinityToleranceType = $salinityToleranceType;
    }

    /**
     * Get salinityToleranceType
     *
     * @return Curba\GardeningBundle\Entity\SalinityToleranceType 
     */
    public function getSalinityToleranceType()
    {
        return $this->salinityToleranceType;
    }

    /**
     * Add plantCare
     *
     * @param Curba\GardeningBundle\Entity\PlantCare $plantCare
     */
    public function addPlantCare(\Curba\GardeningBundle\Entity\PlantCare $plantCare)
    {
        $this->plantsCare[] = $plantCare;
    }

    /**
     * Get plantCare
     *
     * @return Doctrine\Common\Collections\Collection 
     */
    public function getPlantCare()
    {
        return $this->plantCare;
    }

    /**
     * Set actionType
     *
     * @param Curba\GardeningBundle\Entity\ActionType $actionType
     */
    public function setActionType(\Curba\GardeningBundle\Entity\ActionType $actionType)
    {
        $this->actionType = $actionType;
    }

    /**
     * Get actionType
     *
     * @return Curba\GardeningBundle\Entity\ActionType 
     */
    public function getActionType()
    {
        return $this->actionType;
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
     * Add cropPeriods
     *
     * @param Curba\GardeningBundle\Entity\CropPeriod $cropPeriods
     */
    public function addCropPeriods(\Curba\GardeningBundle\Entity\CropPeriod $cropPeriods)
    {
        $this->cropPeriods[] = $cropPeriods;
    }

    /**
     * Get cropPeriods
     *
     * @return Doctrine\Common\Collections\Collection 
     */
    public function getCropPeriods()
    {
        return $this->cropPeriods;
    }

    /**
     * Add pests
     *
     * @param Curba\GardeningBundle\Entity\Pest $pests
     */
    public function addPests(\Curba\GardeningBundle\Entity\Pest $pests)
    {
        $this->pests[] = $pests;
    }

    /**
     * Get pests
     *
     * @return Doctrine\Common\Collections\Collection 
     */
    public function getPests()
    {
        return $this->pests;
    }
    
    public function __toString()
    {
       return $this->getName();
    }
    
    public function setTranslatableLocale($locale)
    {
        $this->locale = $locale;
    }
    
    public function asJsonArray()
    {
        return json_encode($this->asArray());
    }
    
    public function asArray()
    {
        return array(
            'id'   => $this->getId(),
            'name' => $this->getName(),
            'description' => $this->getDescription(),
            'scientificName' => $this->getScientificName(),
            'productivity' => $this->getProductivity(),
            'widthSpacing' => $this->getWidthSpacing(),
            'heightSpacing' => $this->getHeightSpacing(),
            'soilVolume' => $this->getSoilVolume(),
            'rootDepth' => $this->getRootDepth(),
            'plantHeight' => $this->getPlantHeight(),
            'seedDepth' => $this->getSeedDepth(),
            'phMinimum' => $this->getPhMinimum(),
            'phMaximum' => $this->getPhMaximum(),
            'temperatureMinimum' => $this->getTemperatureMinimum(),
            'temperatureMaximum' => $this->getTemperatureMaximum(),
            'createdAt' => $this->getCreatedAt(),
            'updatedAt' => $this->getUpdatedAt(),
            'fertilizerType' => $this->getFertilizerType(),
            'lifeCicleType' => $this->getLifeCicleType(),
            'plantFamily' => $this->getPlantFamily(),
            'climateType' => $this->getClimateType(),
            'soilType' => $this->getSoilType(),
            'irrigationType' => $this->getIrrigationType(),
            'frostResistanceType' => $this->getFrostResistanceType(),
            'salinityToleranceType' => $this->getSalinityToleranceType(),
            'plantCare' => $this->getPlantCare(),
            'actionType' => $this->getActionType(),
            'crops' => $this->getCrops(),
            'cropPeriods' => $this->getCropPeriods(),
            'pests' => $this->getPests(),
       );
    }
}