import ContactForm from "@/components/contact";
import Cover from "@/components/cover";
import ConvincingSectionExtra from "@/components/extra";
import Info from "@/components/info";
import ProcessSection from "@/components/process";
import ProjectCarousel from "@/components/projects";
import ServicesSection from "@/components/services";

export default function Home() {
  return (
    <main className="">
      <Cover />
      <div className="bg-gradient-to-br from-indigo-900 to-purple-900">
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
