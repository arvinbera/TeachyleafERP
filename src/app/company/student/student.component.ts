import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import SetupDataService from 'src/app/DataService/SetupDataService';
import ClassDataService from 'src/app/DataService/ClassDataService';
import SectionDataService from 'src/app/DataService/SectionDataService';
import ShiftDataService from 'src/app/DataService/ShiftDataService';
import StudentDataService from 'src/app/DataService/StudentDataService';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {
   
  all_sections:any;
  all_classes:any;
  all_shifts:any;
  all_sessions:any;
  all_promote_class:any;

  RegisterForm= new FormGroup({
    student:new FormControl('',[Validators.required]),
    email  :new FormControl('',[Validators.required,Validators.email]),
    phone  :new FormControl(),
    dob    :new FormControl(),
    gender :new FormControl(),
    religion:new FormControl(),
    f_name :new FormControl(),
    f_phone:new FormControl(),
    m_name :new FormControl(),
   class_id:new FormControl(),
   shift_id:new FormControl(),
   section_id:new FormControl(),
   session_id:new FormControl(),
   current_address:new FormControl(),
   permanent_address:new FormControl(),
   path:new FormControl(),
   fileSource: new FormControl()
  })
  constructor(private formBuilder: FormBuilder, private router: Router,private sectionservice:SectionDataService,private classervice:ClassDataService
    ,private shiftservice:ShiftDataService,private sessionservice:SetupDataService,private http:StudentDataService) { }
  StudentRegister()
  {
    //console.log(this.RegisterForm.value);
    let p=this.ConvertFormData(this.RegisterForm.value);
    this.http.AddStudent(p).subscribe(res=>{
      if(res.IsSuccess){
        alert("Student Data Inserted Successfully");
      }
    },error=>{
      alert("Error Happens");
    });
  }

  SetImage(event:any)
  {
    //const reader = new FileReader();
    const [file] = event.target.files;
    //reader.readAsDataURL(file);
  
    
      //this.imageSrc = reader.result as string;
    
      this.RegisterForm.patchValue({
        fileSource: file
      });
  
    
    //console.log(this.RegisterForm.value);
  }
  ConvertFormData(model:any)
  {
    let formData=new FormData();
    for(let key in model)
    {
      formData.append(key,model[key]);
    }
    return formData;
  }
  get student()
  {
    return this.RegisterForm.get('student');
  }
  get email()
  {
    return this.RegisterForm.get('email');
  }
  ngOnInit(): void {
    this.getAllSections();
    this.getAllClasses();
    this.getAllShifts();
    this.getAllSessions();
  }
  getAllSections()
  {
    this.sectionservice.SectionList().subscribe(res=>{
      this.all_sections=res.Data;
      
      console.log(this.all_sections);
    },error=>{
      alert("Error");
    });
  }

  getAllClasses()
  {
    this.classervice.ClassList().subscribe(res=>{
      this.all_classes=res.Data;
      console.log(this.all_classes);
    },error=>{alert("Error")});
  }
  getAllShifts()
  {
    this.shiftservice.ShiftList().subscribe(res=>{
      this.all_shifts=res.Data;
    },
      error=>{alert("Error")})
  }
  getAllSessions()
  {
    this.sessionservice.SessionList().subscribe(res=>{
      this.all_sessions=res.Data;
    },error=>{alert("Error")})
  }

}
