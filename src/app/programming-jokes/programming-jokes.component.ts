import { Component, inject } from "@angular/core";
import { JokeApi } from "../joke-api/joke-api";
import { Joke } from "../joke/joke.component";

@Component({
    selector: 'programming-jokes',
    standalone: true,
    imports: [Joke],
    styleUrl: './programming-jokes.component.css',
    templateUrl: './programming-jokes.component.html'
})
export class ProgrammingJokes{
    private apiJokes = inject(JokeApi);
    public programmingJokes: any = [{
        id: 0,
        setup: "",
        delivery: ""
    }];
    public ngOnInit(){
        this.apiJokes.getProgrammingJokes().subscribe((data: any) =>{
            const jokes = data.jokes;
            for(const joke of jokes){
                this.programmingJokes.push({
                    id: joke.id,
                    setup: joke.setup,
                    delivery: joke.delivery
                })
            }
        });
    }
}