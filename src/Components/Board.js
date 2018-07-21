import React from 'react'
import Square from './Square'
var chessRules = require('chess-rules')

export default class Board extends React.Component{
    constructor(props){
        super(props)

        this.state={
            board:[]
        }
    }


    componentWillMount (){
        let test = chessRules.getInitialPosition().board;
        let blankSpace = {}
        for(let i=0; i< test.length; i++){
            if(test[i] === null){
                test[i] = blankSpace
            }else{
                test[i].clicked = false
            }
        }

        this.setState({
            board:test
        })
        console.log(test)
    }

    render(){
        return(

                <table className="board">
                    <tbody>
                    <tr>
                        {
                            this.state.board.map((squares,i) =>
                            {
                                return <Square squares={squares} iterator={i}/>
                               // return <td className="chessSquare">{squares.type}</td>
                            })
                        }
                    </tr>
                    </tbody>
                </table>

        )
    }
}