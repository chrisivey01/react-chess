import React from 'react'

export default class Square extends React.Component{
    constructor(props){
        super(props)
    }


    clicked = (i, type, side, clicked) =>{
        console.log(this.props.squares)
    }

    piecePlaecment = (i, type, side, clicked) => {

        for(i=0; i<64; i++){

            if(side === "W"){
                switch(type){
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
                    case "":
                        return <span></span>;
                    default:
                }
            } else {
                switch(type){
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


        return <td className="chessSquare" onClick={this.clicked.bind(this, this.props.iterator, this.props.squares.type,this.props.squares.side,
            this.props.squares.clicked)}>

            {this.piecePlaecment(this.props.iterator, this.props.squares.type, this.props.squares.side, this.props.squares.clicked)}

            </td>

    }

}