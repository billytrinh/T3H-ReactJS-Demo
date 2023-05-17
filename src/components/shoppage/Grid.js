import React, { useEffect, useState } from "react";
import Paginator from "../Paginator";
import api from "../../api";
import { NavLink } from "react-router-dom";
import UserContext from "../../context/UserContext";
function Grid(props){
    const [products,setProducts] = useState([]);
    const [total,setTotal] = useState(0);
    const [skip,setSkip] = useState(0);
    const [limit,setLimit] = useState(12);
    const getData = async ()=>{
        const url = `products?limit=${limit}&skip=${skip}`;
        try {
            const rs = await api.get(url);
            setProducts(rs.data.products);
            setTotal(rs.data.total);
            setSkip(rs.data.skip);
            setLimit(rs.data.limit);
        } catch (error) {
            
        }  
    }
    useEffect(()=>{    
        getData();
    },[]);
    const changePage =  (skip)=>{
        setSkip(skip);
        getData();
    }
    const {state,setState} = React.useContext(UserContext);
    const addToCart = (product)=>{
        let check = false;
        state.cart.map(e=>{
            if(e.id == product.id){
                e.qty = e.qty+1;
                check =  true;    
            }
            return e;
        })
        if(check== false){
            product.qty = 1;
            state.cart.push(product);
        }
        setState(state); 
        localStorage.setItem("state",JSON.stringify(state));   
    }
    
    return (
        <div className="col-lg-9 col-md-7">
        <div className="filter__item">
            <div className="row">
                <div className="col-lg-4 col-md-5">
                    <div className="filter__sort">
                        <span>Sort By</span>
                        <select>
                            <option value="0">Default</option>
                            <option value="0">Default</option>
                        </select>
                    </div>
                </div>
                <div className="col-lg-4 col-md-4">
                    <div className="filter__found">
                        <h6><span>{products.length}</span> Products found</h6>
                    </div>
                </div>
                <div className="col-lg-4 col-md-3">
                    <div className="filter__option">
                        <span className="icon_grid-2x2"></span>
                        <span className="icon_ul"></span>
                    </div>
                </div>
            </div>
        </div>
        <div className="row">
            {
                products.map((v,k)=>{
                    return (
                        <div className="col-lg-4 col-md-6 col-sm-6">
                            <div className="product__item">
                                <div className="product__item__pic set-bg">
                                    <img height="270" src={v.thumbnail}/>
                                    <ul className="product__item__pic__hover">
                                        <li><a href="#"><i className="fa fa-heart"></i></a></li>
                                        <li><a href="#"><i className="fa fa-retweet"></i></a></li>
                                        <li><a href="javascript:void(0);" onClick={()=>{addToCart(v)}}><i className="fa fa-shopping-cart"></i></a></li>
                                    </ul>
                                </div>
                                <div className="product__item__text">
                                    <h6><NavLink to={"/detail/"+v.id}>{v.title}</NavLink></h6>
                                    <h5>${v.price}</h5>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
            
        </div>
        <Paginator total={total} skip={skip} limit={limit} changePage={changePage} />
    </div> 
    )
    
}
export default Grid;