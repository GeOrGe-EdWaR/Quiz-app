import { Group } from './../../../group/interfaces/group';
import { Result } from './../../../../../student/modules/result/interfaces/result';
import { Component, OnInit } from '@angular/core';
import { ResultService } from '../../services/result.service';
import { ListColumn } from 'src/app/shared/interfaces/list-column';
import { MaintainQuestionResponse } from '../../../questions/interfaces/maintain-question-response';
import { Router } from '@angular/router';
import { GroupService } from '../../../group/services/group.service';


@Component({
  selector: 'app-completed-quizes-list',
  templateUrl: './completed-quizes-list.component.html',
  styleUrls: ['./completed-quizes-list.component.scss'],
})
export class CompletedQuizesListComponent implements OnInit {
  constructor(private _ResultService:ResultService, private router:Router, private groupService: GroupService,){
    this.columns = this._ResultService.listColumns;
  }
  
  ngOnInit(): void {
    this.getAllQuestionsresults()
  }
  columns: ListColumn[] = [];
  ResultsList:any
  length!: number;
  pageSize = 10;
  groups:any
  pageIndex = 0;
  paginatedresultList:any
  onViewAction(question: MaintainQuestionResponse): void {
this.router.navigate(['dashboard/instructor/results/view'])
   
  }

  getAllQuestionsresults(): void {
    this._ResultService.getCompletedQuizesresult().subscribe({
      next: (res:any) => {
        this.length = res.length;
       this.groups=res
       
        res.forEach((ele:any) => {
          const {title,group,difficulty}=ele.quiz;
    ele.title=title
    ele.difficulty=difficulty
ele.group=group
   this.getGroupById(ele.group).subscribe((group) => {
            ele.group = group.name;
            console.log( ele.quiz.group)
          });
        });
        this.ResultsList = res;
        console.log(this.ResultsList)
      this.updatePaginatedQuestions()
      },
    });
  }
  getGroupById(groupID: any) {
    return this.groupService.getGroupById(groupID);
  }
  onPaginationAction(event: any): void {
    this.length = event.length;
    this.pageSize = event.pageSize;
    this.pageIndex = event.pageIndex;

  this.updatePaginatedQuestions()
  }
  updatePaginatedQuestions(): void {
    this.paginatedresultList = this.ResultsList.slice(
      this.pageIndex * this.pageSize,
      this.pageIndex * this.pageSize + this.pageSize
    );
  }

}
