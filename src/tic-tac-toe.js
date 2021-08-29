class TicTacToe {
    constructor() {
        this.field = [[0,0,0],[0,0,0],[0,0,0]];
        this.letCurPlayer = 'x';
    }

    isWin(p) {
        if ((this.field[0][0] == p && this.field[0][1] == p && this.field[0][2] == p) ||
        (this.field[1][0] == p && this.field[1][1] == p && this.field[1][2] == p) ||
        (this.field[2][0] == p && this.field[2][1] == p && this.field[2][2] == p) ||
        (this.field[0][0] == p && this.field[1][0] == p && this.field[2][0] == p) ||
        (this.field[0][1] == p && this.field[1][1] == p && this.field[2][1] == p) ||
        (this.field[0][2] == p && this.field[1][2] == p && this.field[2][2] == p) ||
        (this.field[0][0] == p && this.field[1][1] == p && this.field[2][2] == p) ||
        (this.field[0][2] == p && this.field[1][1] == p && this.field[2][0] == p)) {
            return true;
        } else return false;
    }

    getCurrentPlayerSymbol() {
        return this.letCurPlayer;
    }

    nextTurn(rowIndex, columnIndex) {
        if (this.field[rowIndex][columnIndex] != 0) return;
        this.field[rowIndex][columnIndex] = this.letCurPlayer;
        this.letCurPlayer = (this.letCurPlayer == 'o') ? 'x' : 'o';
    }

    isFinished() {
        if (this.getWinner() || this.noMoreTurns()) {
            return true;
        } else {
            return false;
        }
    }

    getWinner() {
       
        if (this.isWin('x')) {
            return 'x';
        } else if (this.isWin('o')) {
            return 'o';
        } else {
            return null;
        }

    }

    noMoreTurns() {
        let turns = 0;
         for (let i = 0; i < 3; i++) {
            for (let j = 0; j < 3; j++) {
                if (this.field[i][j] != 0) {
                    turns++;
                }
            }
        }
        if (turns == 9) {
            return true;
        } else {
            return false;
        };
    }

    isDraw() {
        if (this.noMoreTurns() && !this.getWinner()) {
            return true;
        } else {
            return false;
        }
    }

    getFieldValue(rowIndex, colIndex) {
        if (this.field[rowIndex][colIndex] != 0) {
            return this.field[rowIndex][colIndex];
        } else return null;
    }
}

module.exports = TicTacToe;
