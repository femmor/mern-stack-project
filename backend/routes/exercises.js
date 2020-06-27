const router = require("express").Router()

let Exercise = require("../models/exercise.model")

// get all exercises method
router.route("/").get((req, res) => {
    Exercise.find()
        .then(exercises => res.json(exercises))
        .catch(error => res.status(400).json("Error " + error))
})

// Add exercise method
router.route("/add").post((req, res) => {
    const username = req.body.username
    const description = req.body.description
    const duration = Number(req.body.duration)
    const date = Date.parse(req.body.date)

    const newExercise = new Exercise({
        username,
        description,
        duration,
        date
    })

    newExercise.save()
        .then(() => res.json("Exercise added!"))
        .catch(error => res.status(400).json("Error " + error))
})

// get exercise with id method
router.route("/:id").get((req, res) => {
    Exercise.findById(req.params.id)
    .then(exercise => res.json(exercise))
    .catch(error => res.status(400).json("Error "+error))
})

// Delete exercise with Id method
router.route("/:id").delete((req, res) => {
    Exercise.findByIdAndDelete(req.params.id)
    .then(() => res.json("Exercise edited!"))
    .catch(error => res.status(400).json("Error "+error))
})

// Update exercise with Id method
router.route("/update/:id").post((req, res) => {
    Exercise.findById(req.params.id)
    .then(exercise => {
        exercise.username = req.body.username,
        exercise.description = req.body.description,
        exercise.duration = req.body.duration,
        exercise.date = req.body.date

        exercise.save()
        .then(() => res.json("Exercise updated!"))
        .catch(error => res.status(400).json("Error "+error))
    })
    .catch(error => res.status(400).json("Error "+error))
})

module.exports = router