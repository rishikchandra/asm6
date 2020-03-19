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
    
    return this.http.post<empstruc>(`http://localhost:3000/insert`,JSON.stringify(data));
    
  }





  getDetails():Observable<empstruc[]>{
    let url = `http://localhost:3000/get`;
    let result = this.http.get<empstruc[]>(url);
    return result;
  }
  

  getById(id):Observable<empstruc>{
    let url = `http://localhost:3000/get/${id}`;
    let result = this.http.get<empstruc>(url);
    return result;
  }
  
  updateDetails(data):Observable<any>{
    let url = `http://localhost:3000/update`;
    let result = this.http.put<empstruc>(url,data);
    return result;
  }
  
  deleteRecord(id):Observable<any>{
    let url = `http://localhost:3000/delete/${id}`;
    let result = this.http.delete<any>(url);
    return result;
  }
  
}
