import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateTweetDto } from './dto/create-tweet.dto';
import { UpdateTweetDto } from './dto/update-tweet.dto';
import { Tweet } from './entities/tweet.entity';

@Injectable()
export class TweetsService {
  constructor(
    @InjectModel(Tweet)
    private tweetModel: typeof Tweet,
  ) {}
  async create(createTweetDto: CreateTweetDto): Promise<Tweet> {
    return await this.tweetModel.create(createTweetDto as any);
  }

  findAll() {
    return this.tweetModel.findAll();
  }
}
