import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  clickHandler() {
    const confirm = prompt('Yo you wanna hit that?');
    if (confirm === 'yes') {
      this.router.navigate(['animals']);
    }
  }

}
