import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  matches: Array<number>;
  turnPlayer = true;
  scoreP1 = 0;
  scoreP2 = 0;

  constructor() {

  }

  ngOnInit() {
    this.matches = Array(20).fill(0);
  }

  /**
   * Play a turn for a player
   * @param event 
   */
  playTurn(event: any) {
    // Retrieve number of match and remove for each play
    if (this.matches.length > event.value) {
      this.matches.length = this.matches.length - event.value;
    } else {
      this.matches.length = 0;
    }

    // Needed to remove auto select form toggle
    event.source.buttonToggleGroup.value = undefined;

    // When no matches, score is gived
    if (this.matches.length === 0) {
      if (this.turnPlayer) {
        this.scoreP1++;
      } else {
        this.scoreP2++;
      }

      // Rerun a new game when score are gived
      this.matches = Array(20).fill(1);
    }

    this.turnPlayer = !this.turnPlayer;
  }

}
