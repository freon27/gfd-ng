import {Component, Input, OnInit} from '@angular/core';
import {GermanNoun} from "../../../models/german.interfaces";

@Component({
  selector: 'app-german-noun',
  templateUrl: './german-noun.component.html',
  styleUrls: ['./german-noun.component.scss']
})
export class GermanNounComponent implements OnInit {

  @Input() noun!: GermanNoun;

  constructor() { }

  ngOnInit(): void {
  }
}


