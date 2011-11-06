<?php

namespace Curba\GardeningBundle\Entity;

use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;

/**
 * Curba\GardeningBundle\Entity\CompatibilityPlant
 *
 * @ORM\Table()
 * @ORM\Entity
 * @ORM\Entity(repositoryClass="Curba\GardeningBundle\Entity\CompatibilityPlantRepository")
 */
class CompatibilityPlant
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
     * @ORM\Column(name="compatibility", type="integer", nullable=false)
     */
    private $compatibility;

    /**
     * @ORM\Column(type="datetime", name="created_at")
     */
    private $createdAt;

    /**
     * @ORM\Column(type="datetime", name="updated_at")
     */
    private $updatedAt;

    /**
     * @ORM\ManyToOne(targetEntity="Plant")
     * @ORM\JoinColumn(name="plant_a_id", referencedColumnName="id")
     */
    private $plantA;

    /**
     * @ORM\ManyToOne(targetEntity="Plant")
     * @ORM\JoinColumn(name="plant_b_id", referencedColumnName="id")
     */
    private $plantB;


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
     * Set plantA
     *
     * @param Curba\GardeningBundle\Entity\Plant $plantA
     */
    public function setPlantA(\Curba\GardeningBundle\Entity\Plant $plantA)
    {
        $this->plantA = $plantA;
    }

    /**
     * Get plantA
     *
     * @return Curba\GardeningBundle\Entity\Plant 
     */
    public function getPlantA()
    {
        return $this->plantA;
    }

    /**
     * Set plantB
     *
     * @param Curba\GardeningBundle\Entity\Plant $plantB
     */
    public function setPlantB(\Curba\GardeningBundle\Entity\Plant $plantB)
    {
        $this->plantB = $plantB;
    }

    /**
     * Get plantB
     *
     * @return Curba\GardeningBundle\Entity\Plant 
     */
    public function getPlantB()
    {
        return $this->plantB;
    }

    /**
     * Set compatibility
     *
     * @param integer $compatibility
     */
    public function setCompatibility($compatibility)
    {
        $this->compatibility = $compatibility;
    }

    /**
     * Get compatibility
     *
     * @return integer
     */
    public function getCompatibility()
    {
        return $this->compatibility;
    }
    
    public function __toString()
    {
       return (string)$this->getCompatibility();
    }
}