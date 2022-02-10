import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Todo } from 'src/app/models/todo.model';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.scss']
})
export class TodoFormComponent implements OnInit {

  todoForm!: FormGroup

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private todoService: TodoService) { }

  ngOnInit(): void {
    this.initForm()
  }

  initForm() {
    this.todoForm = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
    })
  }

  onSaveTodo() {
    const title = this.todoForm.get('title')?.value;
    const description = this.todoForm.get('description')?.value;
    const createdDate = new Date()
    const newTodo = new Todo(title, description, createdDate)
    this.todoService.createNewTodo(newTodo).then(
      ()=> {
        this.router.navigate(["/todos"])
      }
    ).catch(err => {
      console.log(err);
    })
    
  }

  onBack() { //pour le retour en arrière
    this.router.navigate(['/todos'])
  }

}
