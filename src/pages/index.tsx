// penn.jp/
import type { NextPage } from 'next';
import Head from 'next/head';

import SideBar from 'src/components/templates/SideBar';
import { Header } from 'src/components/templates/Header';
import AppIntroduction from 'src/components/templates/AppIntroduction';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { showState, userState } from 'src/store/state';

const Home: NextPage = () => {
  const router = useRouter();

  const [user, setUser] = useRecoilState(userState);
  const setShow = useSetRecoilState(showState);

  useEffect(() => {
    {
      user?.displayName ? router.push('/community') : router.push('/onboarding');
    }
    setShow(false);
  }, [router, user, setShow]);

  return (
    <>
      <Head>
        <title>penn</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className='dark:bg-black transition duration-500'>
        <div className='container font-Poppins text-penn-dark dark:text-penn-light'>
          {/* justify-between で要素の幅が固定されている */}
          <Header />
          <SideBar />
          <main className='flex justify-between gap-10 '>
            <AppIntroduction />
          </main>
        </div>
      </div>
    </>
  );
};

export default Home;
