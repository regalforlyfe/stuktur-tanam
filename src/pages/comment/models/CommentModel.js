function CommentModel({id,postId,name,email,body}) {
    let obj = {};
    obj.id = id;
    obj.postId = postId;
    obj.name = name;
    obj.email = email;
    obj.body = body;
    return obj;
  }
  
  export default CommentModel;