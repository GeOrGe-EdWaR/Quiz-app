import { Component } from '@angular/core';
import { DashlistService } from '../../dashlist.service';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent  {
  constructor(private _DashlistService:DashlistService){}
  students:any
  images: string[] = [
    '../../../../../assets/images/user img.svg',
    '../../../../../assets/images/user img.png',
    '../../../../../assets/images/2.svg',
    '../../../../../assets/images/4.png',
    '../../../../../assets/images/user img.svg',
  ];
  data: any[] = [];
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = this.data;
  ngOnInit(): void {
    this.gettops()
    this.getquiz()
  }
  gettops(){
    this._DashlistService.topstudents().subscribe({
      next:(res)=>{
  this.students=res
  console.log(res)
      }
    })
  }
  getquiz(){
    this._DashlistService.topquiz().subscribe({
      next:(res)=>{
  
  console.log(res)
      }
    })
  }

}
