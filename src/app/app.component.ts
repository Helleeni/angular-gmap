import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import {} from 'googlemaps';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'angular-gmap';
  @ViewChild('mapContainer', {static: false}) gmap: ElementRef;
  map: google.maps.Map;

  lat = 62.545144;  // Valtra coordinates
  lng = 25.905153;

  coordinates = new google.maps.LatLng(this.lat, this.lng);
  mapOptions: google.maps.MapOptions = {
    center: this.coordinates,
    zoom: 16,
  };

  marker = new google.maps.Marker({
    position: this.coordinates,
    map: this.map,
  });

  mapInitializer() {
    this.map = new google.maps.Map(this.gmap.nativeElement, 
    this.mapOptions);
   }

   ngAfterViewInit() {
    this.mapInitializer();
    this.marker.setMap(this.map);
  }
}
