import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { calculateAge } from 'src/app/shared/util/calculateAge';

@Injectable({
  providedIn: 'root',
})
export class GetCharactersByHouseService {
  private url = 'https://hp-api.herokuapp.com/api/characters/house/';

  constructor(private http: HttpClient) {}

  // obtenemos la data en base al valor de 'house' y le damos el formato correcto
  get(house: string) {
    return this.http.get(this.url + house).pipe(
      map((data: any) =>
        data.map(({ name, patronus, dateOfBirth, image }: any) => ({
          name,
          age: calculateAge(dateOfBirth),
          patronus,
          image,
        }))
      )
    );
  }
}
