<?php

namespace Curba\GardeningBundle\Entity;

use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;

/**
 * Curba\GardeningBundle\Entity\Zone
 *
 * @ORM\Table()
 * @ORM\Entity
 * @ORM\Entity(repositoryClass="Curba\GardeningBundle\Entity\ZoneRepository")
 */
class Zone
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
     * @ORM\Column(type="string", length="255", nullable=false)
     */
    private $name;

    /**
     * @ORM\Column(type="string", length="255", nullable=true)
     */
    private $description;

    /**
     * @ORM\Column(name="initial_point_x", type="bigint", nullable=false)
     */
    private $initialPointX;

    /**
     * @ORM\Column(name="initial_point_y", type="bigint", nullable=false)
     */
    private $initialPointY;

    /**
     * @ORM\Column(name="final_point_x", type="bigint", nullable=false)
     */
    private $finalPointX;

    /**
     * @ORM\Column(name="final_point_y", type="bigint", nullable=false)
     */
    private $finalPointY;

    /**
     * @ORM\Column(name="depth", type="bigint", nullable=false)
     */
    private $depth;

    /**
     * @ORM\Column(type="datetime", name="created_at")
     */
    private $createdAt;

    /**
     * @ORM\Column(type="datetime", name="updated_at")
     */
    private $updatedAt;
    
    /**
     * @ORM\Column(type="datetime", name="deleted_at", nullable=true)
     */
    private $deletedAt;

    /**
     * @ORM\ManyToOne(targetEntity="Garden")
     * @ORM\JoinColumn(name="garden_id", referencedColumnName="id")
     */
    private $garden;

    /**
     * @ORM\ManyToOne(targetEntity="ZoneType")
     * @ORM\JoinColumn(name="zone_type_id", referencedColumnName="id")
     */
    private $zone_type;

    /**
     * @ORM\OneToMany(targetEntity="Crop", mappedBy="zone")
     */
    private $crops;


    public function __construct()
    {
        $this->createdAt = new \DateTime();
        $this->updatedAt = new \DateTime();
        $this->crops = new \Doctrine\Common\Collections\ArrayCollection();
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
     * Set initialPointX
     *
     * @param bigint $initialPointX
     */
    public function setInitialPointX($initialPointX)
    {
        $this->initialPointX = $initialPointX;
    }

    /**
     * Get initialPointX
     *
     * @return bigint 
     */
    public function getInitialPointX()
    {
        return $this->initialPointX;
    }

    /**
     * Set initialPointY
     *
     * @param bigint $initialPointY
     */
    public function setInitialPointY($initialPointY)
    {
        $this->initialPointY = $initialPointY;
    }

    /**
     * Get initialPointY
     *
     * @return bigint 
     */
    public function getInitialPointY()
    {
        return $this->initialPointY;
    }

    /**
     * Set finalPointX
     *
     * @param bigint $finalPointX
     */
    public function setFinalPointX($finalPointX)
    {
        $this->finalPointX = $finalPointX;
    }

    /**
     * Get finalPointX
     *
     * @return bigint 
     */
    public function getFinalPointX()
    {
        return $this->finalPointX;
    }

    /**
     * Set finalPointY
     *
     * @param bigint $finalPointY
     */
    public function setFinalPointY($finalPointY)
    {
        $this->finalPointY = $finalPointY;
    }

    /**
     * Get finalPointY
     *
     * @return bigint 
     */
    public function getFinalPointY()
    {
        return $this->finalPointY;
    }

    /**
     * Set depth
     *
     * @param bigint $depth
     */
    public function setDepth($depth)
    {
        $this->depth = $depth;
    }

    /**
     * Get depth
     *
     * @return bigint 
     */
    public function getDepth()
    {
        return $this->depth;
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
     * Set deletedAt
     *
     * @param datetime $deletedAt
     */
    public function setDeletedAt($deletedAt)
    {
        $this->deletedAt = $deletedAt;
    }

    /**
     * Get deletedAt
     *
     * @return datetime 
     */
    public function getDeletedAt()
    {
        return $this->deletedAt;
    }

    /**
     * Set garden
     *
     * @param Curba\GardeningBundle\Entity\Garden $garden
     */
    public function setGarden(\Curba\GardeningBundle\Entity\Garden $garden)
    {
        $this->garden = $garden;
    }

    /**
     * Get garden
     *
     * @return Curba\GardeningBundle\Entity\Garden 
     */
    public function getGarden()
    {
        return $this->garden;
    }

    /**
     * Set zone_type
     *
     * @param Curba\GardeningBundle\Entity\ZoneType $zoneType
     */
    public function setZoneType(\Curba\GardeningBundle\Entity\ZoneType $zoneType)
    {
        $this->zone_type = $zoneType;
    }

    /**
     * Get zone_type
     *
     * @return Curba\GardeningBundle\Entity\ZoneType 
     */
    public function getZoneType()
    {
        return $this->zone_type;
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
    
    public function __toString()
    {
       return $this->getName();
    }
    
    public function asArray()
    {
        return array(
            'id'   => $this->getId(),
            'name' => $this->getName(),
            'description' => $this->getDescription(),
            'initialPointX' => $this->getInitialPointX(),
            'initialPointY' => $this->getInitialPointY(),
            'finalPointX' => $this->getFinalPointX(),
            'finalPointY' => $this->getFinalPointY(),
            'depth' => $this->getDepth(),
            'zoneTypeId' => $this->getZoneType()->getId(),
            'gardenId' => $this->getGarden()->getId(),
            'createdAt' => $this->getCreatedAt(),
            'updatedAt' => $this->getUpdatedAt(),
            'deletedAt' => $this->getDeletedAt()
       );
    }

    public function fromArray($array)
    {
        //Expected $array = {"id":1,"name":"Test 1","description":"Test 1","initialPointX":"1","initialPointY":"1","finalPointX":"200","finalPointY":"200","depth":"200","zoneTypeId":1,"gardenId":2}
        $this->setName($array['name']);
        $this->setDescription($array['description']);
        $this->setInitialPointX($array['initialPointX']);
        $this->setInitialPointY($array['initialPointY']);
        $this->setFinalPointX($array['finalPointX']);
        $this->setFinalPointY($array['finalPointY']);
        $this->setDepth($array['depth']);
        //'zoneTypeId' => $this->getZoneType()->getId(),
        //'gardenId' => $this->getGarden()->getId(),
    }
}