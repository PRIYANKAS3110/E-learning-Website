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
                min-height: 100vh; 
                display: flex;
                flex-direction: column;
                justify-content: center; 
                background: linear-gradient(to right, #ecf0f1, #bdc3c7); 
              }
              
              .heading {
                font-size: 2.8rem;
                margin-bottom: 50px;
                color: #34495e;
                text-transform: uppercase;
                letter-spacing: 3px;
                font-weight: 600;
                text-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
              }
              
              .card-container {
                display: grid;
                grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
                grid-gap: 30px;
                padding: 40px 0;
              }
              
              .card {
                background-color: #fff;
                border-radius: 12px;
                box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
                padding: 40px;
                text-decoration: none;
                color: #333;
                transition: transform 0.3s, box-shadow 0.3s, background-color 0.3s;
                cursor: pointer;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                height: 100%;
                border: none;
                overflow: hidden;
              }
              
              .card:hover {
                transform: translateY(-8px) scale(1.02);
                box-shadow: 0 15px 30px rgba(0, 0, 0, 0.2);
                background-color: #f8f9fa; 
              }
              
              .card h2 {
                margin-bottom: 20px;
                font-size: 1.9rem;
                color: #3498db;
                text-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
              }
              
              .card p {
                font-size: 1.1rem;
                color: #555;
                line-height: 1.7;
              }
              
              .card .btn {
                padding: 12px 25px;
                background-color: #3498db;
                color: #fff;
                text-align: center;
                text-transform: uppercase;
                border-radius: 6px;
                transition: background-color 0.3s, transform 0.3s;
                margin-top: 25px;
                border: none;
                font-weight: 500;
                letter-spacing: 1px;
                box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
              }
              
              .card .btn:hover {
                background-color: #2874a6;
                color: #fff;
                text-decoration: none;
                transform: translateY(-2px);
              }
              
              
              html, body {
                height: 100%;
                width: 100%;
                margin: 0;
                padding: 0;
                background: linear-gradient(to right, #ecf0f1, #bdc3c7); 
              }
              
              
              @keyframes pulse {
                0% { transform: scale(1); }
                50% { transform: scale(1.05); }
                100% { transform: scale(1); }
              }
              
              .card .btn {
                animation: pulse 2s infinite;
              }
              
            `}</style>
        </div>
    );
};

export default IndexPage;
