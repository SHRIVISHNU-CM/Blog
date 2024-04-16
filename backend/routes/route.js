const express = require('express')
const Router = express.Router()
const userOne = require('../models/userOne');
const usertwo = require('../models/userTwo')



//collection One
Router.post('/api/create/', async (req, res) => {
    try {
        const name = req.body.name;
        const findResult = await userOne.findOne({name:name})
        if (findResult) {
            return res.status(201).json("User already Exist")
        } else {
            const result = await userOne.create({ name })
            console.log(result)
            return res.status(200).json(result);

        }

    } catch (e) {
        return res.status(400).json(e.message)
    }
});

//Login Route
Router.post('/api/login', async (req, res) => {
    try {
        const name = req.body.name;
        const result = await userOne.findOne({ name: name });
        if (!result) {
            return res.status(400).json({
                message: "User not found, Enter coorect User Name"
            })
        }
        console.log(result);
        return res.status(200).json(result);

    } catch (error) {
        console.log(error.message);
        return res.status(400).json(error.message)
    }
})

//collection Two

Router.post('/api/two', async (req, res) => {
    try {
        const postData = req.body;
        const newPost = new usertwo(postData)

        const user = await userOne.findById(postData.author)

        if (!user) {
            return res.status(404).json("Not found")
        }
        const post = await newPost.save();
        user.notes.push(post._id);
        await user.save();

        res.status(200).json(post)

    } catch (error) {
        console.log(error.message);
        return res.status(400).json(error.message)
    }
});
//getusertwo
Router.get('/api/usertwo/:id',async(req,res)=>{
    try {
        const id = req.params.id
        const result = await usertwo.findById({
            _id:id
        })
        console.log(result);
        return res.status(200).json(result)
        
    } catch (error) {
        console.log(error);
        return res.status(400).json(error.message)
    }
})

//get
Router.get('/api/create', async (req, res) => {
    try {
        const result = await userOne.find().populate('notes')
        // await userOne.save()

        console.log(result)
        return res.status(200).json(result)
    } catch (e) {
        return res.status(400).json(e.message)
    }
})
//Searh One user
Router.get('/api/find/:id', async(req,res)=>{
    try {
        const id = req.params.id;
        const result = await userOne.findOne({_id:id}).populate('notes')
        if(!result){
            return res.status(404).json("Check Id")
        }else{
            console.log(result)
            return res.status(200).json(result)
        }

    } catch (error) {
        console.log(error.message);
        return res.status(400).json(error.message)
    }
})




//update
Router.put('/api/:id', async (req, res) => {
    try {
        const postID = req.params.id;
        const sub = req.body.sub;
        const head = req.body.head
        const post = await usertwo.findByIdAndUpdate({ _id: postID }, { sub, head }, { new: true });

        console.log(post);
        return res.status(200).json(post)
    } catch (error) {
        console.log(error);
        return res.status(400).json(error)
    }
})

//delete post

Router.delete('/api/:id', async (req, res) => {
    try {
        const postId = req.params.id;
        const post = await usertwo.findByIdAndDelete(postId);
        const response = await userOne.updateOne({ notes: postId }, { $pull: { notes: postId } });

        console.log(response);
        return res.status(200).json(response);
    } catch (error) {
        console.log(error);
        return res.status(400).json(error.message)
    }
})
//delete user

Router.delete('/api/user/:id', async (req, res) => {
    try {
        const userid = req.params.id;
        const user = await userOne.findByIdAndDelete(userid);

        console.log(user)
        return res.status(200).json(user)
    } catch (error) {
        console.log(error);
        return res.status(400).json(error.message)
    }
})




module.exports = Router