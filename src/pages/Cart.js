import React,{useEffect, useState} from "react";
import api from "../api";
import UserContext from "../context/UserContext";
const Cart = (props)=>{
    const [count,setCount] = useState(0);
    // const [products,setProducts] = useState([]);
    const upCount = ()=>{
        setCount(count+1); // this.setState({count:count+1})
    }
    // const getProducts = async ()=>{
    //     try{
    //         const url =  "products?limit=5";
    //         const rs = await api.get(url);
    //         const products = rs.data.products.map(e=>{
    //             e.qty=1;
    //             return e;
    //         });
    //         setProducts(products);
    //     }catch(err){

    //     }
        
    // }
    useEffect(()=>{
      //  getProducts();
    },[]); // componentDidMount
    useEffect(()=>{
        console.log("B");
    });// componentDidUpdate
    useEffect(()=>{
        console.log("C");
    },[count]);// chỉ chạy khi có sự thay đổi của state count

    // context
    const {state} = React.useContext(UserContext);
    const products = state.cart;
    return (
        <section className="product spad">
            <div className="container">
                <h1>Cart page</h1>
                <h2>Total products: {count}</h2>
                <button type="button" onClick={upCount} className="btn btn-primary">Add Product</button>
                <h2>Danh sách sản phẩm:</h2>
                <div className="shoping__cart__table">
                        <table>
                            <thead>
                                <tr>
                                    <th className="shoping__product">Products</th>
                                    <th>Price</th>
                                    <th>Quantity</th>
                                    <th>Total</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    products.map((v,k)=>{
                                       return (
                                        <tr>
                                            <td className="shoping__cart__item">
                                                <img width={100} src={v.thumbnail} alt=""/>
                                                <h5>{v.title}</h5>
                                            </td>
                                            <td className="shoping__cart__price">
                                                ${v.price}
                                            </td>
                                            <td className="shoping__cart__quantity">
                                                <div className="quantity">
                                                    <div className="pro-qty">
                                                        <input type="text" value={v.qty}/>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="shoping__cart__total">
                                                ${v.price * v.qty}
                                            </td>
                                            <td className="shoping__cart__item__close">
                                                <span className="icon_close"></span>
                                            </td>
                                        </tr>
                                       )     
                                    })
                                }
                                
                            </tbody>
                        </table>
                    </div>
            </div>
        </section>
    )
}
export default Cart;