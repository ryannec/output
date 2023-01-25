import { Component } from '@angular/core';

@Component({
  selector: 'app-ono-list',
  templateUrl: './ono-list.component.html',
  styleUrls: ['./ono-list.component.css'],
})
export class OnoListComponent {
  onomatopoeiaList: string[] = [];

  onReceiveNewOnomatopia(event: string): void {
    this.onomatopoeiaList.push(event);
  }
}
