import { Component, Input } from '@angular/core';
import { Game } from 'app/shared/models/game-model';
import { Player } from 'app/shared/models/player-model';

@Component({
  selector: 'app-points',
  templateUrl: './points.component.html',
  styleUrls: ['./points.component.css']
})
export class PointsComponent {

  @Input()
  title: string;

  @Input()
  fouls: boolean;

  @Input()
  game: Game;

  @Input()
  player1: Player;

  @Input()
  player2: Player;

  reds = false;
  yellow = false;
  green = false;
  brown = false;
  blue = false;
  pink = false;
  black = false;

  updateScore(number: number) {
    if (this.player1.playing === true) {
      this.player1.score = this.player1.score + number;
      this.player1.actualScore = this.player1.actualScore + number;
    } else if (this.player2.playing === true) {
      this.player2.score = this.player2.score + number;
      this.player2.actualScore = this.player2.actualScore + number;
    }
    if (!this.fouls) {
      this.updateRemaining();
      this.game.diff = this.calculateDiff(this.player1.score, this.player2.score);
    }
  }

  updateFoul(number: number) {
    if (this.player1.playing === true) {
      this.player2.score = this.player2.score + number;
    } else if (this.player2.playing === true) {
      this.player1.score = this.player1.score + number;
    }
  }

  updateRemaining() {
    this.game.remainingPoints = this.game.maxScore - (this.game.players[0].actualScore + this.game.players[1].actualScore);
  }

  calculateDiff(num1: number, num2: number): number {
    if (num1 > num2) {
      return num1 - num2;
    } else if (num2 > num1) {
      return num2 - num1;
    } else {
      return 0;
    }
  }

  decrementReds() {
    if (this.game.reds >= 1) {
      this.game.reds = this.game.reds - 1;
    }
    if (this.game.reds === 0) {
      this.reds = true;
    }
  }

  disableColour(colour: string) {
    // if (this.reds && colour === 'yellow') {
    //   this.yellow = true;
    // }
    // if (this.reds && colour === 'green') {
    //   this.green = true;
    // }
    // if (this.reds && colour === 'brown') {
    //   this.brown = true;
    // }
    // if (this.reds && colour === 'blue') {
    //   this.blue = true;
    // }
    // if (this.reds && colour === 'pink') {
    //   this.pink = true;
    // }
    // if (this.reds && colour === 'black') {
    //   this.black = true;
    // }
  }
}
