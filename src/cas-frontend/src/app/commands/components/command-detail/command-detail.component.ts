import { Component, Input } from '@angular/core';
import { Command } from '../../models/Command';

@Component({
  selector: 'app-command-detail',
  templateUrl: './command-detail.component.html',
  styleUrls: ['./command-detail.component.scss']
})
export class CommandDetailComponent  {
  @Input() command: Command

}
