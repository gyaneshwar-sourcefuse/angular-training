import { Component, OnInit } from '@angular/core';
import { fromEvent, map, Observable, Observer } from 'rxjs';

@Component({
  selector: 'app-rp',
  templateUrl: './rp.component.html',
  styleUrls: ['./rp.component.scss']
})
export class RpComponent implements OnInit {

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

    event.pipe(
      map((val: KeyboardEvent) => {
        console.log("map", val.code)
        return val;
      })
    ).subscribe({
      next: (res: KeyboardEvent) => {
        if (res.code === 'Escape') {
          element.value = "";
        }
        console.log("Res",res.key);
      },
      error: (err: Error) => console.log('err', err),
      complete: () => console.log('Finished')
    });
  }

}
