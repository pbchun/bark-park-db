const express = require('express');
const router = express.Router();

const queries = require('../queries/dogprofilequeries.js');

router.get("/", (request, response, next) => {
    queries.list().then(dogprofile => {
        response.json({dogprofile});
    }).catch(next);
});

router.get("/:id", (request, response, next) => {
    queries.read(request.params.id).then(dogprofile => {
        dogprofile
            ? response.json({dogprofile})
            : response.status(404).json({message: 'Not found'})
    }).catch(next);
});

router.post("/", (request, response, next) => {
    queries.create(request.body).then(dogprofile => {
        response.status(201).json({dogprofile: dogprofile});
    }).catch(next);
});

router.delete("/:id", (request, response, next) => {
    queries.delete(request.params.id).then(() => {
        response.status(204).json({deleted: true});
    }).catch(next);
});

router.put("/:id", (request, response, next) => {
    queries.update(request.params.id, request.body).then(dogprofile => {
        response.json({dogprofile: dogprofile[0]});
    }).catch(next);
});

module.exports = router;