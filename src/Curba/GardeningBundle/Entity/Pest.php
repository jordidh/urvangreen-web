<?php

namespace Curba\GardeningBundle\Entity;

use Doctrine\ORM\Mapping as ORM;
use Gedmo\Mapping\Annotation as Gedmo;
use Symfony\Component\Validator\Constraints as Assert;

/**
 * Curba\GardeningBundle\Entity\Pest
 *
 * @ORM\Table()
 * @ORM\Entity
 */
class Pest implements \Gedmo\Translatable\Translatable
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
     * @Gedmo\Translatable
     * @ORM\Column(type="string", length="1000", nullable=true)
     */
    protected $symptom;

    /**
     * @Gedmo\Translatable
     * @ORM\Column(type="string", length="1000", nullable=true)
     */
    protected $consequence;
    
    /**
     * @Gedmo\Translatable
     * @ORM\Column(type="string", length="1000", nullable=true)
     */
    protected $remedies;

    /**
     * @Gedmo\Translatable
     * @ORM\Column(type="string", length="255", name="scientific_name", nullable=true)
     */
    private $scientificName;

    /**
     * @ORM\Column(type="datetime", name="created_at")
     */
    private $createdAt;

    /**
     * @ORM\Column(type="datetime", name="updated_at")
     */
    private $updatedAt;

    /**
     * @ORM\ManyToOne(targetEntity="PestType")
     * @ORM\JoinColumn(name="pest_type_id", referencedColumnName="id")
     */
    private $pestType;
    
    /**
     * @ORM\ManyToMany(targetEntity="Plant", mappedBy="pests")
     */
    private $plants;
    
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
     * Set symptom
     *
     * @param string $symptom
     */
    public function setSymptom($symptom)
    {
        $this->symptom = $symptom;
    }

    /**
     * Get symptom
     *
     * @return string 
     */
    public function getSymptom()
    {
        return $this->symptom;
    }

    /**
     * Set consequence
     *
     * @param string $consequence
     */
    public function setConsequence($consequence)
    {
        $this->consequence = $consequence;
    }

    /**
     * Get consequence
     *
     * @return string 
     */
    public function getConsequence()
    {
        return $this->consequence;
    }

    /**
     * Set remedies
     *
     * @param string $remedies
     */
    public function setRemedies($remedies)
    {
        $this->remedies = $remedies;
    }

    /**
     * Get remedies
     *
     * @return string 
     */
    public function getRemedies()
    {
        return $this->remedies;
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
     * Set pestType
     *
     * @param Curba\GardeningBundle\Entity\PestType $pestType
     */
    public function setPestType(\Curba\GardeningBundle\Entity\PestType $pestType)
    {
        $this->pestType = $pestType;
    }

    /**
     * Get pestType
     *
     * @return Curba\GardeningBundle\Entity\PestType 
     */
    public function getPestType()
    {
        return $this->pestType;
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
    
    public function __toString()
    {
       return $this->getName();
    }
    
    public function setTranslatableLocale($locale)
    {
        $this->locale = $locale;
    }
}