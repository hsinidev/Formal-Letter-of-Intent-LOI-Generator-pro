
export interface LOIData {
    loiType: 'business' | 'employment' | 'real_estate';
    senderName: string;
    senderTitle: string;
    senderCompany: string;
    recipientName: string;
    recipientTitle: string;
    recipientCompany: string;
    subject: string;
    price: string;
    exclusivityPeriod: string;
    date: string;
    signatoryName: string;
}

const templates = {
    business: (data: LOIData) => `
[${data.senderCompany}]
[Sender Address]
[City, State, Zip]

${data.date}

[${data.recipientName}]
[${data.recipientTitle}]
[${data.recipientCompany}]
[Recipient Address]
[City, State, Zip]

Subject: Letter of Intent for the Acquisition of ${data.recipientCompany}

Dear ${data.recipientName},

This Letter of Intent (the "LOI") outlines the proposed terms and conditions for the acquisition by ${data.senderCompany} (the "Buyer") of substantially all of the assets of ${data.recipientCompany} (the "Seller"). This LOI is an expression of interest only and, except for the "Binding Provisions" section below, is not a legally binding agreement.

1.  PROPOSED TRANSACTION: The Buyer proposes to acquire the business operations of the Seller, including all assets, tangible and intangible, free and clear of any encumbrances.

2.  PURCHASE PRICE: The proposed purchase price is $${parseInt(data.price).toLocaleString()}, subject to adjustments based on due diligence findings.

3.  DUE DILIGENCE: The Buyer will be granted a period to conduct a thorough due diligence investigation of the Seller's business, finances, and operations.

4.  EXCLUSIVITY: In consideration of the Buyer's expenses in pursuing this transaction, the Seller agrees to an exclusivity period of ${data.exclusivityPeriod} days from the date of this LOI, during which the Seller shall not solicit or enter into discussions with any other party regarding a similar transaction. This exclusivity clause is a binding provision.

5.  CONFIDENTIALITY: All information exchanged between the parties will be held in strict confidence. This confidentiality clause is a binding provision.

6.  GOVERNING LAW: This LOI shall be governed by the laws of [State/Jurisdiction].

If these terms are acceptable, please sign below to indicate your non-binding agreement to proceed with negotiations. We look forward to working with you towards a successful transaction.

Sincerely,

_________________________
${data.signatoryName || data.senderName}
${data.senderTitle}
${data.senderCompany}
`,

    employment: (data: LOIData) => `
[${data.senderCompany}]
[Company Address]
[City, State, Zip]

${data.date}

[${data.recipientName}]
[Recipient Address]
[City, State, Zip]

Subject: Letter of Intent - Offer of Employment for the position of ${data.subject || 'POSITION'}

Dear ${data.recipientName},

This Letter of Intent outlines the preliminary offer of employment from ${data.senderCompany} (the "Company") to you (the "Candidate") for the full-time position of ${data.subject || '[Position Title]'}. This letter expresses our intent and does not constitute a final, binding employment contract.

1.  POSITION: You will be employed as ${data.subject || '[Position Title]'}, reporting to [Supervisor's Name/Title].

2.  COMPENSATION: Your proposed annual base salary will be $${parseInt(data.price).toLocaleString()}, payable in accordance with the Company's standard payroll practices.

3.  BENEFITS: You will be eligible to participate in the Company's standard benefits package, which includes health insurance, retirement plans, and paid time off, subject to plan terms and conditions.

4.  START DATE: We anticipate your employment will commence on or about [Start Date].

5.  CONTINGENCIES: This offer is contingent upon the successful completion of a background check, reference checks, and your ability to provide proof of your legal right to work in [Country].

This is a non-binding letter of intent. A formal employment agreement containing the detailed terms and conditions will be provided upon successful completion of the contingencies listed above.

We are very excited about the possibility of you joining our team.

Sincerely,

_________________________
${data.signatoryName || data.senderName}
${data.senderTitle}
${data.senderCompany}
`,

    real_estate: (data: LOIData) => `
[${data.senderName}]
[Sender Address]
[City, State, Zip]

${data.date}

[${data.recipientName}]
[${data.recipientCompany || 'Owner'}]
[Property Address]
[City, State, Zip]

Subject: Letter of Intent to Purchase Property at ${data.subject || '[Property Address]'}

Dear ${data.recipientName},

This Letter of Intent (the "LOI") sets forth the proposed terms and conditions for the purchase by ${data.senderName} (the "Buyer") of the real property located at ${data.subject || '[Property Address]'} (the "Property"), currently owned by you (the "Seller"). This LOI is a non-binding expression of interest.

1.  PROPERTY: The property to be acquired is the real estate and all improvements located at ${data.subject || '[Property Address]'}.

2.  PURCHASE PRICE: The proposed purchase price for the Property is $${parseInt(data.price).toLocaleString()}.

3.  INSPECTION PERIOD: The Buyer shall have an inspection period of ${data.exclusivityPeriod} days from the execution of a formal Purchase and Sale Agreement to conduct all necessary inspections and due diligence.

4.  FINANCING: This offer is contingent upon the Buyer's ability to secure satisfactory financing for the purchase of the Property.

5.  CLOSING: The closing of the transaction is anticipated to occur on or before [Closing Date].

6.  FORMAL AGREEMENT: The parties shall endeavor to negotiate and execute a formal Purchase and Sale Agreement within a reasonable time following the acceptance of this LOI.

This letter is not a contract and creates no legally binding obligations on either party, except for any confidentiality provisions that may be agreed upon separately.

We look forward to the possibility of working with you.

Sincerely,

_________________________
${data.signatoryName || data.senderName}
`
};

export const generateLOI = (data: LOIData): string => {
    const template = templates[data.loiType];
    return template ? template(data).trim() : 'Error: Invalid LOI type selected.';
};
