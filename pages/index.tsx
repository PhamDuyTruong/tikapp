import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '@/styles/Home.module.css';
import axios from 'axios';
import {Video} from '../type';
import VideoCard from '../components/VideoCard';
import NoResults from '../components/NoResults';
import { BASE_URL } from '../utils';

const inter = Inter({ subsets: ['latin'] })
interface IProps {
  videos: Video[]
}

export default function Home({videos}: IProps) {
  return (
    <>
      <div className='flex flex-col gap-10 videos h-full'>
          {videos.length ? (
              videos?.map((video: Video) => (
                <VideoCard post={video} isShowingOnHome  key={video._id} />
              )) 
          ) : (
            <NoResults text='No Videos'/>
          )}
      </div>
    </>
  )
}

export const getServerSideProps = async ({
  query: { topic },
}: {
  query: { topic: string };
}) => {
  let response = await axios.get(`${BASE_URL}/api/post`);

  if(topic) {
    response = await axios.get(`${BASE_URL}/api/discover/${topic}`);
  }
  
  return {
    props: { videos: response.data },
  };
};