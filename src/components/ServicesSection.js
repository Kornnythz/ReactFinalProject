import React from 'react';
import styled from 'styled-components';
import {InnerLayout} from '../styles/Layout';
import Title from '../components/Title';
import ServiceCard from '../components/ServiceCard';
import java from '../images/tools/java.png';
import php from '../images/tools/php.png';
import html5 from '../images/tools/html-5.png';
import sql from '../images/tools/sql-server.png'
import css3 from '../images/tools/css.png'

function ServicesSection() {
    return (
        <InnerLayout>
            <ServicesSectionStyled>
                <Title title={'Main Tools'} span={'Main Tools'} />
                <div className="services">
                    <div className="mid-card">
                        <ServiceCard className="mid-card"
                            image={java} 
                            title={'Java with Springboot'} 
                            
                        />
                    </div>
                    <div className="mid-card">
                        <ServiceCard 
                            image={php} 
                            title={'PHP'} 
                        />
                    </div>
                    <div className="mid-card">
                        <ServiceCard 
                            image={html5} 
                            title={'HTML5'} 
                        />
                    </div>
                    <div className="mid-card">
                        <ServiceCard 
                            image={css3} 
                            title={'CSS3'} 
                        />
                    </div>
                    <div className="mid-card">
                        <ServiceCard 
                            image={sql} 
                            title={'SQL'} 
                        />
                    </div>
                </div>
            </ServicesSectionStyled>
        </InnerLayout>
    )
}

const ServicesSectionStyled = styled.section`
    .services{
        margin-top: 5rem;
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 1.5rem;
        @media screen and (max-width:1000px){
            flex-direction: column;
        }
        @media screen and (max-width:950px){
            grid-template-columns: repeat(2, 1fr);
        }
        @media screen and (max-width:650px){
            grid-template-columns: repeat(1, 1fr);
        }
       
    }
`;

export default ServicesSection;