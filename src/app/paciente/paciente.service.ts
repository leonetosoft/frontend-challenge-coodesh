import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';




export interface Name {
  title: string;
  first: string;
  last: string;
}

export interface Street {
  number: number;
  name: string;
}

export interface Coordinates {
  latitude: string;
  longitude: string;
}

export interface Timezone {
  offset: string;
  description: string;
}

export interface Location {
  street: Street;
  city: string;
  state: string;
  country: string;
  postcode: number;
  coordinates: Coordinates;
  timezone: Timezone;
}

export interface Login {
  uuid: string;
  username: string;
  password: string;
  salt: string;
  md5: string;
  sha1: string;
  sha256: string;
}

export interface Dob {
  date: Date;
  age: number;
}

export interface Registered {
  date: Date;
  age: number;
}

export interface Id {
  name: string;
  value: string;
}

export interface Picture {
  large: string;
  medium: string;
  thumbnail: string;
}

export interface Result {
  gender: string;
  name: Name;
  location: Location;
  email: string;
  login: Login;
  dob: Dob;
  registered: Registered;
  phone: string;
  cell: string;
  id: Id;
  picture: Picture;
  nat: string;
}

export interface Info {
  seed: string;
  results: number;
  page: number;
  version: string;
}

export interface RootObject {
  results: Result[];
  info: Info;
}

@Injectable({
  providedIn: 'root'
})
export class PacienteService {

  constructor(private http: HttpClient) { }

  buscarPacientes(queryParams: any): Observable<RootObject> {
    let params = new HttpParams();

    for(let par in queryParams) {
      params = params.append(par, queryParams[par]);
    }

    return this.http.get<RootObject>(`${environment.apiurl}`, { params });
  }
}
