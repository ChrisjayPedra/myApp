import { Component } from '@angular/core';
import { sunmiPlugin, sunmiPluginPlugin } from 'sunmi-plugin';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {

  constructor() {}
 
  async  search() {
    try {
      await sunmiPlugin.searchPrinter({ method: 1 });
      console.log('Search started');
    } catch (error) {
      console.error('Search error:', error);
    }
  }
 
}
