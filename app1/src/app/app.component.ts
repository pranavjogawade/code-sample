import { Component } from '@angular/core';
import { Product } from './product.model';
import {
  FormBuilder,
  FormGroup,
  Validators,
  AbstractControl
  } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  myForm: FormGroup;
  sku: AbstractControl;
  constructor(fb: FormBuilder) {
    this.myForm = fb.group({
      'sku': ['', Validators.required]
    });
    this.sku = this.myForm.controls['sku'];
    this.sku.valueChanges.subscribe(
      (value: string) => {
      console.log('sku changed to:', value);
      }
      );
      this.myForm.valueChanges.subscribe(
        (form: any) => {
        console.log('form changed to:', form);
        }
        );
  }
  onSubmit(form: any): void {
    console.log('you submitted value:', form);
    }
}
