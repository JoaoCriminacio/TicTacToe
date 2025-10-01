import { Component } from '@angular/core';
import {TicTacToeComponent} from '../../shared/components/tic-tac-toe/tic-tac-toe.component';
import {IPlayer} from '../../shared/models/player.model';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [
    TicTacToeComponent,
    NgClass
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
    protected players: IPlayer[] = [
      {
        name: 'Jayson Tatum',
        imageName: 'jayson-tatum',
        src: 'players/jayson-tatum.jpg'
      },
      {
        name: 'Kobe Bryant',
        imageName: 'kobe-bryant',
        src: 'players/kobe-bryant.jpg'
      },
      {
        name: 'Kyrie Irving',
        imageName: 'kyrie-irving',
        src: 'players/kyrie-irving.jpg'
      },
      {
        name: 'Larry Bird',
        imageName: 'larry-bird',
        src: 'players/larry-bird.jpg'
      },
      {
        name: 'Lebron James',
        imageName: 'lebron-james',
        src: 'players/lebron-james.jpg'
      },
      {
        name: 'Luka Dončić',
        imageName: 'luka-doncic',
        src: 'players/luka-doncic.jpg'
      },
      {
        name: 'Magic Johnson',
        imageName: 'magic-johnson',
        src: 'players/magic-johnson.jpg'
      },
      {
        name: 'Michael Jordan',
        imageName: 'michael-jordan',
        src: 'players/michael-jordan.jpg'
      },
      {
        name: 'Nenê Hilário',
        imageName: 'nene-hilario',
        src: 'players/nene-hilario.jpg'
      },
      {
        name: 'Nikola Jokic',
        imageName: 'nikola-jokic',
        src: 'players/nikola-jokic.jpg'
      },
      {
        name: "Shaquille O'Neal",
        imageName: 'shaquille-oneal',
        src: 'players/shaquille-oneal.jpg'
      },
      {
        name: "Stephen Curry",
        imageName: 'stephen-curry',
        src: 'players/stephen-curry.jpg'
      }
    ];

    protected isMatchInProgress: boolean = false;
    protected player1: IPlayer | undefined = undefined;
    protected player2: IPlayer | undefined = undefined;

    protected selectPlayer (player: IPlayer, side: 'player1' | 'player2') {
      side === 'player1' ? this.player1 = player : this.player2 = player;
    }

    protected startMatch() {
      this.isMatchInProgress = true;
    }

    protected finishMatch() {
      this.player1 = undefined;
      this.player2 = undefined;
      this.isMatchInProgress = false;
    }
}
