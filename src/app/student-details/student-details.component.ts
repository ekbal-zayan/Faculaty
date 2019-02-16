import { Component, OnInit, Input } from '@angular/core';
import { DataGetService } from '../data-get.service';
import { from } from 'rxjs'; 

@Component({
  selector: 'student-details',
  templateUrl: './student-details.component.html',
  styleUrls: ['./student-details.component.scss']
})
export class StudentDetailsComponent implements OnInit {
  @Input() studata: any;
  profileData : Array<object>;
  
  profileDataPhone : number;
 
  constructor(
    private q :DataGetService
  ) { 
    this.profileData = [];
    
  }
    getProfilData(): void {
      let path : string = './assets/data.json';
    this.q.getData(path).subscribe(
      res => {
        this.profileData = res;
        
        console.log(res);
      },
      err => {
        console.log(err);        
      },
      () => {}
    );
    }
  ngOnInit() {
    console.log('init')
    console.log(this.studata)
  }

}
