import { Module } from '@nestjs/common'
import { YouenController } from './youen.controller'
import { YouenService } from './youen.service'

@Module({
  controllers: [YouenController],
  providers: [YouenService],
})
export class YouenModule {}
