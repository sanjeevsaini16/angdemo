// user-info.component.ts
import { Component, OnInit } from '@angular/core';
import { CacheService } from '../cache.service';

@Component({
  selector: 'app-user-info',
  template: `
    <div>
      <label for="name">Enter your name:</label>
      <input type="text" id="name" [(ngModel)]="userName" />
      <button (click)="saveName()">Save</button>
      <h2 *ngIf="userName">Hello, {{ userName }}!</h2>
    </div>
    <div *ngIf="cachedData">
      <p>Data from cache: {{ cachedData }}</p>
    </div>
    <button (click)="addToCache()">Add to Cache</button>
    <button (click)="clearCache()">Clear Cache</button>
  `,
  styles: [],
})
export class UserInfoComponent implements OnInit {
  userName: string = '';
  cachedData: any;

  constructor(private cacheService: CacheService) {}

  ngOnInit(): void {
    // Load username from localStorage on component initialization
    this.userName = localStorage.getItem('userName') || '';
    // Load data from cache on component initialization
    this.cachedData = this.cacheService.get('cachedData');
  }

  saveName() {
    localStorage.setItem('userName', this.userName);
  }

  addToCache() {
    // Add some data to the cache
    const dataToAdd = 'Cached Data';
    this.cacheService.set('cachedData', dataToAdd);
    this.cachedData = dataToAdd;
  }

  clearCache() {
    // Clear data from the cache
    this.cacheService.clear();
    this.cachedData = undefined;
  }
}
