import { Injectable } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { punjabiSongs } from '../helper-files/contentDb';
import { Observable, of } from 'rxjs';
import { MessageService } from './message/message.service';

@Injectable({
  providedIn: 'root'
})
export class SongServiceService {

  constructor(private messageService:MessageService) { }

  getContent(): Observable<Content[]> {
  const newData=of(punjabiSongs);
  this.messageService.add("Content array loaded!");
    return newData;
  
  }
  getSingle(id: number): Observable<any> {
    const content=punjabiSongs.at(id);
    if(content){
      this.messageService.add(`Content Item at id: ${id}`);
      return of(content);
    }else{
      return of();
    }
  }
}
