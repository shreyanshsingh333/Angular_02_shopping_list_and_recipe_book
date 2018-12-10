import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ShoppingListAndRecipeBook';
  componentSelected = 'recipe';
  componentSelector(feature: string) {
    this.componentSelected = feature;
  }
}
