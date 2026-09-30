import { Layout } from "@/components/layout/Layout";
import { Hero } from "@/components/home/Hero";
import { Positioning } from "@/components/home/Positioning";
import { WebsiteCheck } from "@/components/home/WebsiteCheck";
import { FeaturedWork } from "@/components/home/FeaturedWork";
import { ServicesPreview } from "@/components/home/ServicesPreview";
import { AboutPreview } from "@/components/home/AboutPreview";
import { WorkflowFeatures } from "@/components/home/WorkflowFeatures";
import { GlassCTA } from "@/components/shared/GlassCTA";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <FeaturedWork />
      <Positioning />
      <WebsiteCheck />
      <AboutPreview />
      <ServicesPreview />
      <WorkflowFeatures />
      <GlassCTA />
    </Layout>
  );
};

export default Index;
