import {
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  ElementRef,
  EventEmitter,
  Input,
  OnInit,
  Output
} from '@angular/core';
import {Post} from "../app.component";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PostComponent implements OnInit  {
  @Input() post?: Post
  @ContentChild('info', {static: true}) infoRef?: ElementRef
  @Output() deleteEmit = new EventEmitter()
  constructor() { }

  ngOnInit(): void {

  }

  deletePost(id: any) {
    this.deleteEmit.emit(id)
  }


}
