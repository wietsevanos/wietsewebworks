import { Layout } from "@/components/layout/Layout";
import { Hero } from "@/components/home/Hero";
import { Positioning } from "@/components/home/Positioning";
import { FeaturedWork } from "@/components/home/FeaturedWork";
import { ServicesPreview } from "@/components/home/ServicesPreview";
import { AboutPreview } from "@/components/home/AboutPreview";
import { GlassCTA } from "@/components/shared/GlassCTA";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <Positioning />
      <FeaturedWork />
      <ServicesPreview />
      <AboutPreview />
      <GlassCTA />
    </Layout>
  );
};

export default Index;
