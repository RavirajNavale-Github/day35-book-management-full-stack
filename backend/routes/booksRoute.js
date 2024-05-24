const express = require('express');

const router = express.Router();

router.route('/').post(handleCreateNewBook).get(handleGetAllBooks);

router
    .route('/:id')
    .get(handleGetBookById)
    .put(handleUpdateBookById)
    .delete(handleDeleteBookById);

module.exports = router;