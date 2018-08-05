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
                this.setState({
                    value:index
                })
            }
        }




        let toggled = toggle;
        let dest = []

        toggled = !toggled
        if(toggled === true) {

            if (dest.length === 0) {
                availableMoves.forEach((task) => {
                    if (task.src === index) {
                        dest.push(task)
                    }
                })
            }

            for (let i = 0; i < dest.length; i++) {
                if (chessImport.board[dest[i].dst] === null) {
                    chessImport.board.splice([dest[i].dst], 1, {possible: true})
                } else {
                    chessImport.board[dest[i].dst].possible = true
                }
            }
        }else{
            let board = chessImport.board.filter


            (function(piece){
                return piece !== null ;
            })

            board.filter(function(o){
                return o.possible == true ?  o.possible = false : o
            })

            if (dest.length === 0) {
                availableMoves.forEach((task) => {
                    if (task.src === index) {
                        dest.push(task)
                    }
                })
            }

            for (let i = 0; i < dest.length; i++) {
                if (chessImport.board[dest[i].dst] === null) {
                    chessImport.board.splice([dest[i].dst], 1, {possible: true})
                } else {
                    chessImport.board[dest[i].dst].possible = true
                }
            }
        }

        this.setState({
            toggle:toggled
        })



        // if(toggle === true){
        //     let objIndex = chessImport.board.filter(function(o){return o == null ?  o.possible })
        //     let chess = chessImport;
        //
        //     chess.board = objIndex
        //
        //     this.setState({
        //         chessImport:chess.board
        //     })
        //
        // }
        //
        //
        //
        // let toggler = toggle
        // toggler = !toggler
        //
        // this.setState({
        //     toggle:toggler
        // })


        // if(index !== value || pieces !== null) {
        //
        //     for(let i= 0; i<chessImport.board.length; i++){
        //         let objIndex = chessImport.board.filter(o => o == null ?  {} : o.possible = false )
        //
        //         if(objIndex > -1) {
        //             chessImport.board.slice(objIndex, 1)
        //         }
        //         if (pieces !== null) {
        //             if (chessImport.board[index].clicked !== true) {
        //                 chessImport.board[index].clicked = true;
        //             }
        //         }
        //     }
        //
        //
        //     this.setState({
        //         value:index
        //     })
        //
        // }

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
