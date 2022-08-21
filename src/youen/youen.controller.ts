import { Controller, Get } from '@nestjs/common'

@Controller('youen')
export class YouenController {
  @Get()
  show() {
    return 'Youen show method'
  }
}
