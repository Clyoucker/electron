import React, { Component } from "react";
import { Link } from "react-router-dom";

import BurgerMenu from "./BurgerMenu";

export default class Header extends Component{
    
    constructor(props){
        super(props);
        this.state={
            showBurgerMenu:false,
            logo:"Electron",
            navigation:props.links,
        }
        this.closeMenu = this.closeMenu.bind(this);
    }

    openMenu(){
        this.setState({showBurgerMenu:true})

    }

    closeMenu(){
        this.setState({showBurgerMenu:false})
    }

    render(){
        return(
            <header id="anchor" className="header">
                {this.state.showBurgerMenu === true ? <BurgerMenu closeMenu={this.closeMenu} navigation={this.state.navigation} logo={this.state.logo} /> : null}
                <div className="content">
                    <div className="content_row">
                        <Link to="/" className="logo">{this.state.logo.slice(0,4)}<span className="span">{this.state.logo.slice(4,this.state.logo.length)}</span></Link>
                        <nav className="nav header-nav">
                            {this.state.navigation.map(item => (item === "Home" || item === "Footer" ? null : <Link className="link header_link" key={item} to={`/Electron/${item}`}>{item}</Link>))}
                        </nav>
                        <div onClick={() => this.openMenu()} className="burger">
                            <div /><div /><div />
                            <div /><div /><div />
                            <div /><div /><div />
                        </div>
                    </div>
                </div>
            </header>
        )
    }
}