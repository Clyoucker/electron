import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class CardProductAssortment extends Component{
    
    constructor(props){
        super(props);
        this.state={
            background:props.background,
            title:props.title,
            descriptions:props.descriptions,
        }
    }

    render(){
        return(
            <div className="card card-assortment">
                <div className="card-assortment__image">
                    <img className="img" src={this.state.background} alt={this.state.title} />
                    <div className="gradient"></div>
                </div>
                <div className="card-assortment__info">
                    <h2 className="title title_assortment">{this.state.title}</h2>
                    <div className="descriptions">{this.state.descriptions}</div>
                    <Link to="/Electron/Assortment" className="link link-button">See All</Link>
                </div>
            </div>
        )
    }
}