import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { Padlet, Entry, User } from '../shared/padlet';
import {PadletService} from '../shared/padlet.service';
import {AuthenticationService} from "../shared/authentication.service";

@Component({
  selector: 'bs-padlet-list',
  templateUrl: './padlet-list.component.html',
  styles: []
})
export class PadletListComponent implements OnInit {
  padlets: Padlet[] = [];
  @Output() showDetailsEvent = new EventEmitter<Padlet>();

  constructor(
    private bs: PadletService,
  public authService : AuthenticationService
  ){ }

  ngOnInit() { this.bs.getAll().subscribe(res => this.padlets = res);
  }

  showDetails(padlet: Padlet) {
    this.showDetailsEvent.emit(padlet);
  }



}
