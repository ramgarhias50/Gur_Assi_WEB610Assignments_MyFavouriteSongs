import { Injectable } from '@angular/core';
import { SupabaseClient, createClient } from '@supabase/supabase-js';
import { environment } from '../../../../enviroment';
import { Content } from '../../helper-files/content-interface';
import { Observable, of } from 'rxjs';
import { MessageService } from '../message/message.service';

@Injectable({
  providedIn: 'root'
})
export class SupabaseService {
  supabase: SupabaseClient;

  constructor(private message: MessageService) {
    this.supabase = createClient(environment.supabaseUrl, environment.supabaseKey);

  }

  async getData(): Promise<Observable<Content[]>> {
    const { data, error } = await this.supabase.from('Song').select('*');
    this.message.add("Data Loaded");
    return of(data || []);
  }
  // async getId(): Promise<Observable<Content[]>> {
  //   const { data} = await this.supabase.from("Song").select("id");
  //   return of(data || []);
  // }

  async addData(data: Content) {
    try {
      // Output message
      this.message.add("New item Added");

      // Log data
      console.log("Data from service:");
      console.table(data);

      // Retrieve the maximum ID from the "Song" table
      const { data: maxIdData, error: maxIdError } = await this.supabase
        .from("Song")
        .select("id", { count: "exact" });

      if (maxIdError) {
        throw maxIdError;
      }

      // Determine the new ID
      let newId = 1; // Default to 1 if no data exists yet
      if (maxIdData && maxIdData.length > 0) {
        newId = maxIdData[0].id + 1;
      }

      // Insert new data with the determined ID
      const { error: insertError } = await this.supabase.from("Song").insert([{ ...data, id: newId }]);

      if (insertError) {
        throw insertError;
      }

      return of();
    } catch (error) {
      console.error("Error adding data:", error);
      return of();

    }
  }

  async updateContent(content: Content): Promise<Observable<Content>> {
    try {
      const { data: existingData, error: existingError } = await this.supabase
        .from("Song")
        .select("*")
        .eq("id", content.id)
        .single();

      if (existingError) {
        throw new Error(existingError.message);
      }

      if (!existingData) {
        throw new Error("Content not found");
      }

      // Merge the new content with the existing data
      const newData: Content = { ...existingData, ...content };

      const { data, error } = await this.supabase
        .from("Song")
        .update(newData)
        .eq("id", content.id);

      if (error) {
        throw new Error(error.message);
      }

      this.message.add("Your Data is Updated");
      return of(newData);
    } catch (error) {
      this.message.add("There is an issue while updating data");
      console.error('Error updating content:', error);
      return of();
    }
  }

}