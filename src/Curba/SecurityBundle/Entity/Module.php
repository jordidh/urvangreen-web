<?php

namespace Curba\SecurityBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Curba\SecurityBundle\Entity\Module
 *
 * @ORM\Table()
 * @ORM\Entity
 */
class Module
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
     * @var string $Name
     *
     * @ORM\Column(name="Name", type="string", length=255)
     */
    private $Name;

    /**
     * @var string $Description
     *
     * @ORM\Column(name="Description", type="string", length=255)
     */
    private $Description;

    /**
     * @var string $Code
     *
     * @ORM\Column(name="Code", type="string", length=2)
     */
    private $Code;
    
    /**
     * @ORM\OneToMany(targetEntity="Controller", mappedBy="module")
     */
    private $controllers;

    public function __construct()
    {
        $this->controllers = new \Doctrine\Common\Collections\ArrayCollection();
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
     * Set Name
     *
     * @param string $name
     */
    public function setName($name)
    {
        $this->Name = $name;
    }

    /**
     * Get Name
     *
     * @return string 
     */
    public function getName()
    {
        return $this->Name;
    }

    /**
     * Set Description
     *
     * @param string $description
     */
    public function setDescription($description)
    {
        $this->Description = $description;
    }

    /**
     * Get Description
     *
     * @return string 
     */
    public function getDescription()
    {
        return $this->Description;
    }

    /**
     * Set Code
     *
     * @param string $code
     */
    public function setCode($code)
    {
        $this->Code = $code;
    }

    /**
     * Get Code
     *
     * @return string 
     */
    public function getCode()
    {
        return $this->Code;
    }
    
    /**
     * Add controllers
     *
     * @param Curba\SecurityBundle\Entity\Controller $controllers
     */
    public function addControllers(\Curba\SecurityBundle\Entity\Controller $controllers)
    {
        $this->controllers[] = $controllers;
    }

    /**
     * Get controllers
     *
     * @return Doctrine\Common\Collections\Collection 
     */
    public function getControllers()
    {
        return $this->controllers;
    }
    
    public function __toString()
    {
       return $this->getName();
    }
}