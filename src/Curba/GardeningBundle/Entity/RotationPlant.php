<?php

namespace Curba\GardeningBundle\Entity;

use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;

/**
 * Curba\GardeningBundle\Entity\RotationPlant
 *
 * @ORM\Table()
 * @ORM\Entity
 */
class RotationPlant
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
     * @ORM\Column(name="complementarity", type="integer", nullable=false)
     */
    private $complementarity;

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
     * Set complementarity
     *
     * @param integer $complementarity
     */
    public function setComplementarity($complementarity)
    {
        $this->complementarity = $complementarity;
    }

    /**
     * Get complementarity
     *
     * @return integer
     */
    public function getComplementarity()
    {
        return $this->complementarity;
    }
}