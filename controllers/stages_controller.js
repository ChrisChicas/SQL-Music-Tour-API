const stages = require("express").Router()
const db = require("../models")
const {Stage, Event, SetTime, Band} = db

stages.get("/", async (req, res) => {
    try {
        const foundStages = await Stage.findAll()
        res.status(200).json(foundStages)
    } catch (error) {
        res.status(500).json(error)
    }
})

stages.get("/:name", async (req, res) => {
    try {
        const foundStage = await Stage.findOne({
            where: {name: req.params.name},
            include: [
                {
                    model: Event,
                    as: "events"
                },
                {
                    model: SetTime,
                    as: "set_times",
                    include: {model: Band, as: "bands"}
                }
            ]
        })
        res.status(200).json(foundStage)
    } catch (error) {
        res.status(500).json(error)
    }
})

stages.post("/", async (req, res) => {
    try {
        const newStage = await Stage.create(req.body)
        res.status(200).json({
            message: "Successfully created stage!",
            data: newStage
        })
    } catch (error) {
        res.status(500).json(error)
    }
})

stages.put("/:id", async (req, res) => {
    try {
        const updatedStage = await Stage.update(req.body, {
            where: {stage_id: req.params.id}
        })
        res.status(200).json({message: `Successfully updated ${updatedStage} stage(s)!`})
    } catch (error) {
        res.status(500).json(error)
    }
})

stages.delete("/:id", async (req, res) => {
    try {
        const deletedStage = await Stage.destroy({
            where: {stage_id: req.params.id}
        })
        res.status(200).json({message: `Successfully deleted ${deletedStage} stage(s)!`})
    } catch (error) {
        res.status(500).json(error)
    }
})

module.exports = stages