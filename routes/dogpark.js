const express = require('express');
const router = express.Router();

const queries = require('../queries/dogparkqueries.js');

router.get("/", (request, response, next) => {
    queries.list().then(dogpark => {
        response.json({dogpark});
    }).catch(next);
});

router.get("/:id", (request, response, next) => {
    queries.read(request.params.id).then(dogpark => {
        dogpark
            ? response.json({dogpark})
            : response.status(404).json({message: 'Not found'})
    }).catch(next);
});

router.post("/", (request, response, next) => {
    queries.create(request.body).then(dogpark => {
        response.status(201).json({dogpark: dogpark});
    }).catch(next);
});

router.delete("/:id", (request, response, next) => {
    queries.delete(request.params.id).then(() => {
        response.status(204).json({deleted: true});
    }).catch(next);
});

router.put("/:id", (request, response, next) => {
    queries.update(request.params.id, request.body).then(dogpark => {
        response.json({dogpark: dogpark[0]});
    }).catch(next);
});

module.exports = router;