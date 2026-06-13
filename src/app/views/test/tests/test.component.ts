import {Component} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {TestService} from "../../../shared/services/test.service";
import {DefaultResponseType} from "../../../../types/default-response.type";
import {QuizType} from "../../../../types/quiz.type";

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent {

  quiz!: QuizType;
  timerSeconds = 59;
  private interval: number = 0;
  currentQuestionIndex: number = 1;
  choosenAnswerId: number | null = null;

  constructor(private activatedRoute: ActivatedRoute, private testService: TestService) {
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      if (params['id']) {
        this.testService.getQuiz(params['id'])
          .subscribe(result => {
            if ((result as DefaultResponseType).error !== undefined) {
              throw new Error((result as DefaultResponseType).message);
            }

            this.quiz = result as QuizType;
            this.startQuiz();
          })
      }
    })
  }

  get activeQuestion() {
    return this.quiz.questions[this.currentQuestionIndex - 1]
  }

  startQuiz(): void {
    // progress bar

    // show question

    // this.interval = window.setInterval(() => {  // временно, на период разработки
    //   this.timerSeconds--;
    //   if (this.timerSeconds === 0) {
    //     clearInterval(this.interval);
    //     this.complete();
    //   }
    // }, 1000);
  }

  complete(): void {

  }
}
