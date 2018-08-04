import React from 'react'
import Square from './Square'
var chessRules = require('chess-rules')

export default class Board extends React.Component{
    constructor(props){
        super(props)

        this.state={
            chessImport:{},
            move:[],
            moves:[]
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
        let {chessImport} = this.state
        let availableMoves = chessRules.getAvailableMoves(chessImport);
        let move;
        console.log(index)
        console.log(chessImport)
        console.log(availableMoves)

//shows available moves bottom right corner
        this.showMoves()


//show possible moves
        let dest = []

        if(dest.length === 0) {
            availableMoves.forEach((task) => {
                if (task.src === index) {
                    dest.push(task)
                }
            })
        }

        for(let i=0; i<dest.length; i ++) {
            if(chessImport.board[dest[i].dst] === null){
                chessImport.board.splice([dest[i].dst], 1, {possible:true})
            }else {
                chessImport.board[dest[i].dst].possible = true
            }
        }


//takes clicked square and adds clicked property
        if(chessImport.board[index].clicked !== true) {
            chessImport.board[index].clicked = true;
        }

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
