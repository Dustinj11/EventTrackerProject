import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Locations } from '../models/locations';

@Injectable({
  providedIn: 'root'
})
export class TravelService {

  private url = environment.baseUrl + 'api/index';

  constructor(
    private http: HttpClient
  ) { }



  index() {
    return this.http.get<Locations[]>(this.url)
    .pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError('LocationService: error retrieving todo list');

      })
    )
  }

  create(newLocation: Locations) {

    return this.http.post<Locations>(this.url, newLocation)
    .pipe(
      catchError(
        (err: any) => {
          console.log(err);
          return throwError('httpClient threw error creating Location Service')
        }
      )
    );
  }

  update(id: number, location: Locations) {
    return this.http.put<Locations>(this.url + "/" + id, location)
    .pipe(
      catchError(
        (err: any) => {
          console.log(err);
          return throwError('httpClient threw error creating Todo Service')
        }
      )
    );
  }

  destroy(id: number) {
    return this.http.delete<Locations>(this.url + "/" + id)
    .pipe(
      catchError(
        (err: any) => {
          console.log(err);
          return throwError('httpClient threw error creating Todo Service')
        }
      )
    );
}

}
