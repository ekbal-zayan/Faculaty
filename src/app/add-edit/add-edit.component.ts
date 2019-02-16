import { HttpClient } from '@angular/common/http';
import { Component, OnInit,Input } from '@angular/core';
import { DataGetService } from '../data-get.service';
import { log } from 'util';

@Component({
  selector: 'app-add-edit',
  templateUrl: './add-edit.component.html',
  styleUrls: ['./add-edit.component.scss']
})
export class AddEditComponent implements OnInit {
  model: any = {};
  students: Array<object>;
  selectedFile :File = null;
  // @Input ('dataJson'):  Array<Object>;
  constructor(private data: DataGetService,
    private http : HttpClient) { }
 
  ngOnInit() {

    
  }
  onFileSelected(event){
    console.log(event);
    this.selectedFile = <File>event.target.files[0];
  }
  onSubmit() {
    // push data in json 

    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.model))
  }

  onUpload(){
    const fd = new FormData();
    fd.append('Image',this.selectedFile,this.selectedFile.name);
    this.http.post('./assets/data.json',fd).subscribe(res => {
      console.log(res);
      
    });
  }

}
