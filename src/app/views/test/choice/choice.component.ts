import {Component} from '@angular/core';
import {TestService} from "../../../shared/services/test.service";
import {QuizListType} from "../../../../types/quiz-list.type";
import {AuthService} from "../../../core/auth/auth.service";
import {DefaultResponseType} from "../../../../types/default-response.type";
import {TestResultType} from "../../../../types/test-result.type";

@Component({
  selector: 'app-choice',
  templateUrl: './choice.component.html',
  styleUrls: ['./choice.component.scss']
})
export class ChoiceComponent {

  quizzes: QuizListType[] = [];
  testResult: TestResultType[] | null = null;

  constructor(private testService: TestService, private authService: AuthService) {
  }

  ngOnInit(): void {
    this.testService.getTests()
      .subscribe((result: QuizListType[]) => {
        this.quizzes = result;


        const userInfo = this.authService.getUserInfo();
        if (userInfo) {
          this.testService.getUserResults(userInfo.userId)
            .subscribe((result: DefaultResponseType | TestResultType[]) => {
              if (result) {
                if ((result as DefaultResponseType).error !== undefined) {
                  throw new Error((result as DefaultResponseType).message);
                }

                const testResult = result as TestResultType[];
                if (testResult) {
                  this.quizzes = this.quizzes.map(quiz => {
                    const foundItem: TestResultType | undefined = testResult.find(item => item.testId === quiz.id);
                    if (foundItem) {
                      quiz.result = foundItem.score + '/' + foundItem.total
                    }
                    return quiz;
                  });
                }

              }
            });
        }

      });


  }

}
