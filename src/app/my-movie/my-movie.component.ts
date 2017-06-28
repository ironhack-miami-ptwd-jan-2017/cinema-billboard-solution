import { Component, OnInit } from '@angular/core';
import { ActivatedRoute }    from "@angular/router";

import { CinemaMovies }      from "../services/cinema.service";

@Component({
  selector: 'app-my-movie',
  templateUrl: './my-movie.component.html',
  styleUrls: ['./my-movie.component.css'],
  providers: [CinemaMovies]
})

export class MyMovieComponent implements OnInit {
  id: number;
  title: string = "";
  poster: string = "";
  genres: Array<string> = [];
  year: number;
  director: string = "";
  actors: Array<string> = [];
  hours: Array<string> = [];
  synopsis: string = "";
  room: number;

  constructor(public cinema: CinemaMovies, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.id = +params['id'];
      // the + sign simple converts the string into a number
      // the same as Number(params['id'];)
    });

    let movie = this.cinema.getMovie(this.id)[0];
    this.title    = movie.title;
    this.poster   = movie.poster;
    this.genres   = movie.genres;
    this.year     = movie.year;
    this.director = movie.director;
    this.actors   = movie.actors;
    this.hours    = movie.hours;
    this.synopsis = movie.synopsis;
    this.room     = movie.room;
  }
}
