import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  @Output() recipesOrShoppingSelector = new EventEmitter<string>();
  onComponentSelected(feature: string) {
    this.recipesOrShoppingSelector.emit(feature);
  }
}
