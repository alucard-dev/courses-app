import { Injectable, OnDestroy } from '@angular/core';
import { BehaviorSubject, map, Observable, Subject, Subscription } from 'rxjs';
import { Author } from '../models/author';
import { AuthorsService } from './authors.service';

@Injectable({
  providedIn: 'root'
})

export class AuthorsStoreService {

  private isLoading$$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public authors$$: BehaviorSubject<Author[]> = new BehaviorSubject<Author[]>([]);
  
  public isLoading$: Observable<boolean> = this.isLoading$$.asObservable();
  public authors$: Observable<Author[]> = this.authors$$.asObservable();
  
  constructor(private authorService: AuthorsService) { }
 
  
  public getAll(): void {
    this.isLoading$$.next(true);
    this.authorService.getAll()
      .subscribe((data) => {
        this.authors$$.next(data);
        this.isLoading$$.next(false);
      });  
  }

  public addAuthor(authorName: string) {
    this.authorService.addAuthor(authorName)
      .subscribe(() => {
        this.authors$$.getValue().push({name: authorName});
        this.getAll();
      });
  }
}
