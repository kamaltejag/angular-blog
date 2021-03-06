const express = require('express')
const router = express.Router();
const Post = require('../models/Post')

// Get Posts
router.get("/", async (req, res) => {
	try{
        const posts = await Post.find()
		res.json(posts);
    }catch(err) {
        res.status(500).json({ message: err.message })
    }
});

// Get a single Post
router.get("/:id", getPost,(req, res) => {
	res.json(res.post)
});

// Create Posts
router.post("/", async(req, res) => {
	const post = new Post({
		title: req.body.title,
		content: req.body.content
	})

	try{
		const newPost = await post.save()
		res.status(201).json(newPost)
	}catch(err){
		res.status(400).json({ message: err.message });
	}
});

// Update Posts
router.patch("/:id", getPost, async (req, res) => {
	if(req.body.title != null){
		res.post.title = req.body.title
	}
	if (req.body.content != null) {
		res.post.content = req.body.content;
	}

	try{
		const updatedPost = await res.post.save()
		res.json(updatedPost)
	}catch(err){
		res.status(400).json({ message: err.message })
	}
});

// Delete Posts
router.delete("/:id", getPost, async (req, res) => {
	try{
		await res.post.remove()
		res.json({ message: "Deleted Post" })
	}catch(err){
		res.status(500).json({ message: err.message })
	}
});

async function getPost(req, res, next){
	let post;
	try{
		post = await Post.findById(req.params.id);
		if(post == null){
			return res.status(404).json({ message: `Cannt Find Post with id ${req.params.id}` })
		}
	}catch(err){
		return res.status(500).json({ message: err.message })
	}

	res.post = post;
	next();
}

module.exports = router;