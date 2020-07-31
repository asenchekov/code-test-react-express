import { Router } from 'express';


const router = Router();

router.get('/', (request, response) => {
  response.sendFile(path.join(__dirname, '../../front-end/build'));
});

module.exports = router;
