import React from 'react';
import { VisaPageTemplate } from '../components/VisaPageTemplate';

export default function EUPreSettledStatus() {
  return (
    <VisaPageTemplate
      title="EU Pre-Settled Status"
      description="Temporary residency for EU citizens who have lived in the UK for less than 5 years."
      whatIs="EU Pre-Settled Status is a temporary immigration status for EU citizens who started living in the UK by 31 December 2020 but have not yet reached the 5-year residence mark required for Settled Status."
      whoIsItFor={[
        'EU, EEA, or Swiss citizens',
        'Family members of EU citizens',
        'Those with less than 5 years of UK residence',
        'Individuals transitioning to Settled Status'
      ]}
      keyRequirements={[
        'Proof of identity',
        'Evidence of UK residence by 31 December 2020',
        'No serious criminal record',
        'Intention to complete 5 years for Settled Status'
      ]}
      fees={[
        { type: 'Application Fee', amount: 'Free', notes: 'No Home Office fee' },
        { type: 'Legal Support', amount: 'Fixed Fee', notes: 'Contact us for a quote' }
      ]}
      processingTime="Decisions are typically received within 5-15 working days, though some cases may take longer."
      howWeHelp="We help you gather the necessary evidence to prove your residence and assist with switching from Pre-Settled to Settled Status when you reach the 5-year milestone."
    />
  );
}
