import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Padlet} from '../shared/padlet';
import {PadletService} from "../shared/padlet.service";
import {ActivatedRoute, Router} from "@angular/router";
import {PadletFactory} from "../shared/padlet-factory";
import {AuthenticationService} from "../shared/authentication.service";

@Component({
  selector: 'bs-padlet-details',
  templateUrl: './padlet-details.component.html',
  styles: []
})
export class PadletDetailsComponent implements OnInit {
  padlet: Padlet = PadletFactory.empty();
  constructor(
    private bs: PadletService,
    private router: Router,
    private route: ActivatedRoute,
    public authService: AuthenticationService
  ) { }
  ngOnInit() {
    const params = this.route.snapshot.params;
    this.bs.getSingle(params['id'])
      .subscribe((b:Padlet) => this.padlet = b);
  }
  getRating(num: number) {
    return new Array(num);
  }

  removePadlet() {
    if (confirm('Padlet wirklich löschen?')) {
      this.bs.remove(this.padlet.id)
        .subscribe((res:any) => this.router.navigate(['../'], { relativeTo:
          this.route }));
    }
  }




}
