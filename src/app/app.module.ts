import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {FormsModule} from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatBadgeModule} from '@angular/material/badge';
import { CpfPipe } from './pipes/pipe/cpf.pipe';
import {MatMenuModule} from '@angular/material/menu';
import {LayoutModule} from './layout/layout.module';
import {UsuarioModule} from './usuario/usuario.module';
import {HttpClientModule} from '@angular/common/http';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MensagemService} from './shared/services/mensagem.service';
import {MensagemSweetService} from './shared/services/mensagem-sweet.service';
import {IMensagem} from './shared/modelo/IMensagem';
import {MensagemConsoleServiceService} from './shared/services/mensagem-console-service.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatButtonModule,
    MatCardModule,
    MatInputModule,
    MatIconModule,
    MatBadgeModule,
    MatMenuModule,
    LayoutModule,
    UsuarioModule,
    HttpClientModule,
    MatSnackBarModule,
  ],
  providers: [
    {
      provide: IMensagem,
      useClass: MensagemConsoleServiceService
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
