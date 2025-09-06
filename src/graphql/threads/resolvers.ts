import { get } from "node:http";

import postService, { createPostPayload } from "../../service/post"
import { error } from "node:console";

const queries = {
  
    getPosts: async (_: any, parameters: any, context: any) => {
    if (context && context.user) {
        const authorId = context.user.id; // ✅ this is the author's id
        const posts = await postService.getPostsByAuthorId(authorId);
        return posts;
    //    throw new Error("Unauthorized");
    }
}
}

const mutations = {
    createPosts : async (_:any, payload:createPostPayload ,context: any) => {
    if (!context || !context.user) {
      throw new Error("Unauthorized");
    }

    const authorId = context.user.id; // ✅ take it from logged-in user
    const res = await postService.createPost({
      post: payload.post,
      authorId,
    });

        return res.id
    }
}

export const resolvers = { queries,mutations}