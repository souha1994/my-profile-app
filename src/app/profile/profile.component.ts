import { Component, OnInit } from '@angular/core';
import { InfouserService } from '../infouser.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  profileImage = 'https://via.placeholder.com/150';
  firstName = 'John';
  lastName = 'Doe';
  address = '123 Main St';
  phoneNumber = '555-555-1212';
  country = 'USA';
  gender = 'Male';
  dateOfBirth = '1990-01-01';



  constructor(private apiService: InfouserService){
    

  }

  ngOnInit(): void {
    const phoneNumberArray = this.phoneNumber.split('|');
    this.country = phoneNumberArray[0];
    this.phoneNumber = phoneNumberArray[1];
  }
  Modifiermonprofil(){
    this.apiService.updateField.apiUrl
    };
  }
    
  


