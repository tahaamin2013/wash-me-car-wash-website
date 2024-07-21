import React, { useState, useRef, useCallback } from "react";
import { Star } from "lucide-react";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { CldImage } from "next-cloudinary";
import Autoplay from "embla-carousel-autoplay";

interface Review {
  reviewer_name: string;
  rating: number;
  reviewer_picture_url: string;
  message: string;
}

const reviews: Review[] = [
  {
    reviewer_name: "Rich White",
    rating: 5,
    reviewer_picture_url:
      "https://res.cloudinary.com/dni4hpqo3/image/upload/v1721242842/Wash%20Me%20Car%20Wash%20Images/Reviews/ACg8ocLS4qNmrPf2IXpZF99eJaZjxaqVomQ94IOuFm98Lm-x_s40-c-rp-mo-br100_jrv2hp.webp",
    message:
      "These guys are always friendly, and they do a fantastic job!! Best car wash on the west coast, we a...",
  },
  {
    reviewer_name: "Shirley Simms",
    rating: 5,
    reviewer_picture_url:
      "https://res.cloudinary.com/dni4hpqo3/image/upload/v1721242842/Wash%20Me%20Car%20Wash%20Images/Reviews/ACg8ocLS4qNmrPf2IXpZF99eJaZjxaqVomQ94IOuFm98Lm-x_s40-c-rp-mo-br100_jrv2hp.webp",
    message:
      "Oh my goodness these folks do a FANTASTIC job ! They hand wash your car! Making sure it's CLEAN!!! Highly recommend",
  },
  {
    reviewer_name: "Rick Foster",
    rating: 5,
    reviewer_picture_url:
      "https://res.cloudinary.com/dni4hpqo3/image/upload/v1721242842/Wash%20Me%20Car%20Wash%20Images/Reviews/ACg8ocLS4qNmrPf2IXpZF99eJaZjxaqVomQ94IOuFm98Lm-x_s40-c-rp-mo-br100_jrv2hp.webp",
    message:
      "Just moved to Longview and found a hand wash car wash....they did a fantastic job and very reasonably priced.  I will be going there again , a lot better than machine washes.",
  },
];

const RenderStars: React.FC<{ rating: number }> = React.memo(({ rating }) => {
  return Array(5)
    .fill(0)
    .map((_, i) => (
      <Star
        key={i}
        className={
          i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
        }
        size={20}
      />
    ));
});
RenderStars.displayName = 'RenderStars';

const ReviewItem: React.FC<{ review: Review }> = React.memo(({ review }) => (
  <div className="p-2 border border-white rounded-lg py-3 sm:py-5 w-full h-full ml-3">
    <div className="flex gap-3 items-center">
      <CldImage
        loading="lazy"
        width={45}
        height={45}
        src={review.reviewer_picture_url}
        alt={`Image for ${review.reviewer_name}`}
      />
      <h3 className="text-lg font-bold">{review.reviewer_name}</h3>
    </div>
    <div className="flex mt-2">
      <RenderStars rating={review.rating} />
    </div>
    <p className="mt-2">{review.message}</p>
  </div>
));
ReviewItem.displayName = 'ReviewItem';

const Reviews: React.FC = () => {
  const [isClient, setIsClient] = useState(false);
  const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));

  const handleMouseEnter = useCallback(() => plugin.current.stop(), []);
  const handleMouseLeave = useCallback(() => plugin.current.reset(), []);

  React.useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <div>
      <div className="flex flex-row justify-center items-center w-full text-2xl font-bold">
        What our customers say
      </div>
      <div className="flex flex-col gap-2 justify-center items-center w-full bg-primaryBlue-200 text-white py-7 px-16 mt-4">
        <Link
          href="https://www.google.com/search?hl=en-BR&gl=br&q=Wash+Me+Car+Wash,+1953+9th+Ave,+Longview,+WA+98632,+United+States&ludocid=4750013286135008027&lsig=AB86z5V2TG630eID1b_fI-RNBxns#lrd=0x54946c94ec9bed79:0x41eb6feac6768b1b,3"
          className="bg-primaryGreen text-black px-3 py-2 rounded-lg text-lg mb-3 w-fit ml-auto"
        >
          Write a review
        </Link>
        <div className="flex w-full justify-center items-center">
          <Carousel
            plugins={[plugin.current]}
            className="w-full text-black"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <CarouselContent>
              {reviews.map((review, index) => (
                <CarouselItem
                  key={index}
                  className="pl-1 md:basis-1/1 text-white lg:basis-1/3 px-3 sm:px-6"
                >
                  <ReviewItem review={review} />
                </CarouselItem>
              ))}
              <CarouselItem className="pl-1 md:basis-1/1 text-white lg:basis-1/3 px-3 flex justify-center items-center">
                <Link
                  href="https://www.google.com/maps/place/Wash+Me+Car+Wash/@46.14486,-122.9305678,17z/data=!3m1!4b1!4m17!1m8!4m7!1m0!1m5!1m1!1s0x54946c94ec9bed79:0x41eb6feac6768b1b!2m2!1d-122.9280156!2d46.1448855!3m7!1s0x54946c94ec9bed79:0x41eb6feac6768b1b!8m2!3d46.14486!4d-122.9279929!9m1!1b1!16s%2Fg%2F1tds6drw?entry=ttu"
                  target="_blank"
                  className="bg-primaryGreen p-4 rounded-xl mt-6"
                >
                  View More Reviews
                </Link>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Reviews;