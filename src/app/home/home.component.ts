import { Component, OnInit  } from '@angular/core';
import liff from '@line/liff';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'angularAdmin';

  profile: Promise<ReturnType<typeof liff.getProfile>> | undefined;

  idToken :any;
  displayName = '';
  pictureUrl :any;
  statusMessage :any;
  userId = '';

  ngOnInit(): void {
    this.initLine();
  }

  initLine(): void {
    liff.init({ liffId: '1657886602-aOrxgb6O' }, () => {
      if (liff.isLoggedIn()) {
        this.runApp();
      } else {
        liff.login();
      }
    }, err => console.error(err));

  }

  runApp(): void {
    const idToken = liff.getIDToken();
    this.idToken = idToken;
    liff.getProfile().then(profile => {
      console.log(profile);
      this.displayName = profile.displayName;
      this.pictureUrl = profile.pictureUrl;
      this.statusMessage = profile.statusMessage;
      this.userId = profile.userId;
    }).catch(err => console.error(err));
  }

  logout(): void {
    liff.logout();
    window.location.reload();
  }


}
