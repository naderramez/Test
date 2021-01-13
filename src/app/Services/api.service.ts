import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseURL = "http://localhost:3000/items";
  constructor(private myClient: HttpClient) { }

  getAllItems() {
    return this.myClient.get(this.baseURL, {observe: 'response'});
  }

  getItemById(id) {
    return this.myClient.get(`${this.baseURL}/${id}`);
  }

  addNewItem(item) {
    return this.myClient.post(this.baseURL, item);
  }

  deleteItemById(id) {
    return this.myClient.delete(this.baseURL, {params: id});
  }
}
