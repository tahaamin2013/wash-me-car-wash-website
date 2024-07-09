import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

export interface Plan {
  name: string;
  price: string;
  options: string[];
  nooptions: string[];
  minutes: string;
}
export const faqData = [
  {
    value: "item-1",
    question: "1. How do I pay and renew my membership?",
    answer: "You can conveniently pay and renew through our app.",
  },
  {
    value: "item-2",
    question: "2. How do you verify my identity?",
    answer:
      "When you sign into the app at our car wash location, we can identify your car in our queue.",
  },
  {
    value: "item-3",
    question: "3. Can I use the membership with another car?",
    answer:
      "Unfortunately, our memberships are based on car size, so we only offer one membership per car.",
  },
  {
    value: "item-4",
    question: "4. Can a family member use the membership?",
    answer:
      "Yes, anyone with the same app and membership can wash the car associated with the membership.",
  },
  {
    value: "item-5",
    question: "5. Do I need an appointment?",
    answer:
      "No, simply come down during our open hours and we will serve customers on a first-come, first-served basis.",
  },
  {
    value: "item-6",
    question: "6. Do you accept Apple Pay?",
    answer: "Yes, we accept both Apple Pay and Google Pay.",
  },
  {
    value: "item-7",
    question: "7. Does the membership work for self-service bays?",
    answer: "We are currently working on making that possible. Stay tuned!",
  },
];

// Footer Data

export const contactDetails = {
  address: "1953 9th Ave, Longview, WA",
  email: "eileen@eileentefft.com",
  phone: "360-4304126",
};

export const socialLinks = [
  {
    label: "Facebook",
    url: "https://www.facebook.com/washmecarwashlongview/",
    icon: FaFacebookF,
  },
  {
    label: "Instagram",
    url: "https://www.facebook.com/washmecarwashlongview/",
    icon: FaInstagram,
  },
  {
    label: "Twitter",
    url: "https://www.facebook.com/washmecarwashlongview/",
    icon: BsTwitterX,
  },
];

export const navLinks = [
  { label: "Our Services", id: "Our Services" },
  { label: "Save Here", id: "#MemberShips" },
  { label: "Meet the Team", id: "Meet the Team" },
  { label: "FAQ", id: "FAQ" },
  { label: "Contact", id: "Contact" },
];

export const mapData = {
  location: {
    address: "1953 9th Ave, Longview, WA",
    iframeSrc:
      "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11057.182314530331!2d-122.9279929!3d46.14486!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x54946c94ec9bed79%3A0x41eb6feac6768b1b!2sWash%20Me%20Car%20Wash!5e0!3m2!1sen!2sbr!4v1708203053173!5m2!1sen!2sbr",
  },
  hours: [
    { day: "Sunday", time: "9:00 AM - 4:00 PM" },
    { day: "Monday", time: "9:00 AM - 6:00 PM" },
    { day: "Tuesday", time: "9:00 AM - 6:00 PM" },
    { day: "Wednesday", time: "9:00 AM - 6:00 PM" },
    { day: "Thursday", time: "9:00 AM - 6:00 PM" },
    { day: "Friday", time: "9:00 AM - 6:00 PM" },
    { day: "Saturday", time: "9:00 AM - 6:00 PM" },
  ],
  backgroundImageUrl:
    "url(https://raw.githubusercontent.com/aimahusnain/Washme-CarWash-Images/main/bubbles.png)",
};

export const plans: Plan[] = [
  {
    name: "Small Cars",
    price: "$15",
    options: [
      "Tire and All over Pre-soak",
      "Tri Color Foam",
      "Full Body Hand Wash",
      "High Pressure Dry",
      "Spot Free Rinse",
      "Free Vacuum",
      "Add $2 For Wax",
    ],
    nooptions: [],
    minutes: "15 minutes",
  },
  {
    name: "Mid-Sized Cars",
    price: "$16",
    options: [
      "Tire and All over Pre-soak",
      "Tri Color Foam",
      "Full Body Hand Wash",
      "High Pressure Dry",
      "Spot Free Rinse",
      "Free Vacuum",
      "Add $2 For Wax",
    ],
    nooptions: [],
    minutes: "20 minutes",
  },
  {
    name: "SUVs, Vans, Full-sized Pickups",
    price: "$17",
    options: [
      "Tire and All over Pre-soak",
      "Tri Color Foam",
      "Full Body Hand Wash",
      "High Pressure Dry",
      "Spot Free Rinse",
      "Free Vacuum",
      "Add $2 For Wax",
    ],
    nooptions: [],
    minutes: "25 minutes",
  },
];



export const WhatWeDoData = [
  {
    image:
      "https://raw.githubusercontent.com/aimahusnain/Washme-CarWash-Images/main/23.webp",
    title: "Step 1: Washing the Wheels",
    description:
      "In the first step, attention is given to the wheels of the car. This involves a thorough cleaning process to remove dirt, brake dust, and other debris from the wheels, ensuring a fresh and polished look.",
  },
  {
    image:
      "https://raw.githubusercontent.com/aimahusnain/Washme-CarWash-Images/main/washing-the-weels.webp",
    title: "Step 2: Darrin Carefully Prewashes the Lower Car",
    description:
      "Darrin, the car detailing professional, takes special care to prewash the lower parts of the car. This step is crucial for removing initial layers of grime and preparing the vehicle for a comprehensive cleaning.",
  },
  {
    image:
      "https://raw.githubusercontent.com/aimahusnain/Washme-CarWash-Images/main/full%20(1).webp",
    title: "Step 3: Beginning of the Full Body Wash Even Before the Tunnel",
    description:
      "The full-body wash commences, starting even before the car enters the cleaning tunnel. This stage involves a general surface cleaning to eliminate surface dirt and contaminants from the entire vehicle.",
  },
  {
    image:
      "https://raw.githubusercontent.com/aimahusnain/Washme-CarWash-Images/main/fsd%20(2).webp",
    title: "Step 4: Full Body Hand Wash Before the Tunnel",
    description:
      "Before entering the automated cleaning tunnel, a meticulous hand wash is performed on the entire body of the car. This step ensures a detailed cleaning, addressing specific areas that may require extra attention.",
  },
  {
    image:
      "https://raw.githubusercontent.com/aimahusnain/Washme-CarWash-Images/main/get%20(1)%20(1).webp",
    title: "Step 5: Getting Ready for the Pre-Soak Rinse",
    description:
      "Preparations are made for the pre-soak rinse, a step that involves applying a specialized cleaning solution to loosen and break down stubborn dirt and grime before the main washing process.",
  },
  {
    image:
      "https://raw.githubusercontent.com/aimahusnain/Washme-CarWash-Images/main/in%20(1).webp",
    title:
      "Step 6: Inside the Tunnel with Another Hand Wash Using Lambswool Mittens",
    description:
      "As the car enters the cleaning tunnel, another round of hand washing takes place. This time, lambswool mittens are utilized for a gentle yet effective cleaning, ensuring that every nook and cranny is thoroughly addressed.",
  },
  {
    image:
      "https://raw.githubusercontent.com/aimahusnain/Washme-CarWash-Images/main/li.webp",
    title: "Last Step: Teflon Wax Then Dry",
    description:
      "In the final step, Teflon wax is applied to the car's surface. This not only enhances the vehicle's shine but also provides a protective layer against environmental elements. The car is then carefully dried, completing the detailing process and leaving it looking polished and well-maintained.",
  },
];
