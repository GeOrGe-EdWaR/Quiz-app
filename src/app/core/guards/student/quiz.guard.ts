import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { QuizService } from 'src/app/features/modules/student/modules/quiz/services/quiz.service';

export const quizGuard: CanActivateFn = (route, state) => {
  const quizService = inject(QuizService);
  const router = inject(Router);
  if (quizService.questions) {
    return true;
  } else {
    router.navigate(['/dashboard/student/quizzes']);
    return false;
  }
};
