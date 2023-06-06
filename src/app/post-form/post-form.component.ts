import {
  AfterContentChecked,
  AfterContentInit,
  Component,
  ElementRef,
  EventEmitter,
  OnChanges,
  OnInit,
  Output,
  ViewChild
} from '@angular/core';
import {Post} from "../app.component";

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.scss']
})
export class PostFormComponent implements OnInit {

  @Output() onnAdd: EventEmitter<Post> =  new EventEmitter<Post>()
  @Output() searchInfo: EventEmitter<string> = new EventEmitter<string>()
  @ViewChild('titleInput', {static: false}) inputRef?: ElementRef

  title = ''
  text = ''
  search = ''

  constructor() {
    console.log('constructor()')
  }

  ngOnInit(): void {
    console.log('ngOnInit()')
  }

  addPost() {
    if(this.text.trim() && this.title.trim()) {
      const post: Post = {
        title: this.title,
        text: this.text
      }
      this.onnAdd.emit(post)
    }

    this.title = this.text = ''
  }

  focusTitle() {
    this.inputRef?.nativeElement.focus()
  }

  searchPost() {
    this.searchInfo.emit(this.search)
  }
}
