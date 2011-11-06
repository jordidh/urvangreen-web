<?php

namespace Curba\GardeningBundle\Entity;

use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;

/**
 * Curba\GardeningBundle\Entity\Garden
 *
 * @ORM\Table()
 * @ORM\Entity
 * @ORM\Entity(repositoryClass="Curba\GardeningBundle\Entity\GardenRepository")
 */
class Garden
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
     * @ORM\Column(type="string", length="255")
     */
    private $name;

    /**
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
     * @ORM\Column(type="datetime", name="deleted_at", nullable=true)
     */
    private $deletedAt;

    /**
     * @ORM\Column(name="latitude", type="decimal", nullable=false)
     */
    private $latitude;

    /**
     * @ORM\Column(name="longitude", type="decimal", nullable=false)
     */
    private $longitude;

    /**
     * @ORM\Column(name="width", type="bigint", nullable=false)
     */
    private $width;

    /**
     * @ORM\Column(name="height", type="bigint", nullable=false)
     */
    private $height;

    /**
     * @ORM\ManyToOne(targetEntity="Region")
     * @ORM\JoinColumn(name="region_id", referencedColumnName="id")
     */
    private $region;
    
    /**
     * @ORM\OneToMany(targetEntity="Zone", mappedBy="garden")
     */
    private $zones;

    /**
     * @ORM\OneToMany(targetEntity="Alert", mappedBy="garden")
     */
    private $alerts;
    
    /**
     * @ORM\ManyToOne(targetEntity="GardenType")
     * @ORM\JoinColumn(name="garden_type_id", referencedColumnName="id")
     */
    private $garden_type;

    public function __construct()
    {
        $this->createdAt = new \DateTime();
        $this->updatedAt = new \DateTime();
        $this->zones = new \Doctrine\Common\Collections\ArrayCollection();
        $this->alerts = new \Doctrine\Common\Collections\ArrayCollection();
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
     * Set latitude
     *
     * @param decimal $latitude
     */
    public function setLatitude($latitude)
    {
        $this->latitude = $latitude;
    }

    /**
     * Get latitude
     *
     * @return decimal 
     */
    public function getLatitude()
    {
        return $this->latitude;
    }

    /**
     * Set longitude
     *
     * @param decimal $longitude
     */
    public function setLongitude($longitude)
    {
        $this->longitude = $longitude;
    }

    /**
     * Get longitude
     *
     * @return decimal 
     */
    public function getLongitude()
    {
        return $this->longitude;
    }

    /**
     * Set width
     *
     * @param bigint $width
     */
    public function setWidth($width)
    {
        $this->width = $width;
    }

    /**
     * Get width
     *
     * @return bigint 
     */
    public function getWidth()
    {
        return $this->width;
    }

    /**
     * Set height
     *
     * @param bigint $height
     */
    public function setHeight($height)
    {
        $this->height = $height;
    }

    /**
     * Get height
     *
     * @return bigint 
     */
    public function getHeight()
    {
        return $this->height;
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
     * Add zones
     *
     * @param Curba\GardeningBundle\Entity\Zone $zones
     */
    public function addZones(\Curba\GardeningBundle\Entity\Zone $zones)
    {
        $this->zones[] = $zones;
    }

    /**
     * Get zones
     *
     * @return Doctrine\Common\Collections\Collection 
     */
    public function getZones()
    {
        return $this->zones;
    }

    /**
     * Add alerts
     *
     * @param Curba\GardeningBundle\Entity\Alert $alerts
     */
    public function addAlerts(\Curba\GardeningBundle\Entity\Alert $alerts)
    {
        $this->alerts[] = $alerts;
    }

    /**
     * Get alerts
     *
     * @return Doctrine\Common\Collections\Collection 
     */
    public function getAlerts()
    {
        return $this->alerts;
    }
    
    /**
     * Set garden_type
     *
     * @param Curba\GardeningBundle\Entity\GardenType $gardenType
     */
    public function setGardenType(\Curba\GardeningBundle\Entity\GardenType $gardenType)
    {
        $this->garden_type = $gardenType;
    }

    /**
     * Get garden_type
     *
     * @return Curba\GardeningBundle\Entity\GardenType 
     */
    public function getGardenType()
    {
        return $this->garden_type;
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
            'latitude' => $this->getLatitude(),
            'longitude' => $this->getLongitude(),
            'width' => $this->getWidth(),
            'height' => $this->getHeight(),
            'regionId' => $this->getRegion()->getId(),
            'gardenTypeId' => $this->getGardenType()->getId(),
            'createdAt' => $this->getCreatedAt(),
            'updatedAt' => $this->getUpdatedAt(),
            'deletedAt' => $this->getDeletedAt()
        );
    }
    
    public function fromArray($array)
    {
        //Expected $array = {"id":2,"name":"Hort 1","description":"Hort 1 description nnnn","latitude":"1","longitude":"1","width":"800","height":"800","regionId":1}
        $this->setName($array['name']);
        $this->setDescription($array['description']);
        $this->setLatitude($array['latitude']);
        $this->setLongitude($array['longitude']);
        $this->setWidth($array['width']);
        $this->setHeight($array['height']);
        //'regionId' => $this->getRegion()->getId(),
    }
}