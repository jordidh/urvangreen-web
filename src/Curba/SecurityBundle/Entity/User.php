<?php

namespace Curba\SecurityBundle\Entity;

use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Security\Core\User\UserInterface;
use Symfony\Component\Validator\Constraints as Assert;
use Symfony\Bridge\Doctrine\Validator\Constraints\UniqueEntity;
//use Symfony\Component\Validator\Mapping\ClassMetadata;

/**
 * Curba\SecurityBundle\Entity
 *
 * @ORM\Entity()
 * @UniqueEntity(fields="email")
 */
class User implements UserInterface, \Serializable
{
    /*
     * Implementation of UserInterface
     */

    public function getRoles()
    {
        if ($this->isActive)
        {
            if ($this->isAdministrator)
            {
                return array('ROLE_ADMIN');
            }
            else
            {
                return array('ROLE_USER');
            }
        }
        else
        {
            return array('ROLE_USER_INACTIVE');
        }
    }

    public function getSalt()
    {
        return false;
    }

    public function getUsername()
    {
        return $this->email;
    }

    public function eraseCredentials()
    {

    }

    public function equals(UserInterface $user)
    {
        return $user->getUsername() == $this->getUsername();
    }

    /**
     * @ORM\Id
     * @ORM\Column(type="integer")
     * @ORM\GeneratedValue(strategy="IDENTITY")
     */
    protected $id;

    /**
    * @ORM\Column(type="string")
    * @Assert\NotBlank()
    * @Assert\MinLength(3)
    * @Assert\MaxLength(20)
    */
    protected $firstName;

    /**
    * @ORM\Column(type="string")
    * @Assert\NotBlank()
    * @Assert\MinLength(3)
    * @Assert\MaxLength(50)
    */
    protected $lastName;

    /**
    * @ORM\Column(type="string")
    * @Assert\NotBlank()
    * @Assert\Email()
    */
    protected $email;

    /**
    * @ORM\Column(type="string")
    * @Assert\NotBlank()
    * @Assert\MinLength(5)
    * @Assert\MaxLength(10)
    */
    protected $password;

    /**
     * @ORM\Column(type="boolean")
     */
    protected $isAdministrator;
    
    /**
     * @ORM\OneToMany(targetEntity="ControllerRight", mappedBy="user")
     */
    private $rights;
    
    /**
     * @ORM\OneToMany(targetEntity="UserGarden", mappedBy="user")
     */
    private $gardens;
    
    /**
     * @ORM\OneToMany(targetEntity="UserWeatherStation", mappedBy="user")
     */
    private $stations;

    /**
     * @ORM\Column(type="string")
     */
    protected $activationToken;
    
    /**
     * @ORM\Column(type="boolean")
     */
    protected $isActive;

    /**
     * @ORM\Column(type="boolean")
     */
    protected $userLicenseAccepted;
    
    
    public function __construct()
    {
        $this->isAdministrator = false;
        $this->isActive = false;
        $this->activationToken = $this->rand_string(40);
        $this->rights = new \Doctrine\Common\Collections\ArrayCollection();
        $this->gardens = new \Doctrine\Common\Collections\ArrayCollection();
        $this->stations = new \Doctrine\Common\Collections\ArrayCollection();
        $this->userLicenseAccepted = false;
    }
    
    private function rand_string( $length ) 
    {
	$chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";	
        $str = "";

	$size = strlen( $chars );
	for( $i = 0; $i < $length; $i++ ) {
		$str .= $chars[ rand( 0, $size - 1 ) ];
	}

	return $str;
    }
    
    public function __toString()
    {
        return $this->getFullName();
    }

    public function getFullName()
    {
        return $this->getFirstName().' '.$this->getLastName();
    }

    public function serialize()
    {
        return serialize(array(
            $this->getEmail()
        ));
    }

    public function unserialize($serialized)
    {
        $arr = unserialize($serialized);
        $this->setEmail($arr[0]);
    }

    /**
     * Get id
     *
     * @return integer $id
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * Set nombre
     *
     * @param string $firstName
     */
    public function setFirstName($firstName)
    {
        $this->firstName = $firstName;
    }

    /**
     * Get nombre
     *
     * @return string $firstName
     */
    public function getFirstName()
    {
        return $this->firstName;
    }

    /**
     * Set lastName
     *
     * @param string $lastName
     */
    public function setLastName($lastName)
    {
        $this->lastName = $lastName;
    }

    /**
     * Get lastName
     *
     * @return string $lastName
     */
    public function getLastName()
    {
        return $this->lastName;
    }

    /**
     * Set email
     *
     * @param string $email
     */
    public function setEmail($email)
    {
        $this->email = $email;
    }

    /**
     * Get email
     *
     * @return string $email
     */
    public function getEmail()
    {
        return $this->email;
    }

    /**
     * Set password
     *
     * @param string $password
     */
    public function setPassword($password)
    {
        $this->password = $password;
    }

    /**
     * Get password
     *
     * @return string $password
     */
    public function getPassword()
    {
        return $this->password;
    }
    
    /**
     * Set isAdministrator
     *
     * @param boolean $isAdministrator
     */
    public function setIsAdministrator($isAdministrator)
    {
        $this->isAdministrator = $isAdministrator;
    }

    /**
     * Get isAdministrator
     *
     * @return boolean $isAdministrator
     */
    public function getIsAdministrator()
    {
        return $this->isAdministrator;
    }
    
    /**
     * Set isActive
     *
     * @param boolean $isActive
     */
    public function setIsActive($isActive)
    {
        $this->isActive = $isActive;
    }

    /**
     * Get isActive
     *
     * @return boolean $isActive
     */
    public function getIsActive()
    {
        return $this->isActive;
    }
    
    /**
     * Set userLicenseAccepted
     *
     * @param boolean $userLicenseAccepted
     */
    public function setUserLicenseAccepted($userLicenseAccepted)
    {
        $this->userLicenseAccepted = $userLicenseAccepted;
    }

    /**
     * Get userLicenseAccepted
     *
     * @return boolean $userLicenseAccepted
     */
    public function getUserLicenseAccepted()
    {
        return $this->userLicenseAccepted;
    }
    
    /**
     * Set ActivationToken
     *
     * @param string $activationToken
     */
    public function setActivationToken($activationToken)
    {
        $this->activationToken = $activationToken;
    }
    
    /**
     * @Assert\True(message = "You must check the licence acceptation")
     */
    public function isActivationTokenAccepted()
    {
        return $this->activationToken == true;
    }

    /**
     * Get ActivationToken
     *
     * @return string $activationToken
     */
    public function getActivationToken()
    {
        return $this->activationToken;
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
    
    /**
     * Has rights
     *
     * @param array &$rights
     * @param string $controllerName
     * @param string $action (C, R, U, D).
     * 
     * @return boolean hasRights
     */
    public function hasRights(&$rigths, $controllerName, $action)
    {
        //If there aren't right, get the rights from DB
        if (!$rights)
        {
            $rights_array = $this->getRights();
            
            foreach($rights_array as $right)
            {
                $rights[$right->getController()->getName()] = $right->getCrud();
            }
        }

        //Check the rights and return the result
        if ($rights[$controllerName])
        {
            return true;
        }
        else
        {
            return false;
        }
    }

    /**
     * Add gardens
     *
     * @param Curba\SecurityBundle\Entity\UserGarden $gardens
     */
    public function addGardens(\Curba\SecurityBundle\Entity\UserGarden $gardens)
    {
        $this->gardens[] = $gardens;
    }

    /**
     * Get gardens
     *
     * @return Doctrine\Common\Collections\Collection 
     */
    public function getGardens()
    {
        return $this->gardens;
    }
    //Dins de cada acció de cada controller:
    //if ($user->HasRights($this->get('request')->getSession()->get('rights'), $app->getRequest()->attributes->get('_controller')))
    //{
    //}
    
    //Per guardar els rights a la sesió
    //$this->get('request')->getSession()->set('rights', $user->getRights()->__toString())

    
    /**
     * Add stations
     *
     * @param Curba\SecurityBundle\Entity\UserWeatherStation $stations
     */
    public function addStations(\Curba\SecurityBundle\Entity\UserWeatherStation $stations)
    {
        $this->stations[] = $stations;
    }

    /**
     * Get stations
     *
     * @return Doctrine\Common\Collections\Collection 
     */
    public function getStations()
    {
        return $this->stations;
    }
}
