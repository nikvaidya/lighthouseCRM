import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-app-info',
  templateUrl: './app-info.page.html',
  styleUrls: ['./app-info.page.scss'],
})
export class AppInfoPage implements OnInit {

  constructor(private popover: PopoverController) { }

  ngOnInit() {
  }


  // openAppInfo(){
  //   this.openNativeSettings.open('application_details').then(val => {
  //     // alert(val)
  //     this.dismiss();
      
  //   }).catch(err => {
  //     alert("error")
  //     this.dismiss();
  //   })
    
  // }


  
dismiss(){
  this.popover.dismiss();
}
}
