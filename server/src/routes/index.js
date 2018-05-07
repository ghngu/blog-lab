import { Router } from 'express';
import authorsRouter from './authors';
import blogsRouter from './blogs';
import tagsRouter from './tags';
import blogTagRouter from './blogtags';

let router = Router();

router.use('/authors', authorsRouter);
router.use('/blogs', blogsRouter);
router.use('/tags', tagsRouter);
router.use('/blogtags', blogTagRouter);

export default router;