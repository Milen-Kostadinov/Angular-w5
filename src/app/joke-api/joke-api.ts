import { HttpClient } from "@angular/common/http";
import { Injectable, inject } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class JokeApi{
    private http = inject(HttpClient)
    public getProgrammingJokes(){
        return this.http.get('https://v2.jokeapi.dev/joke/Programming?type=twopart&amount=10')
    }
    public getDarkJokes(){
        return this.http.get('https://v2.jokeapi.dev/joke/Dark?type=twopart&amount=10')
    }
    public getPunJokes(){
        return this.http.get('https://v2.jokeapi.dev/joke/Pun?type=twopart&amount=10')
    }
}