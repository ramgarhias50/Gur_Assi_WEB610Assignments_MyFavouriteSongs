import { Component } from '@angular/core';
import { ContentList } from "../helper-files/content-list";



@Component({
  selector: 'app-content-card',
  standalone: true,
  templateUrl: './content-card.component.html',
  styleUrl: './content-card.component.scss'
})
export class ContentCardComponent {
  contentList: ContentList = new ContentList();
  constructor() {
    this.contentList.add({
      id: 1,
      title: "Number",
      description: "A romantic  song",
      creator: "Nirvair Pannu",
      imgURL: "https://i.ytimg.com/vi/RtFFxvufwt0/maxresdefault.jpg"
    }),
      this.contentList.add({
        id: 2,
        title: "Taara Tutya",
        description: "Its a romantic song",
        creator: "Gur Sidhu",
        imgURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvmj-_4cuFMNAPm3NzS1pJ0qQicDabvv31Rw&usqp=CAU"
      })
    this.contentList.add({
      id: 3,
      title: "Tere Layi",
      description: "A song that show everything for you",
      creator: "Nirvair Pannu",
      imgURL: "https://i1.sndcdn.com/artworks-Jx9pzhvHsNl88rKr-LQbPCg-t500x500.jpg"
    })
    this.contentList.add({
      id: 4,
      title: "Apa Fer Milaange",
      description: "About the patchup",
      creator: "Savi Kahlon",
      imgURL: "https://i.ytimg.com/vi/DLZD47lj82o/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLD7z_p8Hf7Vug4-cyrO_1svea19QA"
    })
  }


}
