import ContactSection from "@/components/ContactSection";
import Header from "@/components/Header";
import NewsSection from "@/components/NewsSection";
import PopularFood from "@/components/PopularFood";
import TestimonialSection from "@/components/TestimonialSection";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Header />
      <PopularFood />
      <NewsSection />
      <ContactSection />
      <TestimonialSection />
    </>
  );
}
