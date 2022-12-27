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

import bg from "../assets/images/background/bg.jpg";

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
                <section className="section section-top-selers" style={{backgroundImage:`url(${bg})`}}>
                    <div className="content">
                        <div className="content_row">
                            <h2 className="title section_title">Top Selers</h2>
                            <div className="card-grid">
                                <Link to="/Electron/Catalog/Camers/1" className="carding">
                                    <div className="carding__image">
                                        <img className="img" src={Camera} alt="" />
                                        <div className="prices">
                                            <div className="price dol">$ 224.99</div>
                                            <div className="price rub">₽ 14 199</div>
                                            <div className="price evr">€ 199</div>
                                        </div>
                                    </div>
                                    <div className="carding__content">
                                        <h2 className="title carding_title">Lenovo - 2022 - IdeaPad 3i - Essential Laptop Computer - Intel Core i5 12th Gen - 15.6" FHD Display - 8GB Memory - 512GB Storage</h2>
                                        {/* <div className="stars">
                                            <div className="stars__container">
                                                <div className="star star-inner" style={{width:`${Math.round(9 * 10)}%`}}></div>
                                                <div className="star star-out"></div>
                                            </div>
                                        </div> */}
                                    </div>
                                </Link>
                                <Link to="/Electron/Catalog/Camers/1" className="carding">
                                    <div className="carding__image">
                                        <img className="img" src={Tablet} alt="" />
                                        <div className="prices">
                                            <div className="price dol">$ 224.99</div>
                                            <div className="price rub">₽ 14 199</div>
                                            <div className="price evr">€ 199</div>
                                        </div>
                                    </div>
                                    <div className="carding__content">
                                        <h2 className="title carding_title">Lenovo - 2022 - IdeaPad 3i - Essential Laptop Computer - Intel Core i5 12th Gen - 15.6" FHD Display - 8GB Memory - 512GB Storage</h2>
                                        {/* <div className="stars">
                                            <div className="stars__container">
                                                <div className="star star-inner" style={{width:`${Math.round(8 * 10)}%`}}></div>
                                                <div className="star star-out"></div>
                                            </div>
                                        </div> */}
                                    </div>
                                </Link>
                                <Link to="/Electron/Catalog/Camers/1" className="carding">
                                    <div className="carding__image">
                                        <img className="img" src={Xbox} alt="" />
                                        <div className="prices">
                                            <div className="price dol">$ 224.99</div>
                                            <div className="price rub">₽ 14 199</div>
                                            <div className="price evr">€ 199</div>
                                        </div>
                                    </div>
                                    <div className="carding__content">
                                        <h2 className="title carding_title">Lenovo - 2022 - IdeaPad 3i - Essential Laptop Computer - Intel Core i5 12th Gen - 15.6" FHD Display - 8GB Memory - 512GB Storage</h2>
                                        {/* <div className="stars">
                                            <div className="stars__container">
                                                <div className="star star-inner" style={{width:`${Math.round(4 * 10)}%`}}></div>
                                                <div className="star star-out"></div>
                                            </div>
                                        </div> */}
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section section-new-assortments">
                    <div className="content content_row">
                        <h2 className="title section_title">New Assortment</h2>
                        <div className="assortment">
                            {this.state.assortment.map(item => <CardProductAssortment background={VrAssortment} descriptions={item.miniInfo}  title={item.title} />)}
                        </div>
                    </div>
                </section>
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