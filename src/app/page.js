import AgricultureComponent from "@/components/AgricultureComponent";
import AgricultureHero from "@/components/AgricultureHero";
import AgricultureVideoComponent from "@/components/AgricultureVideoComponent";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import Introduction from "@/components/Introduction";
import NewsSection from "@/components/NewsSection";
import PopularFood from "@/components/PopularFood";
import TestimonialSection from "@/components/TestimonialSection";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection/>
      <Introduction/>
      <PopularFood />
      <AgricultureVideoComponent/>
      <AgricultureComponent/>
      <NewsSection />
      <ContactSection />
      <TestimonialSection />
      <Footer/>
    </>
  );
}
