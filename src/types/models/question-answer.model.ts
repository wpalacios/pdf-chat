// TODO: Implement adapter pattern to comply with ts naming conventions
interface AnswerSource {
  source_id?: string;
  source_page: number;
  source_text: string;
  source_url: string;
}

interface AnswerResponseBody {
  answer: string;
  confidence: number;
  document_id: string;
  question: string;
  sources: AnswerSource[];
}

interface QuestionRequestBody {
  question: string;
  document_id: string;
  document_url: string;
  development: boolean;
  model_name: string;
}

export default AnswerResponseBody;

export type { QuestionRequestBody };
