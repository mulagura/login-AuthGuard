import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule,Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { WallComponent } from './wall/wall.component';

import { UserService } from './user.service';

import { AuthGuard } from './auth.guard';


const appRoutes:Routes = [
  {
    path: '',
    component: LoginComponent,
    pathMatch: 'full'
  },

{
  path: 'wall',
  canActivate: [AuthGuard],
  component: WallComponent
}

]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    WallComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule
  ],
  providers: [UserService,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
