import { Injectable } from '@angular/core';
import {Entry} from "./entry";
import {HttpClient} from "@angular/common/http";
import {Observable,throwError } from "rxjs";
import {catchError, retry} from 'rxjs/operators';

@Injectable()

export class EntryService {
  private api = 'http://padlet23.s2010456032.student.kwmhgb.at/api';
  constructor(private http: HttpClient) { }
  getAll(): Observable<Array<Entry>> {
    return this.http.get<Array<Entry>>(`${this.api}/entries`)
      .pipe(retry(3)).pipe(catchError(this.errorHandler))
  }
  getSingle(id: number): Observable<Entry> {
    return this.http.get<Entry>(`${this.api}/entries/${id}`)
      .pipe(retry(3)).pipe(catchError(this.errorHandler))
  }
  create(entry: Entry): Observable<any> {
    return this.http.post(`${this.api}/entries`, entry)
      .pipe(retry(3)).pipe(catchError(this.errorHandler))
  }
  update(entry: Entry): Observable<any> {
    return this.http.put(`${this.api}/entries/${entry.id}`, entry)
      .pipe(retry(3)).pipe(catchError(this.errorHandler));
  }
  remove(id: number): Observable<any> {
    return this.http.delete(`${this.api}/entries/${id}`)
      .pipe(retry(3)).pipe(catchError(this.errorHandler));
  }
  private errorHandler(error: Error | any): Observable<any> {
    return throwError(error);
  }


}


