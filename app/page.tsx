import Image from 'next/image'
import photo from '../public/assets/Fishpox.png'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24" style={{backgroundColor: 'black', marginTop: '40px'}}>
      <div> 
        <h2 style={{color:"white", paddingLeft: '70px', fontSize:'50px'}}> COMING SOON </h2>
        <Image
          src={photo}
          alt='fishpox photo'
          width={500}
          height={500}
        />
    
      </div>  
     
    </main>
  )
}
