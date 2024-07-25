import { CldImage } from "next-cloudinary";
import dynamic from "next/dynamic";
import { useEffect, useMemo, useState } from "react";
import CustomTabs from "./CustomTabs";

const DynamicCarousel = dynamic(
  () => import("@/components/ui/carousel").then((mod) => mod.Carousel),
  { ssr: false }
);
const DynamicCarouselContent = dynamic(
  () => import("@/components/ui/carousel").then((mod) => mod.CarouselContent),
  { ssr: false }
);
const DynamicCarouselItem = dynamic(
  () => import("@/components/ui/carousel").then((mod) => mod.CarouselItem),
  { ssr: false }
);
const DynamicCarouselPrevious = dynamic(
  () => import("@/components/ui/carousel").then((mod) => mod.CarouselPrevious),
  { ssr: false }
);
const DynamicCarouselNext = dynamic(
  () => import("@/components/ui/carousel").then((mod) => mod.CarouselNext),
  { ssr: false }
);

const FacilitiesImages = [
  "https://res.cloudinary.com/dni4hpqo3/image/upload/c_scale,f_auto,q_auto,w_44/v1720893306/Wash%20Me%20Car%20Wash%20Images/Facilities/image_bvusa5.jpg",
  "https://res.cloudinary.com/dni4hpqo3/image/upload/c_scale,f_auto,q_auto,w_62/v1720893338/Wash%20Me%20Car%20Wash%20Images/Facilities/image_firree.jpg",
  "https://res.cloudinary.com/dni4hpqo3/image/upload/c_scale,f_auto,q_auto,w_49/v1720893366/Wash%20Me%20Car%20Wash%20Images/Facilities/image_vt2x39.jpg",
  "https://res.cloudinary.com/dni4hpqo3/image/upload/c_scale,f_auto,q_auto,w_40/v1720893374/Wash%20Me%20Car%20Wash%20Images/Facilities/image_pjzrkd.jpg",
  "https://res.cloudinary.com/dni4hpqo3/image/upload/c_scale,f_auto,q_auto,w_34/v1720893391/Wash%20Me%20Car%20Wash%20Images/Facilities/image_hekejf.jpg",
  "https://res.cloudinary.com/dni4hpqo3/image/upload/c_scale,f_auto,q_auto,w_15/v1720893395/Wash%20Me%20Car%20Wash%20Images/Facilities/image_klkfy0.jpg",
];

const Facilities = () => {
  const [isClient, setIsClient] = useState(false);
  const [autoplayPlugin, setAutoplayPlugin] = useState(null);

  useEffect(() => {
    setIsClient(true);
    import("embla-carousel-autoplay").then((Autoplay: any) => {
      setAutoplayPlugin(
        Autoplay.default({ delay: 3000, stopOnInteraction: false })
      );
    });
  }, []);

  const tabsData = [
    {
      label: "50-Foot Hand Wash Tunnel",
      content:
        "Indulge your vehicle in the ultimate pampering experience at Wash Me Car Wash. Our 50-foot hand wash tunnel combines cutting-edge technology with a gentle touch, ensuring a pristine finish every time. No brushes here - just a safe and effective brush-free system. Simply put your vehicle in neutral, relax, and let Wash Me Car Wash elevate your car care routine.",
    },
    {
      label: "5 Self-Service Bays (Open 24 Hrs)",
      content:
        "Take control of your car care journey with Wash Me Car Wash's five self-service bays, available 24/7 for your convenience. Whether you're driving a car, motorcycle, or towing a trailer, our self-service bays cater to all your needs. Enjoy a bright and clean environment, equipped with user-friendly tools that make maintaining your vehicle a breeze. At Wash Me Car Wash, it's more than just self-service - it's a personalized experience designed for you.",
    },
  ];

  const memoizedCarouselContent = useMemo(
    () => (
      <DynamicCarouselContent>
        {FacilitiesImages.map((url, index) => (
          <DynamicCarouselItem
            key={index}
            className="sm:basis-1/2 md:basis-1/3 p-2"
          >
            <div className="rounded-xl overflow-hidden shadow-lg transform transition duration-300 object-contain h-full">
              <CldImage
                src={url}
                alt={`Facilities Image ${index + 1}`}
                width={400}
                height={300}
                loading={index === 0 ? "eager" : "lazy"}
                className="w-full h-full object-center object-cover"
              />
            </div>
          </DynamicCarouselItem>
        ))}
      </DynamicCarouselContent>
    ),
    []
  );

  const LogoImage = ({ src, alt, className }: any) => (
    <CldImage
      src={src}
      alt={alt}
      width={100}
      height={75}
      className={className}
      priority
    />
  );

  return (
    <div className="relative mb-4 bg-primaryBlue-200 text-white px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-15">
      <section className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
        {/* Logo section */}
        <div className="md:w-1/4 flex flex-row md:flex-col justify-center md:justify-start gap-3 mb-6 md:mb-0">
          <LogoImage
            src="https://res.cloudinary.com/dni4hpqo3/image/upload/c_scale,f_auto,q_auto,w_58/v1720806179/Wash%20Me%20Car%20Wash%20Images/logo11_sl8tqx.png"
            alt="2023 Award of Washme Car wash"
            className="w-32 sm:w-40 md:w-32"
          />
          <LogoImage
            src="https://res.cloudinary.com/dni4hpqo3/image/upload/c_scale,f_auto,q_auto,w_80/v1720807247/Wash%20Me%20Car%20Wash%20Images/logo22_jlslln.png"
            alt="Best SouthWest Washington 2023"
            className="w-32 sm:w-40 md:w-32"
          />
        </div>

        {/* Main content */}
        <div className="md:w-2/3 text-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-sans font-bold mb-6 md:mb-8">
            State-of-the-Art Car Wash Facilities
          </h1>
          <CustomTabs tabs={tabsData} />
        </div>

        {/* Additional logos */}
        <div className="md:w-1/4 flex flex-row md:flex-col justify-end items-end gap-3 mt-6 md:mt-0">
          <LogoImage
            src="https://res.cloudinary.com/dni4hpqo3/image/upload/c_scale,f_auto,q_auto,w_217/v1720807321/Wash%20Me%20Car%20Wash%20Images/100_yqhh3l.png"
            alt="100% Garented"
            className="w-32 sm:w-40 md:w-32"
          />
          <LogoImage
            src="https://res.cloudinary.com/dni4hpqo3/image/upload/c_scale,f_auto,q_auto,w_64/v1720807447/Wash%20Me%20Car%20Wash%20Images/google_lw9so1.png"
            alt="Review Us On Google Image"
            className="w-32 sm:w-40 md:w-32"
          />
        </div>
      </section>
      {isClient && autoplayPlugin && (
        <DynamicCarousel
          plugins={[autoplayPlugin]}
          className="text-black mt-12 sm:mt-16 lg:mt-20 max-w-7xl mx-auto"
        >
          {memoizedCarouselContent}
          <DynamicCarouselPrevious className="absolute -left-8 top-1/2" />
          <DynamicCarouselNext className="absolute -right-8 top-1/2" />
        </DynamicCarousel>
      )}
    </div>
  );
};

export default Facilities;
