import React, { Component } from "react";
import { Link } from "react-router-dom";

import Clsoe from "../SVGS/Close";

export default class BurgerMenu extends Component{
    
    constructor(props){
        super(props);
        this.state={
            logo:props.logo,
            navigation:props.navigation,
        }
    }

    render(){
        return(
            <div className="burger-menu">
                <div className="content">
                    <div className="burger_row">
                        <div onClick={() => this.props.closeMenu()} className="close"><Clsoe /></div>
                        <Link onClick={() => this.props.closeMenu()} to="/" className="logo">{this.state.logo.slice(0,4)}<span className="span">{this.state.logo.slice(4,this.state.logo.length)}</span></Link>
                        <div className="menu">
                            {this.state.navigation.map(item => (item === "Home" || item === "Footer" ? null : <Link onClick={() => this.props.closeMenu()} className="link header_link" key={item} to={`/Electron/${item}`}>{item}</Link>))}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}