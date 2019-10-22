import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {SomeInterface} from '../interfaces/some-interface';

@Injectable({
  providedIn: 'root'
})
export class TestServiceService {

  constructor(private http: HttpClient) {
  }

  someFunc(): Observable<SomeInterface> {
    return this.http.get('http://someurl.com');
  }

}
