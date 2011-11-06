<?php

namespace Curba\GardeningBundle\Entity;

use Doctrine\ORM\Mapping as ORM;
use Gedmo\Mapping\Annotation as Gedmo;
use Symfony\Component\Validator\Constraints as Assert;

/**
 * Curba\GardeningBundle\Entity\Region
 *
 * @ORM\Table()
 * @ORM\Entity
 */
class Region implements \Gedmo\Translatable\Translatable
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
     * @ORM\Column(type="string", length="255", nullable=true)
     */
    private $description;

    /**
     * @ORM\Column(type="datetime", name="created_at")
     */
    private $createdAt;

    /**
     * @ORM\Column(type="datetime", name="updated_at")
     */
    private $updatedAt;

    /**
     * @ORM\OneToMany(targetEntity="Garden", mappedBy="region")
     */
    private $gardens;
    
    /**
     * @ORM\OneToMany(targetEntity="CropPeriod", mappedBy="region")
     */
    private $cropPeriods;

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
        $this->gardens = new \Doctrine\Common\Collections\ArrayCollection();
        $this->cropPeriods = new \Doctrine\Common\Collections\ArrayCollection();
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
     * Add gardens
     *
     * @param Curba\GardeningBundle\Entity\Garden $gardens
     */
    public function addGardens(\Curba\GardeningBundle\Entity\Garden $gardens)
    {
        $this->gardens[] = $gardens;
    }

    /**
     * Get gardens
     *
     * @return Doctrine\Common\Collections\Collection 
     */
    public function getGardens()
    {
        return $this->gardens;
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
    
    public function __toString()
    {
       return $this->getName();
    }
    
    public function setTranslatableLocale($locale)
    {
        $this->locale = $locale;
    }
    
    public function asArray()
    {
        return array(
            'id'   => $this->getId(),
            'name' => $this->getName(),
            'description' => $this->getDescription()
       );
    }
}