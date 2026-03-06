import { Router } from "express";
import Article from "../models/Article.js";
import Comment from "../models/Comment.js";

const router = Router();

router.get('/', async (req, res) => {
  res.status(200).json({message: "Server running"});
})
// http://localhost:8013/article

router.post('/article', async (req, res) => {
  const data = new Article({
      header: req.body.header,
      content: req.body.content
  })

  try {
    const dataToSave = await data.save();
    res.status(200).json(dataToSave)
  }
  catch (error) {
    res.status(400).json({message: error})
  }
})


router.get('/article', async (req, res) => {
  try{
    const data = await Article.find();
    res.json(data)
  }
  catch(error){
    res.status(500).json({message: error})
  }
})
// http://localhost:8013/article

router.get('/article/:id', async (req, res) => {
  try{
    const data = await Article.findById(req.params.id);
    res.json(data)
  }
  catch(error){
    res.status(500).json({message: error})
  }
})
// http://localhost:8013/article/69a996396f4faa166698aad1

router.delete('/article/:id', async (req, res) => {
  try{
    const id = req.params.id;
    await Article.findByIdAndDelete(id);
    const data = await Article.find();
    res.send(data);
  }
  catch(error){
    res.status(500).json({message: error})
  }
})

router.put('/article/:id', async (req, res) => {
  try{
    const id = req.params.id;
    const updatedData = req.body;
    const options = { new: true };

    const result = await Article.findByIdAndUpdate(
        id, updatedData, options
    )

    res.send(result)
  }
  catch(error){
    res.status(500).json({message: error})
  }
})

router.post('/article/:id/comment', async (req, res) => {
  try {
    const { id } = req.params;

    const comment = await Comment.create({
      content: req.body.content,
      article: id
    });

    const article = await Article.findByIdAndUpdate(
      id,
      { $push: { comments: comment._id } },
      { new: true }
    );

    res.json(article);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.get('/article/:id/comment', async (req, res) => {
  try{
    const id = req.params.id;

    const result = await Article.findById(id).populate("comments");
  
    res.send(result);
  }
  catch(error){
    res.status(500).json({message: error})
  }
})

export default router;