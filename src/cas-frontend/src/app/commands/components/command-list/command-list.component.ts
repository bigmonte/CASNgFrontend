import { Component, Input } from '@angular/core';
import { Command } from '../../models/Command'

@Component({
  selector: 'app-command-list',
  templateUrl: './command-list.component.html',
  styleUrls: ['./command-list.component.scss']
})
export class CommandListComponent {
  @Input() commands : Command[];
  
}
