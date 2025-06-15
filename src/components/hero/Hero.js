import React from 'react'
import './Hero.css';
import Carousel from 'react-material-ui-carousel';
import { Paper } from '@mui/material';
import { height } from '@fortawesome/free-solid-svg-icons/fa0';

const Hero = ({ builds }) => {
    const imagePath = "/pc_build_images"
    return (
        <div>
            <Carousel className='build-carousel-container'>
                {
                    builds?.map((build) => {
                        return (
                            <Paper>
                                <div className='build-card-container'>
                                    <div className='build-card' style={{"--img": `url(${imagePath}/build_${build.buildId}.jpg)`}}>
                                        <div className="build-detail"> 
                                            <div className="build-poster">
                                                <img src={`${imagePath}/build_${build.buildId}.jpg`}/>
                                            </div>
                                            <div className="build-title">
                                                <h4>{build.gpu}</h4>
                                            </div>
                                        </div>


                                    </div>

                                </div>
                            </Paper>
                        )
                    })
                }
            </Carousel>

        </div>
    )
}

export default Hero
