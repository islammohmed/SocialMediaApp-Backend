import express from 'express'
import { getFacebookData, getInstagramData, getTwitterData } from './controller/socialmedia.controller.js';

const mediaRouter = express.Router();

// Instagram Route
mediaRouter.post('/instagram', getInstagramData);

// Facebook Route
mediaRouter.post('/facebook', getFacebookData);

// Twitter Route
mediaRouter.post('/twitter', getTwitterData);

export default mediaRouter