import React from 'react';
import { VisaPageTemplate } from '../components/VisaPageTemplate';

export default function UKAncestryVisa() {
  return (
    <VisaPageTemplate
      title="UK Ancestry Visa"
      description="Live and work in the UK based on your British grandparental heritage."
      whatIs="The UK Ancestry visa is for Commonwealth citizens who have at least one grandparent born in the UK, the Channel Islands, or the Isle of Man. It allows you to live and work in the UK for 5 years, leading to settlement."
      whoIsItFor={[
        'Commonwealth citizens',
        'Individuals with a UK-born grandparent',
        'Those aged 17 or over',
        'Individuals intending to work in the UK'
      ]}
      keyRequirements={[
        'Proof of Commonwealth citizenship',
        'Birth certificate of a UK-born grandparent',
        'Evidence of your relationship to the grandparent',
        'Ability to support yourself without public funds'
      ]}
      fees={[
        { type: 'Application Fee', amount: '£637', notes: 'Standard fee' },
        { type: 'Immigration Health Surcharge', amount: '£1,035', notes: 'Per year' },
        { type: 'Priority Service', amount: '£500', notes: 'Optional' }
      ]}
      processingTime="Decisions are typically received within 3 weeks when applying from outside the UK."
      howWeHelp="We assist in tracing and verifying ancestral links and preparing the necessary vital records. Our team ensures your ancestry route is clearly documented for a smooth application process."
    />
  );
}
