import { BookOpen, HelpCircle, Package, Users } from "lucide-react";

export const nav = [
  {
    name: "Products",
    icon: Package,
    singlelink: "/products"
  },
  {
    name: "About",
    icon: Users,
    links: [
      { href: "/about-us", label: "Our Story" },
      { href: "/our-farms", label: "Our Farms" },
      { href: "/sustainability", label: "Sustainability" },
    ]
  },
  {
    name: "Blogs",
    icon: BookOpen,
    singlelink: "/blogs"
  },
  {
    name: "Support",
    icon: HelpCircle,
    links: [
      { href: "/support", label: "Help Center" },
      { href: "/contact-us", label: "Contact Us" },
      { href: "/faq", label: "FAQs" },
      { href: "/support/shipping-info", label: "Shipping" },
      { href: "/support/returns", label: "Returns" }
    ]
  }
];