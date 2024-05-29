import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { StartMenu } from './app/start-menu/start-menu.component';
import { Joke } from './app/joke/joke.component';
import { DarkJokes } from './app/dark-jokes/dark-jokes.component';
import { ProgrammingJokes } from './app/programming-jokes/programming-jokes.component';

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(),
    provideRouter([
      {
        path: 'home',
        component: StartMenu
      },
      {
        path: 'programming-jokes',
        component: ProgrammingJokes
      },
      {
        path: 'dark-jokes',
        component: DarkJokes
      },
      {
        path: 'pun-jokes',
        component: DarkJokes
      }
    ])
  ]
})
  .catch((err) => console.error(err));
