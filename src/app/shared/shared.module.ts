import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { ButtonComponent } from './components/button/button.component';
import { InfoComponent } from './components/info/info.component';
import { SearchComponent } from './components/search/search.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { EmailValidatorDirective } from './directives/email-validator.directive';
import { FormsModule } from '@angular/forms';
import { CreationDatePipe } from './pipes/creation-date.pipe';
import { DurationPipe } from './pipes/duration.pipe';
import { StringJoinerPipe } from './pipes/string-joiner.pipe';

const COMPONENTS = [
  HeaderComponent,
  ButtonComponent,
  InfoComponent,
  SearchComponent,
  EmailValidatorDirective,
  CreationDatePipe,
  DurationPipe,
  StringJoinerPipe
];

@NgModule({
  declarations: COMPONENTS,
  imports: [CommonModule, NgbModule, FontAwesomeModule,FormsModule],
  exports: COMPONENTS,
})
export class SharedModule {}
