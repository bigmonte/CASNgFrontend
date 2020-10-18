import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'
import { AppComponent } from './app.component'
import { CommandsComponent } from './commands/commands.component';
import { CommandSearchComponent } from './commands/components/command-search/command-search.component';
import { CommandListComponent } from './commands/components/command-list/command-list.component';
import { CommandDetailComponent } from './commands/components/command-detail/command-detail.component';
import { CommandUpdateComponent } from './commands/components/command-update/command-update.component';
import { HeaderComponent } from './shared/header/header.component'


@NgModule({
  // [components; directives or pipes]  (declarables) that belongs to this module
  declarations: [AppComponent, CommandsComponent, CommandSearchComponent, CommandListComponent, CommandDetailComponent, CommandUpdateComponent, HeaderComponent],
  // set of NgModules whose exported declarables are available to template
  // in this module
  imports: [BrowserModule],
  bootstrap: [AppComponent]
})
export class AppModule { }