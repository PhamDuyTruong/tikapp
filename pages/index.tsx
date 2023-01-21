import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css';
import axios from 'axios';
import {Video} from '../type';

const inter = Inter({ subsets: ['latin'] })
interface IProps {
  videos: Video[]
}

export default function Home({videos}: IProps) {
  console.log(videos)
  return (
    <>
      <div className='flex flex-col gap-10 videos h-full'>
          {videos.length ? (
              
          ) : (

          )}
      </div>
    </>
  )
}

export const getServerSideProps = async() => {
  const {data} = await axios.get('http://localhost:3000/api/post');
  return {
    props: {
      videos: data
    }
  }
}