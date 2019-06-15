import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';
import { switchMap, map, first, pluck } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { analyzeAndValidateNgModules } from '@angular/compiler';

@Component({
  selector: 'app-animal-details',
  templateUrl: './animal-details.component.html',
  styleUrls: ['./animal-details.component.sass']
})
export class AnimalDetailsComponent implements OnInit {
  animals: any[] = [];
  animal: any;
  constructor(private route: ActivatedRoute) {
    this.animals.push({name: 'Lion', desc: 'King'});
    this.animals.push({name: 'Tiger', desc: 'Big Cat'});
    this.animals.push({name: 'Cheetah', desc: 'Fast'});
   }

  ngOnInit() {
// Normal way:

    // this.animal = this.route.paramMap.pipe(
    //   switchMap(
    //     params => {
    //       const name = params.get('name');
    //       return this.animals.filter(r => r.name === name);
    //     }
    //   )
    // );


// Using guards - data is fetched from guard

    // working code

    // using map
    // this.animal = this.route.data.pipe(
    //   map(val => val['0'])
    // );

    // using pluck
    this.animal = this.route.data.pipe(
      pluck('0')
      // map(val => val['0'])
    );


    // not efficient 
    // this.route.data.subscribe(
    //   val => this.animal = of(val['0'])
    // );




// Below code doesn't work


    // this.route.data.pipe(
    //   switchMap
    // );

    // subscribe(
    //   val => this.animal = of(val['0'])
    // );

    // this.route.data.subscribe(val => this.animal = val);
    // console.log(this.animal);


    // this.animal = this.route.data.pipe(
    //   switchMap(
    //     animal => {
    //       const temp = animal.subscibe(val => val['0']);
    //       return of(temp);
    //     }
    //   )
    // );

    // this.animal = this.route.data;
    // console.log(this.animal);

    // this.animal = this.route.data.subscribe();
    // console.log(this.animal);

    // this.route.data.subscribe((r: any) => this.animal = r);
    // console.log(this.animal);
  }

}
