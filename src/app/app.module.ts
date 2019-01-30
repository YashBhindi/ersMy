import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { TestComponent } from './test/test.component';
import { AdminTemplateComponent } from './admin-template/admin-template.component';
import { FormsModule, ReactiveFormsModule ,FormBuilder,Validator ,FormArray} from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    AdminTemplateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
