import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default class Council extends Component {
  render() {
    var councilList=[
        {name:"Ishpreet.jpg",desi:'External affairs'},{name:"Khushi.jpg",desi:'Internal Affairs'},{name:"Lakshay.jpg",desi:'Public Relations'},{name:"Nilesh.jpg",desi:'Operations'},{name:"RahulSingh.jpg",desi:'Corporate Affairs'},{name:"RitikaRai.jpg",desi:'Publicity'},{name:"Saksham.jpg",desi:'Finance'},{name:"Sankalp.jpg",desi:'MUN'},{name:"Shruti.jpg",desi:'Social & Outreach'},{name:"Siddharth.jpg",desi:'Debating'},{name:"Tushar.jpg"
,desi:'Research & Policy'},];
    
    var councilcc= councilList.map(item =>  <div class="h-fit w-fit flex py-3 px-3  bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
    
    <img className="rounded-t-lg h-52 object-cover w-96 justify-center" src={`/images/Council/${item.name}`}  alt="" />
<div class="p-5">
    <a href="#">
        <h5 class="mb-2 text-sm font-bold tracking-tight text-gray-900 dark:text-white">{item.name.replace('.jpg',"")}</h5>
    </a>
    <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">{item.desi}</p>
    
</div>
</div>)
    var settings = {
      speed: 600,
      slidesToShow: 4,
      slidesToScroll: 4,
      swipeToSlide:true,
      pauseOnFocus:true,
      autoplay:true,
      arrows:true,
      draggable:true,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
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
           

        </Slider>
      </div>
    );
  }
}