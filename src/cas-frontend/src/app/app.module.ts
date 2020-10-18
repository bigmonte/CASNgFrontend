import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { AppComponent } from './app.component'


@NgModule({
  // [components; directives or pipes]  (declarables) that belongs to this module
  declarations: [AppComponent],
  // set of NgModules whose exported declarables are available to template
  // in this module
  imports: [BrowserModule],
  bootstrap: [AppComponent]
})
export class AppModule { }