'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.query(
    'CREATE TRIGGER after_insert_user_tournament' + 
    ' AFTER INSERT ON User_Tournament' +
      ' FOR EACH ROW' +
      ' BEGIN' +
        ' DECLARE opponentId CHAR(36);' +
        ' DECLARE finish_loop INT DEFAULT 0;' +
        ' DECLARE players_cursor CURSOR FOR SELECT DISTINCT userId FROM User_Tournament WHERE tournamentId = NEW.tournamentId AND userId != NEW.userId;' +
        'DECLARE CONTINUE HANDLER FOR NOT FOUND SET finish_loop = 1;' +
        ' OPEN players_cursor;' +
        ' get_opponent: LOOP' +
          ' FETCH players_cursor INTO opponentId;' +
          ' IF finish_loop = 1 THEN' +
          ' LEAVE get_opponent;' +
          ' END IF;' +
          ' INSERT INTO Matches (playerOneId, playerTwoId, tournamentId) VALUES (NEW.userId, opponentId, NEW.tournamentId);' +
        ' END LOOP get_opponent;' +
        ' CLOSE players_cursor;' +
      ' END;')
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.query('DROP TRIGGER IF EXISTS after_insert_user_tournament;');
  }
};
