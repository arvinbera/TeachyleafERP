import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import ComponentDataService from 'src/app/DataService/ComponentDataService';

@Component({
  selector: 'app-component',
  templateUrl: './component.component.html',
  styleUrls: ['./component.component.css']
})
export class ComponentComponent implements OnInit {

  ComponentForm= new FormGroup({
    component:new FormControl(),
  });
  EditComponentForm = new FormGroup({
    component : new FormControl(),
  });
  DeleteComponentForm = new FormGroup({
    delete_component : new FormControl(),
  });
  all_components:any;
  component_name:any;
  component_delete:any;
  model:any;
  displayStyle = "none";
  displayDeleteStyle = "none";
  constructor(private http:ComponentDataService) { }
  AddComponent()
  {
    this.http.AddComponent(this.ComponentForm.value).subscribe(res=>{
      alert("New Component Added");
      this.bind();
    },error=>{alert(error.message)})
  }
  OpenEditPopup(x:any)
  {
    console.log(x);
    this.displayStyle = "block";
    this.component_name=x.component;
    this.model=x;
  }
  OpenDeletePopup(x:any)
  {
    this.displayDeleteStyle= "block";
    this.component_delete=x.component;
    this.model=x;
  }
  CloseEditPopup()
  {
    this.displayStyle = "none";
  }
  CloseDeletePopup()
  {
    this.displayDeleteStyle = "none";
  }
  UpdateComponent()
  {
    this.model.component=this.EditComponentForm.value['component'];
    this.http.UpdateComponent(this.model).subscribe(res=>{
        alert("Component Updated");
        this.bind();
        this.displayStyle="none";
      
    },error=>{
      alert(error.message)
    })
  }
  DeleteComponent()
  {
    this.model.component=this.DeleteComponentForm.value['component'];
    this.http.DeleteComponent(this.model).subscribe(res=>{
      this.displayDeleteStyle="none";
      this.bind();
      alert("Component Deleted");
    },error=>{
      alert(error.message)
    })
  }
  bind()
  {
    this.http.ComponentList().subscribe(res=>{
        if(res.IsSuccess)
        {
          this.all_components=res.Data;
        }
    },error=>{})
  }
  ngOnInit(): void {
    this.bind();
  }

}
