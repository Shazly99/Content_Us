import { Component, OnInit } from '@angular/core';
import { SendService } from './../send.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
 
@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})

export class ContentComponent implements OnInit {
  outputData:any;
  notValid:any;
  sendForm:FormGroup=new FormGroup({
    firstName: new FormControl(null , [Validators.required, Validators.minLength(3), Validators.maxLength(8)]),
    midleName: new FormControl(null ),
    lastName: new FormControl(null ),
    title: new FormControl(null ),
    email: new FormControl(null ,[Validators.required,Validators.email]),
    description: new FormControl(null , [Validators.required, Validators.minLength(3), Validators.maxLength(50)]),
    others: new FormControl(null),
   })
  constructor(private _SendService:SendService) {}

  ngOnInit(): void {
  }

  submit(sendForm:FormGroup){
    // console.log( )
    if (sendForm.valid){
      this._SendService.sendContent(sendForm.value).subscribe((respond)=>{
        this.outputData=respond
      })
    }else{
      this.notValid=" يرجي ادخال البيانات "
    }


  }

 
}
 