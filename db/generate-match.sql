DELIMITER $$
DROP PROCEDURE IF EXISTS generate_match;
CREATE PROCEDURE generate_match (newPlayerId INT, opponentId INT, currentTournamentId INT)
BEGIN
  INSERT INTO Matches (playerOneId, playerTwoId, tournamentId) VALUES (newPlayerId, opponentId, currentTournamentId);
END$$
DELIMITER ;

DELIMITER $$
DROP TRIGGER IF EXISTS after_insert_user_tournament;
CREATE TRIGGER after_insert_user_tournament 
AFTER INSERT ON User_Tournament
  FOR EACH ROW
  BEGIN
    DECLARE opponentId INT;
    DECLARE finish_loop INT DEFAULT 0;

    DECLARE players_cursor CURSOR FOR SELECT DISTINCT userId FROM User_Tournament WHERE tournamentId = NEW.tournamentId AND userId != NEW.userId;

    DECLARE CONTINUE HANDLER FOR NOT FOUND SET finish_loop = 1;

    OPEN players_cursor;

    get_opponent: LOOP

      FETCH players_cursor INTO opponentId;

      IF finish_loop = 1 THEN 
      LEAVE get_opponent;
      END IF;

      CALL generate_match(NEW.userId, opponentId, NEW.tournamentId);
    
    END LOOP get_opponent;
    CLOSE players_cursor;

  END$$

DELIMITER ;
