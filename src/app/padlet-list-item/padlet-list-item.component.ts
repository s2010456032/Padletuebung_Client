import { Component, OnInit, Input } from '@angular/core';
import {Padlet} from "../shared/padlet";
import {AuthenticationService} from "../shared/authentication.service";

@Component({
  selector: 'a.bs-padlet-list-item',
  templateUrl: './padlet-list-item.component.html',
  styles: []
})

export class PadletListItemComponent implements OnInit {
  @Input() padlet: Padlet | undefined
  constructor(
    public authService : AuthenticationService
  ) { }
  ngOnInit() { }
}
