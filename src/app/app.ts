import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {
  networkData = {
    sttl: 0,
    dttl: 0,
    sbytes: 0,
    dbytes: 0
  };
  result: any = null;

  constructor(private http: HttpClient) {}

  predict() {
    this.http.post('http://127.0.0.1:5000/api/predict', this.networkData).subscribe({
      next: (data: any) => this.result = data,
      error: (err) => console.error('Error connecting to Flask:', err)
    });
  }
}