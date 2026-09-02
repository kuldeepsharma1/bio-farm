import Contact from "@/components/general-entity/Contact";
import { Metadata } from "next";


export const metadata: Metadata = {
  metadataBase: new URL(process.env.APP_URL!),
  title: "Contact Us | Arkin Fertilizers",
  description:
    "Get in touch with Arkin Fertilizers for product inquiries, bulk orders, distributor partnerships, or customer support. We're committed to promoting sustainable agriculture through organic solutions.",
};


export default function page() {
  return (
    <div>
      <Contact />
    </div>
  );
}
