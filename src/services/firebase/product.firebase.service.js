import db from "../../db";

export const get = async ()=>{
    const products = [];
    try {
        const conn = db.collection("products");
        const data = await conn.get();
        data.docs.map(item=>{
            const d = item.data();// day moi la du lieu cua tung product
            d.id = item.id;// nap them id vao san pham
            products.push(d);                 
        });
    } catch (error) {
        
    }
    return products;
}