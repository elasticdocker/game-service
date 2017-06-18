define({ "api": [
  {
    "type": "get",
    "url": "/v1/game/:gameId",
    "title": "Request game for given id",
    "name": "GetU",
    "group": "2_GameService",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "gameId",
            "optional": false,
            "field": "gameId",
            "description": "<p>'gameId for requested game'</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "GameData",
            "optional": false,
            "field": "Gamedata",
            "description": "<p>'Todo Copy structure'</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/api/game/index.ts",
    "groupTitle": "2_GameService"
  },
  {
    "type": "put",
    "url": "/v1/game/:gameId",
    "title": "Create/Update game",
    "name": "PutU",
    "group": "2_GameService",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "GameData",
            "optional": false,
            "field": "body",
            "description": "<p>'Todo Copy structure'</p>"
          },
          {
            "group": "Parameter",
            "type": "gameId",
            "optional": false,
            "field": "id",
            "description": "<p>for requested game</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/api/game/index.ts",
    "groupTitle": "2_GameService"
  }
] });