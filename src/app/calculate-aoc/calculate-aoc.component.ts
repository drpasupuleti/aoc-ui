import { Component, OnInit, RendererFactory2 } from '@angular/core';
import { CalculateAOCService } from './calculate-aoc-service';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-calculate-aoc',
  templateUrl: './calculate-aoc.component.html',
  styleUrls: ['./calculate-aoc.component.css']
})
export class CalculateAocComponent {
  form: FormGroup;
  submitted = false;

  radius = new FormControl('', Validators.compose([Validators.required, Validators.min(1), Validators.max(100),
  Validators.pattern('^[0-9]+$')]));
  areaOfCircle: number;

  constructor(private calAOC: CalculateAOCService, fb: FormBuilder) {
    this.form = fb.group({
      'radius': this.radius
    });
  }
  get fields() { return this.form.controls; }
  onSubmit(): void {
    this.submitted = true;
    if (this.form.invalid) {
      return;
    } else {
      this.calAOC.calculateAOC(this.radius.value)
        .subscribe(data => {
          this.areaOfCircle = data;
        });
    }
  }
}

