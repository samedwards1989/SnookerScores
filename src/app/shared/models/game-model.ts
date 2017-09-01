import { Player } from 'app/shared/models/player-model';

export class Game {
  players: Player[];
  maxScore = 147;
  remainingPoints: number;
}
