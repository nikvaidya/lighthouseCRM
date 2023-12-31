import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { GlobalObjectsService } from 'src/app/services/global-objects.service';

@Component({
  selector: 'app-bluetooth-device',
  templateUrl: './bluetooth-device.component.html',
  styleUrls: ['./bluetooth-device.component.scss'],
})
export class BluetoothDeviceComponent implements OnInit {

  @Input() bluetooth: any;
  @Output() emitPass: EventEmitter<any> = new EventEmitter<any>();
  current_page_parameter: any = {};
  scanData: any;
  bytes: any;

  constructor(private globalObjects: GlobalObjectsService) { }

  ngOnInit() {
    if (this.bluetooth.data_required_flag != 'F') {
      if (this.bluetooth.value) {
        this.bluetooth.isValid = true;
      } else {
        this.bluetooth.isValid = false;
      }
    }

    this.current_page_parameter = this.globalObjects.current_page_parameter;
  }


  // getScanData() {
  //   this.bluetoothSerial.subscribe('kg').subscribe((data: any) => {
  //     console.log(data)
  //     // this.scanData = data
  //     let d = 'val' + data;
  //     console.log(d);
  //     let enteredText = d;
  //     let lineBreaks = (enteredText.match(/\n/g) || [])
  //     // let numberOfLineBreaks = (enteredText.match(/\n/g) || []).length;
  //     // let characterCount = enteredText.length + numberOfLineBreaks;
  //     console.log(lineBreaks);
  //     // let breakS = JSON.stringify(lineBreaks);
  //     if (lineBreaks[0] == "\n") {
  //       let vall: any = d;
  //       let value = vall.replaceAll('val', '');
  //       this.bluetooth.value = value.replaceAll('kg', '');
  //       console.log(this.bluetooth.value)
  //       this.onChange();
  //     }
  //     this.bluetoothSerial.clear();
  //   });
  // }


  onChange() {
    this.bluetooth.isValid = true;
    // alert(JSON.stringify(this.inputScanner));
    if (this.bluetooth.value) {
      this.emitPass.emit(this.bluetooth);
    }
  }

}
