import React from 'react';
import { VisaPageTemplate } from '../components/VisaPageTemplate';

export default function AdministrativeReview() {
  return (
    <VisaPageTemplate
      title="Administrative Review"
      description="Challenging a Home Office refusal where a case working error has been made."
      whatIs="Administrative Review is a process where you can ask the Home Office to reconsider a visa refusal if you believe a mistake was made in the decision-making process. It is primarily used for points-based system applications."
      whoIsItFor={[
        'Applicants whose visa has been refused',
        'Those who believe the Home Office made a factual error',
        'Individuals with no right of appeal',
        'Sponsors whose licence has been revoked'
      ]}
      keyRequirements={[
        'Applying within the strict deadline (14 or 28 days)',
        "Identifying specific 'case working errors'",
        'Providing a detailed grounds of review',
        'Valid original application'
      ]}
      fees={[
        { type: 'Administrative Review Fee', amount: '£80', notes: 'Refunded if successful' },
        { type: 'Legal Representation', amount: 'Fixed Fee', notes: 'Contact us for a quote' }
      ]}
      processingTime="Decisions usually take between 28 days to 6 months depending on the complexity of the error."
      howWeHelp="Our expert lawyers specialize in identifying Home Office errors. We draft comprehensive grounds for review to maximize the chances of having the refusal overturned without the need for a full appeal."
    />
  );
}
