import { Component } from '@angular/core';
import { QuizService } from './../../services/quiz.service';
import { QuizResponse } from '../../interfaces/quizResponse';
import { Answer } from '../../interfaces/answer';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quiz-page',
  templateUrl: './quiz-page.component.html',
  styleUrls: ['./quiz-page.component.scss'],
})
export class QuizPageComponent {
  questions: QuizResponse;
  answers: Answer[] = [];
  selectedAnswers: { [key: string]: string } = {};

  constructor(
    private quizService: QuizService,
    private toastrService: ToastrService,
    private router: Router
  ) {}

  ngOnInit() {
    this.questions = this.quizService.questions;
  }

  chooseAnswer(questionId: string, selectedOption: string) {
    this.selectedAnswers[questionId] = selectedOption;
    console.log(this.selectedAnswers);

    const existingAnswer = this.answers.find(
      (answer) => answer.question === questionId
    );
    if (existingAnswer) {
      existingAnswer.answer = selectedOption;
    } else {
      this.answers.push({ question: questionId, answer: selectedOption });
    }
  }

  submitQuiz() {
    const answersData = {
      answers: this.answers,
    };
    this.quizService
      .submitQuiz(answersData, this.questions.data._id)
      .subscribe({
        next: () => {
          this.toastrService.success('Submitted quiz successfully', 'Success');
          this.router.navigate(['/dashboard/student/quizzes']);
        },
      });
  }

  resetAnswers() {
    this.answers = [];
    this.selectedAnswers = {};
  }
}
