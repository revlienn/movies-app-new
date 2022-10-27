import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
    moviesContainer: any = [];

    constructor(private moviesServiceVar: MoviesService) {}

    ngOnInit(): void {
        this.moviesServiceVar.getMovies().subscribe((response: any) => {
            this.moviesContainer = response.results;
            console.log(this.moviesContainer);
        });
    }
}
