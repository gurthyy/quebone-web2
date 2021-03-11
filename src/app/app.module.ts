import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { QuestionsComponent } from './questions/questions.component';
import { QuestionSnipComponent } from './questions/question-snip.component';
import { QuestionsService } from './shared/questions.service';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';
import { NavbarModule } from './nav/navbar.module';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@NgModule({
  declarations: [AppComponent, QuestionsComponent, QuestionSnipComponent],
  imports: [BrowserModule, AppRoutingModule, NgbModule, HttpClientModule, BrowserAnimationsModule, SharedModule, NavbarModule, FontAwesomeModule],
  providers: [QuestionsService],
  entryComponents:[ConfirmDialogComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
