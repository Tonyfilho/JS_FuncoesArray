import { Component, OnInit } from '@angular/core';
import { ReduceService } from '../reduce.service';

@Component({
  selector: 'app-reduce',
  templateUrl: './reduce.component.html',
})
export class ReduceComponent implements OnInit {
  results: any[] = [];
  todosHomens: any[] = [];
  todasMulheres: any[] = [];
  todosHomensComSpread: any[] = [];
  todasMulheresComSpread: any[] = [];
  constructor(private reduceService: ReduceService) {}

  ngOnInit(): void {
    /**
     * somente homens ou mulheres
     */
    this.reduceService.getPeople(10).then((data: any) => {
      console.log(data.results);
      this.results = data.results;
      this.todosHomens = this.results.reduce(
        (novo: any, item, index: number, arrayAtual: any[]) => {
          const isMan = arrayAtual.map((sexo: any) => sexo.gender == 'male');
          isMan[index] ? novo.push(item) : null;
          return novo;
        },
        []
      );
      this.todasMulheres = this.results.reduce(
        (novo: any[], item, index: number, arrayAtual: any[]) => {
          const isFemale = arrayAtual.map((sex) => sex.gender == 'female');
          isFemale[index] ? novo.push(item) : undefined;
          return novo;
        },
        []
      );
      console.log('Somente Homens', this.todosHomens);
      console.log('Somente Mulheres', this.todasMulheres);
      /**
       * Somente Homens e Mulheres Usando o Spread
       */
      this.todosHomensComSpread = this.results.reduce(
        (novo: any[], item, index: number, arrayAtual: any[]) => {
          const isMale = arrayAtual.map((sex) => sex.gender == 'male');
          return [...novo, isMale[index] ? item : null].filter(
            (item) => item != null
          );
        },
        []
      );
      this.todasMulheresComSpread = this.results.reduce(
        (novo: any[], item, index: number, arrayAtual: any[]) => {
          const isFemale = arrayAtual.map((sex) => sex.gender == 'female');
          return [...novo, isFemale[index] ? item : null].filter(
            (tiraNull) => tiraNull != null
          );
        },
        []
      );

      console.log('Somente Homens com Spread', this.todosHomensComSpread);
      console.log('Somente Mulheres com Spread', this.todasMulheresComSpread);
    });
  } //end NG
}
