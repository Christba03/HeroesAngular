import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-new-page',
  standalone: false,
  
  templateUrl: './new-page.component.html',
  styles: ``,
  styleUrls: ['./new-page.component.scss'],
})
export class NewPageComponent {
  @Input() hero: any = {};

  heroForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.heroForm = this.fb.group({
      superhero: [''],
      alter_ego: [''],
      id: [''],
      first_appearance: [''],
      characters: [''],
      publisher: [''],
      alt_img: ['']
    });
  }

  ngOnInit() {
    if (this.hero) {
      this.heroForm.patchValue(this.hero);
    }
  }

  saveHero() {
    console.log('Updated Hero:', this.heroForm.value);
  }

  cancel() {
    console.log('Cancel Editing');
  }
}
