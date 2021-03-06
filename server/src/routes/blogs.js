import { Router } from 'express';
import Table from '../Table';
import { callProcedure } from '../config/db';

let router = Router();
let tableName = new Table('Blogs');

router.get('/tags/:tagid', (req, res) => {
    callProcedure(`spGetById`, req.params.tagid)
        .then(results => {
            res.json(results[0]);
        })
        .catch(err => {
            console.log(err)
            res.sendStatus(500)
        })
})

router.get('/author/:authorid', (req, res) => {
    callProcedure(`spAuthorBlogs`, req.params.authorid)
        .then(results => {
            res.json(results[0]);
        })
        .catch(err => {
            console.log(err)
            res.sendStatus(500)
        })
})

router.get('/:blogid', (req, res) => {
    tableName
        .getOne(req.params.blogid)
        .then(results => {
            res.json(results)
        })
        .catch(err => {
            console.log(err)
            res.sendStatus(500);
        })
})

router.get('/', (req, res) => {
    tableName
        .getAll()
        .then(results => {
            res.json(results)
        })
        .catch(err => {
            console.log(err)
            res.sendStatus(500)
        })
})

router.post('/', (req, res) => {
    tableName
        .insert(req.body)
        .then(results => {
            res.json(results)
        })
        .catch(err => {
            console.log(err);
            res.sendStatus(500);
        })
})

router.put('/:blogid', (req, res) => {
    tableName
        .update(req.params.blogid, req.body)
        .then(results => {
            res.json(results)
        })
        .catch(err => {
            console.log(err);
            res.sendStatus(500);
        })
})

export default router;