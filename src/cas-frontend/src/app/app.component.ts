import { Component } from '@angular/core'

function TestDecorator (text) {
  return function (target) {
    target.text = text;
    target.meta = {
      prop1: 'text1',
      prop2: 'text2'
    }
    console.log(text)
    console.log(target.meta.prop1)
    console.log(target.meta.prop2) 
  }
}

@TestDecorator('Simple test')
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {
  title = 'Hello I am an angular component.'
  generateNumber () {
    return 12
  }
}

