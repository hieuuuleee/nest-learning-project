import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { PostsModule } from './posts/posts.module';

@Module({
  imports: [UsersModule, AuthModule, PostsModule],
  // imports: [
  //   TypeOrmModule.forRoot({
  //     type: 'postgres',
  //     host: process.env.DATABASE_HOST ?? 'localhost',
  //     port: Number(process.env.DATABASE_PORT) ?? 5432,
  //     username: process.env.DATABASE_USER ?? 'nest_user',
  //     password: process.env.DATABASE_PASSWORD ?? 'nest_password',
  //     database: process.env.DATABASE_NAME ?? 'nest_db',
  //     autoLoadEntities: true,
  //     synchronize: true, // Set to false in production
  //   }),
  //   UsersModule,
  //   AuthModule,
  // ],
})
export class AppModule {}
