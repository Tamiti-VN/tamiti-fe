import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "./ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import banner from "../assets/collection_banner.webp";
import banner2 from "../assets/banner2.png";
import { useEffect, useRef, useState } from "react";

const bannerImages = [{ image: banner }, { image: banner2 }];

export const CarouselCustom = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);
  const plugin = useRef(Autoplay({ delay: 4000, stopOnInteraction: false }));

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <Carousel
      setApi={setApi}
      plugins={[plugin.current]}
      className="relative group overflow-hidden"
    >
      <CarouselContent>
        {bannerImages.map((banner, index) => (
          <CarouselItem key={index} className="relative content-center h-80">
            <img
              className="w-full object-cover object-center"
              src={banner.image}
              alt={`Banner ${index + 1}`}
            />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="absolute left-0 transform -translate-y-1/2 -translate-x-10 group-hover:translate-x-1 p-2 bg-white text-gray-800 rounded-full transition-transform duration-300 ease-in-out" />
      <CarouselNext className="absolute right-0 transform -translate-y-1/2 translate-x-10 group-hover:-translate-x-1 p-2 bg-white text-gray-800 rounded-full transition-transform duration-300 ease-in-out" />
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {Array.from({ length: count }).map((_, index) => (
          <span
            key={index}
            className={`w-4 h-4 rounded-full transition-opacity duration-300 ease-in-out ${
              current === index + 1
                ? "bg-white opacity-100"
                : "bg-white opacity-50"
            }`}
          ></span>
        ))}
      </div>
    </Carousel>
  );
};
