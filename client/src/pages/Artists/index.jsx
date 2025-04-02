import * as React from 'react';
import Layout from '../../components/layout/Layout';
import Content from './Content';
import Sider from '../../pages/Home/Sider';

export default function IndexHome() {
  return (
    <Layout content={<Content />} sider={<Sider />}/>
  );
}