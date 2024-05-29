import { Component, Input } from "@angular/core";

@Component({
    selector: 'app-joke',
    standalone: true,
    styleUrl: './joke.component.css',
    templateUrl: './joke.component.html'
})
export class Joke{
    @Input() jokeID;
    @Input() jokeSetup;
    @Input() jokeDelivery; 
}