import React from "react";
import Paginator from "../Paginator";
export default class Grid extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            products: [],
            total:0,
            skip:0,
            limit:15
        }
        this.changePage = this.changePage.bind(this);
    }
    componentDidMount(){
        const limit = this.state.limit;
        const url = "https://dummyjson.com/products?limit="+limit;
        fetch(url).then(rs=>rs.json())
        .then(rs=>{
            this.setState({
                products: rs.products,
                total: rs.total,
                skip: rs.skip,
                limit:rs.limit
            })
        })
        .catch(err=>{
            console.log(err);
        })
    }
    changePage(skip){
        const limit = this.state.limit;
        const url = `https://dummyjson.com/products?limit=${limit}&skip=${skip}`;
        fetch(url).then(rs=>rs.json())
        .then(rs=>{
            this.setState({
                products: rs.products,
                total: rs.total,
                skip: rs.skip,
                limit:rs.limit
            })
        })
        .catch(err=>{
            console.log(err);
        })
    }
    render(){
        const products  = this.state.products;
        const total = this.state.total;
        const skip = this.state.skip;
        const limit = this.state.limit;
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
                                            <li><a href="#"><i className="fa fa-shopping-cart"></i></a></li>
                                        </ul>
                                    </div>
                                    <div className="product__item__text">
                                        <h6><a href="#">{v.title}</a></h6>
                                        <h5>${v.price}</h5>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
               
            </div>
            <Paginator total={total} skip={skip} limit={limit} changePage={this.changePage} />
        </div> 
        )
    }
}