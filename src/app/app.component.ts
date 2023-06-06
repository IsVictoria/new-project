import {AfterContentChecked, Component, ViewChild} from '@angular/core';

export interface Post {
  title: string
  text: string
  id?: number
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  num = 5
  pow = 6
  search = ''
  searchPosts = ''

  posts: Post[] = [
    {title: 'Замыкание', text: 'это комбинация функции и лексического окружения, в котором эта функция была определена.', id: 1},
    {title: 'Прототипы', text: 'это механизм, с помощью которого объекты JavaScript наследуют свойства друг от друга.', id: 2},
    {title: 'Лексическое окружение', text: 'это механизм, с помощью которого объекты JavaScript наследуют свойства друг от друга.', id: 3},
    {title: 'Инкапсуляция', text: 'это механизм, с помощью которого объекты JavaScript наследуют свойства друг от друга.', id: 4}
  ]
  constructor() {}

  updatePosts(post: Post) {
    this.posts.push(post)
    console.log(this.posts)
  }

  deletePost(id: any) {
    this.posts = this.posts.filter(p=> p.id != id)
    console.log(this.posts)
  }

  searchPost(title: string) {
      this.search = title

  }
}
