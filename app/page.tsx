'use client'
import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './style.css';

interface Course {
    image: string;
    title: string;
    description: string;
}

const CourseComponent: React.FC<Course> = ({ image, title, description }) => {
    return (
        <div className="course">
            <img src={image} alt={title} />
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    );
};

const Home: React.FC = () => {
    const [quote, setQuote] = useState<string>('');
    const [fact, setFact] = useState<string>('');
    const [courses, setCourses] = useState<Course[]>([]); 

    const quotes: string[] = [
        "The only way to do great work is to love what you do. - Steve Jobs",
        "Education is the passport to the future, for tomorrow belongs to those who prepare for it today. - Malcolm X",
    ];

    const facts: string[] = [
        "Did you know? The world's largest university is in India, with over 3.5 million students.",
        "Did you know? The first computer-based distance learning was in the 1960s.",
    ];

    const getRandomElement = (array: string[]) => {
        return array[Math.floor(Math.random() * array.length)];
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setQuote(getRandomElement(quotes));
            setFact(getRandomElement(facts));
        }, 300000);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        // Fetch courses data or set courses array here
        const fetchedCourses: Course[] = [
            {
                image: 'slider1.png',
                title: 'Course 1',
                description: 'Description for Course 1',
            },
            {
                image: 'slider2.png',
                title: 'Course 2',
                description: 'Description for Course 2',
            },
            {
                image: 'slider2.png',
                title: 'Course 2',
                description: 'Description for Course 2',
            },
            {
                image: 'slider2.png',
                title: 'Course 2',
                description: 'Description for Course 2',
            },
            {
                image: 'slider2.png',
                title: 'Course 2',
                description: 'Description for Course 2',
            },
            {
                image: 'slider2.png',
                title: 'Course 2',
                description: 'Description for Course 2',
            },
            {
                image: 'slider2.png',
                title: 'Course 2',
                description: 'Description for Course 2',
            },
            {
                image: 'slider2.png',
                title: 'Course 2',
                description: 'Description for Course 2',
            },
            {
                image: 'slider2.png',
                title: 'Course 2',
                description: 'Description for Course 2',
            },
           
        ];
        setCourses(fetchedCourses);
    }, []); // Empty dependency array ensures this effect runs only once

    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
    };

    return (
        <div className="home">
            

            <Slider {...sliderSettings}>
                <div>
                    <img src="slider1.png" alt="Slider 1"/>
                </div>
                <div>
                    <img src="slider2.png" alt="Slider 2" />
                </div>
            </Slider>
            <div className="quotes-facts">
                <p className="quote">{quote}</p>
                <p className="fact">{fact}</p>
            </div>

            <div className="course-holder">
                {courses.map((course, index) => (
                    <CourseComponent key={index} {...course} />
                ))}
            </div>
        </div>
    );
};

export default Home;
