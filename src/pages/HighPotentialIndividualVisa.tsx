import React from 'react';
import { VisaPageTemplate } from '../components/VisaPageTemplate';

export default function HighPotentialIndividualVisa() {
  return (
    <VisaPageTemplate
      title="High Potential Individual (HPI) Visa"
      description="A flexible work visa for recent graduates from top global universities to live and work in the UK."
      whatIs="The High Potential Individual (HPI) visa is a short-term work visa that does not require a job offer or sponsorship. It is designed to attract the brightest graduates from prestigious international universities to contribute to the UK economy."
      whoIsItFor={[
        'Graduates from a university on the Global Universities List',
        'Individuals who graduated within the last 5 years',
        'Talented professionals seeking UK work experience',
        'Entrepreneurs wanting to explore UK business opportunities'
      ]}
      keyRequirements={[
        'Degree from a qualifying university (Global Universities List)',
        'Graduation date within the last 5 years',
        'English language proficiency (Level B1)',
        'Maintenance funds (at least £1,270)'
      ]}
      fees={[
        { type: 'Application Fee', amount: '£822', notes: 'Standard fee' },
        { type: 'Immigration Health Surcharge', amount: '£1,035', notes: 'Per year of visa' },
        { type: 'Ecctis Verification', amount: '£210 - £250', notes: 'For degree verification' }
      ]}
      processingTime="Most applications are processed within 3 weeks if applying from outside the UK, or 8 weeks if applying from within the UK."
      howWeHelp="We help you verify your university's eligibility and prepare a robust application. Our team ensures all documentation, including degree verification and financial evidence, meets the strict Home Office requirements."
    />
  );
}
