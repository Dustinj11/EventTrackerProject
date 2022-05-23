import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Locations } from 'src/app/models/locations';
import { TravelService } from 'src/app/services/travel.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  locations: Locations[] = [];

  selected: Locations | null = null;

  newLocation: Locations = new Locations();

  editLocation: Locations | null = null;


  constructor(private travelSvc: TravelService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.loadLocations();
  }

  setLocation(location: Locations){
    this.selected = location;
  }

  loadLocations() {
    this.travelSvc.index().subscribe(
      success => this.locations = success,
      err => console.log('Ovservable got and error' + err)
    );
  }

  addLocation(createLocation: Locations){
    this.travelSvc.create(createLocation).subscribe(
      data => {
        this.newLocation = new Locations();
        this.loadLocations();
      },
      err => console.log('Ovservable got and error' + err)
    );
  }

  removeLocation(id: number) {
    this.travelSvc.destroy(id).subscribe(
      data => this.reload(),
      err => console.log('remove location ' + err)
      );
    }
    reload() {
      this.travelSvc.index().subscribe(
        data => this.locations = data,
        err => console.log(err)
        );
      }

      updateLocation = (editedLocation: Locations) =>{
        this.travelSvc.update(editedLocation.id, editedLocation).subscribe(
          success => {
            this.editLocation = null;
            this.loadLocations();
          },
          err => console.log('Ovservable got and error' + err)
        );
      }

setEditLocation(location: Locations){
  this.selected = location;
  this.editLocation = Object.assign({}, this.selected);
}
displayLocation(location: Locations) {
  this.selected = location;
}
displayTable() {
  this.selected = null;
}

}
