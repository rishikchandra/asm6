import { Component, OnInit } from '@angular/core';
import { EmpservService} from '../Empserv.service';
import { Router } from '@angular/router';
import { empstruc } from '../emp';

@Component({
  selector: 'app-emplist',
  templateUrl: './emplist.component.html',
  styleUrls: ['./emplist.component.css']
})
export class EmplistComponent implements OnInit {

  empData:empstruc[] = [];
  constructor(private router:Router,private empserv:EmpservService) { }

  ngOnInit(): void {
    this.empserv.getDetails().subscribe(data=>{
      this.empData = data;
    })
  }

}
