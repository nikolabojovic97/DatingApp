import { Component, OnInit } from '@angular/core';
import { User } from './_models/user';
import { AccountService } from './_services/account.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'The Dating App';
  users: any;

  constructor(private accountService: AccountService){}
  
  ngOnInit() {
    this.setCurrentUser();
  }

  setCurrentUser(){
    const userFromStorage: string | null = localStorage.getItem('user');
    if(userFromStorage){
      const user: User = JSON.parse(userFromStorage);
      this.accountService.setCurrentUser(user);
    }
  }
}
