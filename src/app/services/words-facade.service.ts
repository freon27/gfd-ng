import { Injectable } from '@angular/core';
import { WordsStoreService } from '../stores/words-store.service';
import { combineLatest, Observable } from 'rxjs';
import {ViewCategory, ViewItem, ViewVocabulary} from '../../models/vocabulary.interface';
import { GermanNoun, GermanVerb } from '../../models/german.interfaces';
import { map } from 'rxjs/operators';
import {
  EnglishTermKeys,
  englishTerms,
  Vocabulary
} from '../../config/english-config';

@Injectable({
  providedIn: 'root'
})
export class WordsFacadeService {
  displayWords$: Observable<ViewVocabulary<GermanVerb, GermanNoun>> =
    combineLatest([this.store.search$, this.store.vocabulary$]).pipe(
      map(([searchString, vocabulary]) =>
        this.prepareWordsForView(searchString, vocabulary)
      )
    );

  constructor(private store: WordsStoreService) {}

  searchUpdated(searchText: string) {
    console.log('searchUpdated');
    this.store.setSearch(searchText);
  }

  private prepareWordsForView(
    searchString: string,
    vocabulary: Vocabulary<any, any>
  ) {
    const wordByCategory = Object.entries(englishTerms).reduce((acc, [key, englishTerm]) => {

      if (! englishTerm.text.includes(searchString.trim().toLowerCase())) {
        return acc;
      }

      const word: ViewItem<GermanVerb | GermanNoun> = {
        translations: vocabulary[key as EnglishTermKeys].translations,
        type: englishTerm.type,
        englishWord: englishTerm.text
      };

      const categoryWords: ViewItem<GermanVerb | GermanNoun>[] = acc[
        englishTerm.category as string
      ]
        ? [...acc[englishTerm.category as string].words, word]
        : [word];

      acc[englishTerm.category as string] = {
        categoryName: englishTerm.category,
        words: categoryWords
      };
      return acc;
    }, {} as { [key: string]: ViewCategory<GermanVerb, GermanNoun> });

    return Object.values(wordByCategory);
  }
}
