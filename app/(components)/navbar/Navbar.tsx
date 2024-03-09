'use client'

import React from 'react';
import Link from 'next/link'; 
import { SafeUser } from '@/app/types';
import { useState } from "react";
import UserMenu from './UserMenu';

interface UserMenuProps {
    myUser: SafeUser | null;
}

export default function Navbar({ myUser }: UserMenuProps): JSX.Element {
    const [userMenuOpen, setUserMenuOpen] = useState(false);

    return (
        <div className="shadow-xl bg-white z-[99999] sticky">
            <div className="p-3 px-4">
                <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-6 flex-1 relative">
                        <Link href='#'><img src="/logo1.jpg" alt="Logo" width={35} height={10} /></Link>

                        <form className="lg:flex-1 lg:flex hidden">
    <input type="text" className="w-full  p-1.5 font-light bg-white rounded-full border-black border-[1px] outline-none" />
</form>

                    </div>
                    <div className="items-center gap-4 text-[.8rem] px-2 hidden lg:flex">
                        <div>
                            <Link href="https://play.google.com/store/apps/details?id=com.apps.smartdesk">DownLoad App</Link>
                        </div>
                        <div>
                            <a href="/insighthub">Insight Hub</a>
                        </div>
                        <div>
                            <a href="/explore">Explore</a>
                        </div>
                    </div>
                    <div className='flex items-center gap-3'>
                        {!myUser && (
                            <>
                                <div>
                                    <Link href='/login' className='py-2 px-6 border-black border-[1px]'>Login</Link>
                                </div>
                                <div>
                                    <Link href='/register' className='py-2 px-6 bg-black text-white border-[1px] border-black'>Sign up</Link>
                                </div>
                            </>
                        )}
                        {myUser && (
                            <div className="w-[40px] h-[40px] rounded-full bg-black flex items-center justify-center text-white cursor-pointer" onClick={() => setUserMenuOpen(prev => !prev)}>
                                <span>{myUser.name.charAt(0).toUpperCase()}</span>
                                <span>{myUser.name.charAt(1).toUpperCase()}</span>
                            </div>
                        )}
                        {userMenuOpen && (
                            <div className='absolute bottom-0 top-20 right-20'>
                                <UserMenu currentUser={myUser} />
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}