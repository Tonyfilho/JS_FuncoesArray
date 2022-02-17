import { Component, OnInit } from '@angular/core';
import { ReduceService } from '../reduce.service';

@Component({
  selector: 'app-reduce-idade',
  templateUrl: './reduce-idade.component.html', 
})
export class ReduceIdadeComponent implements OnInit {
 results: any[] = [];
 pessoasMaiores: any[] = [];
 pessoasMenores: any[] = [];
 pessoasMaioresSpread: any[] = [];
 pessoasMenoresSpread: any[] = [];
  constructor(private reduceService: ReduceService) { }

  ngOnInit(): void {
   this.reduceService.getPeople(10).then((data: any) => {
    this.results = data.results;
    console.log('Results', this.results);
    /**
     * Reduce somente
     */
    this.pessoasMaiores = this.results.reduce((novo: any[], item, index: number, arrayAtual: any[]) => {
      const isHigher = arrayAtual.map((idade: any) => idade.dob.age >= 40);
       isHigher[index] ? novo.push(item) : null
      return novo;
    },[]);

   this.pessoasMenores = this.results.reduce((novo: any[], item, index: number, arrayAtual: any[]) => {
     const isLesser = arrayAtual.map((idade: any) => idade.dob.age < 40);
     isLesser[index] ? novo.push(item) : null;
     return novo
   },[]);
   /**
    * Reduce com Spread
    */
    this.pessoasMaioresSpread = this.results.reduce((novo: any[], item, index: number, arrayAtual: any[]) => {
      const isHigher = arrayAtual.map((idade: any) => idade.dob.age >= 40);
      return [...novo, isHigher[index] ? item : null].filter(itemFilter => itemFilter != null)
    },[]);

    this.pessoasMenoresSpread = this.results.reduce((novo: any[], item, index: number, arrayAtual: any[]) => {
      const isLesser = arrayAtual.map((idade: any) => idade.dob.age < 40);
      return [...novo, isLesser[index] ? item : null].filter(itemInFilter => itemInFilter != null);
    }, [])


   /**
    * Bloco do console
    */
   console.group('Pessoas Maiores com REDUCE');
   console.log(this.pessoasMaiores);
   console.log(this.pessoasMenores);
   console.groupEnd();
   console.group('Pessoas Maiores com REDUCE e Spread');
   console.log(this.pessoasMaioresSpread);
   console.log(this.pessoasMenoresSpread);
   console.groupEnd();

   });




  }//end NG

}
