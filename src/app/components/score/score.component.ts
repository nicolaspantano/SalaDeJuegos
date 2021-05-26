import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Score } from 'src/app/clases/score';
import { ScoreService } from 'src/app/services/score.service';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.css']
})
export class ScoreComponent implements OnInit {

  @Input() juego:string;

  scores: any;
  constructor(private scoreSvc:ScoreService) { 
    
    //Si pongo el getscores en el constructor no anda

  }

  ngOnInit(): void {
    this.scores=this.scoreSvc.getScores(this.juego).valueChanges();
    console.log("scores",this.scores);
    console.log("tipo:",typeof(this.scores));
  }

}
