import { Injectable } from '@angular/core';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { Observable, of } from 'rxjs';
import { MessageService } from './message.service';

/* Using prividedIn: 'root' injects creates a single instance that is shared
  injecting into any class that asks for it */
@Injectable({
  providedIn: 'root'
})

export class HeroService {
  
  getHeroes(): Observable<Hero[]> {
  	//TODO: send the message after fetching the heroes
  	this.messageService.add('HeroService: fetched heroes');
  	return of(HEROES);
  }

  constructor(private messageService: MessageService) { }
}
