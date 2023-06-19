import { Component } from '@angular/core';
import { CapitalizePipe } from 'src/pipes/capitalize.pipe';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'pipeApp';
}
