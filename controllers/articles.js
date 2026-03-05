import { Router } from "express";
import Article from "../models/Article.js";

const router= Router();

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

export default router;