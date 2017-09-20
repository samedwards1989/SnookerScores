import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs/Observable';

import { Player } from 'app/shared/models/player-model';
import { Game } from 'app/shared/models/game-model';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Snooker Scores';
  game: Game = new Game;
  player1: Player = new Player;
  player2: Player = new Player;
  form: FormGroup;
  formBuilt = false;
  gameInProgress = false;

  constructor(public formbuilder: FormBuilder) {
  }

  ngOnInit() {
    this.createPlayers();
  }

  newGame() {
    // build form
    this.form = this.formbuilder.group({
      'player1Name': '',
      'player2Name': ''
    });
    this.formBuilt = true;
  }

  startGame() {
    this.game.players.push(this.player1, this.player2);
    this.gameInProgress = true;
  }

  endGame() {
    this.reset();
    this.formBuilt = false;
    this.gameInProgress = false;
  }

  reset() {
    this.createPlayers();
    this.game.players = [];
    this.game.remainingPoints = null;
    this.game.diff = null;
  }

  createPlayers() {
    this.game.players = [];
    this.player1.name = '';
    this.player2.name = '';
    this.player1.score = 0;
    this.player2.score = 0;
    this.player1.actualScore = 0;
    this.player2.actualScore = 0;
    this.player1.playing = true;
    this.player2.playing = false;
    this.game.reds = 15;
  }

  switchPlayers() {
    if (this.player1.playing === true) {
      this.player1.playing = false;
      this.player2.playing = true;
      return;
    } else if (this.player2.playing === true) {
      this.player1.playing = true;
      this.player2.playing = false;
      return;
    }
  }
}
