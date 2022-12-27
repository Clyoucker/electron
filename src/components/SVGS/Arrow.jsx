import React, { Component } from "react";

export default class Arrow extends Component{
    constructor(props){
        super(props);
        this.state={
            type:null,
        }
    }

    render(){
        return (
        <svg version="1.1" className="svg arrow" onClick={() => this.props.slide(this.state.type)} xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 330 330">
            <path d="M165,0C74.019,0,0,74.019,0,165s74.019,165,165,165s165-74.019,165-165S255.981,0,165,0z M255.606,205.606
                C252.678,208.535,248.839,210,245,210s-7.678-1.464-10.606-4.394l-69.396-69.393l-69.392,69.393c-5.857,5.858-15.355,5.858-21.213,0
                c-5.858-5.857-5.858-15.355,0-21.213l79.998-80c2.813-2.813,6.628-4.394,10.606-4.394c3.979,0,7.793,1.58,10.607,4.394l80.002,80
                C261.465,190.251,261.465,199.749,255.606,205.606z"/>
        </svg>
        )
    }
}