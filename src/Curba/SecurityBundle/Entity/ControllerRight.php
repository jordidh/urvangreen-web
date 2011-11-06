<?php

namespace Curba\SecurityBundle\Entity;

use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;

/**
 * Curba\SecurityBundle\Entity\ControllerRight
 *
 * @ORM\Table()
 * @ORM\Entity
 */
class ControllerRight
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
     * @var string $crud
     *
     * @ORM\Column(name="crud", length="4", type="string")
     * @Assert\NotBlank()
     */
    private $crud;

    /**
     * @ORM\ManyToOne(targetEntity="Controller")
     * @ORM\JoinColumn(name="controller_id", referencedColumnName="id")
     */
    private $controller;

    /**
     * @ORM\ManyToOne(targetEntity="User")
     * @ORM\JoinColumn(name="user_id", referencedColumnName="id")
     */
    private $user;

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
     * Set controller
     *
     * @param Curba\SecurityBundle\Entity\Controller $controller
     */
    public function setController(\Curba\SecurityBundle\Entity\Controller $controller)
    {
        $this->controller = $controller;
    }

    /**
     * Get controller
     *
     * @return Curba\SecurityBundle\Entity\Controller
     */
    public function getController()
    {
        return $this->controller;
    }
    
    /**
     * 
     * @return string
     */
    public function __toString()
    {
       return $this->getController()->getCode().' '.$this->getCrud();
    }
}