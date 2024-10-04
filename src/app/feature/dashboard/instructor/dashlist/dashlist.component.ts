import { DashlistService } from './../dashlist.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-dashlist',
  templateUrl: './dashlist.component.html',
  styleUrls: ['./dashlist.component.scss']
})
export class DashlistComponent {
  constructor(private _DashlistService:DashlistService){}
  students:any
  images: string[] = [
    '../../../../../assets/images/user img.svg',
    '../../../../../assets/images/user img.png',
    '../../../../../assets/images/2.svg',
    '../../../../../assets/images/4.png',
    '../../../../../assets/images/user img.svg',
  ];
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
