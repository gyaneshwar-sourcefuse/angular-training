import { InjectionToken, Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DirectivesExampleComponent } from './pages/directives-example/directives-example.component';
import { ParentComponent } from './pages/parent/parent.component';
import { ChildComponent } from './pages/child/child.component';
import { FormsModule } from '@angular/forms';
import { TestService } from './services/test.service';
import { AnotherService } from './services/another.service';
import { ServicesComponent } from './pages/services/services.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http"
import { InterceptorService } from './services/interceptor.service';
import { NavigationComponent } from './components/navigation/navigation.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

export const USE_FAKE = new InjectionToken<string>('');
@NgModule({
  declarations: [
    AppComponent,
    DirectivesExampleComponent,
    ParentComponent,
    ChildComponent,
    ServicesComponent,
    NavigationComponent,
    NotFoundComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule, NgbModule],
  providers: [
    { provide: USE_FAKE, useValue: false },
    TestService,
    { provide: AnotherService, useClass: TestService },
    { provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true }
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
