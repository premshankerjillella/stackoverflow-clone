import React from 'react';
import './tag.css'
const Tag = ({tag}) =>{
    return(
        <div className="usertag">
            <div className="usertagname">
                {tag.tag_name}
            </div>
            <div className="usertagstats">
                <small>Score {tag.answer_score}</small>
                <br/>
                <small>Posts {tag.answer_count}</small>
            </div>
        </div>  
    )
}

export default Tag;