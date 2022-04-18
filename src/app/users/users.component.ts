import { Component, OnInit } from '@angular/core';
import { User } from "../user";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  user!: User;
  userRepos:any;
  result:string =''

  constructor(private userService: UserService) { }

  searchUser() {
    this.userService.userRequest(this.result)
    this.user = this.userService.user
  }

  searchUserRepo() {
    
    this.userService.userRepoRequest(this.result).subscribe((userRepos)=>{
      this.userRepos=userRepos
    console.log(this.userRepos, "User Repos");

    })

    
  }
  ngOnInit() {
}

}
