import React, { Component } from "react";
import { Link } from "react-router-dom";

import TabletDigitBg from "../../assets/images/background/Tablet.png";
import VrBg from "../../assets/images/background/Vr.jpg";
import Ps from "../../assets/images/background/PS.jpg";

import VRS from "../../assets/images/categorys/VRS.png";
import Tablet from "../../assets/images/asortiments/Tablet.png";
import Play from "../../assets/images/asortiments/PlayStation.png";

export default class SectionNewAssortment extends Component{
    
    constructor(props){
        super(props);
        this.state={
            bg:[VrBg,TabletDigitBg,Ps],
            image:[VRS,Tablet,Play],
            catalog:props.catalog,
        }
    }

    render(){
        return(
            <main className="main">
                {this.state.catalog.map(item => 
                    <div className="section section-new-assortment">
                        <img className="bg" src={this.state.bg[item.bg]} alt="" />
                        <div className="content">
                            <div className="content_row">
                                <h2 className="title section_title">New Assortment / + {item.title}</h2>
                                <div className="section__content">
                                    <div className="top">
                                        <div className="left__content">
                                        <img className="img" src={this.state.image[item.bg]} alt="" />
                                            <div className="prices">
                                                <div className="price dol">${item.price.Dol}</div>
                                                <div className="price rub">₽{item.price.Rub}</div>
                                                <div className="price evr">€{item.price.Evr}</div>
                                            </div>
                                        </div>
                                        <div className="right__content descriptions">{item.description}</div>
                                    </div>
                                    <div className="down descriptions">{item.description}</div>
                                </div>
                                <Link to={`/Electron/Catalog/${item.type}/1`} className="link link-button">Buy</Link>
                            </div>
                        </div>
                    </div>
                    )}
            </main>
        )
    }
}