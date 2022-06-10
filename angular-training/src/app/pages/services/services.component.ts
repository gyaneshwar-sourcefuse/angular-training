import { Component, Inject, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { USE_FAKE } from 'src/app/app.module';
import { AnotherService } from 'src/app/services/another.service';
import { RestService } from 'src/app/services/rest.service';
import { TestService } from 'src/app/services/test.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss'],
})
export class ServicesComponent implements OnInit {
  todos$!: Observable<any[]>;
  constructor(
    @Inject(USE_FAKE) private useFake: boolean,
    private testService: TestService,
    private anotherService: AnotherService,
    private restService: RestService
  ) {
    console.log('[USE_FAKE] value', this.useFake);
    console.log('[TestService] name', this.testService.name);
    console.log(
      '[AnotherService] with useClass name',
      this.anotherService.name
    );
  }

  ngOnInit(): void {
    this.posts();
  }

  posts() {
    this.todos$ = this.restService.posts();
  }
}
