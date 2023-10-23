import React from 'react';
import photo from '/public/assets/Fishpox.png'
import Image from 'next/image'
import RootLayout from '../../layout';
import { Root } from 'postcss';

export default function About() { 
    return (
        <main className='flex flex-col justify-center items-center min-h-screen' style={{ marginTop: '90px' }}>
            <p> Fishpox was born in 2023</p>
        </main>
        
    )
}

