import { Component, OnInit } from '@angular/core';
import { EmpservService} from '../Empserv.service';
import { empstruc } from '../emp';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';

@Component({
  selector: 'app-empedit',
  templateUrl: './empedit.component.html',
  styleUrls: ['./empedit.component.css']
})
export class EmpeditComponent implements OnInit {

  public id:string;
  empData:any;
  
  constructor(private activatedRoute:ActivatedRoute,private empserv:EmpservService, private router:Router) {
    this.empData = {
      id:null,
      name:null,
      email:null,
      age:null
    }
   }

  ngOnInit(): void {
    // this.activatedRoute.paramMap.subscribe((params:ParamMap)=>{
    //   let id = parseInt(params.get('id'));
    //   this.id = id;
    // });
    // this.empserv.getById(this.id).subscribe(data=>{
    //   this.empData = data;
    //   console.log(this.empData);
    // })
  }

  editEmployee(){
    this.activatedRoute.paramMap.subscribe((params:ParamMap)=>{
      let bid = params.get('id');
      console.log(bid);
    
    this.empserv.updateDetails(bid,this.empData).subscribe(data=>{
      console.log(data);
    });
  });
    this.router.navigate(['/empdetails']);
  }


}

  
  