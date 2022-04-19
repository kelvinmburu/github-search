import { Component, OnInit } from '@angular/core';
import { User } from '../user';

import { SearchService } from '../search-service/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent implements OnInit {
  user!: User;
  userRepo: any;
  result: string = '';

  constructor(private searchService: SearchService) {}

  searchUser() {
    this.searchService.userRequest(this.result);
    this.user = this.searchService.user;
  }

  searchUserRepo() {
    this.searchService.userRepoRequest(this.result).subscribe((userRepo: any) => {
      this.userRepo = userRepo;
      console.log(this.userRepo, 'User Repo');
    });
  }
  ngOnInit() {}
}
