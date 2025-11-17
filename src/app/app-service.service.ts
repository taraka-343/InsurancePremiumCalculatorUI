import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AppServiceService {
  private apiUrl = "https://localhost:7065/api/Premium/calculate"

  constructor(private http: HttpClient) { }
}
