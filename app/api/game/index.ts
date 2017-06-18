import * as express from "express";
import GameController from './game.controller';

const router = express.Router();

const gameCtrl = new GameController();

// Add all routes

/**
 * @api {get} /v1/game/:gameId Request game for given id
 * @apiName GetU
 * @apiGroup 2 GameService
 *
 * @apiParam {gameId} gameId 'gameId for requested game'
 * @apiSuccess {GameData} Gamedata 'Todo Copy structure'
 */

router.get('/v1/games/:gameId', gameCtrl.getGame);

/**
 * @api {put} /v1/game/:gameId Create/Update game
 * @apiName PutU
 * @apiGroup 2 GameService
 *
 * @apiParam {GameData} body 'Todo Copy structure'
 * @apiParam {gameId} id for requested game
 *
 */

router.put('/v1/games/:gameId', gameCtrl.putGame);

module.exports = router;

