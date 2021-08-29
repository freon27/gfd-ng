import { Injectable } from '@angular/core';
import {BehaviorSubject, Observable} from "rxjs";
import {WordsStateModel} from "./words-state.model";
import germanVocabulary from "../../config/german.config";
import {distinctUntilChanged, pluck} from "rxjs/operators";
import {Vocabulary} from "../../config/english-config";


export const wordStoreInitialState: WordsStateModel = {
  search: '',
  vocabulary: germanVocabulary
};

@Injectable({
  providedIn: 'root'
})
export class WordsStoreService {

  private storeSubject = new BehaviorSubject(wordStoreInitialState)

  search$: Observable<string> = this.storeSubject.pipe(pluck('search'), distinctUntilChanged());

  vocabulary$: Observable<Vocabulary<any, any>> = this.storeSubject.pipe(pluck('vocabulary'), distinctUntilChanged());

  constructor() { }

  setSearch(searchText: string) {
    this.storeSubject.next ({
      ...this.storeSubject.getValue(),
        search: searchText
    })
  }
}
