import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormArray,
  FormBuilder,
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

  newAuthor(authorName: String): FormGroup {
    return this.fb.group({
      name: authorName,
    });
  }

  addAuthor(authorName: string) {
    // this.form.value.authors.push(authorName);
    // console.log("author ", this.form.value.authors)
    this.authors.push(this.newAuthor(authorName));
  }

  deleteAuthor(authorIndex: number) {
    // console.log("delete ", authorIndex)
    // this.form.value.authors.splice(authorIndex, 1);
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
