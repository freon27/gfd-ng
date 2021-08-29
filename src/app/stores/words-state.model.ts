import {Vocabulary} from "../../config/english-config";
import {GermanNoun, GermanVerb} from "../../models/german.interfaces";

export interface WordsStateModel {
  search: string;
  vocabulary: Vocabulary<GermanVerb, GermanNoun>;
}
