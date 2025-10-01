import {Component, effect, input} from '@angular/core';
import {IPlayer} from '../../models/player.model';

@Component({
  selector: 'app-tic-tac-toe',
  imports: [],
  templateUrl: './tic-tac-toe.component.html',
  styleUrl: './tic-tac-toe.component.css'
})
export class TicTacToeComponent {
    protected player1 = input<IPlayer>();
    protected player2 = input<IPlayer>();

    protected board: (string | undefined)[] = Array(9).fill(null);
    protected currentPlayer: string | undefined = this.player1()?.name;
    protected winner: string | undefined = undefined;

    private winningCombinations: number[][] = [
      [0,1,2],[3,4,5],[6,7,8],
      [0,3,6],[1,4,7],[2,5,8],
      [0,4,8],[2,4,6]
    ];

    constructor() {
      effect(() => {
        if (this.player1() && this.player2() && !this.currentPlayer) {
          this.currentPlayer = this.player1()?.name;
        }
      });
    }

    protected  get isDraw() {
      return this.board.every(cell => !!cell) && !this.winner;
    }

    protected playMove(index: number) {
      if (!this.board[index] && !this.winner) {
        this.board[index] = this.currentPlayer === this.player1()?.name ? this.player1()?.src : this.player2()?.src;
        if (this.checkWinner()) {
          this.winner = this.currentPlayer;
        } else {
          this.currentPlayer = this.currentPlayer === this.player1()?.name ? this.player2()?.name : this.player1()?.name;
        }
      }
    }

    protected checkWinner() {
      return this.winningCombinations.some(comb =>
        comb.every(i => this.board[i] === (this.currentPlayer === this.player1()?.name ? this.player1()?.src : this.player2()?.src))
      );
    }

    protected reset() {
      this.board = Array(9).fill(null);
      this.currentPlayer = this.player1()?.name;
      this.winner = undefined;
    }
}
