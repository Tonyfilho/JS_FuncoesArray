import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter-find-includes',
  templateUrl: './filter-find-includes.component.html',
})
export class FilterFindIncludesComponent implements OnInit {
  /**
   * Aula de Filter(), Find() Includes(),
   * Use o Filter() para descobrir algo em um array ou objeto
   */

  numeros = [1, 2, 5, 3, 8, 7, 9, 2, 3, 5];
  numero2Existe: number[] = [];
  numero2ExisteComInclude!: boolean;
  numerosPares: number[] = [];
  constructor() {
    this.numerosPares = this.numeros.filter((item) => item % 2 == 0);
    this.numero2Existe = this.numeros.filter((numero) => numero == 2);
    /*  
    *Fazer pesquisa dentro de um array ou objeto 
    
    */
    this.numero2ExisteComInclude = this.numeros.filter(n => n).includes(2);

  
  }

  ngOnInit(): void {
    console.group('Filter Numeros');
    console.table(this.numeros);
    console.table(this.numerosPares);
    console.table(this.numero2Existe);
    console.table(this.numero2Existe);

    console.groupEnd();

    console.group('Referencia de Memoria');
    console.groupEnd();
  }
}
