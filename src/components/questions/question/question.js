import React from 'react';
import './question.css';
import { v4 as uuidv4 } from 'uuid';
import {
    Link
} from 'react-router-dom';
function Question({ question }) {
    let myDate = new Date(question.last_activity_date*1000);

    return (
        <div className="question-box">
            <div className="votes">
                {question.score}
                <div><small>votes</small></div>
            </div>
            <div className={(question.answer_count > 0 ? 'answers answers-true' : 'answers')}>
                {question.answer_count}
                <div><small>answers</small></div>
            </div>
            <div className="views">
                {question.view_count}
                <div><small>views</small></div>
            </div>
            <div className="question">
                <span className="bounty">
                    +{question.bounty_amount}
                </span>
                {question.title}
            </div>
            <div className="bottom">
                <div>
                    {
                        question.tags?.map((tag) =>
                            <small className="tag" key={uuidv4()}>{tag}</small>
                        )
                    }
                </div>
                <br/>
                <div className="details">
                    <small className="reputation">
                        {question.owner.reputation}
                    </small>
                    <Link to={"/users"+question.owner.user_id+"/"+question.owner.display_name}>  
                    <small className="userlink">
                        {question.owner.display_name}
                    </small>
                    </Link>
                    <small >
                        modified {(myDate.toGMTString())}
                    </small>
                </div>
            </div>
        </div>
    );
}
export default Question;