import { useState } from 'react'
import reactLogo from './assets/react.svg'
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Layout } from '../components/Layout';
import LoginButton from '../components/LoginButton';
import Login from '../components/Login';

const Dashboard = () => {

  return (
    <Layout>
      <Login />
    </Layout>
  )
}

export default Dashboard
