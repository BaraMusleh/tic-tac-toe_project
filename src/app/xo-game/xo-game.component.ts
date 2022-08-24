import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-xo-game',
  templateUrl: './xo-game.component.html',
  styleUrls: ['./xo-game.component.css']
})
export class XoGameComponent implements OnInit {
  itsX = false;
  squares = Array(9).fill(null);
  winner: string = null;

  constructor(private router: Router) { }

  ngOnInit(): void {

  }

  makeMove(idx: number) {
    if (!this.squares[idx]) {
      if (this.itsX) {
        this.squares.splice(idx, 1, "X");
      } else {
        this.squares.splice(idx, 1, "O");
      }

    }
    this.winner = this.calculateWinner();

  }


  xTurn() {
    this.itsX = true;
  }

  oTurn() {
    this.itsX = false;
  }

  reset() {
    this.squares = Array(9).fill(null)
  }

  calculateWinner() {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (this.squares[a] && this.squares[a] === this.squares[b] && this.squares[a] === this.squares[c]) {
        this.router.navigate(['/winner', this.squares[a]]);
        return this.squares[a];
      }
    }
    return null;
  }

}