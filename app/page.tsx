import Image from 'next/image'
import photo from '../public/assets/Fishpox.png'
import RootLayout from './layout'
import { Root } from 'postcss'

export default function Home() {
  return (
    <main className='flex flex-col justify-center items-center min-h-screen' style={{ marginTop: '90px' }}>
      <div>
        <h2 style={{ color: "white", fontSize: '50px' }}>COMING SOON</h2>
        <Image
          src={photo}
          alt='fishpox photo'
          width={500}
          height={500}
        />
      </div>
    </main>
  );
}

