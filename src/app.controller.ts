import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { MailService } from './mail/mail.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private mailService:MailService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get("mail")
  sendMail(){
    return this.mailService.sendMail({
       user:{
        email:"nytenzin@mowhs.gov.bt",
        name:"Nima Yoezer TEnzin"
       },
       subject:"A Letter has been forwarded to you!!",
       body:"Letter ID: 17, Requesting for floor extension has been assigned to you by the Director"
    })
  }

}
