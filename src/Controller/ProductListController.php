<?php

namespace App\Controller;

use App\Repository\ProductRepository;
use Sensio\Bundle\FrameworkExtraBundle\Configuration\Route;
use Symfony\Bundle\FrameworkBundle\Controller\Controller;
use Symfony\Component\HttpFoundation\Request;

class ProductListController extends Controller
{
    /** @var ProductRepository */
    private $productRepository;

    public function __construct(ProductRepository $repository)
    {
        $this->productRepository = $repository;
    }

    /**
     * @Route("/", name="product_list")
     */
    public function indexAction(Request $request)
    {
        return $this->render('default/product-list.twig', [
            'products' => $this->productRepository->findAll(),
            'departments' => $this->productRepository->getDepartments(),
        ]);
    }
}
