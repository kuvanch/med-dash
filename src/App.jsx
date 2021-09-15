import Layout from 'antd/lib/layout/layout';
import {Sidebar,HeaderPage} from './components'
import { useState } from 'react';

import 'antd/dist/antd.css'; 
import './App.css'


function App() {

  const [collapsed, setCollapsed] = useState(false)

  const handleTrigger = () => {
    setCollapsed(!collapsed)
  }

  return (
    <Layout className='app'>
      <Sidebar collapsed={collapsed}/>
      <Layout className="site-layout">
        <HeaderPage handleTrigger={handleTrigger} collapsed={collapsed}/>
      </Layout>
    </Layout>
  );
}

export default App;
