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
import ILR3Years from './pages/ILR3Years';
import HowItWorks from './pages/HowItWorks';
import Courses from './pages/Courses';
import DocumentChecking from './pages/DocumentChecking';
import Booking from './pages/Booking';
import Blog from './pages/Blog';
import Installments from './pages/Installments';
import CorporateImmigration from './pages/CorporateImmigration';
import HighPotentialIndividualVisa from './pages/HighPotentialIndividualVisa';
import FastTrackILR from './pages/FastTrackILR';
import FianceVisa from './pages/FianceVisa';
import EUSettledStatus from './pages/EUSettledStatus';
import EUPreSettledStatus from './pages/EUPreSettledStatus';
import BNOStatusVisa from './pages/BNOStatusVisa';
import DiplomatsDomesticStaffVisa from './pages/DiplomatsDomesticStaffVisa';
import BritishCitizenship from './pages/BritishCitizenship';
import AdministrativeReview from './pages/AdministrativeReview';
import FeeWaiver from './pages/FeeWaiver';
import UKAncestryVisa from './pages/UKAncestryVisa';
import BusinessImmigration from './pages/BusinessImmigration';
import FamilyVisa from './pages/FamilyVisa';
import PrivacyPolicy from './pages/PrivacyPolicy';
import LegalDisclaimer from './pages/LegalDisclaimer';
import ThankYou from './pages/ThankYou';
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
        <Route path="/ilr-3-years" element={<ILR3Years />} />
        <Route path="/how-it-works" element={<HowItWorks />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/document-checking" element={<DocumentChecking />} />
        <Route path="/booking" element={<Booking />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/installments" element={<Installments />} />
        <Route path="/corporate-immigration" element={<CorporateImmigration />} />
        <Route path="/high-potential-individual-visa" element={<HighPotentialIndividualVisa />} />
        <Route path="/fast-track-ilr" element={<FastTrackILR />} />
        <Route path="/fiance-visa" element={<FianceVisa />} />
        <Route path="/eu-settled-status" element={<EUSettledStatus />} />
        <Route path="/eu-pre-settled-status" element={<EUPreSettledStatus />} />
        <Route path="/bno-status-visa" element={<BNOStatusVisa />} />
        <Route path="/diplomats-domestic-staff-visa" element={<DiplomatsDomesticStaffVisa />} />
        <Route path="/british-citizenship" element={<BritishCitizenship />} />
        <Route path="/administrative-review" element={<AdministrativeReview />} />
        <Route path="/fee-waiver" element={<FeeWaiver />} />
        <Route path="/uk-ancestry-visa" element={<UKAncestryVisa />} />
        <Route path="/business-immigration" element={<BusinessImmigration />} />
        <Route path="/family-visa" element={<FamilyVisa />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/legal-disclaimer" element={<LegalDisclaimer />} />
        <Route path="/thank-you" element={<ThankYou />} />
      </Routes>
      <WhatsAppButton />
    </Router>
  );
}
