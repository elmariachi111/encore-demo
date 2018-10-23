<?php

namespace App\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;

class DefaultController extends Controller
{
    /**
     * @Route("/", name="homepage")
     */
    public function indexAction(Request $request)
    {
        return $this->render('default/index.html.twig', [
            'base_dir' => realpath($this->getParameter('kernel.project_dir')).DIRECTORY_SEPARATOR,
        ]);
    }

    /**
     * @Route("/react", name="react")
     */
    public function reactAction()
    {
        return $this->render('default/react.html.twig', [
        ]);
    }

     /**
     * @Route("/vue", name="vue")
     */
    public function vueAction()
    {
        return $this->render('default/vue.html.twig', [
        ]);
    }
}
