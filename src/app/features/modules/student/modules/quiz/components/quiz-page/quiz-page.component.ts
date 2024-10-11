import { Component } from '@angular/core';
import { QuizService } from './../../services/quiz.service';

@Component({
  selector: 'app-quiz-page',
  templateUrl: './quiz-page.component.html',
  styleUrls: ['./quiz-page.component.scss'],
})
export class QuizPageComponent {
  constructor(private quizService: QuizService) {}

  ngOnInit() {
    console.log(this.quizService.questions);
  }
}
