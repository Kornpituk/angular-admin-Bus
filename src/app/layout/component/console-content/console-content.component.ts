import { Component,OnInit } from '@angular/core';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-console-content',
  templateUrl: './console-content.component.html',
  styleUrls: ['./console-content.component.css']
})
export class ConsoleContentComponent  implements OnInit {


  constructor(private service: AuthService){
    this.loaduser();
    this.loadEmplpoyee();
    this.loadSchedule();
    this.loadBus();
  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  userlist : any;
  lengthUser : any;
  lengthEmployee : any;
  lengthSchedule : any;
  lengthBus : any;


  loaduser() {
    this.service.GetallUsers().subscribe((res) => {
      console.log("res console:",res);
      console.log("length for res: ",res.length);

      this.lengthUser = res.length;
    })
  }

  loadEmplpoyee() {
    this.service.GetallEmployees().subscribe((res) => {
      console.log("res console:",res);
      console.log("length for res emp: ",res.length);

      this.lengthEmployee = res.length;
    })
  }

  loadSchedule() {
    this.service.GetallSchedules().subscribe((res) => {
      console.log("res console:",res);
      console.log("length for res schedule: ",res.length);

      this.lengthSchedule = res.length;
    })
  }

  loadBus() {
    this.service.GetallBuses().subscribe((res) => {
      console.log("res console:",res);
      console.log("length for res bus: ",res.length);

      this.lengthBus = res.length;
    })
  }


}
