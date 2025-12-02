import { Clients } from "@/components/home/Clients";
import { Contact } from "@/components/home/Contact";
import { Hero } from "@/components/home/Hero";
import { Portfolio } from "@/components/home/Portfolio";
import { Services } from "@/components/home/Services";
import { Testimonials } from "@/components/home/Testimonials";

export default function Home() {
  return (
    <main>
      <Hero />
      <Services />
      <Portfolio />
      {/* <Clients /> */}
      <Testimonials />
      <Contact />
    </main>
  );
}
