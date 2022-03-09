import React from 'react';
import styled from 'styled-components';
import SchoolIcon from '@material-ui/icons/School';
import BusinessCenterIcon from '@material-ui/icons/BusinessCenter';
import SmallTitle from '../components/SmallTitle';
import Title from '../components/Title';
import {InnerLayout} from '../styles/Layout';
import ResumeItem from './ResumeItem'

function Resume() {
    const briefcase = <BusinessCenterIcon />
    const school = <SchoolIcon />
    return (
        <ResumeStyled>
            <Title title={"Resume"} span={"Resume"} />
            <InnerLayout>
                <div className="small-title">
                    <SmallTitle icon={briefcase} title={'Working Experience'} />
                </div>
                <div className="resume-content">
                <ResumeItem 
                        year={'2564'} 
                        title={'บริษัทไทยประกันชีวิตจำกัดมหาชน'}
                        subTitle={'ทำงานด้าน Back-end ด้วยภาษา JAVA'} 
                    />
                </div>
                <div className="small-title u-small-title-margin">
                    <SmallTitle icon={school} title={'Educational Qualifications'} />
                </div>
                <div className="resume-content ">
                    <ResumeItem 
                        year={'2549 – 2550'} 
                        title={'โรงเรียนยอดไม้งาม'}
                        subTitle={'ประถมศึกษาปีที่ 1 – 2'}
                    />
                    <ResumeItem 
                        year={'2551 - 2560'} 
                        title={'โรงเรียนเซนต์ดอมินิก'}
                        subTitle={'ประถมศึกษาปีที่ 3 – มัธยมศึกษาปีที่ 6'}
                    />
                    <ResumeItem 
                        year={'2561 - 2564'} 
                        title={'สถาบันเทคโนโลยีไทย-ญี่ปุน'}
                        subTitle={'ปริญญาตรี'}
                    />
                </div>
            </InnerLayout>
        </ResumeStyled>    
    )
}

const ResumeStyled = styled.section`
    .small-title{
        padding-bottom: 3rem;
    }
    .u-small-title-margin{
        margin-top: 4rem;
    }

    .resume-content{
        border-left: 2px solid var(--border-color);
    }
`;
export default Resume
