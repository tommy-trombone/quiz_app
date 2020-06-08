import { Component, OnInit } from '@angular/core';
import { QuestionsService } from '../questions.service';
import { Quiz } from '../quiz.model';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss'],
})
export class WelcomeComponent implements OnInit {
  public quiz: Quiz[];

  constructor(public questionsService: QuestionsService) {}

  ngOnInit() {
    // read from the dynamic route and load the proper quiz data
    this.questionsService.getQuizzes().subscribe((quiz) => {
      // initialize everything
      this.quiz = quiz;
      // console.log(quiz);
    });
  }
}
