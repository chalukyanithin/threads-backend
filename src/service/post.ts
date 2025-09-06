import { prismaClient } from "../lib/db";

export interface createPostPayload {
  post: string;
  authorId: string;
}

class PostService {
 public static createPost(payload:createPostPayload){
                const {post,authorId} = payload
                return prismaClient.posts.create({  
                        data: {
                                post,
                                authorId
                        }
                })
        }
    public static getPostsByAuthorId(authorId: string) {
  return prismaClient.posts.findMany({
    where: { authorId },
    orderBy: { createdAt: "desc" }, // optional
  });
}
    }

export default PostService;