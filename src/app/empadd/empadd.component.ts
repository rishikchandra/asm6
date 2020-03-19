import { Component, OnInit } from '@angular/core';
import { empstruc } from '../emp';
import { EmpservService} from '../Empserv.service';
import { Router } from '@angular/router';




@Component({
  selector: 'app-empadd',
  templateUrl: './empadd.component.html',
  styleUrls: ['./empadd.component.css']
})
export class EmpaddComponent implements OnInit {

  public empData:empstruc;
  constructor(private router:Router,private empserv:EmpservService) { 
    
    this.empData={
      id:null,
      name:null,
      email:null,
      age:null
    }
  }

  
  ngOnInit(): void {
  }
  
  addEmployee(){
    console.log(this.empData);
    this.empserv.insertEmployee(this.empData).subscribe(data=>{
      console.log(data);
      // this.empData=data;
    });
    this.router.navigate(['/empdetails']);
  }

  
}
