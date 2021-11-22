import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RabbitMQModule } from '@golevelup/nestjs-rabbitmq';
import { MailModule } from './mail/mail.module';
import { ConfigModule } from '@nestjs/config';


@Module({
  imports: [
    RabbitMQModule.forRoot(RabbitMQModule,{
      uri: "amqp://guest:guest@localhost:5672"
    }),
    MailModule,
    ConfigModule.forRoot({
      isGlobal: true, // no need to import into other modules
    }),
  ],
  controllers: [AppController],
  providers: [AppService]
})
export class AppModule {}
