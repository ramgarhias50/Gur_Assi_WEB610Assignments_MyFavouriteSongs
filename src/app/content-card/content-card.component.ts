import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { HoverAffectDirective } from '../hover-affect.directive';
@Component({
  selector: 'app-content-card',
  standalone: true,
  imports: [CommonModule,HoverAffectDirective],
  templateUrl: './content-card.component.html',
  styleUrl: './content-card.component.scss'
})
export class ContentCardComponent {
  undefined: undefined;
  @Input() content: any;
  handleclick(id: number, title: string): any {
    return console.log(`The id of card is ${id} and title if ${title}`)

  }

}
