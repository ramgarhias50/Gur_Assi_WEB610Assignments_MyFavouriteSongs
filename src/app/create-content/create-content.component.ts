import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Content } from '../helper-files/content-interface';
import { throwError } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-create-content',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './create-content.component.html',
  styleUrl: './create-content.component.scss'
})
export class CreateContentComponent {

  @Output() addContent = new EventEmitter<Content>();
  errorMess: string | null = null;

  content: Content = {
    id: 0,
    title: "",
    description: '',
    creator: "",
    imgURL: "",
    tags: [],
    type: '',
  };
  dataSubmit() {

    let dataPromise = new Promise((success, fail) => {

      if (this.content.id || this.content.title || this.content.description || this.content.creator !== '') {
        success("Succes was achived");
      } else {
        fail("Failure");
      }
    });

    dataPromise.then(() => {
      this.addContent.emit(this.content);
      this.content = {
        id: 0,
        title: "",
        description: '',
        creator: "",
        imgURL: "",
        tags: [],
        type: '',
      };
      this.errorMess=null;
      console.log("Additional is successfull and the title is"+this.content.title);
    }).catch((errror) => {
      this.errorMess="content failed to be added";
    })
  }
}
