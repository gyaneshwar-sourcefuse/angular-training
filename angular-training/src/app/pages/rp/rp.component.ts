import { Component, OnInit } from '@angular/core';
import { debounceTime, distinctUntilChanged, filter, fromEvent, map, Observable, Observer, switchMap, tap } from 'rxjs';
import { ajax } from 'rxjs/ajax'

@Component({
  selector: 'app-rp',
  templateUrl: './rp.component.html',
  styleUrls: ['./rp.component.scss']
})
export class RpComponent implements OnInit {
  items$!: Observable<any[]>;

  constructor() {
    function sequenceSubscriber(observer: Observer<number>) {
      observer.next(1);
      observer.next(2);
      observer.next(3);
      observer.complete();

      return {
        unsubscribe() {},
      };
    }
    const sequence = new Observable(sequenceSubscriber);

    sequence.subscribe({
      next: (res: any) => console.log('res', res),
      error: (err: Error) => console.log('err', err),
      complete: () => console.log('Finished'),
    });

    
  }

  ngOnInit(): void {

    const element = document.getElementById('test')! as HTMLInputElement;
    const event = fromEvent<KeyboardEvent>(element, 'keydown');

    this.items$ = event.pipe(
      map((val) => (val.target as HTMLInputElement).value),
      filter((text) => text.length > 2),
      debounceTime(200),
      distinctUntilChanged(),
      tap((searchTerm: string) => console.log("Tap:", searchTerm)),
      switchMap(searchTerm => ajax(`https://api.github.com/search/users?q=${searchTerm}`)),
      map((data: any) => data?.response?.items ?? [])
    );
    
  }

}
