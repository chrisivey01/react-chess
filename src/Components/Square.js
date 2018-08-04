import React from 'react'
var chessRules = require('chess-rules')

export default class Square extends React.Component{
    constructor(props){
        super(props)
    }


    // clicked = (i, position) =>{
    //     let board = position.board
    //
    //     let availableMoves = chessRules.getAvailableMoves(position);
    //
    // //test change of board
    //     for(let j=0; j<result.length; j++){
    //         var index = result[j].dst
    //         board.splice(index,1, 'x')
    //     }
    // //maybe?
    //     this.props.chessImport.board = board;
    //
    //     let results = [];
    //
    //     var result = availableMoves.filter(src => src.src === i);
    //
    //     for (let move in availableMoves) {
    //         results.push(chessRules.moveToPgn(position, availableMoves[move]));
    //     }
    //     return results;
    //
    // }

    piecePlacement = (i, type, side, possible) => {

            for (i = 0; i < 64; i++) {
                if (possible === true) {
                    return <span className="possibleChessSquare"></span>
                }
                if (side === "W") {
                    switch (type) {
                        case "R":
                            return <span>&#9814;</span>;
                        case "N":
                            return <span>&#9816;</span>;
                        case "B":
                            return <span>&#9815;</span>;
                        case "Q":
                            return <span>&#9813;</span>;
                        case "K":
                            return <span>&#9812;</span>;
                        case "P":
                            return <span>&#9817;</span>;
                        case undefined:
                            return <span></span>;
                        default:
                    }
                } else {
                    switch (type) {
                        case "R":
                            return <span>&#9820;</span>;
                        case "N":
                            return <span>&#9822;</span>;
                        case "B":
                            return <span>&#9821;</span>;
                        case "Q":
                            return <span>&#9819;</span>;
                        case "K":
                            return <span>&#9818;</span>;
                        case "P":
                            return <span>&#9823;</span>;
                        default:
                    }
                }
            }
        }

    render(){


        return <td className="chessSquare" onClick={this.props.onClick}>
            {this.piecePlacement(
                this.props.index,
                this.props.pieces.type,
                this.props.pieces.side,
                this.props.pieces.possible
                )
            }

            </td>

    }

}