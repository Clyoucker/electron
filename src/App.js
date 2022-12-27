import React, { Component } from "react";
import {Routes, Route } from "react-router-dom";

import Constants from "./assets/jsons/Project.json";

import Header from "./components/Base/Header";
import Footer from "./components/Base/Footer";

import Home from "./templates/Home";
import Product from "./templates/Product";
import NewAssortments from "./templates/NewAssortments";
import SeasonDiscounts from "./templates/SeasonDiscounts";
import Catalog from "./templates/Catalog";

export default class App extends Component {

  constructor(){
    super();
    this.state={
      headerLinks:Object.keys(Constants),
      footerLinks:Constants.Footer,
    };
  }

  render(){
    return (
      <div className="wrapper">
        <Header links={this.state.headerLinks} />
        <Routes>
          <Route path="/" element={<Home Products={Constants.Home.HomeProducts} Discounts={Constants.Home.HomeDiscounts} Assortment={Constants.Home.HomeAssortment} />} />
          <Route path="/Electron/Assortment" element={<NewAssortments catalog={Constants.Assortment} />} />
          <Route path="/Electron/Discounts" element={<SeasonDiscounts catalog={Constants.Catalog} />} />
          <Route path="/Electron/Catalog" element={<Catalog catalog={Constants.Catalog} />} />
          <Route path="/Electron/Catalog/:type/:id" element={<Product catalog={Constants.Catalog} />} />
        </Routes>
        <Footer links={this.state.footerLinks} />
      </div>
    )
  }
}