import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { calculateAge } from 'src/app/shared/util/calculateAge';

interface wizard {
  name: string;
  patronus: string;
}

@Injectable({
  providedIn: 'root',
})
export class GetTeachersService {
  private url = 'http://hp-api.herokuapp.com/api/characters/staff';

  constructor(private http: HttpClient) {}

  // Obtenemos la data, quitamos los valores no necesarios y la formateamos
  get() {
    return this.http.get<any>(this.url).pipe(
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
