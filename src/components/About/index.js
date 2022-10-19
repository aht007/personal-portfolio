import React from 'react'
import Separator from "../Shared/separator";
import "./index.css"

export default function About() {
    return (
        <>
            <div className='about-title'>
                About Me
            </div>
            <Separator />
            <div className='about-me-container'>
                <p className="about-me">
                    Hi - My name is Ahtasham(he/him), nice to (vritually) meet you! I'm a software engineer based in Lahore, Pakistan.
                    I'm passionate about building scalable, high-quality software that improves the lives of those around me.
                    I am currently working at <a href="https://www.arbisoft.com/">Arbisoft</a> as a Software Engineer where I am sub-contracted to <a href="https://www.edX.org/">edX</a>
                </p>
                <p className="about-me">
                    My ideal role is one that allows me to work on a variety of interesting and meaningful projects, with smart people, while also having the opportunity to grow and learn.
                    I am also interested in working on open source projects and contributing to the community. I enjoy contributing to a fast-paced culture that combines new technology with human empathy.
                    I always look for projects that stretch my abilities, take me out of my comfort zone, and teach me new things.
                </p>
                <p className="about-me">
                    The best way to reach me is to either connect with me on LinkedIn or email me at <b>ahthassan74@gmail.com</b>
                </p>
            </div>
        </>
    )
}
