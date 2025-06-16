import FaqSection from "@/components/faq/faq";
import Hero from "@/components/hero/hero";
import Prize from "@/components/prizes/prize";
import Sponsors from "@/components/sponsorship/sponsors";
import Teams from "@/components/teams/teams";
import Statistics from "@/components/statistics/statistics";

export default function Page() {
    return (
        <main>
            <Hero />
            <Statistics />
            <Prize />
            <Teams />
            <Sponsors />
            <FaqSection />
        </main>
    );
}
