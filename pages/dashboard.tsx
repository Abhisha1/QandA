import React from 'react';
import Image from 'next/image';
import styles from '../styles/Home.module.css'
import SideBar from '../components/SideBar/SideBar';
import { NextPage } from 'next';


const Dashboard: NextPage = () => {
    return (
        <div>    
          <main className={styles.main}>
            <SideBar currentMenuItem='Hello' />
    
    
          </main>
    
          <footer className={styles.footer}>
            <a
              href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              Powered by{' '}
              <span className={styles.logo}>
                <Image src="/vercel-logotype-light.svg" alt="Vercel Logo" width={72} height={16} />
              </span>
            </a>
          </footer>
          </div>
      )
    }
    
export default Dashboard;