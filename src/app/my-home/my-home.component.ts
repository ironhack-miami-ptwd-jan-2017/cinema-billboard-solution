import { Component, OnInit } from '@angular/core';

import { CinemaMovies }      from "../services/cinema.service";

@Component({
  selector: 'app-my-home',
  templateUrl: './my-home.component.html',
  styleUrls: ['./my-home.component.css'],
  providers: [CinemaMovies]
})
export class MyHomeComponent implements OnInit {
  movies: Array<Object> = [];

  constructor(public cinema: CinemaMovies) { }

  ngOnInit() {
    this.movies = this.cinema.getMovies();
  }
}
