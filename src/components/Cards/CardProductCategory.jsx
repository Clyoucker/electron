import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class CardProductCategory extends Component{
    
    constructor(props){
        super(props);
        this.state={
            background:props.background,
            title:props.title,
            href:props.href,
        }
    }

    render(){
        return(
            <Link to="/Electron/Catalog" className="card card-product">
                <h3 className="title card_product">{this.state.title}</h3>
                <img className="img img_product" src={this.state.background} alt={this.state.title} />
            </Link>
        )
    }
}