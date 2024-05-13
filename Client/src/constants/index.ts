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
        href: "/DIFC",
        label: "Dubai Mainland",
      },
      {
        href: "/DIFC",
        label: "Meydan Freezone",
      },
      {
        href: "/about/rakez",
        label: "RAKEZ",
      },
    ],
  },

  // {
  //   href: "/setupBusiness",
  //   label: "Setup a Business",
  // },
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
  {
    href: "/promotions",
    label: "Promotions",
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
      "What services does Serv Corps Company House offer for business setup in Dubai?",
    answer:
      "Serv Corps Company House helps with setting up businesses in Dubai. We offer services like helping to register your company, getting the necessary licenses, and giving legal advice. We also help with finding the right location for your business and provide support for visa applications. Our services make it easier for new businesses to start smoothly and comply with all Dubai's laws.",
  },
  {
    id: 2,
    question: "Do I need a local sponsor to start a business in Dubai?",
    answer:
      "Yes, if you want to start a business in Dubai and plan to operate on the mainland, you will need a local sponsor. A local sponsor must be a UAE national and will own 51% of your business. However, if you choose to set up your business in a free zone, you do not need a local sponsor. In free zones, you can own 100% of your company. Each option has its benefits.",
  },
  {
    id: 3,
    question: "What is the best location for a business setup in Dubai?",
    answer:
      "The best location for setting up a business in Dubai often depends on the type of business you're planning to start. Key locations include: Dubai Internet City: Ideal for tech businesses. Dubai Media City: Perfect for media and marketing companies. Dubai Free Zones: Such as Jebel Ali Free Zone, great for international trade with tax benefits. Downtown Dubai: Best for luxury retail and hospitality businesses. Choosing the right location depends on your business needs, such as proximity to suppliers, target market, and the type of business activity.",
  },
  {
    id: 4,
    question:
      "What are the legal requirements for setting up a business in Dubai?",
    answer:
      "Setting up a business in Dubai involves several legal requirements. First, you need to decide on your business type and choose a suitable legal form, such as a Limited Liability Company (LLC) or a Sole Proprietorship. Next, you must obtain the necessary licenses from the Department of Economic Development (DED). Additionally, you will need to register your business name and ensure it is unique and approved. If your business is in a Free Zone, specific rules apply, including 100% ownership.",
  },
  {
    id: 5,
    question:
      "Does establishing a business in Dubai require having a physical office?",
    answer:
      "No, a physical office is not always necessary to launch a business in Dubai. Many free zones in Dubai provide cost-effective options, such as virtual offices or flexi-desks, depending on the nature of your business and its location. Without the requirement for a specific physical office location, these choices offer a business address and access to office facilities. However, depending on their industry or legal needs, some companies can need a physical office. ",
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
