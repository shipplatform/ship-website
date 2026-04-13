import PilotBanner from "@/components/pilot-banner";
import Nav from "@/components/nav";
import Hero from "@/components/hero";
import Problem from "@/components/problem";
import RebuildCurse from "@/components/rebuild-curse";
import Solution from "@/components/solution";
import VirtualTeam from "@/components/virtual-team";
import Markets from "@/components/markets";
import HowItWorks from "@/components/how-it-works";
import Blueprints from "@/components/blueprints";
import ProductionGrade from "@/components/production-grade";
import Numbers from "@/components/numbers";
import DriftCalculator from "@/components/drift-calculator";
import Founder from "@/components/founder";
import BookCall from "@/components/book-call";
import WaitlistForm from "@/components/waitlist-form";
import Footer from "@/components/footer";
import MobileCtaBar from "@/components/mobile-cta-bar";

export default function Home() {
  return (
    <>
      <PilotBanner />
      <Nav />
      <main>
        <Hero />
        <Problem />
        <RebuildCurse />
        <Solution />
        <VirtualTeam />
        <Markets />
        <HowItWorks />
        <Blueprints />
        <ProductionGrade />
        <Numbers />
        <DriftCalculator />
        <Founder />
        <BookCall />
        <WaitlistForm />
      </main>
      <Footer />
      <MobileCtaBar />
    </>
  );
}
