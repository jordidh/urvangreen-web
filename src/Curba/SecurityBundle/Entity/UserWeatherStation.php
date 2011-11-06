<?php

namespace Curba\SecurityBundle\Entity;

use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;

/**
 * Curba\SecurityBundle\Entity\UserWeatherStation
 *
 * @ORM\Table()
 * @ORM\Entity
 */
class UserWeatherStation
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
     * @ORM\ManyToOne(targetEntity="User")
     * @ORM\JoinColumn(name="user_id", referencedColumnName="id")
     */
    private $user;
    
    /**
     * @var integer $weatherStation
     *
     * @ORM\Column(name="station_id", type="integer")
     */
    private $weatherStation;
    
    /**
     * @var string $crud
     *
     * @ORM\Column(name="crud", length="4", type="string")
     * @Assert\NotBlank()
     */
    private $crud;


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
     * Set user
     *
     * @param Curba\SecurityBundle\Entity\User $user
     */
    public function setUser(\Curba\SecurityBundle\Entity\User $user)
    {
        $this->user = $user;
    }

    /**
     * Get user
     *
     * @return Curba\SecurityBundle\Entity\User
     */
    public function getUser()
    {
        return $this->user;
    }
    
    /**
     * Set WeatherStation
     *
     * @param integer $station
     */
    public function setWeatherStation($station)
    {
        $this->weatherStation = $station;
    }

    /**
     * Get WeatherStation
     *
     * @return integer
     */
    public function getWeatherStation()
    {
        return $this->weatherStation;
    }

    /**
     * Set crud
     *
     * @param string $crud
     */
    public function setCrud($crud)
    {
        $this->crud = $crud;
    }

    /**
     * Get Crud
     *
     * @return string
     */
    public function getCrud()
    {
        return $this->Crud;
    }
    
    public function __toString()
    {
       return $this->getId();
    }
}