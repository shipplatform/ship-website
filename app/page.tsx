import PilotBanner from "@/components/pilot-banner";
import Nav from "@/components/nav";
import Hero from "@/components/hero";
import Capabilities from "@/components/capabilities";
import Problem from "@/components/problem";
import Solution from "@/components/solution";
import HowItWorks from "@/components/how-it-works";
import Markets from "@/components/markets";
import Numbers from "@/components/numbers";
import DriftCalculator from "@/components/drift-calculator";
import Pricing from "@/components/pricing";
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
        <Capabilities />
        <Problem />
        <Solution />
        <HowItWorks />
        <Markets />
        <Numbers />
        <DriftCalculator />
        <Pricing />
        <Founder />
        <BookCall />
        <WaitlistForm />
      </main>
      <Footer />
      <MobileCtaBar />
    </>
  );
}
