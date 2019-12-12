// import { Component, OnInit } from '@angular/core';
// import { Observable, Subject } from 'rxjs';

// import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';

// import { Food } from '../_models/food.model';
// import { DatabaseService } from '../_services/database.service';

// @Component({
//   selector: 'app-food-search',
//   templateUrl: './food-search.component.html',
//   styleUrls: ['./food-search.component.css']
// })
// export class FoodSearchComponent implements OnInit {
//   foods$: Observable<Food[]>;
//   private searchTerms = new Subject<string>();

//   constructor(private DatabaseService: DatabaseService) { }

//   // Push a search term into the observable stream.
//   search(term: string): void {
//     this.searchTerms.next(term);
//   }

//   ngOnInit(): void {
//     this.foods$ = this.searchTerms.pipe(
//       // wait 300ms after each keystroke before considering the term
//       debounceTime(300),

//       // ignore new term if same as previous term
//       distinctUntilChanged(),

//       // switch to new search observable each time the term changes
//       switchMap((term: string) => this.DatabaseService.searchFood(term)),
//     );
//   }

// }
