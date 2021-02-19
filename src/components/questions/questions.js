import React, {useState, useEffect} from 'react';
import Question from './question/question';
import './questions.css';
import { getQuestions } from '../../utils/apiUtil';
import { v4 as uuidv4 } from 'uuid';
function Questions() {
    const [questions, setQuestions] = useState([])
    const loadQuestions = () =>{
        getQuestions()
        .then(response => {
            setQuestions(response);
            console.log(response);
        })
        .catch(err => console.log(err))
    }
    useEffect(()=>{
        loadQuestions();
    },[])
    return (
        <div className="row">
            <div className="column left">
                left side part
            </div>
            <div className="column middle">
                <div className="top">
                    <h2>All Questions</h2>
                    <button>Ask question</button>
                </div>
                <hr />
                <div>
                    {
                        questions?.items?.map((question) =>
                            <Question key={uuidv4()} question={question}/>
                        )
                    }
                </div>
            </div>
            <div className="column right">
                This is the right part
            </div>
        </div>
    );
}

export default Questions;