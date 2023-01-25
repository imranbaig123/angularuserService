import { Component, OnInit } from '@angular/core';
import { LoggerService } from './services/logger.service';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UserService, LoggerService]
})
export class AppComponent implements OnInit{
  title = 'UserService';

  constructor(private userService: UserService){}

  users: {name: string, status:string}[] = [];

  ngOnInit(){
    this.users = this.userService.users;

  }
}
