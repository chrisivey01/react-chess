import React from 'react'
import Square from './Square'
var chessRules = require('chess-rules')

export default class Board extends React.Component{
    constructor(props){
        super(props)

        this.state={
            chessImport:{},
            move:[],
            moves:[],
            toggle:false,
            value:null
        }
    }

    componentWillMount(){
        let chessImport = chessRules.getInitialPosition();
        console.log(chessImport)

        this.setState({
            chessImport:chessImport
        })

    }

    selected(index, pieces){
        let {chessImport, toggle,value} = this.state
        let availableMoves = chessRules.getAvailableMoves(chessImport);
        // let valueCheckerIndex = value;
//        let valuePieces;


//shows available moves bottom right corner
        this.showMoves()


//show possible moves

//takes clicked square and adds clicked property and removes off old clicked square
        if (pieces !== null) {
            if (chessImport.board[index].clicked !== true) {
                chessImport.board[index].clicked = true;
                if(value) {
                    chessImport.board[value].clicked = false;
                }
                if(value !== index) {

                    let board = chessImport.board.filter(Boolean)
                        if(board.filter((o) => o.possible == true)){
                            board.filter((o) => o.possible = false)
                        }
                        // if(board.filter((o) => o.possible == true)){
                        //     board.filter((o) => o.possible = false)
                        // }
                    console.log(board)

                }

            }
        }




        let dest = []
        if (dest.length === 0) {
            availableMoves.forEach((task) => {
                if (task.src === index) {
                    dest.push(task.dst)
                }
            })
        }

        for(let i = 0; i< dest.length; i++){
            chessImport.board[i].possible = false;
        }
        for (let i = 0; i < dest.length; i++) {
            if (chessImport.board[dest[i]] === null) {
                chessImport.board.splice([dest[i]], 1, {possible: true})
            } else {
                chessImport.board[dest[i]].possible = true
            }
        }



        this.setState({
            value:index
        })


    }

    showMoves = ()=>{
        let {chessImport} = this.state
        let availableMoves = chessRules.getAvailableMoves(chessImport);
        let results = [];
        for (let move in availableMoves) {
            results.push(chessRules.moveToPgn(chessImport, availableMoves[move]));
        }

        this.setState({
            move:results
        })
    }


    //let results = board.map(function(value) { return value == null ? {} : value; });

    render(){
        let {chessImport, move} = this.state

        return(
            <div>
                <table className="board">
                    <tbody>

                        <tr>

                            {
                                chessImport.board.map((pieces,i) =>
                                {
                                    return <Square index={i} pieces={pieces == null ? {} : pieces} chessImport={chessImport} key={i} onClick={this.selected.bind(this,i, pieces)}/>
                                })
                            }
                        </tr>
                    </tbody>
                </table>

                <div>
                    { '' + move + ''}
                </div>
            </div>
    )}
}
