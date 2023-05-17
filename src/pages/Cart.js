import React,{useEffect, useState} from "react";
import api from "../api";
import UserContext from "../context/UserContext";
const Cart = (props)=>{
    const [count,setCount] = useState(0);
    const {state,setState} = React.useContext(UserContext);
    const [products,setProducts] = useState(state.cart);
    
    const upCount = ()=>{
        setCount(count+1); 
    }
    
    // context
    const updateCart = ()=>{
        setProducts(state.cart);
    }
    const removeCart = (product)=>{
        const new_cart = [];
        state.cart.map(e=>{
            if(e.id != product.id){
                new_cart.push(e);
            }
        })
        state.cart = new_cart;
        setState(state);
        localStorage.setItem("state",JSON.stringify(state));   
        updateCart();
    }
    
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
                                        <tr key={k}>
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
                                                <span onClick={()=>{removeCart(v)}} className="icon_close"></span>
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