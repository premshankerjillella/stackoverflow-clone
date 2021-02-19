import React, {useState, useEffect} from 'react';
import './userProfile.css';
import Question from '../questions/question/question'
import { v4 as uuidv4 } from 'uuid';
import Tag from './tag/tag'
import {getUserQuestions, getUserDetails, getUserTags} from '../../utils/apiUtil';
import {  useParams} from 'react-router-dom';

const UserProfile = () => {
    let { id } = useParams();
    const [userDetails, setUserDetails] = useState({});
    const [userQuestions, setUserQuestions] = useState([]);
    const [userTags, setUserTags] = useState([]);
    const loadUserDetails = () =>{
        getUserDetails(id)
        .then(response => {
            setUserDetails(response.items[0]);
            // console.log(response);
            // console.log(userDetails);
        })
        .catch(err => console.log(err))
    }
    const loadUserQuestions = () =>{
        getUserQuestions(id)
        .then(response => {
            setUserQuestions(response);
        })
        .catch(err => console.log(err))
    }
    const loadUserTags = () =>{
        getUserTags(id)
        .then(response => {
            setUserTags(response);
        })
        .catch(err => console.log(err))
    }

    useEffect(()=>{
        loadUserDetails();
        loadUserTags();
        loadUserQuestions();
    },[])
    return (
        <div className="row">
            <div className="column parta">
                left side part
            </div>
            <div className="column partb">
                {console.log(userDetails)}
                <h2>User Profile</h2>
                <div className="userinfo">
                    <div className="profileimagediv">
                        <img className="profileimage" src={userDetails.profile_image} alt="" />
                    </div>
                    <div className="userdetails">
                        <h1>{userDetails.display_name}</h1>
                        <p>Location : {userDetails.location}</p>
                        <p><a href={userDetails.website_url}>Website Url </a></p>
                    </div>
                </div>
               <div className="toptags">
                    <h2>Top Tags</h2>
                    {console.log(userTags)}
                    <div>
                        {
                            userTags.items?.map((tag) =>
                            <Tag key={uuidv4()} tag={tag}/>)
                        }
                    </div>
                </div>
                <div>
                    <h2>Top Questions</h2>
                    <div>
                        {
                            userQuestions.items?.map((question) =>
                                <Question key={uuidv4()} question={question} />)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UserProfile;