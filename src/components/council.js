import React, { Component } from "react";
import {Carousel} from '3d-react-carousal';
export default class Council extends Component {
  render() {
    var councilList=[
        {name:"Lakshay.jpg",desi:'Public Relations'},
        {name:"Divit_goel.jpg",desi:"President"},
        {name:"Ashwin_Rao.jpg",desi:"Vice President"},
        {name:"Rtanjay.jpg",desi:'Director, Administrative Affairs'},
        {name:"Sankalp.jpg",desi:'Director, MUN'},
        {name:"Siddharth.jpg",desi:'Director, Debating'},
        {name:"Ishpreet.png",desi:'Director, External affairs'},
        {name:"Saksham.jpg",desi:'Director, Finance'},
        {name:"Kushi.png",desi:'Director, Internal Affairs'},
        {name:"RitikaRai.jpg",desi:'Director, Publicity'},
        {name:"RahulSingh.jpg",desi:'Director, Corporate Affairs'},
        {name:"Nilesh.jpg",desi:'Director, Operations'},
        {name:"Shruti.jpg",desi:'Director, Social & Outreach'},
        {name:"Tushar.jpg",desi:'Director, Research & Policy'},
        {name:"Mehak_Singhal.jpg",desi:"Design"},
        {name:"Gaurish_Chawla.jpg",desi:"Photography"}
        
      ];
    
    var councilcc= councilList.map(item => <div class="flex justify-center text-center py-10 px-5">
    <div class="rounded-2xl shadow-lg bg-white outline outline-2 outline-black shadow-black py-5 max-w-sm px-3" >
      <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
        <img class="rounded-t-lg h-60 object-cover w-96" src={`/images/Council/${item.name}`} alt=""/>
      </a>
      <div class="p-6">
        <h5 class="text-black text-xl font-bold mb-2">{item.name.slice(0,-4).replace("_"," ")}</h5>
        <p class="text-grey-700 text-base mb-4">
          {`${item.desi}`}
        </p>
      
      </div>
    </div>
  </div>)
    
    return (
      <div className="bg-cyan-800 min-h-[584px]">
      <h1 className="xl:text-5xl text-5xl text-white font-extrabold text-center bg-cyan-700 py-10 mx-auto">
            SENIOR COUNCIL
          </h1>
          <Carousel slides={councilcc} autoplay={true} interval={5000} arrows={true}/>
      </div>
    );
  }
}