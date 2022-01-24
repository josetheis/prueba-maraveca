import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { calculateAge } from 'src/app/shared/util/calculateAge';

@Injectable({
  providedIn: 'root'
})
export class GetStudentsService {

  constructor(private http: HttpClient) { }

  get() {
    return this.http.get('https://hp-api.herokuapp.com/api/characters/students').pipe(
      map((data: any) =>
        data.map(({ name, patronus, dateOfBirth, image }: any) => ({
          name,
          age: calculateAge(dateOfBirth),
          patronus,
          image,
        }))
      )
    )
  }
}
