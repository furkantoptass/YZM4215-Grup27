import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CookieService } from 'ngx-cookie-service';
import { RouteConfigLoadEnd, Router } from '@angular/router';
@Component({
  selector: 'app-odevlerim',
  templateUrl: './odevlerim.component.html',
  styleUrls: ['./odevlerim.component.css']
})
export class OdevlerimComponent implements OnInit {
studentsc={};
student_id='';
  constructor(private http:HttpClient,private cookie:CookieService,private route:Router)
  {

    this.studentsc = JSON.parse(cookie.get("login"));

    this.student_id = this.studentsc["student_id"];
    console.log(this.studentsc)
  }

  students='';

  ngOnInit() {
    const allCookies: {} = this.cookie.getAll();
    this.http.get<any>('http://localhost:3000/homework/studentHomeworkList/'+ this.student_id).subscribe(data => {
        this.students = data;
        console.log(data);
    })        
}


teslimet(odev_id){

  this.route.navigate(['odevteslim'], { queryParams: { id: odev_id } });
}

}
