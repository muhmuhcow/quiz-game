import React from 'react'

function Scores (props) {

        return(
                <tr>
                    <td>{props.username}</td>
                    <td>{props.score}</td> 
                 </tr>
        );
}


export default Scores