export interface GermanVerb {
  ich: string;
  du: string;
  ihr: string;
  erSie: string;
  infinitive: string;
  partizip2: string;
  helperVerb: "sein" | "haben";
}

export type GermanGender = "der" | "die" | "das";

export interface GermanNoun {
  singular: string;
  plural: string;
  gender: Array<GermanGender>;
}
