import { Component, Input, OnInit } from '@angular/core';
import { faTrash, faPencil } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {

  @Input() btnName=''
  @Input() btnIcon='';
  constructor() { }

  ngOnInit(): void {
  }
  getIcon(iconName: string): any {
    switch (iconName) {
      case "faPencil":
        return faPencil
      case "faTrash":
        return faTrash
      default:
        break;
    }
  }

}
