import React from 'react';
import { VisaPageTemplate } from '../components/VisaPageTemplate';

export default function FianceVisa() {
  return (
    <VisaPageTemplate
      title="Fiancé Visa"
      description="Enter the UK to marry or enter into a civil partnership with your UK-based partner."
      whatIs="The Fiancé visa allows you to come to the UK for up to 6 months to marry or enter a civil partnership with your British or settled partner. Once married, you can then apply to switch to a Spouse Visa from within the UK."
      whoIsItFor={[
        'Partners of British citizens',
        'Partners of those with ILR or settled status',
        'Couples planning to marry in the UK within 6 months',
        'International couples starting their life together in the UK'
      ]}
      keyRequirements={[
        'Intention to marry within 6 months of arrival',
        'Meeting the financial requirement (£29,000 income)',
        'Adequate accommodation in the UK',
        'Proof of a genuine and subsisting relationship'
      ]}
      fees={[
        { type: 'Application Fee (Outside UK)', amount: '£1,846', notes: 'Standard fee' },
        { type: 'Tuberculosis Test', amount: 'Varies', notes: 'If applicable' },
        { type: 'English Language Test', amount: '£150 - £200', notes: 'Level A1 required' }
      ]}
      processingTime="Standard processing takes around 12-24 weeks. Priority services may be available for faster decisions."
      howWeHelp="We help couples navigate the complex financial and relationship evidence requirements. Our team ensures your application is perfectly prepared to avoid delays in your wedding plans."
    />
  );
}
