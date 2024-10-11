import { Component } from '@angular/core';

import { MatDialog, MatDialogRef } from '@angular/material/dialog';

import { ViewResultComponent } from '../view-result/view-result.component';

@Component({
  selector: 'app-result-list',
  templateUrl: './result-list.component.html',
  styleUrls: ['./result-list.component.scss'],
})
export class ResultListComponent {
  resultDialogRef: MatDialogRef<ViewResultComponent>;

  constructor(private dialog: MatDialog) {}

  showResult(): void {
    this.resultDialogRef = this.dialog.open(ViewResultComponent, {
      minWidth: '50%',
      data: {
        // Replace with result row
        quiz: {
          _id: '67082762da1e25f65c8f7249',
          code: 'S9AVJCT',
          title: 'test quiz for group A',
          description: 'test',
          status: 'closed',
          instructor: '66fa02adda1e25f65c8e5a4d',
          group: '66ff4af2da1e25f65c8e6885',
          questions_number: 2,
          schadule: '2024-10-10T22:20:00.000Z',
          duration: 5,
          score_per_question: 2,
          type: 'BE',
          difficulty: 'hard',
          updatedAt: '2024-10-10T22:26:00.629Z',
          createdAt: '2024-10-10T19:13:38.058Z',
          __v: 0,
          closed_at: '2024-10-10T22:26:00.629Z',
        },
        result: {
          _id: '67082775da1e25f65c8f7252',
          quiz: {
            _id: '67082762da1e25f65c8f7249',
            title: 'test quiz for group A',
          },
          participant: {
            _id: '66fccc6cda1e25f65c8e6117',
            first_name: 'ola',
            last_name: 'fawzii',
            email: 'olafawzii@gmail.com',
          },
          score: 0,
          started_at: '2024-10-10T19:13:57.165Z',
          finished_at: '2024-10-10T19:17:05.477Z',
        },
      },
    });
  }
}
