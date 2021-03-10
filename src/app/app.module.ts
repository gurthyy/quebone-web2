import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav/navbar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { QuestionsComponent } from './questions/questions.component';
import { QuestionSnipComponent } from './questions/question-snip.component';
import { QuestionsService } from './shared/questions.service';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './shared/shared.module';



@NgModule({
  declarations: [AppComponent, NavBarComponent, QuestionsComponent, QuestionSnipComponent],
  imports: [BrowserModule, AppRoutingModule, NgbModule, HttpClientModule, BrowserAnimationsModule, SharedModule],
  providers: [QuestionsService],
  bootstrap: [AppComponent],
})
export class AppModule {}
