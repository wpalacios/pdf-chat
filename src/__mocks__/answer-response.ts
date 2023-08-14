import { TEST_PDF_URL, DEFAULT_QUESTION } from 'constants/config';
import { AnswerResponseBody } from 'types/models';

export const mockAnswerResponseBody: AnswerResponseBody = {
  answer: 'The policy include waiver of subrogation',
  confidence: 0,
  document_id: TEST_PDF_URL,
  question: DEFAULT_QUESTION,
  sources: [
    {
      source_id: 'source.test.id',
      source_page: 7,
      source_text: 'Policy Wording',
      source_url: TEST_PDF_URL
    },
    {
      source_id: 'source.test.id',
      source_page: 26,
      source_text: `Hiscox Insurance Company Inc. Policy Number: Named Insured: Endorsement Number: Endorsement Effective:
        THIS ENDORSEMENT CHANGES THE POLICY. PLEASE READ IT CAREFULLY.
        CGL E5402 CW (03/10) Page 1 of 1 Includes copyrighted material of Insurance Services Office, Inc., with its permission.
        MODIFIED WAIVER OF TRANSFER OF RIGHTS OF RECOVERY AGAINST OTHERS TO US
        
         This endorsement modifies insurance provided under the following: COMMERCIAL GENERAL LIABILITY COVERAGE PART 
         
         The following is added to Paragraph 8. Transfer Of Rights Of Recover Against Others To Us of Section IV -
        Conditions: 
        
        You may waive your rights against another party so long as you do so in writing prior to: (i) an offense arising out of your business that caused a "personal and advertising injury" or (ji) an "occurrence" that caused "bodily injury" or "property damage". UDC-4675138-CGL-21Ramos Rustics LLC2December 6, 2021`,
      source_url: TEST_PDF_URL
    }
  ]
};
