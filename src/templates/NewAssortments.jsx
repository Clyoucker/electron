import React, { Component } from "react";

import SectionNewAssortment from "../components/Sections/SectionNewAssortment";

export default class NewAssortments extends Component{
    
    constructor(array){
        super(array);
        this.state={
            catalog:array.catalog
        }
    }

    render(){
        return(
            <main className="main">
                <SectionNewAssortment catalog={this.state.catalog} />
            </main>
        )
    }
}