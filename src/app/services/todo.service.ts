import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Todo } from '../models/todo.model';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  todos: Todo[] = []
  todosSubject = new Subject<Todo[]>()

  constructor(private httpClient: HttpClient) { }

  emitTodos() {
    this.todosSubject.next(this.todos)
  }

  createNewTodo(newTodo: Todo) {
    return new Promise(
      (resolve, reject) => {
        this.httpClient.post("https://todo-list-ee9e5-default-rtdb.europe-west1.firebasedatabase.app/todos.json", newTodo)
                        .subscribe({
                          next: ()=> {
                            resolve(true)
                          },
                          error: (error) => {
                            reject(error)
                          }
                        })
      }
    )
  }

  getAllTodos() {
    this.todos=[]
    return new Promise(
      (resolve, reject) => {
        this.httpClient.get("https://todo-list-ee9e5-default-rtdb.europe-west1.firebasedatabase.app/todos.json")
                        .subscribe({
                          next: (response: any) => {
                            for (let i in response) {
                             this.todos.push({
                               id: i,
                               title: response[i].title,
                               description: response[i].description,
                               createdDate: response[i].createdDate,
                               done: response[i].done,
                             })
                            }
                            this.emitTodos()
                            resolve(this.todos)
                          },
                          error: (error) => {
                              console.log('Erreur de chargement ! ' + error);
                              reject()
                          }
                        })
      }
    )
  }

  getSingleTodo(id: number) {
    return new Promise<Todo>(
      (resolve, reject) => {
        resolve(this.todos[id])
      }
    )
  }

  deleteTodo(id: string) {
    return new Promise(
      (resolve, reject) => {
        this.httpClient.delete(`https://todo-list-ee9e5-default-rtdb.europe-west1.firebasedatabase.app/todos/${id}.json`)
                        .subscribe({
                          next: (res)=> {
                            this.getAllTodos()
                            resolve(true)
                          },
                          error: (error) => {
                            reject(error)
                          }
                        })
      }
    )
  }

  doneTodo(updatedTodo: Todo) {
    return new Promise(
      (resolve, reject) => {
        this.httpClient
        .put(`https://todo-list-ee9e5-default-rtdb.europe-west1.firebasedatabase.app/todos/${updatedTodo.id}.json`, 
        updatedTodo)
        .subscribe({
          next: (res)=> {
            this.getAllTodos()
            resolve(true)
          },
          error: (error) => {
            reject(error)
          }
        })
      }
    )
  }
}
