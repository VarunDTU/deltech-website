import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class Council extends Component {
  render() {
    var councilList=[
        {name:"Ishpreet.png",desi:'External affairs'},{name:"Kushi.png",desi:'Internal Affairs'},{name:"Lakshay.jpg",desi:'Public Relations'},{name:"Nilesh.jpg",desi:'Operations'},{name:"RahulSingh.jpg",desi:'Corporate Affairs'},{name:"RitikaRai.jpg",desi:'Publicity'},{name:"Saksham.jpg",desi:'Finance'},{name:"Sankalp.jpg",desi:'MUN'},{name:"Shruti.jpg",desi:'Social & Outreach'},{name:"Siddharth.jpg",desi:'Debating'},{name:"Tushar.jpg"
,desi:'Research & Policy'},{name:"Rtanjay.jpg",desi:'Administrative Affairs'}];
    
    var councilcc= councilList.map(item => <div class="flex justify-center py-10 px-5">
    <div class="rounded-2xl z-5 shadow-lg bg-white outline outline-2 outline-black shadow-black py-5 max-w-sm px-3" >
      <a href="#!" data-mdb-ripple="true" data-mdb-ripple-color="light">
        <img class="rounded-t-lg h-60 object-cover w-96" src={`/images/Council/${item.name}`} alt=""/>
      </a>
      <div class="p-6">
        <h5 class="text-black text-xl font-bold mb-2">{item.name.slice(0,-4)}</h5>
        <p class="text-grey-700 text-base mb-4">
          {item.desi}
        </p>
      
      </div>
    </div>
  </div>)
    var settings = {
      infinite: true,
      slidesToShow: 3,
      focusOnSelect: true,
      autoplay: true,
      slidesToScroll: 1,
      speed: 5000,
      swipeToSlide: true,
      centerMode: true,
      pauseOnHover: true,
      autoplaySpeed: 3000,
      initialSlide:1,
      dots:true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            initialSlide:5,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 5
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            initialSlide: 5,
          }
        }
      ]
    };
    return (
      <div className="bg-cyan-800">
        <Slider {...settings}>
            {councilcc[0]}
            {councilcc[1]}
            {councilcc[2]}
            {councilcc[3]}
            {councilcc[4]}
            {councilcc[5]}
            {councilcc[6]}
            {councilcc[7]}
            {councilcc[8]}
            {councilcc[9]}
            {councilcc[10]}
            {councilcc[11]}
           

        </Slider>
      </div>
    );
  }
}