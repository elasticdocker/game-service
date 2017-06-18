import { DynamoDb } from '../dynamoDb-util'

export type GameData = {
	selectedArr?: string[],
	randomWordArr?: string[]
}

export class Game {

	private static gameMap: { [key: string]: GameData; } = {};

	public static get(gameId: string): Promise<GameData> {

		const dynamoDb = new DynamoDb().getDynamodb();
		var params = {
			TableName: 'games1',
			Key: {
				'id': {'N': gameId}
			}
		};

		return new Promise<GameData>((resolve, reject) => {
			dynamoDb.getItem(params, function (err, data) {
				if (err) {
					reject(err.toString());
				} else {
					if (!!data.Item && !!data.Item.game) {
						const gameData: GameData = JSON.parse(data.Item.game.S);
						resolve(gameData);
					} else {
						reject("output is undefined");
					}
				}
			});
		});
	}

	// It's put since user provides id
	// TODO: Direct object reference security
	// TODO: Retune create or update flag for corrosponding 201 or 200 response status
	public static put(gameId: string, gameData: GameData): void {
		if (!!gameId && !!gameData) {
			this.gameMap[gameId] = gameData;
		}
		console.log(new Date());
		const dynamoDb = new DynamoDb().getDynamodb();
		var params = {
			TableName: 'games1',
			Item: {
				'id': {'N': gameId},
				//  'time' : { 'N' : new Date().getUTCMinutes().toString() },
				'game': {'S': JSON.stringify(gameData)}
			}
		};

		console.log("Adding a new item...");
		dynamoDb.putItem(params, function (err, data) {
			if (err) {
				console.error("Unable to add item. Error JSON:", JSON.stringify(err, null, 2));
			} else {
				console.log("Added item:", JSON.stringify(data, null, 2));
			}
		});

	}
}