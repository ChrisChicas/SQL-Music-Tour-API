const events = require("express").Router()
const db = require("../models")
const {Event, MeetGreet, SetTime, Stage, Band} = db

events.get("/", async (req, res) => {
    try {
        const foundEvents = await Event.findAll({
            order: [["date", "ASC"]]
        })
        res.status(200).json(foundEvents)
    } catch (error) {
        res.status(500).json(error)
    }
})

events.get("/:name", async (req, res) => {
    try {
        const foundEvent = await Event.findOne({
            where: {name: req.params.name},
            include: [
                {
                    model: MeetGreet,
                    as: "meet_greets",
                    include: {model: Band, as: "bands"}
                },
                {
                   model: SetTime,
                   as: "set_times",
                   include: [{
                       model: Band,
                       as: "bands"
                   }, {
                       model: Stage,
                       as: "stages"
                   }]
                },
                {
                    model: Stage,
                    as: "stages"
                }
            ]
        })
        res.status(200).json(foundEvent)
    } catch (error) {
        res.status(500).json(error)
    }
})

events.post("/", async (req, res) => {
    try {
        const newEvent = await Event.create(req.body)
        res.status(200).json({
            message: "Successfully created event!",
            data: newEvent
        })
    } catch (error) {
        res.status(500).json(error)
    }
})

events.put("/:id", async (req, res) => {
    try {
        const updatedEvent = await Event.update(req.body, {
            where: {event_id: req.params.id}
        })
        res.status(200).json({message: `Successfully updated ${updatedEvent} event(s)!`})
    } catch (error) {
        res.status(500).json(error)
    }
})

events.delete("/:id", async (req, res) => {
    try {
        const deletedEvent = await Event.destroy({
            where: {event_id: req.params.id}
        })
        res.status(200).json({message: `Successfully deleted ${deletedEvent} event(s)!`})
    } catch (error) {
        res.status(500).json(error)
    }
})

module.exports = events