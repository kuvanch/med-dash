import Layout from 'antd/lib/layout/layout';
import {Sidebar,HeaderPage, ContentPage} from './components'
import { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'antd/dist/antd.css'; 
import './App.css'
import { Home } from './page/Home';
import { Login } from './page/Login';


function App() {

  const [collapsed, setCollapsed] = useState(false)

  const handleTrigger = () => {
    setCollapsed(!collapsed)
  }
  const home = <Layout className='app'>
                  <Router>
                    <Sidebar collapsed={collapsed}/>
                    <Layout className="site-layout">
                      <HeaderPage handleTrigger={handleTrigger} collapsed={collapsed}/>
                      <ContentPage>
                          <Switch>
                            <Route path='/home' component={Home}/>
                          </Switch>
                      </ContentPage>
                    </Layout>
                  </Router>
                </Layout>
  return (
    <>
      {false ? home : <Login/>}
    </>
  );
}

export default App;
