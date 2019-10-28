import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ListService {
  private message$: Subject<string> = new Subject<string>();

  setMessage(message: any) {
    this.message$.next(message);
  }

  getMessage(): Observable<any> {
    return this.message$.asObservable();
  }
}
