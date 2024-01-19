import { Component ,OnInit} from '@angular/core';
import {ContentList} from "../helper-files/content-list";
import {Content} from "../helper-files/content-interface";


@Component({
  selector: 'app-content-card',
  standalone: true,

  templateUrl: './content-card.component.html',
  styleUrl: './content-card.component.scss'
})
export class ContentCardComponent implements  OnInit{
contentList:ContentList=new ContentList();
contenItem1:Content={
  id:1,
  title:"dfdf",
  description:"dsfgdfds",
  creator:"dfdf",
  imgURL:"https://angular.io/assets/images/logos/angular/logo-nav@2x.png"
}
  contenItem2={
    id:2,
    title:"dfdf",
    description:"dsfgdfds",
    creator:"dfdf",
    imgURL:"https://angular.io/assets/images/logos/angular/logo-nav@2x.png"
  }
  contenItem3={
    id:3,
    title:"dfdf",
    description:"dsfgdfds",
    creator:"dfdf",
    imgURL:"https://angular.io/assets/images/logos/angular/logo-nav@2x.png"
  }
  contenItem4={
    id:4,
    title:"dfdf",
    description:"dsfgdfds",
    creator:"dfdf",
    imgURL:"https://angular.io/assets/images/logos/angular/logo-nav@2x.png"
  }
 ngOnInit() {
  this.contentList.add(this.contenItem1);
   this.contentList.add(this.contenItem2);
   this.contentList.add(this.contenItem3);
   this.contentList.add(this.contenItem4);
 }

}
