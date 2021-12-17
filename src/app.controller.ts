import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { OperationDocumentDto } from './operation.schema';
const validUrl = require('valid-url');
const shortId = require('shortid');

const baseUrl = 'http://mgm.shrt/';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post('encode')
  async getEncoded(@Body('url') url: string) {
    if (validUrl.isUri(url) != undefined) {
      let operation = await this.appService.exists(url);
      if (operation == undefined) {
        const shortened = baseUrl + shortId.generate();
        operation = await this.appService.createOperation(
          new OperationDocumentDto(url, shortened, 'encode'),
        );
      }
      return {
        url: operation.url,
        shortened: operation.shortened,
      };
    }
    return {
      message: 'Invalid URL',
    };
  }

  @Post('decode')
  async getDecoded(@Body('url') url: string) {
    const operation = await this.appService.exists(url);
    if (operation != undefined)
      return {
        url: operation.url,
        shortened: operation.shortened,
      };
    return {
      message: 'Invalid URL',
    };
  }
}
