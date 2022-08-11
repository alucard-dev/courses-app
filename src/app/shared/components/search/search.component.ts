import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  @Input() inputValue: string = '';
  @Output() search = new EventEmitter();

  public onSearchClick(form: NgForm) {
    if (this.inputValue) {
      this.search.emit(this.inputValue);
    }
    alert(this.inputValue);
  }

  ngOnInit(): void {
  }
}
