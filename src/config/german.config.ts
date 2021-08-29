import { Vocabulary } from "./english-config";
import {GermanNoun, GermanVerb} from "../models/german.interfaces";

// Each language has its own specific structure for each word type Verb/Noun/etc

const germanVocabulary: Vocabulary<GermanVerb, GermanNoun> = {
  versionControlPullRequest: {
    translations: [
      {
        singular: "Pull-Request",
        plural: "Pull-Requests",
        gender: ["der"],
      },
    ],
  },
  versionControlPull: {
    translations: [
      {
        infinitive: "pullen",
        ich: "pulle",
        du: "pullst",
        ihr: "pullt",
        erSie: "pullt",
        partizip2: "gepullt",
        helperVerb: "haben",
      },
    ],
  },
  versionControlPush: {
    translations: [
      {
        infinitive: "pushen",
        ich: "pushe",
        du: "pushst",
        ihr: "pusht",
        erSie: "pusht",
        partizip2: "gepusht",
        helperVerb: "haben",
      },
    ],
  },
  versionControlMerge: {
    translations: [
      {
        infinitive: "mergen",
        ich: "merge",
        du: "mergst",
        ihr: "mergt",
        erSie: "mergt",
        partizip2: "gemergt",
        helperVerb: "haben",
      },
    ],
  },
  versionControlTag: {
    translations: [
      {
        singular: "Tag",
        plural: "Tags",
        gender: ["der"],
      },
    ],
  },

  desigHeight: {
    translations: [
      {
        singular: "Höhe",
        plural: "Höhen",
        gender: ["die"],
      },
    ],
  },
  designWidth: {
    translations: [
      {
        singular: "Breite",
        plural: "Breiten",
        gender: ["die"],
      },
    ],
  },
  designColumn: {
    translations: [
      {
        singular: "Spalte",
        plural: "Spalten",
        gender: ["die"],
      },
    ],
  },
  designRow: {
    translations: [
      {
        singular: "Reihe",
        plural: "Reihen",
        gender: ["die"],
      },
      {
        singular: "Dummy",
        plural: "Dummies",
        gender: ["das", "der"],
      },
    ],
  },
};

export default germanVocabulary;
