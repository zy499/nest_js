import { Module } from '@nestjs/common'
import { AppController } from './app.controller'
import { AppService } from './app.service'
import { YouenModule } from './youen/youen.module'
import { QiqiModule } from './qiqi/qiqi.module'

@Module({
  imports: [YouenModule, QiqiModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
