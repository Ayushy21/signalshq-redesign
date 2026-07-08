import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './sections/Hero';
import Problem from './sections/Problem';
import Transformation from './sections/Transformation';
import ProductOverview from './sections/ProductOverview';
import AIWorkflow from './sections/AIWorkflow';
import FeatureGrid from './sections/FeatureGrid';
import WhySignalsHQ from './sections/WhySignalsHQ';
import Security from './sections/Security';
import Metrics from './sections/Metrics';
import Testimonials from './sections/Testimonials';
import FAQ from './sections/FAQ';
import FinalCTA from './sections/FinalCTA';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-lg focus:bg-teal-600 focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-white focus:shadow-lg"
      >
        Skip to main content
      </a>

      <Navbar />

      <main id="main-content">
        <Hero />
        <div className="section-divider" />
        <Problem />
        <Transformation />
        <div className="section-divider" />
        <ProductOverview />
        <AIWorkflow />
        <div className="section-divider" />
        <FeatureGrid />
        <WhySignalsHQ />
        <Security />
        <Metrics />
        <div className="section-divider" />
        <Testimonials />
        <FAQ />
        <FinalCTA />
      </main>

      <Footer />
    </div>
  );
}
