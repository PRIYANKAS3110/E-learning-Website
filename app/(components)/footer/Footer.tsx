'use client'
import React from 'react';
import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="w-full bg-gray-800 py-8">
            <div className="container mx-auto px-4 flex flex-col items-center">
                <div className="flex flex-col md:flex-row justify-between w-full">
                    <div className="flex flex-col md:flex-row items-center">
                        <Link href="/" passHref>
                            <div className="mr-4 mb-2 md:mb-0">
                                <img src="logo1.jpg" className="w-10 md:w-10" alt="Footer Logo" />
                            </div>
                        </Link>
                        <div className="md:flex items-center">
                            <Link href="/teach">
                                <div className="text-white block mb-2 md:mr-4">SmartDesk</div >
                            </Link>
                            <Link href="/app">
                                <div  className="text-white block mb-2 md:mr-4">Get the app</div >
                            </Link>
                            <Link href="/about">
                                <div  className="text-white block mb-2 md:mr-4">About us</div >
                            </Link>
                            <Link href="/contact">
                                <div  className="text-white block mb-2">Contact us</div >
                            </Link>
                        </div>
                    </div>
                    <div className="flex flex-col md:flex-row items-center mt-4 md:mt-0">
                        <div className="md:flex items-center">
                            <Link href="/careers">
                                <div  className="text-white block mb-2 md:mr-4">Careers</div >
                            </Link>
                            <Link href="/blog">
                                <div  className="text-white block mb-2 md:mr-4">Blog</div >
                            </Link>
                            <Link href="/support">
                                <div  className="text-white block mb-2 md:mr-4">Help and Support</div >
                            </Link>
                            <Link href="/affiliate">
                                <div  className="text-white block mb-2">Affiliate</div >
                            </Link>
                        </div>
                        <div className="md:flex items-center mt-4 md:mt-0">
                            <Link href="/terms">
                                <div  className="text-white block mb-2 md:mr-4">Terms</div >
                            </Link>
                            <Link href="/privacy">
                                <div  className="text-white block mb-2 md:mr-4">Privacy policy</div >
                            </Link>
                            <Link href="/sitemap">
                                <div  className="text-white block mb-2">Sitemap</div >
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="mt-8 border-t border-gray-300 pt-6 flex flex-col items-center md:flex-row md:justify-between text-gray-600">
                    <p className="text-sm text-center md:text-left text-white">
                        &copy; {new Date().getFullYear()} CitFix Limited.
                    </p>
                    <div className="flex items-center mt-4 md:mt-0">
                        <Link href="/facebook">
                        <div  rel="noopener noreferrer" className="text-white block md:mr-4">
                            <img src="/assets/facebook_logo.png" alt="Facebook Logo" className="w-6 h-6" />
                        </div >
                        </Link>
                        <Link href="/facebook">
                        <div   rel="noopener noreferrer" className="text-white block md:mr-4">
                            <img src="/assets/twitter_logo.png" alt="Twitter Logo" className="w-6 h-6" />
                        </div >
                        </Link>
                        <Link href="/facebook">
                        <div  rel="noopener noreferrer" className="text-white block">
                            <img src="/assets/instagram_logo.png" alt="Instagram Logo" className="w-6 h-6" />
                        </div >
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;