import React from 'react';
import { VisaPageTemplate } from '../components/VisaPageTemplate';

export default function EUSettledStatus() {
  return (
    <VisaPageTemplate
      title="EU Settled Status"
      description="Permanent residency for EU, EEA, or Swiss citizens who have lived in the UK for 5 years."
      whatIs="EU Settled Status (Indefinite Leave to Remain under the EU Settlement Scheme) is for EU citizens who started living in the UK by 31 December 2020 and have completed a 5-year period of continuous residence."
      whoIsItFor={[
        'EU, EEA, or Swiss citizens',
        'Family members of EU citizens',
        'Those with 5 years of continuous UK residence',
        'Individuals looking to secure permanent UK rights'
      ]}
      keyRequirements={[
        'Proof of identity (Passport or ID card)',
        '5 years of continuous residence in the UK',
        'No serious criminal record',
        'Residence started by 31 December 2020'
      ]}
      fees={[
        { type: 'Application Fee', amount: 'Free', notes: 'No Home Office fee' },
        { type: 'Legal Support', amount: 'Fixed Fee', notes: 'Contact us for a quote' }
      ]}
      processingTime="Most applications are processed within a few days to a few weeks, though complex cases can take longer."
      howWeHelp="We assist with late applications, complex residence evidence, and family member joins. Our team ensures your rights are protected under the EU Settlement Scheme."
    />
  );
}
