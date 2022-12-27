import React, { Component } from "react";

import Laptops from "../assets/images/background/Games.jpg"
import Console from "../assets/images/background/Consoles.jpg"
import Kitchen from "../assets/images/background/Kitchen.jpg"
import Software from "../assets/images/background/Software.png"
import Music from "../assets/images/background/Musical.jpg"
import GraphicTablets from "../assets/images/background/GraphicTablets.jpg"
import Provoda from "../assets/images/background/Provoda.jpeg"

import SectionCatalog from "../components/Sections/SectionCatalog";

export default class Catalog extends Component{
    
    constructor(props){
        super(props);
        this.state={
            catalog:props.catalog,
            sections:["Laptops","Console","Kitchen","Software","Music","GraphicTablets","Provoda"],
            bg:{"Laptops":Laptops,"Console":Console,"Kitchen":Kitchen,"Software":Software,"Music":Music,"GraphicTablets":GraphicTablets,"Provoda":Provoda},
            sectionTitles:{"Laptops":"PC / Accessories","Console":"Consoles / Accessories","Kitchen":"Kitchen","Software":"Software / Hardware","Music":"Musical instruments","GraphicTablets":"Graphic Tablets / Accessories","Provoda":"Wires / Adapters"},
        }
    }

    render(){
        return(
            <main className="main main-catalog">
                 {console.log(this.state.catalog["Laptops"])}
                {this.state.sections.map(item => <SectionCatalog array={this.state.catalog[item]} bg={this.state.bg[item]} sectionTitle={this.state.sectionTitles[item]} />)}
            </main>
        )
    }
}