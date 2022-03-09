import React from 'react'
import styled from 'styled-components';
import resume from '../images/profileImg.jpg';

function ProfileDetails() {
    return (
        <ProfileDetailsStyled>
            <div className="left-content">
                <img src={resume} alt="my profile"/>
            </div>
            <div className="right-content">
                <h4>I am <span>Vatcharakon Kalapakdee</span></h4>
                <p className="paragraph">
                I’m a hard working man who sought for knowledge and something new to improve myself.

I always look forward for opportunities to learn new coding languages. So I could come up with new ideas and adapt my code in various ways.
                    
                </p>
                <div className="about-info">
                    <div className="info-title">
                        <p>Full Name</p>
                        <p>Age</p>
                        <p>Nationality </p>
                        <p>Languages </p>
                        <p>Role</p>
                        <p>Faculty</p>
                    </div>
                    <div className="info">
                        <p>: Vatcharakon Kalapakdee</p>
                        <p>: 21</p>
                        <p>: Thailand </p>
                        <p>: English, Japanese, Thailand </p>
                        <p>: Student</p>
                        <p>: Information Technology</p>
                    </div>
                </div>
            </div>
        </ProfileDetailsStyled>
    )
}


const ProfileDetailsStyled = styled.div`
margin-top: 5rem;
    display: flex;
    @media screen and (max-width:1000px){
        flex-direction: column;
        .left-content{
            margin-bottom: 2rem;
        }
    }
    .left-content{
        width: 100%;
        img{
            width: 95%;
            object-fit: cover;
        }
    }
    .right-content{
        width: 100%;
        h4{
            font-size: 2rem;
            color: var(--white-color);
            span{
                font-size: 2rem;
            }
        }
        .paragraph{
            padding: 1rem 0;
        }
        .about-info{
            display: flex;
            padding-bottom: 1.4rem;
            .info-title{
                padding-right: 3rem;
                p{
                    font-weight: 600;
                }
            }
            .info-title, .info{
                p{
                    padding: .3rem 0;
                }
            }
        }
    }
`;
export default ProfileDetails;