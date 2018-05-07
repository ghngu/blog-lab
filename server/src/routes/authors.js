import { Router } from 'express';
import Table from '../Table';

let router = Router();
let tableName = new Table('Authors');
let id;

router.get('/:authorid', (req, res) => {
    id = req.params.authorid
    tableName
        .getOne(id)
        .then(results => {
            res.json(results)
        })
        .catch(err => {
            console.log(err);
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
            console.log(err);
            res.sendStatus(500);
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

export default router;