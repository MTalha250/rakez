export const navLinks = [
  {
    href: "/meeting",
    label: "Schedule a Meeting",
  },

  {
    href: "/about",
    label: "Company Setup",
    children: [
      {
        href: "/about/ras-al-khaimah",
        label: "Ras Al Khaimah",
      },
      {
        href: "/about/rakez",
        label: "RAKEZ",
      },
      {
        href: "/about/zones",
        label: "Zones",
      },
      {
        href: "/about/leadership",
        label: "Leadership",
      },
      {
        href: "/about/facilities",
        label: "Facilities",
      },
      {
        href: "/DIFC",
        label: "Dubai Mainland",
      },
      {
        href: "/DIFC",
        label: "Meydan Freezone",
      },
    ],
  },

  // {
  //   href: "/setupBusiness",
  //   label: "Setup a Business",
  // },
  {
    href: "/promotions",
    label: "Promotions",
  },
  {
    href: "/business-bank-account-solution-in-dubai",
    label: "Banking",
  },
  {
    href: "/marketing",
    label: "Marketing",
  },
  {
    href: "/support",
    label: "Support",
  },
  {
    href: "/contact-us",
    label: "Contact Us",
  },
];

export const aboutUs = [
  {
    id: 1,
    title: "Our Mission",
    description:
      "We aim to connect your story with the world, inspiring engagement through innovative content and strategies. Our focus is on amplifying your digital presence, making every interaction count and ensuring your message shines in the digital realm.",
  },
  {
    id: 2,
    title: "Our Vision",
    description:
      "Our vision is to shape the future of digital narratives by setting new standards in content creation and online engagement. We aspire to be at the forefront of digital innovation, constantly evolving to keep your content fresh, relevant, and impactful.",
  },
  {
    id: 3,
    title: "Our Commitment",
    description:
      "We are dedicated to pushing the boundaries of digital content creation. By constantly innovating and adapting to the latest trends, our commitment lies in delivering unparalleled quality and results for every client.",
  },
];

export const faq = [
  {
    id: 1,
    question:
      "How can I determine the cost of setting up my business with SCC House?",
    answer:
      "Utilize our user-friendly cost calculator tool on our website to get a detailed breakdown of the expenses associated with establishing your business through SCC House.",
  },
  {
    id: 2,
    question:
      "What services does SCC House offer to assist in the business setup process?",
    answer:
      "SCC House provides a range of comprehensive business setup services, including a cost calculator, company name check, and various other resources to streamline the process for entrepreneurs.",
  },
  {
    id: 3,
    question: "How does the company name check service at SCC House work?",
    answer:
      "Our company name check service allows you to verify the availability of your desired business name, ensuring that it aligns with legal requirements and is unique to your enterprise.",
  },
  {
    id: 4,
    question:
      "Can I get assistance in choosing a suitable business name for my company through SCC House?",
    answer:
      "While we don't directly assist in choosing a business name, our company name check service ensures that your preferred name is available and complies with regulations.",
  },
  {
    id: 5,
    question:
      "What types of businesses can benefit from SCC House services in Dubai?",
    answer:
      "SCC House caters to a diverse range of businesses, including startups, SMEs, and large enterprises, offering tailored solutions to meet the specific needs of each business type.",
  },
  {
    id: 6,
    question:
      "Is there a customer support team available to help with any additional queries I may have?",
    answer:
      "Yes, our dedicated customer support team is readily available to assist you with any additional questions or concerns you may have about our services.",
  },
  {
    id: 7,
    question:
      "Can I find information on the legal requirements for business setup in Dubai on the SCC House website?",
    answer:
      "Absolutely, our website provides comprehensive information on the legal requirements for business setup in Dubai, guiding you through the necessary steps and regulations.",
  },
];

export const variants = {
  initial: {
    y: 100,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggeredChildren: 0.3,
    },
  },
};
