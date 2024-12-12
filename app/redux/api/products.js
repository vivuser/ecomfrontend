import { axiosClient } from "@/app/axiosClient";
import { getQueryString } from "@/app/utilities/common";

export async function fetchAllProductsAPI(filters) {
    return await axiosClient.get(`/api/v1/product/products?${getQueryString(filters)}`)
}

export async function fetchProductDetailAPI(id) {
    return await axiosClient.get(`/api/v1/product/${id}`)
}