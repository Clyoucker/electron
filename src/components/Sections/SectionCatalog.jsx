import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Home extends Component{
    
    constructor(props){
        super(props);
        this.state={
            item:props.array,
            money:{"Dol":"$","Rub":"₽","Evr":"€"}
        }
    }

    render(){
        return(
            <div className="section section-catalog">
                <img className="img bg" src={this.props.bg} alt="" />
                <div className="content">
                    <div className="content_row">
                        <h2 className="section_title">{this.props.sectionTitle}</h2>
                        <div className="catalog">
                            {this.state.item.map(item => 
                                <Link to={`/Electron/Catalog/${item.type}/1`} className="card card-product">
                                    <div className="card-product__image">
                                        <img className="img" src={item.bg[0]} alt="" />
                                    </div>
                                    <div className="card-product__content">
                                        <h3 className="product_title">{item.title}</h3>
                                        <ul className="product__info">
                                            {Object.keys(item.info).map(item2 => 
                                                <li className="product__info-item">
                                                    <h3 className="type">{item2}</h3>
                                                    <h3 className="name">{item.info[item2]}</h3>
                                                </li>
                                            )}
                                        </ul>
                                        <ul className="product__price">
                                            {Object.keys(item.price).map(item3 => 
                                                <li className="product__price-item">{this.state.money[item3] + item.price[item3]}</li>
                                            )}
                                        </ul>
                                    </div>
                                </Link>
                            )}
                        </div>
                        <Link to="/Electron/Catalog/" className="link link-button">View All</Link>
                    </div>
                </div>
            </div>
        )
    }
}