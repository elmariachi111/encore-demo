<?php

namespace App\Entity;


class Product
{
    /** @var string */
    protected $id;

    /** @var string */
    protected $title;

    /** @var float */
    protected $price;

    /** @var string */
    protected $department;

    /** @var string */
    protected $description;

    /** @var string */
    protected $image;

    /**
     * Product constructor.
     *
     * @param string $id
     * @param string $title
     * @param float $price
     * @param string $department
     * @param string $description
     * @param string $image
     */
    public function __construct(string $id, string $title, float $price, string $department, string $description, string $image)
    {
        $this->id = $id;
        $this->title = $title;
        $this->price = $price;
        $this->department = $department;
        $this->description = $description;
        $this->image = $image;
    }


    /**
     * @return string
     */
    public function getId(): string
    {
        return $this->id;
    }

    /**
     * @param string $id
     */
    public function setId(string $id)
    {
        $this->id = $id;
    }

    /**
     * @return string
     */
    public function getTitle(): string
    {
        return $this->title;
    }

    /**
     * @param string $title
     */
    public function setTitle(string $title)
    {
        $this->title = $title;
    }

    /**
     * @return string
     */
    public function getImage(): string
    {
        return $this->image;
    }

    /**
     * @param string $image
     */
    public function setImage(string $image)
    {
        $this->image = $image;
    }

    /**
     * @return float
     */
    public function getPrice(): float
    {
        return $this->price;
    }

    /**
     * @param float $price
     */
    public function setPrice(float $price)
    {
        $this->price = $price;
    }

    /**
     * @return string
     */
    public function getDepartment(): string
    {
        return $this->department;
    }

    /**
     * @param string $department
     */
    public function setDepartment(string $department)
    {
        $this->department = $department;
    }

    /**
     * @return string
     */
    public function getDescription(): string
    {
        return $this->description;
    }

    /**
     * @param string $description
     */
    public function setDescription(string $description)
    {
        $this->description = $description;
    }




}