import {useState , useEffect} from "react"
import { useParams } from "react-router-dom";
import axios from "axios";

import React from 'react'

const ProductDetails = () => {

 const {productId} = useParams();
 const [product, setProduct] = useState(null);
 const [loading, setLoading] = useState(true);

 useEffect(() => {

        axios

            .get(`http://localhost:5000/api/products/${productId}`)

            .then((response) => {

                setProduct(response.data);

                setLoading(false);

            })

            .catch((err) => {

                console.log(err);

                setLoading(false);

            });

    }, [productId]);

  if (loading) {

        return (

            <div className="text-center text-2xl mt-20">

                Loading...

            </div>

        );

    }

    return (

        <div className="max-w-7xl mt-28 px-10 py-16">

            <div className="grid md:grid-cols-2 gap-12">

                {/* LEFT */}

                <div>

                    <img

                        src={product.images[0]}

                        alt={product.name}

                        className="w-full rounded-xl shadow-lg"

                    />

                </div>

                {/* RIGHT */}

                <div>

                    <h1 className="text-4xl font-bold">

                        {product.name}

                    </h1>

                    <p className="text-pink-600 text-3xl mt-5">

                        ₹ {product.price}

                    </p>

                    <p className="mt-6 text-gray-600 leading-8">

                        {product.description}

                    </p>

                    <div className="mt-8">

                        <p>

                            <span className="font-bold">

                                Category :

                            </span>

                            {" "}

                            {product.category}

                        </p>

                        <p className="mt-2">

                            <span className="font-bold">

                                Stock :

                            </span>

                            {" "}

                            {

                                product.stock > 0

                                ?

                                <span className="text-green-600">

                                    In Stock

                                </span>

                                :

                                <span className="text-red-600">

                                    Out of Stock

                                </span>

                            }

                        </p>

                    </div>

                    <button

                        className="mt-10 bg-pink-500 text-white px-8 py-3 rounded-lg hover:bg-pink-600"

                    >

                        Add To Cart

                    </button>

                </div>

            </div>

        </div>

    );

};


export default ProductDetails
