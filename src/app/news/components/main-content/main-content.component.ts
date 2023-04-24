import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-main-content',
  styleUrls: ['./main-content.component.css'],
  templateUrl: './main-content.component.html'
})
export class MainContentComponent {
  title = 'catch-up (Zepol)';
  @Input() articles: Array<any>=[];

}
