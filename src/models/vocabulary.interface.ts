export enum TermType {
  "verb" = "verb",
  "noun" = "noun",
}

export interface VobacularyItem<Verb, Noun> {
  description?: string;
  translations: Array<Verb | Noun>;
}

export enum Category {
  versionControl = "version control",
  design = "design",
}

export interface ViewItem<WordType> {
  englishWord: string;
  type: TermType,
  translations: Array<WordType>;
}

export interface ViewCategory<Verb, Noun> {
  categoryName: string;
  words: ViewItem<Verb | Noun>[];
}

export type ViewVocabulary<Verb, Noun> = ViewCategory<Verb, Noun>[];


