import api from "../api";

export const get = async (limit,skip)=>{
    const url = `products?limit=${limit}&skip=${skip}`;
    try {
        const rs = await api.get(url);
        return rs.data;
    } catch (error) {
        return {
            products:[],
            total:0,
            limit:0,
            skip:0
        };
    }  
}
export const post = (product)=>{

}

export const put = (product)=>{

}

export const deleteProduct = (product)=>{

}