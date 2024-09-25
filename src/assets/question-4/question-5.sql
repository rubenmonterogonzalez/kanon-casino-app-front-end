SELECT Player.name AS PlayerName, Player.email AS PlayerEmail, Game.name AS FavouriteGame
FROM Player
JOIN Favourite ON Player.id = Favourite.playerId
JOIN Game ON Favourite.gameId = Game.id
JOIN Type ON Game.typeId = Type.id
WHERE Type.name = 'SLOT';