import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-animals',
  templateUrl: './animals.component.html',
  styleUrls: ['./animals.component.scss']
})
export class AnimalsComponent implements OnInit {
  animals: any[] = [];

  constructor() {
    this.animals.push({name: 'Lion', desc: 'King'});
    this.animals.push({name: 'Tiger', desc: 'Big Cat'});
    this.animals.push({name: 'Cheetah', desc: 'Fast'});
  }

  ngOnInit() {
  }

}
