import { Component, OnInit, Input } from '@angular/core';
import { Player } from 'app/shared/models/player-model';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css']
})
export class PlayerComponent implements OnInit {

  @Input() player: Player;

  constructor() { }

  ngOnInit() {
    this.resetScores();
  }

  resetScores() {
    this.player.score = 0;
  }

}
