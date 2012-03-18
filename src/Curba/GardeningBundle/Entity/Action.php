<?php

namespace Curba\GardeningBundle\Entity;

use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;

/**
 * Curba\GardeningBundle\Entity\Action
 * 
 * An action is the result (or a instance) of an activity initiated by a user.
 * When a user comfirms an action creates a CropHistory.
 *
 * @ORM\Table()
 * @ORM\Entity
 */
class Action
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
     * @ORM\Column(type="datetime", name="created_at")
     */
    private $createdAt;

    /**
     * @ORM\Column(type="datetime", name="updated_at")
     */
    private $updatedAt;

    /**
     * @ORM\ManyToOne(targetEntity="ActionType", inversedBy="actions")
     * @ORM\JoinColumn(name="action_type_id", referencedColumnName="id")
     */
    private $action_type;

    /**
     * @ORM\ManyToOne(targetEntity="Crop", inversedBy="actions")
     * @ORM\JoinColumn(name="crop_id", referencedColumnName="id")
     */
    private $crop;
    
    /**
     * @ORM\ManyToOne(targetEntity="Pest", inversedBy="actions")
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
     * Get name
     *
     * @return string 
     */
    public function getName()
    {
        return $this->description;
    }
    
    public function __toString()
    {
       //return $this->crop.' - '.$this->action_type.' - '.$this->plant->getDescription();
        if ($this->action_type)
        {
            return $this->id;
        }
        else
        {
            return 'aaa';
        }
    }
}