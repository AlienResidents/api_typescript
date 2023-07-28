// src/users/usersController.ts
import {
//  Body,
  Controller,
  Get,
  Path,
//  Post,
//  Query,
  Route,
//  SuccessResponse,
} from "tsoa";
import { Fortune } from "./fortune";
import { FortuneService } from "./fortuneService";

@Route("fortune")
export class FortuneController extends Controller {
  @Get("{fortune}")
  public async getFortune(
    @Path() fortune: string,
  ): Promise<Fortune> {
    return new FortunesService().get(fortuneId, name);
  }
}
