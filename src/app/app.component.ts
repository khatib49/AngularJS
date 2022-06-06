import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Rami'
  data="hello code"
  getval()
  {
    return "Code step by step"
  }
  num=100
}
