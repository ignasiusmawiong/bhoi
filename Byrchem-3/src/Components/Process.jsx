import React from 'react'
import './Process.css'
import ideas from '../assets/ideas.png'
import visions from '../assets/visons.png'
import builds from '../assets/builds.png'

const Process = () => {
  return (
    <div className='process'>
        <div className="process1">
            <div className="process_img">
                <img src={ideas} alt="" />
            </div>
            <h3>WE THINK</h3>
            <h3>WITH YOU</h3>
            <p>Innovation strategy</p>
        </div>
        <div className="process1">
            <div className="process_img">
                <img src={visions} alt="" />
            </div>
            <h3>WE ENVISION</h3>
            <h3>WITH YOU</h3>
            <p>Website design</p>
            <span>Brand Identity design</span>
        </div>
        <div className="process1">
            <div className="process_img">
                <img src={builds} alt="" />
            </div>
            <h3>WE BUILD</h3>
            <h3>WITH YOU</h3>
            <p>Web App development</p>
        </div>
    </div>
  )
}

export default Process