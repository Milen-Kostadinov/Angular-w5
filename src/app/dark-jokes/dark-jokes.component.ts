import { Component, inject } from "@angular/core";
import { JokeApi } from "../joke-api/joke-api";
import { Joke } from "../joke/joke.component";

@Component({
    selector: 'dark-jokes',
    standalone: true,
    imports: [Joke],
    styleUrl: './dark-jokes.component.css',
    templateUrl: './dark-jokes.component.html'
})
export class DarkJokes{
    private jokeApi = inject(JokeApi);
    public darkJokes: any = [{
        id: 0,
        setup: "",
        delivery: ""
    }];
    public ngOnInit(){
        this.jokeApi.getDarkJokes().subscribe((data: any) => {
            const jokes = data.jokes;
            for(const joke of jokes){
                this.darkJokes.push({
                    id: joke.id,
                    setup: joke.setup,
                    delivery: joke.delivery
                })
            }
        })
    }
}