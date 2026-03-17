import React from 'react';
import { VisaPageTemplate } from '../components/VisaPageTemplate';

export default function FeeWaiver() {
  return (
    <VisaPageTemplate
      title="Fee Waiver"
      description="Applying for an exemption from Home Office fees based on financial hardship."
      whatIs="A Fee Waiver allows applicants to apply for certain UK visas without paying the Home Office application fee or Immigration Health Surcharge. This is typically available for human rights-based applications where the applicant cannot afford the fees."
      whoIsItFor={[
        'Individuals in extreme financial hardship',
        'Human rights or private life applicants',
        'Those who cannot meet their essential living needs',
        'Families at risk of destitution'
      ]}
      keyRequirements={[
        'Evidence of income and expenditure',
        'Bank statements for the last 6 months',
        'Proof of lack of savings or assets',
        'Evidence of essential living costs'
      ]}
      fees={[
        { type: 'Fee Waiver Application', amount: 'Free', notes: 'No Home Office fee' },
        { type: 'Legal Support', amount: 'Fixed Fee', notes: 'Contact us for a quote' }
      ]}
      processingTime="Fee waiver applications are usually decided within 4 to 8 weeks."
      howWeHelp="We help you gather the extensive financial evidence required to prove destitution or hardship. Our team ensures your fee waiver application is robustly supported by documentary evidence."
    />
  );
}
