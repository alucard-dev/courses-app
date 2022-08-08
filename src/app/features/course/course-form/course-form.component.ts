import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  ValidationErrors,
  Validators,
} from '@angular/forms';
@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.css'],
})
export class CourseFormComponent implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = fb.group({
      title: ['', [Validators.required]],
      description: ['', [Validators.required]],
      authorName: ['', authorNameValidation],
      authors: this.fb.array([]),
      duration: ['', Validators.required],
    });
  }

  get title() {
    return this.form.get('title');
  }

  get description() {
    return this.form.get('description');
  }

  get authorName() {
    return this.form.get('authorName');
  }

  get duration() {
    return this.form.get('duration');
  }

  get authors() {
    return this.form.get('authors') as FormArray;
  }

  addAuthor(authorName: string) {
    this.authors.push(new FormControl(authorName));
  }

  deleteAuthor(authorIndex: number) {
    this.authors.removeAt(authorIndex);
  }

  ngOnInit(): void {}

  onFormSubmit() {
    alert(JSON.stringify(this.form.value, null, 2));
  }
}
function authorNameValidation(
  control: AbstractControl
): ValidationErrors | null {
  return /^[a-zA-Z0-9]+$/.test(control.value) ? null : { nameInvalid: true };
}
