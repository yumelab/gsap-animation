import ImageSequence from "./home/ImageSequence";
import VideoScrub from "./home/VideoScrub";
import Hero from "./home/Hero";
import CardSlider from "./home/CardSlider";
import Carousel from "./home/Carousel";
import DraggableSection from "./home/DraggableSection";

export default function Home() {
  return (
    <main className="container md:max-w-screen-2xl mx-auto lowercase md:px-16 px-8">
      <Hero/>
      {/* <VideoScrub/> */}
      <DraggableSection/>
      <Carousel/>
      <CardSlider/>
      <ImageSequence/>
    </main>
  );
}
