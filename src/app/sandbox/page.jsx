import FaqSection from "@/components/faq/faq";
import Hero from "@/components/hero/hero";
import Prize from "@/components/prizes/prize";
import Sponsors from "@/components/sponsorship/sponsors";
import Teams from "@/components/teams/teams";

export default function Page() {
  return (
    <main>
      <Hero />
      <Prize />
      <Teams />
      <Sponsors />
      <FaqSection />
    </main>
  );
}
