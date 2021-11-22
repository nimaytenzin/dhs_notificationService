import { Injectable, Logger } from '@nestjs/common';
import { AmqpConnection, RabbitSubscribe } from '@golevelup/nestjs-rabbitmq';
import { MailService } from './mail/mail.service';

@Injectable()
export class AppService {
  private readonly logger = new Logger(AppService.name);

  constructor(private mailService: MailService){

  }
  @RabbitSubscribe({
    exchange: 'letter_service',
    routingKey: 'letter_assign',
    queue: 'ON_LETTER_ASSIGN',
  })

  public async pubSubHandler(msg: {}) {
    this.logger.log(`Received message: ${JSON.stringify(msg)}`);
    this.mailService.sendMail({
      user:{
        email:"nytenzin@mowhs.gov.bt",
        name:"Nima Yoezer TEnzin"
       },
       subject:"A Letter has been forwarded to you!!",
       body:"Letter ID: 17, Requesting for floor extension has been assigned to you by the Director"
    })
  }

  getHello(): string {
    return 'Hello World!';
  }
}
