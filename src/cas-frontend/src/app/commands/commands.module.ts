import { NgModule } from '@angular/core'
import { HttpClientModule } from '@angular/common/http'
import { CommonModule } from '@angular/common'
import { FormsModule } from '@angular/forms'
import { CommandsComponent } from './commands.component';
import { CommandSearchComponent } from './components/command-search/command-search.component';
import { CommandListComponent } from './components/command-list/command-list.component';
import { CommandDetailComponent } from './components/command-detail/command-detail.component';
import { CommandUpdateComponent } from './components/command-update/command-update.component';

@NgModule({
  declarations: [
    CommandsComponent, CommandSearchComponent, CommandListComponent, CommandDetailComponent, CommandUpdateComponent,
  ],
  exports : [CommandsComponent],
  imports : [CommonModule, HttpClientModule, FormsModule]
})

export class CommandsModule {}