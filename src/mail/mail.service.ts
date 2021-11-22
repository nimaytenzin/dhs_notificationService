import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';


export interface User{
    name:string,
    email:string
}

export interface MailData{
    user: User,
    subject:string,
    body:string
}

@Injectable()
export class MailService {
  constructor(private mailerService: MailerService) {}
  async sendMail(data: MailData) {
    await this.mailerService.sendMail({
      to: data.user.email,
      from: '"DHS Efiling Bot" <dhs@gmail.com>', // override default from
      subject: data.subject,
      template: './confirmation', // `.hbs` extension is appended automatically
      context: { 
        name: data.user.name,
        data:data.body
      },
    });
  }
}