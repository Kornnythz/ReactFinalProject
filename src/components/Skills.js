import React from 'react'
import styled from 'styled-components';
import ProgressBar from './ProgressBar'
import Title from './Title'
import { InnerLayout } from '../styles/Layout';

function Skills() {
    return (
        <SkillsStyled>
            
                <Title title={'My Skills'} span={'my skills'} />
                <InnerLayout>
                    <div className="skills">
                        <ProgressBar 
                            title={'JAVA'}
                            width={'85%'}
                            text={'85%'}
                        />
                        <ProgressBar 
                            title={'PHP'}
                            width={'80%'}
                            text={'80%'}
                        />
                        <ProgressBar 
                            title={'HTML5'}
                            width={'80%'}
                            text={'80%'}
                        />
                        <ProgressBar 
                            title={'CSS3'}
                            width={'65%'}
                            text={'65%'}
                        />
                        <ProgressBar 
                            title={'PYTHON'}
                            width={'70%'}
                            text={'70%'}
                        />
                        <ProgressBar 
                            title={'React JS'}
                            width={'60%'}
                            text={'60%'}
                        />
                        <ProgressBar 
                            title={'C#'}
                            width={'70%'}
                            text={'70%'}
                        /><ProgressBar 
                        title={'SQL'}
                        width={'75%'}
                        text={'75%'}
                        />
                    </div>
                </InnerLayout>
        </SkillsStyled>
    )
}

const SkillsStyled = styled.section`
    .skills{
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-row-gap: 2rem;
        grid-column-gap: 3rem;
        @media screen and (max-width: 700px){
            grid-template-columns: repeat(1, 1fr);
        }
    }
`;

export default Skills;
