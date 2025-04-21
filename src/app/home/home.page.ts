import { Component } from '@angular/core';
import { sunmiprintercjp, sunmiprintercjpPlugin } from 'sunmi-printer-ionic-plugin-cjp';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {

  constructor() {}
 
    async callEcho() {
      try {
        const response = await sunmiprintercjp.echo({ value: 'Hello, Sunmi Printer!' });
        console.log(response.value); // Logs: 'Hello, Sunmi Printer!'
      } catch (error) {
        console.error('Error calling echo:', error);
      }
    
  }
 
}
