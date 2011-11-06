<?php

namespace Curba\GardeningBundle\Entity;

use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;

/**
 * Curba\GardeningBundle\Entity\Alert
 *
 * @ORM\Table()
 * @ORM\Entity
 */
class Alert
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
     * @ORM\Column(type="datetime", name="initial_date")
     */
    private $initialDate;

    /**
     * @ORM\Column(type="datetime", name="final_date")
     */
    private $finalDate;

    /**
     * @ORM\Column(type="datetime", nullable=true)
     */
    private $pospose;

    /**
     * @ORM\ManyToOne(targetEntity="AlertType", inversedBy="alerts")
     * @ORM\JoinColumn(name="alert_type_id", referencedColumnName="id")
     */
    private $alert_type;

    /**
     * @ORM\ManyToOne(targetEntity="Garden", inversedBy="alerts")
     * @ORM\JoinColumn(name="garden_id", referencedColumnName="id")
     */
    private $garden;

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
     * Set initialDate
     *
     * @param datetime $initialDate
     */
    public function setInitialDate($initialDate)
    {
        $this->initialDate = $initialDate;
    }

    /**
     * Get initialDate
     *
     * @return datetime 
     */
    public function getInitialDate()
    {
        return $this->initialDate;
    }

    /**
     * Set finalDate
     *
     * @param datetime $finalDate
     */
    public function setFinalDate($finalDate)
    {
        $this->finalDate = $finalDate;
    }

    /**
     * Get finalDate
     *
     * @return datetime 
     */
    public function getFinalDate()
    {
        return $this->finalDate;
    }

    /**
     * Set pospose
     *
     * @param datetime $pospose
     */
    public function setPospose($pospose)
    {
        $this->pospose = $pospose;
    }

    /**
     * Get pospose
     *
     * @return datetime 
     */
    public function getPospose()
    {
        return $this->pospose;
    }

    /**
     * Set alert_type
     *
     * @param Curba\GardeningBundle\Entity\AlertType $alertType
     */
    public function setAlertType(\Curba\GardeningBundle\Entity\AlertType $alertType)
    {
        $this->alert_type = $alertType;
    }

    /**
     * Get alert_type
     *
     * @return Curba\GardeningBundle\Entity\AlertType 
     */
    public function getAlertType()
    {
        return $this->alert_type;
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
}