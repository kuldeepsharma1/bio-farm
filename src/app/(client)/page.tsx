
import Home from "@/components/general-entity/HomePage";
import { Metadata } from "next";

// Define or import the BlogPost and Category types correctly
interface SEO {
  metaTitle: string;
  metaDescription: string;
  keywords: string[];
}
export const metadata: Metadata = {
  metadataBase: new URL(process.env.APP_URL!),
  title: "Arkin Organics | Natural Fertilizers for Sustainable Farming",
  description:
    "Arkin Organics delivers high-quality, eco-friendly fertilizers that enrich soil and support sustainable agriculture. Join us in cultivating a greener future with nature-powered solutions.",
};

export default async function Page() {
  return <Home/>;
}
