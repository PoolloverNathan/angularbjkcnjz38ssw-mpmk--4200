import { Component, OnInit, Input } from '@angular/core';
import { AbstractControl } from '@angular/forms'

@Component({
  selector: 'app-step-nav',
  templateUrl: './step-nav.component.html',
  styleUrls: ['./step-nav.component.css']
})
export class StepNavComponent implements OnInit {
  @Input() last: boolean | "" = false 
  @Input("continue") _continue: AbstractControl | boolean | "" = true

  get stopHere() {
    if (this._continue instanceof AbstractControl) {
      return this._continue.invalid
    } else {
      return this._continue !== false
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
