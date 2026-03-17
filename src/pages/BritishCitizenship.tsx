import React from 'react';
import { VisaPageTemplate } from '../components/VisaPageTemplate';

export default function BritishCitizenship() {
  return (
    <VisaPageTemplate
      title="British Citizenship & Child Registration"
      description="The final step in your UK journey – becoming a British citizen or registering your child."
      whatIs="British Citizenship (Naturalisation) is the legal process of becoming a UK citizen. Child Registration is the process for children born in the UK or abroad to acquire British citizenship based on their parents' status or residence."
      whoIsItFor={[
        'Individuals with ILR or Settled Status',
        'Spouses of British citizens',
        'Children born in the UK to non-British parents',
        'Children born abroad to British parents'
      ]}
      keyRequirements={[
        '12 months with ILR or Settled Status',
        'Meeting the residency requirement (limited absences)',
        'Passing the Life in the UK test',
        'Good character requirement'
      ]}
      fees={[
        { type: 'Naturalisation (Adult)', amount: '£1,630', notes: 'Includes ceremony fee' },
        { type: 'Child Registration', amount: '£1,214', notes: 'Per child' },
        { type: 'Citizenship Ceremony', amount: '£80', notes: 'Standard fee' }
      ]}
      processingTime="Citizenship applications typically take between 3 to 6 months for a decision."
      howWeHelp="We guide you through the complex residency calculations and good character requirements. Our team ensures your citizenship or registration application is flawless for this life-changing milestone."
    />
  );
}
