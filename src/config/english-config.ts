import {Category, TermType, VobacularyItem} from "../models/vocabulary.interface";

interface EnglishTerms {
  [key: string]: {
    text: string;
    category: Category;
    type: TermType;
  };
}

// We create a list of english terms which acts as a master list
// Vocabularies in any language must provide translations for every key in this list
export const englishTerms: EnglishTerms = {
  versionControlPullRequest: {
    text: "pull request",
    category: Category.versionControl,
    type: TermType.noun,
  },

  versionControlPull: {
    text: "pull",
    category: Category.versionControl,
    type: TermType.verb,
  },
  versionControlPush: {
    text: "push",
    category: Category.versionControl,
    type: TermType.verb,
  },
  versionControlMerge: {
    text: "merge",
    category: Category.versionControl,
    type: TermType.verb,
  },
  versionControlTag: {
    text: "tag",
    category: Category.versionControl,
    type: TermType.verb,
  },
  designWidth: {
    text: "width",
    category: Category.design,
    type: TermType.noun,
  },
  desigHeight: {
    text: "height",
    category: Category.design,
    type: TermType.noun,
  },
  designColumn: {
    text: "column",
    category: Category.design,
    type: TermType.noun,
  },
  designRow: {
    text: "row",
    category: Category.design,
    type: TermType.noun,
  },
} as const;

export type EnglishTermKeys = keyof typeof englishTerms;

export type Vocabulary<Verb, Noun> = Readonly<
  {
    [key in EnglishTermKeys]: VobacularyItem<Verb, Noun>;
  }
>;
