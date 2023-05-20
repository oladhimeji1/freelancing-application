import Image from 'next/image'
import Link from 'next/link'
import styles from '@/styles/Home.module.css'
import Head from 'next/head'
import heroImg from '../images/paint.jpg'
import chat from '../images/chat.jpg'
import comp from '../images/comp.jpg'
import search from '../images/search.jpg'
import Carousel from '../components/carousel'

export default function Home() {
  const slides = [heroImg,
  chat, comp, search]
  
  return (
    <>
    <Head>
      <title>Dhim | Freelacing website | Home</title>
      <meta name='keywords' content='Freelance freelancing oladhimeji' />
      <meta name='author' content='Oladhimeji' />
    </Head>
    <div>
    
    {/* <Carousel autoSlide={true}>
      {slides.map(slide=>{
        <Image key={slide.index} className='object-cover' alt='jj' src={slide}></Image>
      })}
    </Carousel> */}

      {/* Hero */}
      <div className="h-[100vh] w-full bg-black relative">
        <Image className='h-full static top-0 opacity-30 object-cover w-full' src={comp}></Image>
        <h1 className="font-bold absolute text-orange-500 uppercase bottom-32 left-10 md:text-4xl text-3xl">Connect. Hire. Earn</h1>
        <button className="absolute text-white md:bottom-20 bottom-[5.5rem] hover:translate-x-2 left-10 bg-orange-500 p-1 md:p-2 rounded-md md:font-bold"><a href='/signup'>Get Started</a></button>
        <h2 className="font-bold animate-bounce absolute text-orange-500 uppercase top-24 md:top-32 right-10 md:right-20 text-4xl">Freeup</h2>
        <p className="font-bold absolute text-white uppercase top-32 md:top-40 right-10 md:right-20 text-4md">proserity is our priority</p>

      </div>

      {/* About */}
      <section className='h-[30vh] relative bg-orange-400'>
        <Image className='h-full opacity-5 object-cover w-full' src={heroImg}></Image>
        <div className='absolute px-10 top-6 text-white'>
          <h2 className='uppercase text-2xl text-center hover:drop-shadow-xl shadow-white text-orange-900'>About FreeUp</h2>
          <p className='py-2 md:py-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea nam unde atque accusamus, mollitia sapiente quas. Consectetur tenetur at id tempora minus numquam, quia velit! Saepe excepturi magni illum error.</p>
        </div>
      </section>

      {/* Earn with your skills */}
      <section className='h-[40vh] relative bg-orange-200'>
        <Image className='h-full opacity-5 object-cover w-full' src={heroImg}></Image>
        <p className=" md:transform md:scale-0 absolute transition ease-out duration-1000 top-10 md:left-6 left-10 md:text-4xl text-3xl text-orange-900">Earn with with your skills on our platform.</p>
        <p className="hidden md:transform md:scale-1 transition ease-out duration-1000 md:block absolute top-10 md:left-6 left-20 md:text-4xl text-2xl text-orange-900">Earn with with your skills <br />on our platform.</p>
        <div className='absolute px-10 md:right-10 md:bottom-6 bottom-4 w-[30rem] md:w-[40rem] text-left md:text-right'>
          <p className='text-xl font-bold text-left md:text-right text-orange-900'>Get a freelance gig at ease</p>
          <p className='pb-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea nam unde atque accusamus, mollitia sapiente quas.</p>
          <p className='md:text-sm text-xs animate-bounce'><Link href='/'>Get Started <svg
                  className='inline-block w-4'
                  fill='none'
                  stroke='currentColor'
                  stroke-width='1.5'
                  viewBox='0 0 24 24'
                  xmlns='http://www.w3.org/2000/svg'
                  aria-hidden='true'
                >
                  <path
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    d='M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3'
                  ></path>
                </svg></Link></p>
        </div>
      </section>

      {/* Hire a skills */}
      <section className='h-[40vh] relative bg-orange-300'>
        <Image className='h-full opacity-5 object-cover w-full' src={heroImg}></Image>
        <p className="md:transform md:scale-0 absolute transition ease-out duration-1000 top-10 md:left-6 left-10 md:text-4xl text-3xl text-orange-900">Hire the best skill(s) for your job on our platform.</p>
        <p className="hidden md:block absolute top-10 md:right-6 left-20 md:text-4xl text-2xl text-right text-orange-900">Hire the best skill(s) for your job <br />on our platform.</p>
        <div className='absolute px-10 md:left-10 md:bottom-6 bottom-4 md:w-[40rem] w-[30rem] text-left md:text-right'>
          <p className='text-xl font-bold text-left text-orange-900'>Find the right skilled personel for your job</p>
          <p className='pb-2 text-left'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea nam unde atque accusamus, mollitia sapiente quas.</p>
          <p className=' text-left md:text-sm text-xs animate-bounce'>Get started <svg
                  className='inline-block w-4'
                  fill='none'
                  stroke='currentColor'
                  stroke-width='1.5'
                  viewBox='0 0 24 24'
                  xmlns='http://www.w3.org/2000/svg'
                  aria-hidden='true'
                >
                  <path
                    stroke-linecap='round'
                    stroke-linejoin='round'
                    d='M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3'
                  ></path>
                </svg></p>
        </div>
      </section>

      {/* Hire a skills */}
      <section className='h-[40vh] relative bg-orange-200'>
        <Image className='h-full opacity-5 object-cover w-full' src={heroImg}></Image>
        <div className='absolute top-20 w-full'>
          <p className='md:text-3xl text-2xl text-center font-bold text-orange-900'>Explore more of what we have for you.</p>
          <div className="flex justify-center text-white">
            <button className='md:p-2 p-1 mt-6 mx-3 hover:bg-orange-700 bg-orange-900 rounded-md'>Find a gig</button>
            <button className='md:p-2 p-1 mt-6 mx-3 hover:bg-orange-700 bg-orange-900 rounded-md'>Hire a skill</button>
          </div>
        </div>
      </section>

      {/* Live chat */}
      <section className='md:h-[50vh] md:overflow-hidden block md:grid grid-cols-3 bg-orange-300'>
        <Image className='h-full object-cover w-full' src={chat}></Image>
        {/* <div></div> */}
        <div className='md:col-span-2 w-full items-center'>
          <p className='md:text-4xl text-2xl md:text-left text-center w-[30rem] md:w-[40rem] mx-auto font-bold text-orange-900'>Experience a smooth communication with your client/recruiter using our <b className=' font-extrabold '>Live chat</b></p>
          <div className="flex justify-center text-white">
            
          </div>
        </div>
      </section>
    </div>
    </>
  )
}
