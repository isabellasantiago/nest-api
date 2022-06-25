import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Route, RouteDocument } from './entities/route.entity';

@Injectable()
export class RoutesService {
  constructor(
    @InjectModel(Route.name) private routeModel: Model<RouteDocument>,
  ) {}

  async findAll(): Promise<RouteDocument[]> {
    return await this.routeModel.find().exec();
  }
}
