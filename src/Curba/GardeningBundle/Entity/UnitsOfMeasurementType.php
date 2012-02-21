<?php

namespace Curba\GardeningBundle\Entity;

use Doctrine\ORM\Mapping as ORM;
use Gedmo\Mapping\Annotation as Gedmo;
use Symfony\Component\Validator\Constraints as Assert;

/**
 * Curba\GardeningBundle\Entity\UnitsOfMeasurementType
 *
 * @ORM\Table()
 * @ORM\Entity
 */
class UnitsOfMeasurementType implements \Gedmo\Translatable\Translatable
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
     * @ORM\Column(type="string", length="10", nullable=false)
     */
    private $name;

    /**
     * @Gedmo\Translatable
     * @ORM\Column(type="string", length="255", nullable=true)
     */
    private $description;
    
    /**
     * @ORM\OneToMany(targetEntity="UnitsOfMeasurement", mappedBy="unitsOfMeasurementType")
     */
    private $unitsOfMeasurement;

    /**
     * @ORM\Column(type="datetime", name="created_at")
     */
    private $createdAt;

    /**
     * @ORM\Column(type="datetime", name="updated_at")
     */
    private $updatedAt;
    
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
        $this->unitsOfMeasurement = new \Doctrine\Common\Collections\ArrayCollection();
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
     * Set description        //Reference to make a relation with StationFixtures
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
     * Add unitsOfMeasurement
     *
     * @param Curba\GardeningBundle\Entity\Garden $unitsOfMeasurement
     */
    public function addUnitsOfMeasurement(\Curba\GardeningBundle\Entity\Garden $unitsOfMeasurement)
    {
        $this->unitsOfMeasurement[] = $unitsOfMeasurement;
    }

    /**
     * Get unitsOfMeasurement
     *
     * @return Doctrine\Common\Collections\Collection 
     */
    public function getUnitsOfMeasurement()
    {
        return $this->unitsOfMeasurement;
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
    
    public function __toString()
    {
       return $this->getName();
    }
    
    public function setTranslatableLocale($locale)
    {
        $this->locale = $locale;
    }
}