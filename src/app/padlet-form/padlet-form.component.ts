import { ActivatedRoute, Router } from "@angular/router";
import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, FormArray, Validators, FormControl
} from "@angular/forms";
import { PadletFormErrorMessages } from "./padlet-form-error-messages";
import { PadletFactory } from "../shared/padlet-factory";
import { PadletService } from "../shared/padlet.service";
import { Padlet, Entry } from "../shared/padlet";
import {AuthenticationService} from "../shared/authentication.service";

@Component({
  selector: "bs-padlet-form",
  templateUrl: "./padlet-form.component.html"
})

export class PadletFormComponent implements OnInit {
  padletForm: FormGroup;
  padlet = PadletFactory.empty();
  errors: { [key: string]: string } = {};
  isUpdatingPadlet = false;
  entries: FormArray;

  constructor(
    private fb: FormBuilder,
    private bs: PadletService,
    private route: ActivatedRoute,
    private router: Router,
    public authService: AuthenticationService
  ) {
    this.padletForm = this.fb.group({});
    this.entries = this.fb.array([]);
  }

  ngOnInit() {
    const id = this.route.snapshot.params["id"];
    if (id) {
      this.isUpdatingPadlet = true;
      this.bs.getSingle(id).subscribe(padlet => {
        this.padlet = padlet;
        this.initPadlet();
      });
    }
    this.initPadlet();
  }

  initPadlet() {
    this.buildEntriesArray();
    this.padletForm = this.fb.group({
      id: this.padlet.id,
      name: [this.padlet.name, Validators.required],
      is_public: this.padlet.is_public,
    });
    this.padletForm.statusChanges.subscribe(() =>
      this.updateErrorMessages());
  }


  buildEntriesArray() {
    if (this.padlet.entries) {
      this.entries = this.fb.array([]);
      for (let entr of this.padlet.entries) {
        let fg = this.fb.group({
          id: new FormControl(entr.id), //this.fb.control(img.id),
          text: new FormControl(entr.text, [Validators.required])
        });
        this.entries.push(fg);
      }
    }
  }


  addThumbnailControl() {
    this.entries.push(this.fb.group({id: 0, text: null}));
  }


  clickRadio(num: number) {
    this.padlet.is_public = num;
  }

  submitForm() {
    /*/ filter empty values
    this.padletForm.value.images = this.padletForm.value.images.filter(
      (thumbnail: { url: string; }) => thumbnail.url
    );*/
    const padlet: Padlet = PadletFactory.fromObject(this.padletForm.value);
    //Public neue setzen - auf das vonn clickRadio
    padlet.is_public = this.padlet.is_public;
    //just copy the authors
    padlet.users = this.padlet.users;
    if (this.isUpdatingPadlet) {
      this.bs.update(padlet).subscribe(res => {
        this.router.navigate(["../../padlets", padlet.id], {
          relativeTo: this.route
        });
      });
    } else {
      //padlet.user_id = 1; // just for testing
      console.log(padlet);
      this.bs.create(padlet).subscribe(res => {
        this.padlet = PadletFactory.empty();
        this.padletForm.reset(PadletFactory.empty());
        this.router.navigate(["../padlets"], {relativeTo: this.route});
      });
    }
  }


  updateErrorMessages() {
    console.log("Is invalid? " + this.padletForm.invalid);
    this.errors = {};
    for (const message of PadletFormErrorMessages) {
      const control = this.padletForm.get(message.forControl);
      if (
        control &&
        control.dirty &&
        control.invalid && control.errors &&
        control.errors[message.forValidator] &&
        !this.errors[message.forControl]
      ) {
        this.errors[message.forControl] = message.text;
      }
    }

  }
}
