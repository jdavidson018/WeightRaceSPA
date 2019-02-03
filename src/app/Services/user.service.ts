import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../_models/user';
import { Weight } from '../_models/weight';
import { identifierModuleUrl } from '@angular/compiler';
 @Injectable({
  providedIn: 'root'
})
export class UserService {
  baseUrl = environment.apiUrl;
   constructor(private http: HttpClient) { }
   getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.baseUrl + 'users');
  }
   getUser(id): Observable<User> {
    return this.http.get<User>(this.baseUrl + 'users/' + id);
  }
  updateUser(id: number, user: User) {
    return this.http.put(this.baseUrl + 'users/' + id, user, {});
  }
  getFriends(id: number): Observable<User[]> {
    return this.http.get<User[]>(this.baseUrl + 'users/getfriends/' + id);
  }
  addFriend(id: number, friend: User) {
    return this.http.post(this.baseUrl + 'users/' + id, friend);
  }
  getWeights(id: number): Observable<Weight[]> {
    return this.http.get<Weight[]>(this.baseUrl + 'users/' + id + '/weights/');
  }
  addWeight(userId: number, weight: Weight) {
    return this.http.post(this.baseUrl + 'users/' + userId + '/weights/', weight);
  }
  deleteWeight(userId: number, id: number) {
    return this.http.delete(this.baseUrl + 'users/' + userId + '/weights/' + id);
  }
  setMainPhoto(userId: number, id: number) {
    return this.http.post(this.baseUrl + 'users/' + userId + '/photos/' + id + '/setMain', {});
  }
   deletePhoto(userId: number, id: number) {
    return this.http.delete(this.baseUrl + 'users/' + userId + '/photos/' + id);
  }
}
