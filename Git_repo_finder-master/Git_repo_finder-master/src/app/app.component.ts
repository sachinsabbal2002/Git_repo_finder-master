import { Component, OnInit } from '@angular/core';
import { ApiService } from './services/api.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  username: string = '';
  repos: any[] = [];
  displayV: string ='block';
  loading: boolean = false;
  error: string = '';
  // constructor(
  //   private apiService: ApiService
  // ) {}
  constructor(private http: HttpClient) {}
  searchRepos() {
    // if (this.username.trim() === '') {
    //   this.error = 'Please enter a valid username.';
    //   return;
    // }
    this.displayV='none';
    this.loading = true;
    this.error = '';

    const url = `https://api.github.com/users/${this.username}/repos`;
    // const url = `https://api.github.com/users/ashishwsite/repos`;

    this.http.get<any[]>(url)
      .subscribe(
        (data) => {
          
          this.repos = data;
          // console.log(this.repos.language);
          console.log(this.repos);
          this.loading = false;
        },
        (error) => {
          this.error = 'Enter Valid user / try again later.';
          this.loading = false;
        }
      );
  }
  ngOnInit() {

  }
}
