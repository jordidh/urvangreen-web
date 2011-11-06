<?php

namespace Curba\WeatherBundle\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Method;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Template;
use Curba\WeatherBundle\Entity\StationType;
use Curba\WeatherBundle\Form\StationTypeType;

/**
 * StationType controller.
 *
 * @Route("/stationtype")
 */
class StationTypeController extends Controller
{
    /**
     * Lists all StationType entities.
     *
     * @Route("/", name="stationtype")
     * @Template()
     */
    public function indexAction()
    {
        $em = $this->getDoctrine()->getEntityManager();

        $entities = $em->getRepository('CurbaWeatherBundle:StationType')->findAll();

        return array('entities' => $entities);
    }

    /**
     * Finds and displays a StationType entity.
     *
     * @Route("/{id}/show", name="stationtype_show")
     * @Template()
     */
    public function showAction($id)
    {
        $em = $this->getDoctrine()->getEntityManager();

        $entity = $em->getRepository('CurbaWeatherBundle:StationType')->find($id);

        if (!$entity) {
            throw $this->createNotFoundException('Unable to find StationType entity.');
        }

        $deleteForm = $this->createDeleteForm($id);

        return array(
            'entity'      => $entity,
            'delete_form' => $deleteForm->createView(),
        );
    }

    /**
     * Displays a form to create a new StationType entity.
     *
     * @Route("/new", name="stationtype_new")
     * @Template()
     */
    public function newAction()
    {
        $entity = new StationType();
        $form   = $this->createForm(new StationTypeType(), $entity);

        return array(
            'entity' => $entity,
            'form'   => $form->createView()
        );
    }

    /**
     * Creates a new StationType entity.
     *
     * @Route("/create", name="stationtype_create")
     * @Method("post")
     * @Template("CurbaWeatherBundle:StationType:new.html.twig")
     */
    public function createAction()
    {
        $entity  = new StationType();
        $request = $this->getRequest();
        $form    = $this->createForm(new StationTypeType(), $entity);

        if ('POST' === $request->getMethod()) {
            $form->bindRequest($request);

            if ($form->isValid()) {
                $em = $this->getDoctrine()->getEntityManager();
                $em->persist($entity);
                $em->flush();

                return $this->redirect($this->generateUrl('stationtype_show', array('id' => $entity->getId())));
                
            }
        }

        return array(
            'entity' => $entity,
            'form'   => $form->createView()
        );
    }

    /**
     * Displays a form to edit an existing StationType entity.
     *
     * @Route("/{id}/edit", name="stationtype_edit")
     * @Template()
     */
    public function editAction($id)
    {
        $em = $this->getDoctrine()->getEntityManager();

        $entity = $em->getRepository('CurbaWeatherBundle:StationType')->find($id);

        if (!$entity) {
            throw $this->createNotFoundException('Unable to find StationType entity.');
        }

        $editForm = $this->createForm(new StationTypeType(), $entity);
        $deleteForm = $this->createDeleteForm($id);

        return array(
            'entity'      => $entity,
            'edit_form'   => $editForm->createView(),
            'delete_form' => $deleteForm->createView(),
        );
    }

    /**
     * Edits an existing StationType entity.
     *
     * @Route("/{id}/update", name="stationtype_update")
     * @Method("post")
     * @Template("CurbaWeatherBundle:StationType:edit.html.twig")
     */
    public function updateAction($id)
    {
        $em = $this->getDoctrine()->getEntityManager();

        $entity = $em->getRepository('CurbaWeatherBundle:StationType')->find($id);

        if (!$entity) {
            throw $this->createNotFoundException('Unable to find StationType entity.');
        }

        $editForm   = $this->createForm(new StationTypeType(), $entity);
        $deleteForm = $this->createDeleteForm($id);

        $request = $this->getRequest();

        if ('POST' === $request->getMethod()) {
            $editForm->bindRequest($request);

            if ($editForm->isValid()) {
                $em = $this->getDoctrine()->getEntityManager();
                $em->persist($entity);
                $em->flush();

                return $this->redirect($this->generateUrl('stationtype_edit', array('id' => $id)));
            }
        }

        return array(
            'entity'      => $entity,
            'edit_form'   => $editForm->createView(),
            'delete_form' => $deleteForm->createView(),
        );
    }

    /**
     * Deletes a StationType entity.
     *
     * @Route("/{id}/delete", name="stationtype_delete")
     * @Method("post")
     */
    public function deleteAction($id)
    {
        $form = $this->createDeleteForm($id);
        $request = $this->getRequest();

        if ('POST' === $request->getMethod()) {
            $form->bindRequest($request);

            if ($form->isValid()) {
                $em = $this->getDoctrine()->getEntityManager();
                $entity = $em->getRepository('CurbaWeatherBundle:StationType')->find($id);

                if (!$entity) {
                    throw $this->createNotFoundException('Unable to find StationType entity.');
                }

                $em->remove($entity);
                $em->flush();
            }
        }

        return $this->redirect($this->generateUrl('stationtype'));
    }

    private function createDeleteForm($id)
    {
        return $this->createFormBuilder(array('id' => $id))
            ->add('id', 'hidden')
            ->getForm()
        ;
    }
}
