const product_01_image_01 = require('../images/products/product-01 (1).jpg').default
const product_01_image_02 = require('../images/products/product-01 (2).jpg').default

const product_02_image_01 = require('../images/products/product-02 (1).jpg').default
const product_02_image_02 = require('../images/products/product-02 (2).jpg').default

const product_03_image_01 = require('../images/products/product-03 (1).jpg').default
const product_03_image_02 = require('../images/products/product-03 (2).jpg').default

const product_04_image_01 = require('../images/products/product-04 (1).jpg').default
const product_04_image_02 = require('../images/products/product-04 (2).jpg').default

const product_05_image_01 = require('../images/products/product-05 (1).jpg').default
const product_05_image_02 = require('../images/products/product-05 (2).jpg').default

const product_06_image_01 = require('../images/products/product-06 (1).jpg').default
const product_06_image_02 = require('../images/products/product-06 (2).jpg').default

const product_07_image_01 = require('../images/products/product-07 (1).jpg').default
const product_07_image_02 = require('../images/products/product-07 (2).jpg').default

const product_08_image_01 = require('../images/products/product-08 (1).jpg').default
const product_08_image_02 = require('../images/products/product-08 (2).jpg').default

const product_09_image_01 = require('../images/products/product-09 (1).jpg').default
const product_09_image_02 = require('../images/products/product-09 (2).jpg').default

const product_10_image_01 = require('../images/products/product-10 (1).jpg').default
const product_10_image_02 = require('../images/products/product-10 (2).jpg').default

const product_11_image_01 = require('../images/products/product-11 (1).jpg').default
const product_11_image_02 = require('../images/products/product-11 (2).jpg').default

const product_12_image_01 = require('../images/products/product-12 (1).jpg').default
const product_12_image_02 = require('../images/products/product-12 (2).jpg').default
const products = [
    {
        title: " ??o thun Dinosaur 01",
        price: "189000",
        image01: product_01_image_01,
        image02: product_01_image_02,
        categorySlug: "ao-thun",
        colors: ["white", "red", "orange"],
        slug: "ao-thun-dinosaur-01",
        size: ["s","m","l","xl"]
    },
    {
        title: " ??o thun Dinosaur 02",
        price: "189000",
        image01: product_02_image_01,
        image02: product_02_image_02,
        categorySlug: "ao-thun",
        colors: ["white", "red", "orange"],
        slug: "ao-thun-dinosaur-02",
        size: ["s","m","l","xl"]
    },
    {
        title: " ??o thun Dinosaur 03",
        price: "189000",
        image01: product_03_image_01,
        image02: product_03_image_02,
        categorySlug: "ao-thun",
        colors: ["white", "red", "orange"],
        slug: "ao-thun-dinosaur-03",
        size: ["s","m","l","xl"]
    },
    {
        title: " ??o thun Dinosaur 04",
        price: "189000",
        image01: product_04_image_01,
        image02: product_04_image_02,
        categorySlug: "ao-thun",
        colors: ["white", "red", "orange"],
        slug: "ao-thun-dinosaur-04",
        size: ["s","m","l","xl"]
    },
    {
        title: " ??o thun Dinosaur 05",
        price: "189000",
        image01: product_05_image_01,
        image02: product_05_image_02,
        categorySlug: "ao-thun",
        colors: ["white", "red", "orange"],
        slug: "ao-thun-dinosaur-06",
        size: ["s","m","l","xl"]
    },
    {
        title: " ??o thun Dinosaur 06",
        price: "189000",
        image01: product_06_image_01,
        image02: product_06_image_02,
        categorySlug: "ao-thun",
        colors: ["white", "red", "orange"],
        slug: "ao-thun-dinosaur-06",
        size: ["s","m","l","xl"]
    },
    {
        title: " ??o thun Dinosaur 07",
        price: "189000",
        image01: product_07_image_01,
        image02: product_07_image_02,
        categorySlug: "ao-thun",
        colors: ["white", "red", "orange"],
        slug: "ao-thun-dinosaur-07",
        size: ["s","m","l","xl"]
    },
    {
        title: " ??o thun Dinosaur 08",
        price: "189000",
        image01: product_08_image_01,
        image02: product_08_image_02,
        categorySlug: "ao-thun",
        colors: ["white", "red", "orange"],
        slug: "ao-thun-dinosaur-08",
        size: ["s","m","l","xl"]
    },
    {
        title: " ??o thun Dinosaur 09",
        price: "189000",
        image01: product_09_image_01,
        image02: product_09_image_02,
        categorySlug: "ao-thun",
        colors: ["white", "red", "orange"],
        slug: "ao-thun-dinosaur-09",
        size: ["s","m","l","xl"]
    },
    {
        title: " ??o thun Dinosaur 10",
        price: "189000",
        image01: product_10_image_01,
        image02: product_10_image_02,
        categorySlug: "ao-thun",
        colors: ["white", "red", "orange"],
        slug: "ao-thun-dinosaur-10",
        size: ["s","m","l","xl"]
    },
    {
        title: " ??o thun Dinosaur 11",
        price: "189000",
        image01: product_11_image_01,
        image02: product_11_image_02,
        categorySlug: "ao-thun",
        colors: ["white", "red", "orange"],
        slug: "ao-thun-dinosaur-11",
        size: ["s","m","l","xl"]
    },
    {
        title: " ??o thun Dinosaur 12",
        price: "189000",
        image01: product_12_image_01,
        image02: product_12_image_02,
        categorySlug: "ao-thun",
        colors: ["white", "red", "orange"],
        slug: "ao-thun-dinosaur-12",
        size: ["s","m","l","xl"]
    }
]

const getAllProducts = () => products

const getProducts = (count) => {
    const max = products.length - count
    const min = 0
    const start = Math.floor(Math.random() * (max - min) + min)
    return products.slice(start, start + count)
}

const productData = {
    getAllProducts,
    getProducts
}

export default productData

