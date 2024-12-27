import { Suspense } from "react";
import Product from "../components/product";
import Reviews from "../components/reviews";
import Loader from "../components/loader";

export default function ProductDetailPage(){

    return(
        <div>
            <h1>Product Detail Page</h1>
            <div className="grid grid-cols-2 bg-yellow-50 p-10">

            <Suspense fallback={<Loader/>}>
            <Product />
            </Suspense>
            <Suspense fallback={<Loader/>}>
            <Reviews />
            </Suspense>
            </div>

        </div>
    )
}