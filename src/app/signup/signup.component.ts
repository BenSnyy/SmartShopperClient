import { Component, OnInit } from '@angular/core';
import { FetchService } from '../fetch.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  public users;

  constructor(private fetchService: FetchService) { }

  ngOnInit() {
    this.fetchService.getUser().subscribe((data) => {
      console.log(data);
      this.users = data['users'];
    });
  }

}