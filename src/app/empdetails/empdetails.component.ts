import { Component, OnInit } from '@angular/core';
import { empstruc } from '../emp';
import { Router } from '@angular/router';
import { EmpservService} from '../Empserv.service';

@Component({
  selector: 'app-empdetails',
  templateUrl: './empdetails.component.html',
  styleUrls: ['./empdetails.component.css']
})
export class EmpdetailsComponent implements OnInit {

  empData:empstruc[]=[];
  constructor(private router:Router,private empserv:EmpservService) { }

  ngOnInit(): void {
    this.empserv.getDetails().subscribe(data =>{
        this.empData = data;
    });
  }

  editEmployee(id){

    this.router.navigate(['/empedit',id]);
  }

  deleteEmployee(_id){
    this.empserv.deleteRecord(_id).subscribe(data=>{
      console.log(data._id);
      this.empserv.getDetails().subscribe(data=>{
        this.empData = data;
      });
    })
  }

}
