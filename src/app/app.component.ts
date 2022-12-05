import { Component } from '@angular/core';
import { FormGroup, FormArray, FormControl } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  form = new FormArray([
    new FormGroup({
      nameFirst: new FormControl(''),
      nameLast: new FormControl(''),
    }),
    new FormGroup({
      username: new FormControl(''),
      email: new FormControl(''),
    }),
  ]);
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
