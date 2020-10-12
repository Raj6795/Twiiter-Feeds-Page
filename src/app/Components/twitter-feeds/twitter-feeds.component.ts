import { Component, OnInit } from '@angular/core';
import { TwitterServiceService } from 'src/app/Service/twitter-service.service';

@Component({
  selector: 'app-twitter-feeds',
  templateUrl: './twitter-feeds.component.html',
  styleUrls: ['./twitter-feeds.component.css'],
})
export class TwitterFeedsComponent implements OnInit {
  tweets: string[];
  constructor(private _service: TwitterServiceService) {}

  ngOnInit() {
    this._service.getData().subscribe((result) => {
      // console.log(result);
      this.tweets = result;
    });
  }
}
