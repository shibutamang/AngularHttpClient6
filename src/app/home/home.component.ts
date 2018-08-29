import { Component, OnInit } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  users: string[];

  constructor(private service: ApiserviceService) { }

  ngOnInit() {
    this.service.getUsers().subscribe(
      (data: any) => { console.log(this.users = data); },
      (error: any) => { console.log('error'); }
    );
  }

}
