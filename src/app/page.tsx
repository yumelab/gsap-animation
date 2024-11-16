import ImageSequence from "./home/ImageSequence";
import VideoScrub from "./home/VideoScrub";
import Hero from "./home/Hero";
import Testimonials from "./home/Testimonials";
import Carousel from "./home/Carousel";

export default function Home() {
  return (
    <main className="container md:max-w-screen-2xl mx-auto lowercase md:px-16 px-8">
      <Hero/>
      <VideoScrub/>
      <Carousel/>
      <Testimonials/>
      <ImageSequence/>
    </main>
  );
}
