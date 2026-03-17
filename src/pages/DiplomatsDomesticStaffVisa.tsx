import React from 'react';
import { VisaPageTemplate } from '../components/VisaPageTemplate';

export default function DiplomatsDomesticStaffVisa() {
  return (
    <VisaPageTemplate
      title="Diplomats & Domestic Staff Visa"
      description="Specialist visas for domestic workers in private households and staff of diplomatic missions."
      whatIs="This category includes visas for domestic workers (such as cleaners, chauffeurs, or nannies) traveling with their employers to the UK, as well as specific routes for staff working for foreign diplomats or international organizations."
      whoIsItFor={[
        'Domestic workers in private households',
        'Staff of foreign diplomatic missions',
        'Employees of international organizations',
        'Private servants of diplomatic staff'
      ]}
      keyRequirements={[
        'Employment by the same employer for at least 1 year',
        'Intention to work in a private household or mission',
        'Meeting the UK minimum wage requirements',
        'Valid entry clearance before travel'
      ]}
      fees={[
        { type: 'Domestic Worker Visa', amount: '£637', notes: 'Standard fee' },
        { type: 'Diplomatic Staff Visa', amount: 'Varies', notes: 'Often exempt from fees' },
        { type: 'Immigration Health Surcharge', amount: '£1,035', notes: 'Per year' }
      ]}
      processingTime="Most applications are decided within 3 weeks (outside UK) or 8 weeks (inside UK)."
      howWeHelp="We handle the delicate requirements of domestic worker visas, ensuring that employment contracts and employer obligations meet strict UK legal standards."
    />
  );
}
