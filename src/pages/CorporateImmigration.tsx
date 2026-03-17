import React from 'react';
import { VisaPageTemplate } from '../components/VisaPageTemplate';

export default function CorporateImmigration() {
  return (
    <VisaPageTemplate
      title="Corporate Immigration"
      description="Strategic immigration support for UK businesses looking to recruit and retain international talent."
      whatIs="Corporate Immigration covers the legal processes and requirements for UK businesses to hire non-UK nationals. This includes obtaining and maintaining a Sponsor Licence, managing compliance, and ensuring that all international employees have the correct right-to-work documentation."
      whoIsItFor={[
        'UK businesses looking to hire international staff',
        'Companies needing a Sponsor Licence',
        'International firms expanding into the UK',
        'HR departments requiring compliance audits'
      ]}
      keyRequirements={[
        'A valid UK Sponsor Licence',
        'Compliance with Home Office record-keeping duties',
        'Genuine vacancy requirements for roles',
        'Adherence to salary and skill level thresholds'
      ]}
      fees={[
        { type: 'Sponsor Licence (Small/Charity)', amount: '£536', notes: 'Valid for 4 years' },
        { type: 'Sponsor Licence (Medium/Large)', amount: '£1,476', notes: 'Valid for 4 years' },
        { type: 'Certificate of Sponsorship (CoS)', amount: '£239', notes: 'Per worker' },
        { type: 'Immigration Skills Charge', amount: '£364 - £1,000', notes: 'Per year of visa' }
      ]}
      processingTime={[
        'Sponsor Licence: 8 weeks (standard)',
        'Sponsor Licence: 10 working days (priority)',
        'Visa applications: 3-8 weeks depending on location'
      ]}
      howWeHelp="Shams Britvisa Lawyers provides end-to-end support for corporate clients. From initial Sponsor Licence applications to ongoing compliance management and individual visa processing, we ensure your business stays ahead of immigration changes."
    />
  );
}
