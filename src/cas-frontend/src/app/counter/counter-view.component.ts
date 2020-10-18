import { Component, Input } from '@angular/core'

@Component({
  selector: 'counter-view',
  templateUrl: 'counter-view.component.html'
})
export class CounterViewComponent{
  @Input('counter-view-counter') parentInput;
}