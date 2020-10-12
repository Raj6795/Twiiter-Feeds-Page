import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class TwitterServiceService {
  public tweets: string[] = [];
  public url: string = `http://localhost:3000/home`;
  constructor(private http: HttpClient) {}

  getData() {
    return this.http.get<any[]>(this.url).pipe(
      map((data) => {
        // console.log(data);
        data.forEach((tweet) => {
          // console.log(tweet);
          // console.log(tweet.text);

          this.tweets.push(tweet);
        });
        // console.log(this.tweets);
        return this.tweets;
      })
    );
  }
}
