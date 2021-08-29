import {Component, Input, OnInit} from '@angular/core';
import {GermanVerb} from "../../../models/german.interfaces";

@Component({
  selector: 'app-german-verb',
  templateUrl: './german-verb.component.html',
  styleUrls: ['./german-verb.component.scss']
})
export class GermanVerbComponent implements OnInit {

  @Input() verb!: GermanVerb;

  constructor() { }

  ngOnInit(): void {
  }

}
