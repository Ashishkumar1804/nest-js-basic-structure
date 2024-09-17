import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { UserModule } from './user/user.module';

@Module({
  imports: [UserModule]
})

// export class ApiModule {}

export class ApiModule implements NestModule {

  public configure(consumer: MiddlewareConsumer) {
    consumer
    .apply()
    .forRoutes('user/create');
    // consumer
    //   .apply()
    //   .exclude('user-auth/login','user-auth/verify-otp')  //api which doenst need miidleware authentication
    //   .forRoutes('user-auth','web/seller','web/buyer'); //api which need miidleware authentication
  }
}
