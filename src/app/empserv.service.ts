import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { empstruc } from './emp';

@Injectable({
  providedIn: 'root'
})
export class EmpservService {

  constructor(private http:HttpClient) { }

  
  insertEmployee(data):Observable<empstruc>{
    
    return this.http.post<empstruc>(`http://localhost:3000/insert`,data);
    
  }



  getDetails():Observable<empstruc[]>{

    return this.http.get<empstruc[]>(`http://localhost:3000/get`);
    
  }
  

  getById(_id):Observable<empstruc>{
    return this.http.get<empstruc>(`http://localhost:3000/get/${_id}`);

  }
  
  updateDetails(id,data):Observable<any>{
    console.log(id);
    return this.http.put<any>(`http://localhost:3000/update/${id}`,data);
    
  }

  
  deleteRecord(_id):Observable<any>{

    return this.http.delete<any>(`http://localhost:3000/delete/${_id}`);
  
  }
  
}
