import React from 'react'
import Skills from '../components/Skills'
import Resume from '../components/Resume'
import { MainLayout, InnerLayout } from '../styles/Layout'

const ResumePage = () => {
  return (
    <div>
        <MainLayout>
            <InnerLayout>
                <Skills/>
                <Resume/>
            </InnerLayout>
        </MainLayout>
    </div>
  )
}

export default ResumePage