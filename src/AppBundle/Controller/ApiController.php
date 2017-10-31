<?php

namespace AppBundle\Controller;

use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Wheeler\Fortune\Fortune;

/**
 * @Route("/api")
 */
class ApiController extends Controller
{
    /**
     * @Route("/fortune", name="api_fortune")
     */
    public function fortuneAction()
    {
        $fortune = Fortune::make();
        return new Response($fortune);
    }
}
