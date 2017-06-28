import { Injectable } from "@angular/core";

@Injectable()
export class CinemaMovies {
  movies: Array<Object> = [{
    id: 1,
    title: "The Imitation Game",
    poster: "http://www.impawards.com/2014/posters/imitation_game.jpg",
    synopsis: "Alan Turing was a British mathematician and codebreaker who helped the Allies to victory over Nazi Germany during World War II and was highly influential in the development of the computer through his invention of the Turing machine. He was also persecuted for his sexual identity, and was prosecuted for homosexual acts by the UK government in 1952, which at that time were still criminalised, and forced to undergo hormonal treatment. He died two years later from cyanide poisoning. This historical drama portrays the race against time Turing and his team of code-breakers were embroiled in during World War II, and the personal anguish of his subsequent conviction.",
    genres: ["Thriller", "Drama"],
    year: 2014,
    director: "Morten Tyldum",
    actors: ["Benedict Cumberbatch", "Keire Knightley"],
    hours: ["Wednesday - 19:00h, 21:30h", "Thursday - 18:30h, 21:00h", "Friday - 21:00h"],
    room: 1
  }, {
    id: 2,
    title: "Star Wars - The Force of Awakens",
    poster: "https://lumiere-a.akamaihd.net/v1/images/avco_payoff_1-sht_v7_lg_32e68793.jpeg?region=0%2C0%2C1620%2C2400&width=480",
    synopsis: "Thirty years after the defeat of the Empire, Luke Skywalker has vanished and a new threat has risen: The First Order, led by the mysterious Supreme Leader Snoke and his dark side enforcer, Kylo Ren. General Leia Organa’s military force, the Resistance — and unlikely heroes brought together by fate — are the galaxy’s only hope at thwarting a new reign of evil.",
    genres: ["Action", "Adventure", "Fantasy"],
    year: 2015,
    director: "J.J. Abrams",
    actors: ["Daisy Ridley", "John Boyega", "Oscar Isaac", "Harrison Ford"],
    hours: ["Wednesday - 19:45h", "Thursday - 18:50h", "Friday - 20:15h"],
    room: 2
  }, {
    id: 3,
    title: "Harry Potter and the Deathly Hallows: Part 2",
    poster: "http://www.impawards.com/2011/posters/harry_potter_and_the_deathly_hallows_part_two.jpg",
    synopsis: "Harry, Ron and Hermione search for Voldemort's remaining Horcruxes in their effort to destroy the Dark Lord as the final battle rages on at Hogwarts.",
    genres: ["Adventure", "Drama", "Fantasy"],
    year: 2011,
    director: "David Yates",
    actors: ["Daniel Radcliffe", "Emma Watson", "Rupert Grint"],
    hours: ["Wednesday - 17:00h, 20:30h", "Thursday - 17:50h, 21:20h", "Friday - 18:30h, 22:00h"],
    room: 3
  }, {
    id: 4,
    title: "The Theory of Everything",
    poster: "http://www.impawards.com/intl/uk/2014/posters/theory_of_everything_ver4_xlg.jpg",
    synopsis: "A look at the relationship between the famous physicist Stephen Hawking and his wife.",
    genres: ["Biography", "Drama", "Romance"],
    year: 2014,
    director: "James Marsh",
    actors: ["Eddie Redmayne", "Felicity Jones", "Tom Prior"],
    hours: ["Wednesday - 19:00h, 22:30h", "Thursday - 18:00h, 21:30h", "Friday - 18:30h, 22:00h"],
    room: 4
  }, {
    id: 5,
    title: "Fracture",
    poster: "http://www.impawards.com/2007/posters/fracture.jpg",
    synopsis: "An attorney, intent on climbing the career ladder toward success, finds an unlikely opponent in a manipulative criminal he is trying to prosecute.",
    genres: ["Crime", "Drama", "Mystery"],
    year: 2007,
    director: "Gregory Hoblit",
    actors: ["Anthony Hopkins", "Ryan Gosling", "David Stratharin"],
    hours: ["Wednesday - 19:00h, 21:00h", "Thursday - 18:00h, 20:00h", "Friday - 18:30h, 20:30h"],
    room: 5
  }];

  constructor () {}

  getMovies(): Array<Object> {
    return this.movies;
  }

  getMovie(id: number): Object {
    return this.movies.filter(movie => movie["id"] === id);
  }
}
