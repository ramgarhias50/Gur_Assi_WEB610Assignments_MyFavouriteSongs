import { Component } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { FormsModule } from '@angular/forms';
import { SupabaseService } from '../services/supabase/supabase.service';
import { MessageService } from '../services/message/message.service';

@Component({
  selector: 'app-modify-content-component',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './modify-content-component.component.html',
  styleUrl: './modify-content-component.component.scss'
})
export class ModifyContentComponentComponent {

  data: Content = {
    id: null,
    title: "",
    description: "",
    creator: "",
    imgURL: "",
    tags: [],
    type: ""
  }
  constructor(private supaBase: SupabaseService, private message: MessageService) {

  }
  async Submit() {
    if (this.data.id != null) {
      // Update existing data
      (await this.supaBase.updateContent(this.data)).subscribe(
        () => {
          this.resetForm();
        },
        (error: any) => {
          console.error('Error updating data:', error);
        }
      );
    } else {
      (await this.supaBase.addData(this.data)).subscribe(
        (response) => {
          this.resetForm();
          console.log(response);
        },
        (error) => {
          console.error('Error adding data:', error);
        }
      );
    }
  }

  resetForm() {
    this.data = {
      id: null,
      title: "",
      description: "",
      creator: "",
      imgURL: "",
      tags: [],
      type: ""
    };
  }
}
