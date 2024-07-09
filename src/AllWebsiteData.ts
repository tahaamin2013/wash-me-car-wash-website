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