'use client'
import React, { useState, useEffect } from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface CourseProps {
    image: string;
    title: string;
    description: string;
}

const Course: React.FC<CourseProps> = ({ image, title, description }) => {
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

    const courses: CourseProps[] = [
        {
            image: 'course1.jpg',
            title: 'Course 1',
            description: 'Description for Course 1',
        },
        {
            image: 'course2.jpg',
            title: 'Course 2',
            description: 'Description for Course 2',
        },
        
    ];

    // Dummy data for quotes and facts
    const quotes: string[] = [
        "The only way to do great work is to love what you do. - Steve Jobs",
        "Education is the passport to the future, for tomorrow belongs to those who prepare for it today. - Malcolm X",
        // Add more quotes here
    ];

    const facts: string[] = [
        "Did you know? The world's largest university is in India, with over 3.5 million students.",
        "Did you know? The first computer-based distance learning was in the 1960s.",
        // Add more facts here
    ];

    // Function to get a random element from an array
    const getRandomElement = (array: string[]) => {
        return array[Math.floor(Math.random() * array.length)];
    };

    useEffect(() => {
        // Set up interval to change quote and fact every 5 minutes
        const interval = setInterval(() => {
            setQuote(getRandomElement(quotes));
            setFact(getRandomElement(facts));
        }, 300000); // 5 minutes in milliseconds

        // Clear interval on component unmount
        return () => clearInterval(interval);
    }, []);

    // Settings for the slider
    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000, // Change slide every 5 seconds
    };

    return (
        <div className="home">
            {/* Quotes and Facts */}
            <div className="quotes-facts">
                <p className="quote">{quote}</p>
                <p className="fact">{fact}</p>
            </div>

            {/* Slider */}
            <Slider {...sliderSettings}>
                <div>
                    <img src="slider1.jpg" alt="Slider 1" />
                </div>
                <div>
                    <img src="slider2.jpg" alt="Slider 2" />
                </div>
                {/* Add more slider images here */}
            </Slider>

            {/* Course holder */}
            <div className="course-holder">
                {courses.map((course, index) => (
                    <Course key={index} image={course.image} title={course.title} description={course.description} />
                ))}
            </div>
        </div>
    );
};

export default Home;
