import {
  FaFacebookF,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhoneAlt,
} from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { BsTwitterX } from "react-icons/bs";

// FAQ Data

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
