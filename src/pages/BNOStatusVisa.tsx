import React from 'react';
import { VisaPageTemplate } from '../components/VisaPageTemplate';

export default function BNOStatusVisa() {
  return (
    <VisaPageTemplate
      title="BN(O) Status Visa"
      description="A dedicated immigration route for British National (Overseas) citizens from Hong Kong."
      whatIs="The BN(O) visa allows British National (Overseas) citizens and their eligible family members to live, work, and study in the UK. It provides a clear pathway to permanent settlement (ILR) and British citizenship."
      whoIsItFor={[
        'British National (Overseas) citizens',
        'Family members of BN(O) citizens',
        'Hong Kong residents seeking a move to the UK',
        'Individuals looking for a 2.5 or 5-year visa'
      ]}
      keyRequirements={[
        'BN(O) status (you do not need a BN(O) passport)',
        'Ordinarily resident in Hong Kong or the UK',
        'Financial ability to support yourself for 6 months',
        'Tuberculosis (TB) test certificate'
      ]}
      fees={[
        { type: 'Visa Fee (2.5 Years)', amount: '£180', notes: 'Per person' },
        { type: 'Visa Fee (5 Years)', amount: '£250', notes: 'Per person' },
        { type: 'Immigration Health Surcharge', amount: '£1,035', notes: 'Per year' }
      ]}
      processingTime="Standard processing is 12 weeks. Priority service (5 days) may be available for an additional fee."
      howWeHelp="We provide comprehensive support for BN(O) families, ensuring all dependency links and financial requirements are clearly evidenced for a successful application."
    />
  );
}
