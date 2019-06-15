import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Resolve } from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PreloadGuard implements Resolve<any> {
  animals: any[] = [];

  constructor() {
    this.animals.push({name: 'Lion', desc: 'King'});
    this.animals.push({name: 'Tiger', desc: 'Big Cat'});
    this.animals.push({name: 'Cheetah', desc: 'Fast'});
   }

   resolve(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<any> {
    // state: RouterStateSnapshot): any {
      const name = next.paramMap.get('name');
      // console.log(this.animals.filter(r => r.name === name).shift());
      // return this.animals.filter(r => r.name === name).shift();


      // return new Observable(obs => {
      //   obs.next(this.animals.filter(r => r.name === name).shift());
      //   console.log(this.animals.filter(r => r.name === name).shift());
      //   obs.complete();
      // });

      return of(this.animals.filter(r => r.name === name).shift());
  }
}
