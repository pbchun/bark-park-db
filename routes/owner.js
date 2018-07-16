const express = require('express');
const router = express.Router();

const queries = require('../queries/ownerqueries.js');

router.get("/", (request, response, next) => {
    queries.list().then(owner => {
        response.json({owner});
    }).catch(next);
});

router.get("/:id", (request, response, next) => {
    queries.read(request.params.id).then(owner => {
        owner
            ? response.json({owner})
            : response.status(404).json({message: 'Not found'})
    }).catch(next);
});

router.post("/", (request, response, next) => {
    queries.create(request.body).then(owner => {
        response.status(201).json({owner: owner});
    }).catch(next);
});

router.delete("/:id", (request, response, next) => {
    queries.delete(request.params.id).then(() => {
        response.status(204).json({deleted: true});
    }).catch(next);
});

router.put("/:id", (request, response, next) => {
    queries.update(request.params.id, request.body).then(owner => {
        response.json({owner: owner[0]});
    }).catch(next);
});

module.exports = router;