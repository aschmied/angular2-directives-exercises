import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'dir-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})
export class AppComponent {
  private visible = true;
  private items = ['first', 'secondly', 'three', 'five'];
  private value = 100;
  onClick() {
    this.visible = !this.visible;
  }
}
