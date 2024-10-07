import { Component } from '@angular/core';
import { ResultService } from '../../services/result.service';

@Component({
  selector: 'app-completed-quizes-list',
  templateUrl: './completed-quizes-list.component.html',
  styleUrls: ['./completed-quizes-list.component.scss'],
})
export class CompletedQuizesListComponent {
  constructor(private _result: ResultService) {}

  ngOnInit(): void {
    this.getCompletedQuizes();
  }

  getCompletedQuizes(): void {
    this._result.getCompletedQuizes().subscribe({
      next: (data) => console.log('data', data),
    });
  }
}
