import { outputAst } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, RouteConfigLoadEnd, Router } from '@angular/router';

@Component({
  selector: 'app-winner-page',
  templateUrl: './winner-page.component.html',
  styleUrls: ['./winner-page.component.css']
})
export class WinnerPageComponent implements OnInit {
  winner: string;

  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.winner = this.route.snapshot.params['winner'];
  }

  playAgain() {
    this.router.navigate(['/xo']);

  }

}
