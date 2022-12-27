import React, { Component } from "react";
// import { Link } from "react-router-dom";

import Solid from "../../assets/images/background/Solid.png"
import BgOne from "../../assets/images/previews/previes4.png"
import BgTwo from "../../assets/images/previews/previes2.png"
import BgThree from "../../assets/images/previews/previes1.png"
import BgFour from "../../assets/images/previews/previes3.png"

export default class SectionSeasonDiscounts extends Component{
    
    constructor(props){
        super(props);
        this.state={
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
                <section className="section section-season-discount">
                    <div className="content content_row">
                        <div className="season-discount">
                            <div className="season-discount__product">
                                <div className="product__left-content">
                                    <div className="images">
                                        <img id="x-pen-1" onClick={() => this.Slide("x-pen-1","x-pen","preview-x-pen")} className="img x-pen active" src={BgOne} alt="" />
                                        <img id="x-pen-2" onClick={() => this.Slide("x-pen-2","x-pen","preview-x-pen")} className="img x-pen" src={BgTwo} alt="" />
                                        <img id="x-pen-3" onClick={() => this.Slide("x-pen-3","x-pen","preview-x-pen")} className="img x-pen" src={BgThree} alt="" />
                                        <img id="x-pen-4" onClick={() => this.Slide("x-pen-4","x-pen","preview-x-pen")} className="img x-pen" src={BgFour} alt="" />
                                    </div>
                                    <div id="preview-x-pen" className="preview">
                                        <img id="x-pen" className="img active_preview" src={BgOne} alt="" />
                                    </div>
                                </div>
                                <div className="product__right-content">
                                    <img className="img solid" src={Solid} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
        )
    }
}