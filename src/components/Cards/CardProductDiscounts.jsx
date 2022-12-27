import React, { Component } from "react";

export default class CardProductDiscounts extends Component{
    
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
            <div>
                <h3 className="title card_title">{this.state.title}</h3>
                <img className="img img_product" src={this.state.background} alt="" />
            </div>
        )
    }
}