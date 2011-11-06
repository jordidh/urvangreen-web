<?php

namespace Curba\SecurityBundle\Entity;

use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Validator\Constraints as Assert;

/**
 * Curba\SecurityBundle\Entity\UserGarden
 *
 * @ORM\Table()
 * @ORM\Entity
 */
class UserGarden
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
     * @var integer $Garden
     *
     * @ORM\Column(name="garden_id", type="integer")
     */
    private $Garden;
    
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
     * Set Garden
     *
     * @param integer $garden
     */
    public function setGarden($garden)
    {
        $this->Garden = $garden;
    }

    /**
     * Get Garden
     *
     * @return integer
     */
    public function getGarden()
    {
        return $this->Garden;
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