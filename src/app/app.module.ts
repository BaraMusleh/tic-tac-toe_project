import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { AuthComponent } from './auth/auth.component';
import { XoGameComponent } from './xo-game/xo-game.component';
import { HeaderComponent } from './header/header.component';
import { WinnerPageComponent } from './winner-page/winner-page.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    XoGameComponent,
    HeaderComponent,
    WinnerPageComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
