import React, { Component } from "react";

import Solid from "../assets/images/background/Solid.png"
import BgOne from "../assets/images/previews/previes4.png"
import BgTwo from "../assets/images/previews/previes2.png"
import BgThree from "../assets/images/previews/previes1.png"
import BgFour from "../assets/images/previews/previes3.png"

import BgFive from "../assets/images/previews/previes8.png"
import BgSix from "../assets/images/previews/previes5.png"
import BgSeven from "../assets/images/previews/previes6.png"
import BgEit from "../assets/images/previews/previes7.png"

import { Link } from "react-router-dom";

export default class SeasonDiscounts extends Component{
    
    constructor(array){
        super(array);
        this.state={
            catalog:array.catalog
        }
    }

    Slide(currentPreview,previews,container){
        let ss = "."+previews;
        let containerPreview = document.getElementById(container);
        let currentImg = document.getElementById(currentPreview);
        let imgs = document.querySelectorAll(ss);
        let img = document.createElement("img");

        img.src = currentImg.src; img.id=previews;
        img.classList.add("img","active_preview");
        imgs.forEach((item) => {
            if(item.classList.contains("active")){item.classList.remove("active")}
        })
        currentImg.classList.add("active");

        document.getElementById(previews).remove();
        containerPreview.append(img);

    }

    render(){
        return(
            <main className="main main-discount">
                <section className="section section-season-discount">
                    <div className="content content_row">
                        <div className="season-discount">
                            <div className="season-discount__product">
                                <div className="product__content">
                                    <div className="product__left-content">
                                        <div className="images">
                                            <img id="x-pen-1" onClick={() => this.Slide("x-pen-1","x-pen","preview-x-pen")} className="img x-pen active" src={BgOne} alt="" />
                                            <img id="x-pen-2" onClick={() => this.Slide("x-pen-2","x-pen","preview-x-pen")} className="img x-pen" src={BgTwo} alt="" />
                                            <img id="x-pen-3" onClick={() => this.Slide("x-pen-3","x-pen","preview-x-pen")} className="img x-pen" src={BgThree} alt="" />
                                            <img id="x-pen-4" onClick={() => this.Slide("x-pen-4","x-pen","preview-x-pen")} className="img x-pen" src={BgFour} alt="" />
                                        </div>
                                        <div id="preview-x-pen" className="preview">
                                            <img id="x-pen" className="img active_preview" src={BgOne} alt="" />
                                            <div className="prices">
                                                <ul className="old__prices">
                                                    <li className="old__prices-item">$224.99</li>
                                                    <li className="old__prices-item">₽14 199</li>
                                                    <li className="old__prices-item">€ 199</li>
                                                </ul>
                                                <ul className="new__prices">
                                                    <li className="new__prices-item">$166.99</li>
                                                    <li className="new__prices-item">₽10 499</li>
                                                    <li className="new__prices-item">€ 159</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="product__right-content">
                                        <h2 className="product_title">XP-PEN Artist 12 Pro black</h2>
                                        <div className="description">The following purchases with Apple Card are ineligible to earn 5% back: monthly financing through Apple Card Monthly Installments, Apple iPhone Payments, the iPhone Upgrade Program, and wireless carrier financing plans; Apple Media Services; AppleCare+ monthly payments. Subject to credit approval. Valid only on qualifying purchases in U.S. for new Apple Card customers who open an account and use it from 12/1/22 to 12/25/22 at Apple Store locations, apple.com(Opens in a new window), the Apple Store app, or by calling 1-800-MY-APPLE. Accounts opened before 12/1/22 or after 12/25/22 do not qualify. New Apple Card users added to an Apple Card Family account opened during offer period can earn 5% back on their own purchases.</div>
                                        <img className="img solid" src={Solid} alt="" />
                                    </div>
                                </div>
                                <Link to="/Electron/Catalog/type1" className="link link-button">Buy</Link>
                            </div>
                            <div className="season-discount__product">
                                <div className="product__content">
                                    <div className="product__left-content">
                                        <div className="images">
                                            <img id="cam-1" onClick={() => this.Slide("cam-1","cam","preview-cam")} className="img cam active" src={BgFive} alt="" />
                                            <img id="cam-2" onClick={() => this.Slide("cam-2","cam","preview-cam")} className="img cam" src={BgSix} alt="" />
                                            <img id="cam-3" onClick={() => this.Slide("cam-3","cam","preview-cam")} className="img cam" src={BgSeven} alt="" />
                                            <img id="cam-4" onClick={() => this.Slide("cam-4","cam","preview-cam")} className="img cam" src={BgEit} alt="" />
                                        </div>
                                        <div id="preview-cam" className="preview">
                                            <img id="cam" className="img active_preview" src={BgFive} alt="" />
                                            <div className="prices">
                                                <ul className="old__prices">
                                                    <li className="old__prices-item">$224.99</li>
                                                    <li className="old__prices-item">₽14 199</li>
                                                    <li className="old__prices-item">€ 199</li>
                                                </ul>
                                                <ul className="new__prices">
                                                    <li className="new__prices-item">$166.99</li>
                                                    <li className="new__prices-item">₽10 499</li>
                                                    <li className="new__prices-item">€ 159</li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="product__right-content">
                                    <h2 className="product_title">X-PRO MAX Camera</h2>
                                    <div className="description">The following purchases with Apple Card are ineligible to earn 5% back: monthly financing through Apple Card Monthly Installments, Apple iPhone Payments, the iPhone Upgrade Program, and wireless carrier financing plans; Apple Media Services; AppleCare+ monthly payments. Subject to credit approval. Valid only on qualifying purchases in U.S. for new Apple Card customers who open an account and use it from 12/1/22 to 12/25/22 at Apple Store locations, apple.com(Opens in a new window), the Apple Store app, or by calling 1-800-MY-APPLE. Accounts opened before 12/1/22 or after 12/25/22 do not qualify. New Apple Card users added to an Apple Card Family account opened during offer period can earn 5% back on their own purchases.</div>
                                    <img className="img solid" src={Solid} alt="" />
                                    </div>
                                </div>
                                <Link to="/Electron/Catalog/Camers/1" className="link link-button">Buy</Link>
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        )
    }
}