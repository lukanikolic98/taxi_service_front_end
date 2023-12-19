import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AppRoutingModule } from './app.routes';
import { AuthService } from './services/auth.service';
import { RouterOutlet } from '@angular/router';

@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    RouterOutlet,
    ReactiveFormsModule,
  ],
  declarations: [AppComponent, LoginComponent, RegisterComponent],
  providers: [AuthService],
  bootstrap: [AppComponent],
})
export class AppModule {}
