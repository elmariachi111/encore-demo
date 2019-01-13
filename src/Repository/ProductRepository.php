<?php

namespace App\Repository;


use App\Entity\Product;
use function array_unique;
use Doctrine\Common\Collections\ArrayCollection;
use Exception;
use function file_get_contents;
use function json_decode;

class ProductRepository
{
    /**
     * @var Product[]
     */
    static $_products;

    public function __construct($rootDir)
    {
        $this->dbPath = $rootDir . "/data/products.json";
    }

    protected function getProducts(): ArrayCollection {
        if (!self::$_products) {
            $deserialized = json_decode(file_get_contents($this->dbPath));
            self::$_products = new ArrayCollection();
            foreach ($deserialized->products as $jp) {
                self::$_products->add(new Product($jp->id, $jp->title, $jp->price, $jp->department, $jp->description, $jp->image));
            }
        }
        return self::$_products;
    }
    public function findAll()
    {
        return $this->getProducts();
    }

    /**
     * @param $id
     *
     * @return mixed
     * @throws \Exception
     */
    public function find($id)
    {
        $res = $this->getProducts()->filter(function(Product $p) use ($id) { return $p->getId() == $id;});
        if ($res->count() == 1) {
            return $res->first();
        }

        throw new Exception("$id not found");
    }
    public function getDepartments() {
        return array_unique(
            $this->getProducts()->map(
                function($p) { return $p->getDepartment(); }
            )->toArray()
        );
    }

}