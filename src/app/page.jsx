import ContactForm from "@/components/contact";
import Cover from "@/components/cover";
import ConvincingSectionExtra from "@/components/extra";
import Info from "@/components/info";
import ConvincingSection from "@/components/more";
import ProcessSection from "@/components/process";
import ProjectCarousel from "@/components/projects";
import ServicesSection from "@/components/services";

export default function Home() {
  return (
    <main>
      <Cover />
      <div className="bg-gradient-to-b from-indigo-50 to-white">
        <Info />
        <ServicesSection />
        <ProcessSection />
        <ConvincingSectionExtra />
        <ProjectCarousel />
        <ContactForm />
      </div>
    </main>
  );
}
