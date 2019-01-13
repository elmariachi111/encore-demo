<?php

namespace App\Controller;

use App\Repository\ProductRepository;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;

class CheckoutController extends Controller
{
    /** @var ProductRepository */
    private $productRepository;

    public function __construct(ProductRepository $repository)
    {
        $this->productRepository = $repository;
    }

    /**
     * @Route("/checkout/{productId}", name="checkout")
     */
    public function indexAction($productId, Request $request)
    {
        $product = $this->productRepository->find($productId);

        return $this->render('default/checkout.twig', [
            'product' => $product,
        ]);
    }
}
