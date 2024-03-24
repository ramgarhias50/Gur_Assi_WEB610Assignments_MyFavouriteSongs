import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import {ContentCardComponent} from "./content-card/content-card.component";
import { ContentListComponent } from './content-list/content-list.component';
import { FormsModule } from '@angular/forms';
import { ModifyContentComponentComponent } from "./modify-content-component/modify-content-component.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [CommonModule, RouterOutlet, ContentCardComponent, ContentListComponent, FormsModule, ModifyContentComponentComponent]
})
export class AppComponent {
  title = 'Gur_Assi_MyFavouriteSongs';
}
