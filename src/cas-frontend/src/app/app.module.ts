import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { AppComponent } from './app.component'
import { HeaderComponent } from './shared/header/header.component'
import { CommandsModule } from './commands/commands.module'


@NgModule({
  // [components; directives or pipes]  (declarables) that belongs to this module
  declarations: [AppComponent, HeaderComponent],
  // set of NgModules whose exported declarables are available to template
  // in this module
  imports: [BrowserModule, CommandsModule],
  bootstrap: [AppComponent]
})
export class AppModule { }