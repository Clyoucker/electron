import React, { Component } from "react";

export default class Closer extends Component{
    constructor(props){
        super(props);
        this.state={
        }
    }

    render(){
        return (
            <svg className="svg svg-close" fill="#FFFFFF" width="800px" height="800px" viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg">
                <path d="M29.484 0c-.13.004-.252.057-.343.15L17.164 12.13c-.49.47.235 1.197.706.707L29.846.857c.325-.318.1-.857-.363-.857zM12.488 17c-.13.004-.25.058-.34.15L.162 29.14c-.486.467.233 1.186.7.7L12.848 17.85c.325-.313.093-.85-.36-.85zM.5 0a.5.5 0 0 0-.348.86L29.14 29.845a.5.5 0 1 0 .706-.706L.86.152A.5.5 0 0 0 .5 0z"/>
            </svg>
        )
    }
}
