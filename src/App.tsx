/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import InnovatorFounder from './pages/InnovatorFounder';
import SkilledWorker from './pages/SkilledWorker';
import SpouseVisa from './pages/SpouseVisa';
import RefusalsAppeals from './pages/RefusalsAppeals';
import SelfSponsorship from './pages/SelfSponsorship';
import SponsorLicence from './pages/SponsorLicence';
import VisitorVisa from './pages/VisitorVisa';
import GlobalVisas from './pages/GlobalVisas';
import GlobalTalentVisa from './pages/GlobalTalentVisa';
import HowItWorks from './pages/HowItWorks';
import Courses from './pages/Courses';
import DocumentChecking from './pages/DocumentChecking';
import Booking from './pages/Booking';
import Blog from './pages/Blog';
import ScrollToTop from './components/ScrollToTop';
import { WhatsAppButton } from './components/WhatsAppButton';

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/innovator-founder" element={<InnovatorFounder />} />
        <Route path="/skilled-worker" element={<SkilledWorker />} />
        <Route path="/spouse-visa" element={<SpouseVisa />} />
        <Route path="/refusals-appeals" element={<RefusalsAppeals />} />
        <Route path="/self-sponsorship" element={<SelfSponsorship />} />
        <Route path="/sponsor-licence" element={<SponsorLicence />} />
        <Route path="/visa-services/visitor-visa" element={<VisitorVisa />} />
        <Route path="/global-visas" element={<GlobalVisas />} />
        <Route path="/global-talent-visa" element={<GlobalTalentVisa />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/document-checking" element={<DocumentChecking />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
      <WhatsAppButton />
    </Router>
  );
}
