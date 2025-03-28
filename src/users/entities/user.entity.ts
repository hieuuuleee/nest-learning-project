import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Post } from "src/posts/entities/post.entity";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ unique: true} )
    username: string;

    @Column({ unique: true} )
    email: string;

    @Column()
    password: string;

    @OneToMany(() => Post, (post) => post.user, { cascade: true })
    posts: Post[];
  }