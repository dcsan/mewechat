Picker.route('/post/:_id', function(params, req, res, next) {
    console.log("post")
    var post = {
            name: "bob",
            val: 1
        };
        // res.end(post.content);
        // res.send(post);
    res.end(EJSON.stringify(post, {indent: true}) );

});
