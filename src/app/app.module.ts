import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginUsuarioComponent } from './components/login-usuario/login-usuario.component';
import { ListadoMensajesComponent } from './components/listado-mensajes/listado-mensajes.component';
import { HttpInterceptorService } from './services/http-interceptor.service';
import { DialogoGeneralComponent } from './components/dialogo-general/dialogo-general.component';

import { MatCardModule } from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDialogModule } from '@angular/material/dialog';





@NgModule({
  declarations: [
    AppComponent,
    LoginUsuarioComponent,
    ListadoMensajesComponent,
    DialogoGeneralComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatDialogModule
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: HttpInterceptorService, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule { }
