'use strict';

// import express and initialise router
const express = require('express');
const router = express.Router();
const playlist = require('./controllers/playlist.js');
// import controllers
const start = require('./controllers/start.js');
const dashboard = require('./controllers/dashboard.js');
const about = {
  index(request, response) {
    const viewData = {
      title: 'About Playlist Maker',
    };
    response.render('about', viewData);
  },
}


// connect routes to controllers
router.get('/', start.index);
router.get('/dashboard', dashboard.index);
router.get('/about', about.index);
router.get('/playlist/:id', playlist.index);
router.get('/playlist/:id/deleteSong/:songid', playlist.deleteSong);
router.get('/dashboard/deleteplaylist/:id', dashboard.deletePlaylist);

// export router module
module.exports = router;