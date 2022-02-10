import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Todo } from 'src/app/models/todo.model';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-single-todo',
  templateUrl: './single-todo.component.html',
  styleUrls: ['./single-todo.component.scss']
})
export class SingleTodoComponent implements OnInit {

  todo!: Todo;

  constructor(private route: ActivatedRoute,
              private todoService: TodoService,
              private router: Router) { }

  ngOnInit(): void {
    this.todo = new Todo('', '', new Date())
    const id = this.route.snapshot.params['id']
    this.todoService.getSingleTodo(+id).then(
      (todo: Todo) => {
        this.todo = todo
      }
    )
  }

  onBack() {
    this.router.navigate(['/todos'])
  }

}
