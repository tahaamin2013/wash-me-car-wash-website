import React from "react";
import { Star } from "lucide-react";
import Link from "next/link";

interface Review {
  reviewer_name: string;
  rating: number;
  message: string;
}

const reviews: Review[] = [
  {
    reviewer_name: "Rich White",
    rating: 5,
    message:
      "These guys are always friendly, and they do a fantastic job!! Best car wash on the west coast, we a...",
  },
  {
    reviewer_name: "Shirley Simms",
    rating: 5,
    message:
      "Oh my goodness these folks do a FANTASTIC job ! They hand wash your car! Making sure it's CLEAN!!! Highly recommend",
  },
  {
    reviewer_name: "Rick Foster",
    rating: 5,
    message:
      "Just moved to Longview and found a hand wash car wash.... they did a fantastic job and very reasonably priced.  I will be going there again , a lot better than machine washes.",
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
RenderStars.displayName = "RenderStars";

const ReviewItem: React.FC<{ review: Review }> = React.memo(({ review }) => (
  <div className="p-2 border border-white rounded-lg py-3 sm:py-5 w-full h-[210px] ml-3">
    <div className="flex w-full">
      <h3 className="text-lg font-bold mt-2">{review.reviewer_name}</h3>
    </div>
    <div className="flex mt-2">
      <RenderStars rating={review.rating} />
    </div>
    <p className="mt-2">{review.message}</p>
  </div>
));
ReviewItem.displayName = "ReviewItem";

const Reviews: React.FC = () => {
  return (
    <div>
      <div className="flex flex-row justify-center items-center w-full text-2xl font-bold">
        What our customers say
      </div>
      <div className="flex flex-col gap-2 justify-center items-center w-full bg-primaryBlue-200 text-white py-7 px-4 mt-4">
        <div className="flex w-full gap-3 items-end justify-end">
          <Link
            href="https://www.google.com/search?hl=en-BR&gl=br&q=Wash+Me+Car+Wash,+1953+9th+Ave,+Longview,+WA+98632,+United+States&ludocid=4750013286135008027&lsig=AB86z5V2TG630eID1b_fI-RNBxns#lrd=0x54946c94ec9bed79:0x41eb6feac6768b1b,3"
            className="bg-primaryGreen text-black px-3 py-2 rounded-lg text-lg mb-3 w-fit"
          >
            Write a review
          </Link>
          <Link
            href="https://www.google.com/maps/place/Wash+Me+Car+Wash/@46.14486,-122.9305678,17z/data=!3m1!4b1!4m17!1m8!4m7!1m0!1m5!1m1!1s0x54946c94ec9bed79:0x41eb6feac6768b1b!2m2!1d-122.9280156!2d46.1448855!3m7!1s0x54946c94ec9bed79:0x41eb6feac6768b1b!8m2!3d46.14486!4d-122.9279929!9m1!1b1!16s%2Fg%2F1tds6drw?entry=ttu"
            className="bg-primaryGreen ml-3 text-black px-3 py-2 rounded-lg text-lg mb-3 w-fit"
          >
            View More Reviews
          </Link>
        </div>
        <div className="flex flex-col md:flex-row gap-3 w-full h justify-center items-center">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="pl-1 md:basis-1/2 text-white lg:basis-1/3 px-3 sm:px-6"
            >
              <ReviewItem review={review} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reviews;
