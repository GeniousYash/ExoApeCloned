import { gsap, Linear, Power4, ScrollTrigger } from "gsap/all";
import { useEffect, useRef } from "react";



const Images = () => {
    const first = useRef(null);
    const second = useRef(null);
    const third = useRef(null);
    const fourth = useRef(null);
    const parent = useRef(null);

    useEffect(()=>{
        gsap.registerPlugin(ScrollTrigger);
        const tl = gsap.timeline({
            scrollTrigger:{
                trigger: parent.current,
                start:"0 90%",
                scrub: 1
            }
        });
        tl
        .to(first.current,{
            x: "40%",
            ease: Linear
        },'a')
        .to(second.current,{
            x: "-40%",
            ease: Linear
        },'a')
        .to(third.current,{
            x: "-40%",
            ease: Linear
        },'a')
        .to(fourth.current,{
            x: "40%",
            ease: Linear
        },'a')
    })

  return (
    <div ref={parent} className="w-full h-[70vh] sm:h-[100vh] bg-white flex items-center justify-center overflow-hidden sm:overflow-visible">
        <div className="w-[40%] sm:w-[25%] sm:h-[90%] relative h-1/2">
            <div ref={first} className="absolute w-18 sm:w-40 sm:h-[15rem] h-[6rem] -right-1/3 sm:-right-[35%] top-6">
                <img className="w-full h-full object-cover" src="https://a.storyblok.com/f/133769/348x494/21becfd449/home-news-3.jpg/m/700x994/filters:quality(90)" alt="" />
            </div>
            <div ref={second} className="absolute w-[8rem] sm:w-[24rem] aspect-video -left-2/3 sm:-left-[79%] top-1/3 overflow-hidden">
                <video autoPlay muted loop className="w-full h-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 " src="https://a.storyblok.com/f/133769/x/9c433c7aac/home-news-diesel-be-a-follower.mp4"></video>
            </div>
            <div ref={third} className="absolute w-[8rem] sm:w-[24rem] aspect-video -left-[70%] sm:-left-[24.5rem] -bottom-10 sm:-bottom-[30%]">
                <img className="w-full h-full object-cover" src="https://a.storyblok.com/f/133769/758x508/8a1ff60d00/home-news-4.jpg/m/700x469/filters:quality(90)" alt="" />
            </div>
            <div ref={fourth} className="absolute w-[12rem] sm:w-[24rem] aspect-[1.5/1] sm:aspect-[1] -right-[90%] sm:-right-[24.5rem] -bottom-[37%] sm:-bottom-[55%] overflow-hidden sm:overflow-visible">
                <video autoPlay muted loop className="w-full h-full absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" src="https://a.storyblok.com/f/133769/x/88b4bf7989/news-rino-pelle.mp4"></video>
            </div>
            <img className="w-full h-full object-cover" src="https://a.storyblok.com/f/133769/748x1278/5784aa7150/home-news-1.jpg/m/700x1196/filters:quality(90)" alt="" />
        </div>
    </div>
  )
}

export default Images;
