import React, { Component } from "react";

import TbBg from "../assets/images/asortiments/Tablet.png"
import TbBg2 from "../assets/images/previews/previes2.png"
import TbBg3 from "../assets/images/previews/previes1.png"

export default class Product extends Component{
    
    constructor(props){
        super(props);
        this.state={
            name:"VR Oculus Fest 6400x9200px QHD",
            activeImg:0,
            img:[
                TbBg,TbBg2,TbBg3
            ],
            comments:[
                {userAvatar:"https://sun1-95.userapi.com/impg/Ky9h8T3Ovb0Lxxt99ywS4hCIm3-fhjlIA0DHSA/5kvOjBOqvQ8.jpg?size=700x745&quality=96&sign=41785ce6b1e9f25e23f3fd465a4e7d58&type=album",userName:"Bublick",countReview:5,type:"like",comment:"Awesome game!! However, for future updates please STOP feeding us with images of whats to come and just release it. We would like to explore these new biomes by ourselves without seeing every single thing that's being added."},
                {userAvatar:"https://sun1-24.userapi.com/impg/xJG1FNBDzctd55GgDcxtRlxNjLYABadAa8zYkA/2txh44z5CfU.jpg?size=1200x1200&quality=95&sign=52fe6969ed304a06ce97a907b0ae94cd&type=album",userName:"Stolone",countReview:5,type:"like",comment:"Awesome game!! However, for future updates please STOP feeding us with images of whats to come and just release it. We would like to explore these new biomes by ourselves without seeing every single thing that's being added."},
                {userAvatar:"https://sun1-30.userapi.com/impg/7fu4g9-_DKWjxhOXSqffQHrdRoNIafAOa4rpuw/cBoxQ4xjOWs.jpg?size=615x415&quality=95&sign=803ab20dbe0fe93a45d6a43687560052&type=album",userName:"Brick",countReview:5,type:"like",comment:"Awesome game!! However, for future updates please STOP feeding us with images of whats to come and just release it. We would like to explore these new biomes by ourselves without seeing every single thing that's being added."},
                {userAvatar:"https://pentad.ru/wp-content/uploads/2019/12/Tyazhelyj-den.jpg",userName:"Forever",countReview:5,type:"like",comment:"Awesome game!! However, for future updates please STOP feeding us with images of whats to come and just release it. We would like to explore these new biomes by ourselves without seeing every single thing that's being added."},
                {userAvatar:"https://ustaliy.ru/wp-content/uploads/2022/03/these-crazy-facts1.jpg",userName:"One x One",countReview:5,type:"like",comment:"Awesome game!! However, for future updates please STOP feeding us with images of whats to come and just release it. We would like to explore these new biomes by ourselves without seeing every single thing that's being added."},
                {userAvatar:"https://www.meme-arsenal.com/memes/8a61eb276dc5c58c32d6ab8a38b1d122.jpg",userName:"Click",countReview:5,type:"like",comment:"Awesome game!! However, for future updates please STOP feeding us with images of whats to come and just release it. We would like to explore these new biomes by ourselves without seeing every single thing that's being added."},
                {userAvatar:"https://cdn.discordapp.com/attachments/1038511913442746499/1057283166626402344/-------10.jpg",userName:"Click",countReview:5,type:"like",comment:"Bochníky jsou úžasné za 49,99 rublů!"},
            ],
            reviews:6,
            information:{
                general:[
                    "Размер устройства: мм344,16x193,59",
                    "Размер рабочей области: мм344,16x193,59",
                    "Количество линий на дюйм: 5080 Ipi",
                    "Чувствительность к нажатию: 8192 уровня",
                    "Скорость отклика планшета: 266 pps",
                    "Формат: A4",
                    "Способ ввода: Перьевое",
                    "Тип подключения: Проводное",
                    "Совместимость c OC: Mac OS | Windows",
                    "Bec товара: 1060 gr"
                ],
                aditional:[
                    "Тип: Графический планшет-монитор",
                    "Перо: P10",
                    "Цвет: Black",
                    "Гарантийный срок: 1 Год",
                    "Бренд: PARBLO",
                    "Страна-изготовитель: Китай",
                ]
            }
        }
    }

    slide = type => {
        let lenScreenshots = this.state.img.length
        if (type === "back"){
            let index = (this.state.activeImg !== 0 ? this.state.activeImg - 1 : lenScreenshots-1);
            this.setState({activeImg:index})
          }
          else{
            let index = (this.state.activeImg + 1 < lenScreenshots ? this.state.activeImg + 1 : 0);
            this.setState({activeImg:index})
          }
    }

    render(){
        return(
            <main className="main">
                <section className="section section-header-product">
                    <div className="content">
                        <div className="content_row">
                            <h2 className="title product_title">{this.state.name}</h2>
                            <div className="slider">
                                <div className="slider__images">
                                    {this.state.img.map((item,index) => (this.state.activeImg === index ? <img id={"preview-"+index} key={"preview-"+index} className="img preview active" src={item} alt="" /> : <img id={"preview-"+index} key={"preview-"+index} className="img preview" src={item} alt="" />))}
                                </div>
                                <div className="slider__btns">
                                    <div onClick={() => this.slide("back")} className="slide-btn left-slide"></div>
                                    <div onClick={() => this.slide("next")} className="slide-btn right-slide"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                </section>
                <section className="section section-specification">
                    <div className="content">
                        <div className="content_row">
                            <h2 className="title section_title">Specification</h2>
                            <div className="specifications">
                                <ul className="specification-general">
                                    {this.state.information.general.map((item,index) => 
                                        <li key={"general-"+index} className="specification-general__item"><span>{item.split(":")[0]}:</span>{item.split(":")[1]}</li>
                                    )}
                                </ul>
                                <ul className="specification-aditional">
                                    {this.state.information.aditional.map((item,index) => 
                                        <li key={"aditional-"+index} className="specification-aditional__item"><span>{item.split(":")[0]}:</span>{item.split(":")[1]}</li>
                                    )}
                                </ul>
                            </div>
                            <div className="buttons">
                                <button className="link link-button">Buy Now</button>
                                <button className="link link-button">Add Card</button>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="section section-comments">
                    <div className="content">
                        <div className="content_row">
                            <h2 className="title section_title">Reviews {this.state.reviews}</h2>
                            <form className="form form-comment">
                                <div className="form-comment__profile">
                                    <img className="img profile" src="https://krot.info/uploads/posts/2022-03/1646150111_40-krot-info-p-koti-memi-smeshnie-foto-42.jpg" alt="" />
                                    <div className="titles">
                                        <h4 className="title profile_title">Anonim</h4>
                                        <h4 className="title review_title">0 review</h4>
                                    </div>
                                </div>
                                <textarea className="textarea comment_textarea" name="" id=""></textarea>
                            </form>
                            <div className="comments">
                                {this.state.comments.map((item,index) => 
                                    <div key={"comment-"+index} className="comment">
                                        <div className="comment__profile">
                                            <img className="img profile" src={item.userAvatar} alt={item.userName} />
                                            <div className="titles">
                                            <h4 className="title profile_title">{item.userName}</h4>
                                            <h4 className="title review_title">{item.countReview} review</h4>
                                            </div>
                                        </div>
                                        <div className="comment__text"><p className="text comment_text">{item.comment}</p></div>
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        )
    }
}