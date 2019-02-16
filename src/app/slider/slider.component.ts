import { Component, OnInit } from '@angular/core';
import { DataGetService } from '../data-get.service';
import {Router} from "@angular/router";


@Component({
  selector: 'slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {
  students: Array<object>;
  st: any;
  isFound = false;
  img: boolean = true;
  goHome: boolean = false;
  dataJson = true;
  constructor(private data: DataGetService,
    private router: Router) {

  }

  // get student data based on his index
  getsutudent(index) {
    this.isFound = true;
    this.st = this.students.filter(function (student, i) {
      if (i === index) {
        console.log(student)
        return student;
      }
    })
    console.log(this.st[0])
  }
  //if student click on but delete
  deleteStudentData(index): void {
    console.log(index);
    console.log('This Student Will Be Deleted');
    if (confirm("Profile deletion\nAre you sure you want to delete profile?")) {
      this.students.splice(index, 1);
      // this.goHome = false;
      this.router.navigate(['/']); 
    } else {
      console.log("this student did't deleted");

    }

  }
 


  ngOnInit() {

    this.data.getData('./assets/data.json').subscribe(res => {
      console.log(res)
      this.students = res;
    })
  }

}
