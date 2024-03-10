import { Component, OnInit } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { CommonModule } from '@angular/common';
import { ContentCardComponent } from "../content-card/content-card.component";
import { SortTypePipe } from "../sort-type.pipe";
import { FormsModule } from '@angular/forms';
import { HoverAffectDirective } from '../hover-affect.directive';
import { SongServiceService } from '../services/song-service.service';
import { MessageService } from '../services/message/message.service';
import { MessagesComponent } from "../messages/messages.component";

@Component({
  selector: 'app-content-list',
  standalone: true,
  templateUrl: './content-list.component.html',
  styleUrl: './content-list.component.scss',
  imports: [CommonModule, ContentCardComponent, SortTypePipe, FormsModule, HoverAffectDirective, MessagesComponent]
})
export class ContentListComponent implements OnInit {


  isFirst: any;
  name: any;
  filteredList: Content[] = [];
  content: Content | undefined;
  Resultstring: string = '';
  setColor: string = '';
  id: number = 1;
  constructor(private contentService: SongServiceService, private messageServie: MessageService) {

  }
  ngOnInit(): void {
    this.contentService.getContent().subscribe(content => {
      this.filteredList = content;

    });


  }
  findData(id: number) {
    if (id >= this.contentService.getContent.length) {
      this.contentService.getSingle(id).subscribe(c => {
        this.content = c
      });
      console.log("data");
    }else{
       console.log(`Add the smallar number than lenth of aary`);
    }
  }

  filterResult(text: string): void {
    this.filteredList = this.filteredList.filter(song => song.title.toLowerCase().includes(text.toLowerCase()));

    if (this.filteredList.length > 0) {
      this.Resultstring = 'Content Found';
      this.setColor = 'green';
    } else {
      this.Resultstring = 'No Content Found';
      this.setColor = 'red';
    }
  }

}
