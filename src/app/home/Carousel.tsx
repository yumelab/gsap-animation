"use client";
import { useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { useGSAP } from "@gsap/react";

import A from "@/assets/14.png";
import B from "@/assets/16.png";
import C from "@/assets/17.png";
import D from "@/assets/18.png";
import Image from "next/image";

gsap.registerPlugin(ScrollTrigger);

const Carousel = () => {
  const [active, setActive] = useState(0);
  const [images, setImages] = useState([A, B, C, D]);
  const cardsRef = useRef<HTMLDivElement>(null);
  const cards = gsap.utils.toArray(cardsRef.current?.children ?? []);

  const nextSlide = () => {
    setActive((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setActive((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  }; 

  useGSAP(() => {
 
  }, [active]);

  return (
    <section className="min-h-fit flex flex-col gap-4 py-32 bg-gray-50">
      <div className="relative rounded-xl overflow-auto">
        <ul className="flex flex-nowrap gap-4">
        {
            images.map((item,i)=>(
                <div key={i} className="w-1/3 flex-none rounded-xl overflow-hidden">
                    <Image
                        className="w-full h-full"
                        src={item}
                        alt="demo"
                        priority/>
                </div>
            ))
        } 
        </ul>
      </div> 
      <div className="flex gap-8 ">
        <button
          onClick={prevSlide}
          className="rounded-full border py-4 px-16 text-black hover:bg-gray-200 hover:border-transparent uppercase"
        >
          prev
        </button>
        <button
          onClick={nextSlide}
          className="rounded-full border py-4 px-16 text-black hover:bg-gray-200 hover:border-transparent uppercase"
        >
          next
        </button>
      </div>
    </section>
  );
};

export default Carousel;
