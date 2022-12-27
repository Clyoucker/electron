import React, { Component } from "react";

import PC from "../assets/images/categorys/Computers.png";
import Xbox from "../assets/images/categorys/PlayStations.png";
import Vr from "../assets/images/categorys/VRS.png";
import Camera from "../assets/images/categorys/Cameras.png";
import Music from "../assets/images/categorys/MusicMixers.png";
import DigitalTablet from "../assets/images/categorys/TabletsDigital.png";
import Phone from "../assets/images/categorys/Phones.png";
import Tablet from "../assets/images/categorys/Tablets.png";
import Fridge from "../assets/images/categorys/Fridges.png";
import Po from "../assets/images/categorys/PO.png";
import VrAssortment from "../assets/images/background/Vr.jpg";


import CardProductCategory from "../components/Cards/CardProductCategory";
import CardProductAssortment from "../components/Cards/CardProductAssortment";
import { Link } from "react-router-dom";

export default class Home extends Component{
    
    constructor(props){
        super(props);
        this.state={
            assortment:props.Assortment,
            assortmentImages:[],
            discounts:props.Discounts,
            discountsImages:[],
            products:props.Products,
            productsImages:[PC,Xbox,Vr,Camera,Music,DigitalTablet,Phone,Tablet,Fridge,Po],
        }
    }

    render(){
        return(
            <main className="main main-home">
                <section className="section section-new-assortments">
                    <div className="content content_row">
                        <h2 className="title section_title">New Assortment</h2>
                        <div className="assortment">
                            {this.state.assortment.map(item => <CardProductAssortment background={VrAssortment} descriptions={item.miniInfo}  title={item.title} />)}
                        </div>
                    </div>
                </section>
                {/* <section className="section section-seasonal-discounts">
                    <div className="content content_row">
                        <h2 className="title section_title">Seasonal Discounts</h2>
                        <div className="discounts">
                        </div>
                    </div>
                </section> */}
                <section className="section section-product-category">
                    <div className="content content_row">
                        <h2 className="title section_title">Product Categories</h2>
                        <div className="products">
                            {this.state.products.map(item => <CardProductCategory background={this.state.productsImages[item.poster]} title={item.title} href={item.href} />)}
                        </div>
                        <Link to="/Electron/Catalog" className="link link-button">See All</Link>
                    </div>
                </section>
            </main>
        )
    }
}