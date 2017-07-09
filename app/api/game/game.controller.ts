import { Payload } from '../payload';
import { Game as GameService, GameData } from '../../dao';
import { Logger }from '../../logger';

export default class GameController {

	constructor() {
	}


	public getGame(req: any, res: any, next: any) {
		res.set('Cache-Control', 'no-cache');
		const gameId = req.params.gameId;
		GameService.get(gameId).then((gameData: GameData) => {
			const payload: Payload = {
				meta: [{input: {gameId: gameId}}],
				data: [gameData]
			};
			const serviceLog = JSON.stringify(gameData);
			Logger.log(req, res, next, serviceLog);
			res.json(payload);
		});
	}


	public  putGame(req: any, res: any, next: any) {
		res.set('Cache-Control', 'no-cache');
		const gameId = req.params.gameId;
		// TODO: verify input ..assuming matching JWT token
		const inputSelectedArr = req.body['selectedArr'];
		const inputRandomWordArr = req.body['randomWordArr'];
		const gameData: GameData = {
			selectedArr: inputSelectedArr,
			randomWordArr: inputRandomWordArr
		}
		GameService.put(gameId, gameData);
		const serviceLog = gameId + "-" + JSON.stringify(gameData);
		Logger.log(req, res, next, serviceLog);

		// Add code to send 201 for new creation
		res.sendStatus(200);
	}

}

