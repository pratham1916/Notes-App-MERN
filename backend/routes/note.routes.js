const express = require("express");
const { noteModel } = require("../model/note.model");
const { auth } = require("../middlewares/auth.middleware");
const noteRouter = express.Router();


noteRouter.post("/", auth, async (req, res) => {
    try {
        const note = new noteModel(req.body);
        await note.save();
        res.status(201).json({ message: "Note has been added" });
    }
    catch (error) {
        res.status(400).json(error)
    }
})

noteRouter.get("/", auth, async (req, res) => {
    try {
        const note = await noteModel.find({ userID: req.body.userID });
        res.status(201).json(note);
    }
    catch (error) {
        res.status(400).json(error)
    }
})

noteRouter.patch("/:noteID", auth, async (req, res) => {
    const payload = req.body
    const { noteID } = req.params;
    try {
        const note = await noteModel.findOne({ _id: noteID })
        if (req.body.userID === note.userID) {
            await noteModel.findByIdAndUpdate({ _id: noteID }, payload);
            res.status(201).json({ msg: `Note with id ${noteID} is Updated` });
        }
        else {
            res.status(400).json("Not Have Access to Update Someones Notes")
        }
    }
    catch (error) {
        res.status(400).json(error)
    }   
})

noteRouter.delete("/:noteID", auth, async (req, res) => {
    const { noteID } = req.params;
    try {
        const note = await noteModel.findOne({ _id: noteID })
        if (req.body.userID === note.userID) {
            await noteModel.findByIdAndDelete({ _id: noteID });
            res.status(201).json({ msg: `Note with id ${noteID} is Deleted` });
        }
        else {
            res.status(400).json("Not Have Access to Delete Someones Notes")
        }
    }
    catch (error) {
        res.status(400).json(error)
    }   
})

module.exports = {
    noteRouter
}