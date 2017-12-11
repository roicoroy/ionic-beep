import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Profile } from '../../models/profile/profile.interface';
import { AuthService } from '../../providers/auth.service';

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  existingProfile = {} as Profile;

  constructor(
    private auth:AuthService,
    private navCtrl: NavController, private navParams: NavParams) {
  }
  signOut() {
    this.auth.signOut();
    this.navCtrl.setRoot('LoginPage')

  }
  getExistingProfile(profile: Profile) {
    this.existingProfile = profile;
  }
  navigateToProfilePage(){
    this.navCtrl.push('EditProfilePage', { existingProfile: this.existingProfile});

  }

}
