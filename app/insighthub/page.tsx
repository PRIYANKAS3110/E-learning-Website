'use client'
// pages/index.tsx
import React from 'react';
import Link from 'next/link';

const IndexPage: React.FC = () => {
    return (
        <div className="container">
            <h1 className="heading">Your Personal Dashboard</h1>
            <div className="card-container">
                <Link href="http://smart-desk.rf.gd">
                    <div className="card">
                        <h2>Resume Builder</h2>
                        <p>A tool to create and customize resumes easily.</p>
                    </div>
                </Link>
                <Link href="/attendease">
                    <div className="card">
                        <h2>Attendease</h2>
                        <p>Manage event registrations and attendees efficiently.</p>
                    </div>
                </Link>
                <Link href="/notepad">
                    <div className="card">
                        <h2>SmartNotes</h2>
                        <p>Organize and manage your notes intelligently.</p>
                    </div>
                </Link>
                <Link href="/subject-notes">
                    <div className="card">
                        <h2>Subject Notes</h2>
                        <p>Keep track of your subject notes for better study.</p>
                    </div>
                </Link>
                <Link href="/subject-notes">
                    <div className="card">
                        <h2>Important Questions</h2>
                        <p>Keep track of your subject notes for better study.</p>
                    </div>
                </Link>
                <Link href="/subject-notes">
                    <div className="card">
                        <h2>Podcast</h2>
                        <p>Listen to our Podcast.</p>
                    </div>
                </Link>
                <Link href="/subject-notes">
                    <div className="card">
                        <h2>Previous Year Question Paper</h2>
                        <p>Listen to our Podcast.</p>
                    </div>
                </Link>
                <Link href="/subject-notes">
                    <div className="card">
                        <h2>Compiler</h2>
                        <p>Listen to our Podcast.</p>
                    </div>
                </Link>
                <Link href="/subject-notes">
                    <div className="card">
                        <h2>E-books</h2>
                        <p>Listen to our Podcast.</p>
                    </div>
                </Link>
                <Link href="https://chat.tune.app/">
                    <div className="card">
                        <h2>ChatBot</h2>
                        <p>Listen to our Podcast.</p>
                    </div>
                </Link>
            </div>

            <style jsx>{`
                .container {
                    max-width: 800px;
                    margin: 0 auto;
                    padding: 20px;
                    text-align: center;
                }

                .heading {
                    font-size: 2rem;
                    margin-bottom: 30px;
                    color: #333;
                }

                .card-container {
                    display: grid;
                    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
                    grid-gap: 20px;
                }

                .card {
                    background-color: #fff;
                    border-radius: 10px;
                    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                    padding: 20px;
                    text-decoration: none;
                    color: #333;
                    transition: transform 0.3s, box-shadow 0.3s;
                    cursor: pointer;
                    display: flex;
                    flex-direction: column;
                    justify-content: space-between;
                    height: 100%;
                }

                .card:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.2);
                }

                .card h2 {
                    margin-bottom: 10px;
                    font-size: 1.5rem;
                    color: #007bff;
                }

                .card p {
                    font-size: 1.2rem;
                    color: #666;
                }
            `}</style>
        </div>
    );
};

export default IndexPage;
