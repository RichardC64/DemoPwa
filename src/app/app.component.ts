import { Component, OnInit } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'app';
  showUpdate = false;

  constructor(private swUpdate: SwUpdate) { }
  onUpdate() {
    window.location.reload();
  }

  ngOnInit(): void {
    this.swUpdate.available.subscribe(event => {

      console.log('[App] Update available: current version is', event.current, 'available version is', event.available);
      this.showUpdate = true;
    });
  }
}
