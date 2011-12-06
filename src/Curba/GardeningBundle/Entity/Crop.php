<?php

namespace Curba\GardeningBundle\Entity;

use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;

/**
 * Curba\GardeningBundle\Entity\Crop
 *
 * @ORM\Table()
 * @ORM\Entity(repositoryClass="Curba\GardeningBundle\Entity\CropRepository")
 */
class Crop
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
     * @ORM\Column(name="initial_real_date", type="datetime", nullable=false)
     */
    private $initialRealDate;

    /**
     * @ORM\Column(name="initial_planned_date", type="datetime", nullable=false)
     */
    private $initialPlannedDate;

    /**
     * @ORM\Column(name="final_real_date", type="datetime", nullable=true)
     */
    private $finalRealDate;

    /**
     * @ORM\Column(name="final_planned_date", type="datetime", nullable=true)
     */
    private $finalPlannedDate;

    /**
     * @ORM\Column(name="point_x", type="bigint", nullable=false)
     */
    private $pointX;

    /**
     * @ORM\Column(name="point_y", type="bigint", nullable=false)
     */
    private $pointY;

    /**
     * @ORM\Column(name="rotation_angle", type="bigint", nullable=false)
     */
    private $rotationAngle;

    /**
     * @ORM\Column(name="num_plants", type="bigint", nullable=false)
     */
    private $numPlants;

    /**
     * @ORM\Column(name="created_at", type="datetime", nullable=false)
     */
    private $createdAt;

    /**
     * @ORM\Column(name="updated_at", type="datetime", nullable=false)
     */
    private $updatedAt;

    /**
     * @ORM\ManyToOne(targetEntity="Zone")
     * @ORM\JoinColumn(name="zone_id", referencedColumnName="id")
     */
    private $zone;

    /**
     * @ORM\ManyToOne(targetEntity="CropPeriod")
     * @ORM\JoinColumn(name="crop_period_id", referencedColumnName="id")
     */
    private $initial_crop_period;

    /**
     * @ORM\ManyToOne(targetEntity="Plant")
     * @ORM\JoinColumn(name="plant_id", referencedColumnName="id")
     */
    private $plant;
    
    /**
     * @ORM\OneToMany(targetEntity="Action", mappedBy="crop")
     */
    private $actions;


    public function __construct()
    {
        $this->createdAt = new \DateTime();
        $this->updatedAt = new \DateTime();
        $this->actions = new \Doctrine\Common\Collections\ArrayCollection();
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
     * Set initialRealDate
     *
     * @param datetime $initialRealDate
     */
    public function setInitialRealDate($initialRealDate)
    {
        $this->initialRealDate = $initialRealDate;
    }

    /**
     * Get initialRealDate
     *
     * @return datetime 
     */
    public function getInitialRealDate()
    {
        return $this->initialRealDate;
    }

    /**
     * Set initialPlannedDate
     *
     * @param datetime $initialPlannedDate
     */
    public function setInitialPlannedDate($initialPlannedDate)
    {
        $this->initialPlannedDate = $initialPlannedDate;
    }

    /**
     * Get initialPlannedDate
     *
     * @return datetime 
     */
    public function getInitialPlannedDate()
    {
        return $this->initialPlannedDate;
    }

    /**
     * Set finalRealDate
     *
     * @param datetime $finalRealDate
     */
    public function setFinalRealDate($finalRealDate)
    {
        $this->finalRealDate = $finalRealDate;
    }

    /**
     * Get finalRealDate
     *
     * @return datetime 
     */
    public function getFinalRealDate()
    {
        return $this->finalRealDate;
    }

    /**
     * Set finalPlannedDate
     *
     * @param datetime $finalPlannedDate
     */
    public function setFinalPlannedDate($finalPlannedDate)
    {
        $this->finalPlannedDate = $finalPlannedDate;
    }

    /**
     * Get finalPlannedDate
     *
     * @return datetime 
     */
    public function getFinalPlannedDate()
    {
        return $this->finalPlannedDate;
    }

    /**
     * Set pointX
     *
     * @param bigint $pointX
     */
    public function setPointX($pointX)
    {
        $this->pointX = $pointX;
    }

    /**
     * Get pointX
     *
     * @return bigint 
     */
    public function getPointX()
    {
        return $this->pointX;
    }

    /**
     * Set pointY
     *
     * @param bigint $pointY
     */
    public function setPointY($pointY)
    {
        $this->pointY = $pointY;
    }

    /**
     * Get pointY
     *
     * @return bigint 
     */
    public function getPointY()
    {
        return $this->pointY;
    }
    
    /**
     * Set rotationAngle
     *
     * @param bigint $rotationAngle
     */
    public function setRotationAngle($rotationAngle)
    {
        $this->rotationAngle = $rotationAngle;
    }

    /**
     * Get rotationAngle
     *
     * @return bigint 
     */
    public function getRotationAngle()
    {
        return $this->rotationAngle;
    }

    /**
     * Set numPlants
     *
     * @param bigint $numPlants
     */
    public function setNumPlants($numPlants)
    {
        $this->numPlants = $numPlants;
    }

    /**
     * Get numPlants
     *
     * @return bigint 
     */
    public function getNumPlants()
    {
        return $this->numPlants;
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
     * Set zone
     *
     * @param Curba\GardeningBundle\Entity\Zone $zone
     */
    public function setZone(\Curba\GardeningBundle\Entity\Zone $zone)
    {
        $this->zone = $zone;
    }

    /**
     * Get zone
     *
     * @return Curba\GardeningBundle\Entity\Zone 
     */
    public function getZone()
    {
        return $this->zone;
    }

    /**
     * Set initial_crop_period
     *
     * @param Curba\GardeningBundle\Entity\CropPeriod $initialCropPeriod
     */
    public function setInitialCropPeriod(\Curba\GardeningBundle\Entity\CropPeriod $initialCropPeriod)
    {
        $this->initial_crop_period = $initialCropPeriod;
    }

    /**
     * Get initial_crop_period
     *
     * @return Curba\GardeningBundle\Entity\CropPeriod 
     */
    public function getInitialCropPeriod()
    {
        return $this->initial_crop_period;
    }

    /**
     * Set plant
     *
     * @param Curba\GardeningBundle\Entity\Plant $plant
     */
    public function setPlant(\Curba\GardeningBundle\Entity\Plant $plant)
    {
        $this->plant = $plant;
    }

    /**
     * Get plant
     *
     * @return Curba\GardeningBundle\Entity\Plant 
     */
    public function getPlant()
    {
        return $this->plant;
    }
    
    /**
     * Add actions
     *
     * @param Curba\GardeningBundle\Entity\Action $actions
     */
    public function addActions(\Curba\GardeningBundle\Entity\Action $actions)
    {
        $this->actions[] = $actions;
    }

    /**
     * Get actions
     *
     * @return Doctrine\Common\Collections\Collection
     */
    public function getActions()
    {
        return $this->actions;
    }
    
    public function asArray()
    {
        $initialCropPeriodId = null;
        if ($this->getInitialCropPeriod()) 
        {
            $initialCropPeriodId = $this->getInitialCropPeriod()->getId();
        }
        
        return array(
            'id'   => $this->getId(),
            'initialRealDate' => $this->getInitialRealDate(),
            'initialPlannedDate' => $this->getInitialPlannedDate(),
            'finalRealDate' => $this->getFinalRealDate(),
            'finalPlanedDate' => $this->getFinalPlannedDate(),
            'pointX' => $this->getPointX(),
            'pointY' => $this->getPointY(),
            'numPlants' => $this->getNumPlants(),
            'zoneId' => $this->getZone()->getId(),
            'plantId' => $this->getPlant()->getId(),
            'initialCropPeriodId' => $initialCropPeriodId,
            'createdAt' => $this->getCreatedAt(),
            'updatedAt' => $this->getUpdatedAt(),
        );
    }
    
    public function fromArray($array)
    {
        //Expected $array = {"id":2,"initialRealDate":"2011-09-15 00:00:00","initialPlannedDate":"2011-09-15 00:00:00","finalRealDate":null,"finalPlanedDate":null,"pointX":"1","pointY":"1","numPlants":"1","zoneId":1,"plantId":25,"initialCropPeriodId":null,"createdAt":"-0001-11-30 00:00:00","updatedAt":"-0001-11-30 00:00:00"}
        //
        //$em = $this->getEntityManager();
        //$zoneRepository = $em->getRepository('CurbaGardeningBundle:Zone');
        //$plantRepository = $em->getRepository('CurbaGardeningBundle:Plant');
        
        $this->setInitialRealDate(new \DateTime());
        $this->setInitialPlannedDate(new \DateTime());
        if ($array['initialRealDate']) $this->setInitialRealDate(new \DateTime($array['initialRealDate']));
        if ($array['initialPlannedDate']) $this->setInitialPlannedDate(new \DateTime($array['initialPlannedDate']));
        if ($array['finalRealDate']) $this->setFinalRealDate(new \DateTime($array['finalRealDate']));
        if ($array['finalPlannedDate']) $this->setFinalPlannedDate(new \DateTime($array['finalPlannedDate']));
        $this->setPointX($array['pointX']);
        $this->setPointY($array['pointY']);
        $this->setNumPlants($array['numPlants']);
        
        //$this->setZone($zoneRepository->find($array['zoneId']));
        //$this->setPlant($plantRepository->find($array['plantId']));
        if ($array['initialCropPeriodId']) $this->setInitialCropPeriod($array['initialCropPeriodId']);
    }
    
    public function __toString()
    {
       return $this->plant->getName();
    }
    
}