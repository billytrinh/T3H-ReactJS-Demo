import React from "react";
import { NavLink } from "react-router-dom";
import db from "../db";
export default class FireBasePage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            products:[],
            form_product: {}
        }
        this.handleInput = this.handleInput.bind(this);
        this.formSubmit = this.formSubmit.bind(this);
        this.refresh = this.refresh.bind(this);
    }

    componentDidMount(){
        this.refresh();
    }

    async refresh(){
        try{
            const conn = db.collection("products");
            const data = await conn.get();
            const products = [];
            data.docs.map(item=>{
                const d = item.data();// day moi la du lieu cua tung product
                d.id = item.id;// nap them id vao san pham
                products.push(d);                 
            });
            this.setState({products:products});
         }catch(err){
 
         }
    }

    handleInput(event){
        const form_product = this.state.form_product;
        form_product[event.target.name] = event.target.value;
        this.setState({
            form_product: form_product
        })
    }
    async formSubmit(e){
        e.preventDefault();
        try{
            const form_product = this.state.form_product;
            // luu vao firestore
            const conn = db.collection("products");
            await conn.add(form_product);  
            this.refresh();  
        }catch(err){
            
        }
       
        return false;
    }

    updateProduct(){
        try{
            const id = "87Up1Ib6BMaDsLIyALB8";
            const conn = db.collection("products").doc(id);
            conn.update({
                name:"Bánh chưng",
                price:26,
                qty:14,
                thumbnail:"img/product/product-2.jpg"
            });
           // conn.delete();
        }catch(err){

        }
    }
    render(){
        const products = this.state.products;
        return (
            <section className="product spad">
            <div className="container">
                <div className="row">
                    <div className="col-lg-3">
                        <form method="post" onSubmit={this.formSubmit}>
                            <div class="form-group">
                                <input onChange={this.handleInput} type="text" name="name" placeholder=" name"/>
                            </div>
                            <div class="form-group">
                                <input onChange={this.handleInput} type="text" name="thumbnail" placeholder="thumbnail"/>
                            </div>
                            <div class="form-group">
                                <input onChange={this.handleInput} type="number" name="price" placeholder="price"/>
                            </div>
                            <div class="form-group">
                                <input onChange={this.handleInput} type="number" name="qty" placeholder="qty"/>
                            </div>
                            <button type="submit" class="site-btn">Add Product</button>
                        </form>
                    </div>
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
                        <div key={k} className="col-lg-4 col-md-6 col-sm-6">
                            <div className="product__item">
                                <div className="product__item__pic set-bg">
                                    <img height="270" src={v.thumbnail}/>
                                    <ul className="product__item__pic__hover">
                                        <li><a href="#"><i className="fa fa-heart"></i></a></li>
                                        <li><a href="#"><i className="fa fa-retweet"></i></a></li>
                                        <li><a href="#"><i className="fa fa-shopping-cart"></i></a></li>
                                    </ul>
                                </div>
                                <div className="product__item__text">
                                    <h6><NavLink to={"/detail/"+v.id}>{v.name}</NavLink></h6>
                                    <h5>${v.price}</h5>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
           
        </div>
    
            </div> 
            </div>
            </div>
            </section>
        )
    }
}