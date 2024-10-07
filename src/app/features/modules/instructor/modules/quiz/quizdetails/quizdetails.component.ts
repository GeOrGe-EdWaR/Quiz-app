import { Component, OnInit } from '@angular/core';
import { QuizService } from '../quiz.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-quizdetails',
  templateUrl: './quizdetails.component.html',
  styleUrls: ['./quizdetails.component.scss']
})
export class QuizdetailsComponent  implements OnInit{
constructor(private _QuizService:QuizService,private _ActivatedRoute:ActivatedRoute){
this.pageid=this._ActivatedRoute.snapshot.params['id']
}
ngOnInit(): void {
  this.getDetails(this.pageid)
}
details:any
pageid:string=''
getDetails(id:string){
  this._QuizService.quizDetails(id).subscribe({
    next:(res)=>{
      this.details=res
      console.log(this.details)
    }
  })
}
}
