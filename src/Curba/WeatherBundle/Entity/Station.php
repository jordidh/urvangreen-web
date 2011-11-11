<?php

namespace Curba\WeatherBundle\Entity;

use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;
use Symfony\Component\HttpFoundation\File\UploadedFile;


/**
 * Curba\WeatherBundle\Entity\Station
 *
 * @ORM\Table()
 * @ORM\Entity
 */
class Station
{
    /**
     * @var File  - not a persistent field!
     *  set upload_max_filesize, post_max_size, and memory_limit in your php.ini
     * 
     * @Assert\File(maxSize="10000000")
     */
    private $file;

    
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
     * @Assert\NotBlank()
     * @Assert\MinLength(4)
     */
    private $name;

    /**
     * @ORM\Column(type="string", length="255", nullable=true)
     */
    private $description;

    /**
     * @ORM\Column(type="decimal", scale=6)
     */
    private $longitude;

    /**
     * @ORM\Column(type="decimal", scale=6)
     */
    private $latitude;

    /**
     * @ORM\Column(type="decimal", scale=2)
     */
    private $barCorrection;

    /**
     * @ORM\Column(type="datetime", name="created_at")
     */
    private $createdAt;

    /**
     * @ORM\Column(type="datetime", name="updated_at")
     */
    private $updatedAt;

    /**
     * @ORM\Column(type="datetime", name="expires_at", nullable=true)
     */
    private $expiresAt;
    
    /**
     * @ORM\ManyToOne(targetEntity="StationType", inversedBy="stations")
     * @ORM\JoinColumn(name="station_type_id", referencedColumnName="id")
     */
    private $station_type;
    
    /**
     * @ORM:OneToMany(targetEntity="StationData", mappedBy="station")
     */
    private $datas;


    public function __construct()
    {
        $this->createdAt = new \DateTime();
        $this->updatedAt = new \DateTime();
        $this->datas = new \Doctrine\Common\Collections\ArrayCollection();
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
     * Set station_type
     *
     * @param Curba\WeatherBundle\Entity\StationType $stationType
     */
    public function setStationType(\Curba\WeatherBundle\Entity\StationType $stationType)
    {
        $this->station_type = $stationType;
    }

    /**
     * Get station_type
     *
     * @return Curba\WeatherBundle\Entity\StationType 
     */
    public function getStationType()
    {
        return $this->station_type;
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
     * Set barCorrection
     *
     * @param decimal $barCorrection
     */
    public function setBarCorrection($barCorrection)
    {
        $this->barCorrection = $barCorrection;
    }

    /**
     * Get barCorrection
     *
     * @return decimal 
     */
    public function getBarCorrection()
    {
        return $this->barCorrection;
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
     * Set expiresAt
     *
     * @param datetime $expiresAt
     */
    public function setExpiresAt($expiresAt)
    {
        $this->expiresAt = $expiresAt;
    }

    /**
     * Get expiresAt
     *
     * @return datetime 
     */
    public function getExpiresAt()
    {
        return $this->expiresAt;
    }
    
    /**
     * Assumes 'type' => 'file'
     */
    public function setFile(UploadedFile $file)
    {
        $this->file = $file;
    }
    
    public function getFile()
    {
        return $this->file;
    }
    
    public function __toString()
    {
       return $this->getName();
    }
}