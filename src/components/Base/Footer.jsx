import React, { Component } from "react";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";

export default class Footer extends Component{
    
    constructor(props){
        super(props);
        this.state={
            ulFooter:Object.keys(props.links),
            ulFooterLinks:props.links,
        }
    }

    render(){
        return(
            <footer className="footer">
                <a href="#anchor" className="anchor">Electron</a>
                <div className="content">
                    <div className="content_row">
                        <div className="footer-nav">
                            {this.state.ulFooter.map(item =>
                            <div className="footer-block">
                                <h3 className="title footer_title">{item}</h3>
                                <ul className="footer-ul">
                                    {this.state.ulFooterLinks[item].map(item2 =><Link to={"Electron/"+item2.split(" ").join("-")} className="link footer_link">{item2}</Link>)}
                                </ul>
                            </div>)}
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}

