import { get } from "node:http";
import { format } from "date-fns";
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

const Thread = {
  createdAt: (parent: any) => {
    console.log("Raw createdAt:", parent.createdAt);
    return format(new Date(parent.createdAt), "dd/MM/yyyy");
  }
}

export const resolvers = { queries,mutations,Thread, };