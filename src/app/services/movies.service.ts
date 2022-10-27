import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root' //root==can be used anywhere
})
export class MoviesService {
    constructor(private httpVar: HttpClient) {}

    getMovies() {
        return this.httpVar.get(
            'https://api.themoviedb.org/3/movie/popular?api_key=3310bb80e09cd380e0611a0ef3886c03&language=en-US&page=1&region=us'
        );
    }
}
