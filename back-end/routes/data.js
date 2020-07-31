import { Router } from 'express';
import data from '../data.json';


const router = Router();

router.get('/data', (request, response) => {
  const { sortBy, order, filterLocation, pageNumber, pageSize } = request.query;
  
  let dataPage;
  let lastPage = Math.ceil(data.length / pageSize);
  if (order === 'desc') {
    dataPage = data.sort((a, b) => b[sortBy] - a[sortBy]);
  } else {
    dataPage = data.sort((a, b) => a[sortBy] - b[sortBy]);
  }

  if (filterLocation) {
    dataPage = dataPage.filter(({ content }) => content.location.includes(filterLocation));

    lastPage = Math.ceil(dataPage.length / pageSize);

    dataPage = dataPage.slice((Number(pageNumber || 1) - 1) * Number(pageSize || 10),
      (Number(pageNumber || 1) - 1) * Number(pageSize || 10) + Number(pageSize || 10));
  } else {
    dataPage = data.slice((Number(pageNumber || 1) - 1) * Number(pageSize || 10),
      (Number(pageNumber || 1) - 1) * Number(pageSize || 10) + Number(pageSize || 10));
  }

  response.status(200).json({ data: dataPage, lastPage });
});

module.exports = router;
