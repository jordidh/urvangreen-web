<?php

namespace Curba\SecurityBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * Curba\SecurityBundle\Entity\Controller
 *
 * @ORM\Table()
 * @ORM\Entity
 */
class Controller
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
     * @ORM\OneToMany(targetEntity="ControllerRight", mappedBy="controller")
     */
    private $rights;
    
    /**
     * @ORM\ManyToOne(targetEntity="Module")
     * @ORM\JoinColumn(name="module_id", referencedColumnName="id")
     */
    private $module;

    public function __construct()
    {
        $this->rights = new \Doctrine\Common\Collections\ArrayCollection();
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
     * Set module
     *
     * @param Curba\SecurityBundle\Entity\Module $module
     */
    public function setModule(\Curba\SecurityBundle\Entity\Module $module)
    {
        $this->module = $module;
    }

    /**
     * Get module
     *
     * @return Curba\SecurityBundle\Entity\Module 
     */
    public function getModule()
    {
        return $this->module;
    }
    
    /**
     * Add rights
     *
     * @param Curba\SecurityBundle\Entity\ControllerRight $rights
     */
    public function addRights(\Curba\SecurityBundle\Entity\ControllerRight $rights)
    {
        $this->rights[] = $rights;
    }

    /**
     * Get rights
     *
     * @return Doctrine\Common\Collections\Collection 
     */
    public function getRights()
    {
        return $this->rights;
    }
    
    public function __toString()
    {
       return $this->getName();
    }
}