import { Component, OnInit } from '@angular/core';
import { interval, merge, Observable, of, timer } from 'rxjs';
import { filter, first, map, takeUntil } from 'rxjs/operators';


@Component({
  selector: 'app-exercise',
  templateUrl: './exercise.component.html',
  styleUrls: ['./exercise.component.scss']
})
export class ExerciseComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const firstObservable = this.emitNumbers();

    const firstSubscription = firstObservable.subscribe({
      // on successful emissions
      next: eventValue => console.log(eventValue),
      // on errors
      error: error => console.log(error),
      // called once on completion
      complete: () => console.log('complete first exercise!')
    });

    firstSubscription.unsubscribe();

    /*
    const secondObservable = timer(1000, 2000);
    //output: 0,1,2,3,4,5......
    const secondSubscription = secondObservable.pipe(
      // only accept values less than 3 and greater than 0
      filter(value => value>0 && value <= 3),
      ).subscribe({
        // on successful emissions
        next: eventValue => {
          if(eventValue == 4){
            console.log('complete second exercise!')
            secondSubscription.unsubscribe();
          }
          else
            console.log(eventValue)
          },
          // on errors
          error: error => console.log(error),

        });*/

    //emit value every 1s
    const source = interval(1000);
    //after 5 seconds, emit value
    const mytimer = timer(5000);
    //when timer emits after 1s, complete source
    const example = source.pipe(filter(value => value>0 && value <= 3),takeUntil(mytimer));
    //output: 1,2,3
    const subscribe = example.subscribe({
      next: eventValue => console.log(eventValue),
      // on errors
      error: error => console.log(error),
      // called once on completion
      complete: () => console.log('complete second exercise!')
    });

    const tirthObservable = this.emitNumbers();

    const thirthSubscription = tirthObservable.pipe(
      // add 1 to each emitted value
      map(value => value *2)
      )
      .subscribe({
        // on successful emissions
        next: eventValue => console.log(eventValue),
        // on errors
        error: error => console.log(error),
        // called once on completion
        complete: () => console.log('complete thirt exercise!')
      });

      thirthSubscription.unsubscribe();

      let list1: Observable<number[]>=of([1, 2, 3]);
      let list2: Observable<number[]>=of([4, 5, 6]);
      let final_val = merge(list1, list2);
      final_val.subscribe({
        // on successful emissions
        next: eventValue => console.log(eventValue),
        // on errors
        error: error => console.log(error),
        // called once on completion
        complete: () => console.log('complete fourth exercise!')
      });

  }

  emitNumbers():Observable<number>{
    return of(1, 2, 3);
  }

}
