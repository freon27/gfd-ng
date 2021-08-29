import {
  ChangeDetectionStrategy,
  Component,
  ComponentFactory,
  ComponentFactoryResolver,
  OnInit,
  ViewChild,
  ViewContainerRef
} from '@angular/core';
import {WordsFacadeService} from "../../services/words-facade.service";
import {TermType} from "../../../models/vocabulary.interface";
import {GermanVerbComponent} from "../../components/german-verb/german-verb.component";
import {GermanNoun, GermanVerb} from "../../../models/german.interfaces";
import {GermanNounComponent} from "../../components/german-noun/german-noun.component";

@Component({
  selector: 'app-words',
  templateUrl: './words.component.html',
  styleUrls: ['./words.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class WordsComponent implements OnInit {

  @ViewChild("wordContainer", { read: ViewContainerRef }) container!: ViewContainerRef;

  termEnum = TermType;

  displayWords$ = this.facade.displayWords$;

  constructor(private facade: WordsFacadeService) { }

  ngOnInit(): void {
  }

  isGermanVerb(word: any): word is GermanVerb {
    return word.hasOwnProperty('infinitive');
  }

  isGermanNoun(word: any): word is GermanNoun {
    return word.hasOwnProperty('singular');
  }
}
