import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


const Items = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {

        axios
            .get("http://localhost:5000/api/products/trending")
            .then((response) => {

                setProducts(response.data);

            })
            .catch((err) => {

                console.log(err);

            });

    }, []);

    return (

        <div className="px-10 py-10 mt-50">

            <h2 className="text-4xl text-center mb-10">

                Our Collection

            </h2>

            <div className="grid grid-cols-4 gap-8">

                {

                    products.map((product) => (

                        <div
                            key={product.productId}
                            className=" p-5  hover:shadow-2xl transition duration-300"
                        >

                            <img
                                src={product.images[0]}
                                alt={product.name}
                                className="w-full h-100 object-cover rounded-lg"
                            />

                            <h3 className="text-xl mt-4">

                                {product.name}

                            </h3>

                            <p className="text-pink-600 font-bold mt-2">

                                ₹ {product.price}

                            </p>

                            <Link to={`/product/${product.productId}`}>

    <button
        className="mt-4 p-2 w-full border-2 border-black rounded-lg hover:bg-pink-400 hover:text-white"
    >
        More About Product
    </button>

</Link>
                        </div>

                    ))

                }

            </div>

            <div className="flex justify-center">

                <button className="bg-amber-300 text-white px-8 py-3 rounded-lg mt-10">

                    Show All Items

                </button>

            </div>

        </div>

    );

};

export default Items;