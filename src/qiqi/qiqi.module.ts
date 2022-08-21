import { Module } from '@nestjs/common'
import { QiqiController } from './qiqi.controller'
import { QiqiService } from './qiqi.service'

@Module({
  controllers: [QiqiController],
  providers: [QiqiService],
})
export class QiqiModule {}
