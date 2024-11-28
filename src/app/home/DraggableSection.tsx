"use client";
import { useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { Draggable } from "gsap/Draggable";
// import { InertiaPlugin } from "gsap/InertiaPlugin";
import { useGSAP } from "@gsap/react";

import Image from "next/image";

import A from "@/assets/14.png";
import B from "@/assets/15.png";
import C from "@/assets/16.png";
import D from "@/assets/17.png";
import E from "@/assets/18.png";
import F from "@/assets/19.png";
import G from "@/assets/20.png";
import H from "@/assets/21.png";
import I from "@/assets/22.png";
import J from "@/assets/23.png";

// https://gsap.com/community/forums/topic/23841-draggable-slider-with-react/

gsap.registerPlugin(Draggable);

const DraggableSection = () =>{
  const images = [A, B, C, D, E, F, G, H, I,J];
  const sliderRef = useRef(null);

  useGSAP(()=>{
    Draggable.create(sliderRef.current, {
      type: "x",
      bounds: {
        minX: -sliderRef.current.clientWidth + window.innerWidth * 0.88,
        maxX: 0
      },
      inertia: true
    });
  },[])

    return(
      <div className="h-60">
        <div className="relative h-60 bg-green-500 overflow-hidden">
        <ul className="absolute top-0 left-0 w-fit flex gap-4 flex-nowrap h-full bg-blue-500" ref={sliderRef}> 
          {
            images.map((v,i)=>(
              <li className="flex-none rounded-lg overflow-hidden"  key={i}>
                <Image src={v} alt="cards" className="w-full h-full aspect-auto" width={300} height={300} priority/>
              </li> 
            ))
          }
        </ul>
        </div>
      </div>  
    )
}

export default DraggableSection