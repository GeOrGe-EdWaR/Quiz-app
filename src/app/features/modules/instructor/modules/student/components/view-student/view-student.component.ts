import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-student',
  templateUrl: './view-student.component.html',
  styleUrls: ['./view-student.component.scss']
})
export class ViewStudentComponent {

  pageId: number = 0;

  constructor( private _ActivatedRoute: ActivatedRoute){
    this.pageId = _ActivatedRoute.snapshot.params['id'];
  }

}
