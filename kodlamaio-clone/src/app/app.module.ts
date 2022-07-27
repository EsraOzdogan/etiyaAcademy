import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './common/nav/nav.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SssComponent } from './pages/sss/sss.component';
import { LoginComponent } from './pages/login/login.component';
import { RegisterComponent } from './pages/register/register.component';
import { FooterComponent } from './common/footer/footer.component';
import { FilterSearchBarComponent } from './components/filter-search-bar/filter-search-bar.component';
import { LessonCardComponent } from './components/lesson-card/lesson-card.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomePageComponent,
    SssComponent,
    LoginComponent,
    RegisterComponent,
    FooterComponent,
    FilterSearchBarComponent,
    LessonCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
