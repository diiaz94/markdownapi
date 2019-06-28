const express = require('express');
const util = require('./utils/util');
module.exports = (Collection) => {

  // ======
  // Create
  // ======
  const create = (req, res) => {
    const newEntry = req.body;
    Collection.create(newEntry, (e, newEntry) => {
      if (e) {
        console.log(e);
        return util.errorResponse(res, e);;
      } else {
        return util.okResponse(res, 200, newEntry);
      }
    });
  };

  // =========
  // Read many
  // =========
  const readMany = (req, res) => {
    let query = req.query || {};

    Collection.find(query, (e, result) => {
      if (e) {
        console.log(e.message);
        return util.errorResponse(res, e);
      } else {
        return util.okResponse(res, 200, result);
      }
    });
  };

  // ========
  // Read one
  // ========
  const readOne = (req, res) => {
    const { _id } = req.params;

    Collection.findById(_id, (e, result) => {
      if (e) {

        console.log(e.message);
        return util.errorResponse(res, e);
      } else {
        return util.okResponse(res, 200, result);
      }
    });
  };

  // ======
  // Update
  // ======
  const update = (req, res) => {
    const changedEntry = req.body;
    Collection.update({ _id: req.params._id }, { $set: changedEntry }, (e, result) => {
      if (e)

        return util.errorResponse(res, e);
      else
        return util.okResponse(res, 200, result);
    });
  };

  // ======
  // Remove
  // ======
  const remove = (req, res) => {
    Collection.remove({ _id: req.params._id }, (e, result) => {
      if (e)

        return util.errorResponse(res, e);
      else
        return util.okResponse(res, 200, result);
    });
  };

  // ======
  // Routes
  // ======

  let router = express.Router();

  router.post('/', create);
  router.get('/', readMany);
  router.get('/:_id', readOne);
  router.put('/:_id', update);
  router.delete('/:_id', remove);

  return router;

}