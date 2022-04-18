import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HeroSectionComponent } from './hero-section/hero-section.component';
import { UserRepoComponent } from './user-repo/user-repo.component';
import { ReposComponent } from './repos/repos.component';
import { UsersComponent } from './users/users.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    NavigationComponent,
    HeroSectionComponent,
    UserRepoComponent,
    ReposComponent,
    UsersComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
