import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { publicRoutes as routes } from '~/routes'
import DefaultLayout from '~/layouts'
import { Fragment } from 'react';

function App() {

  return (
    <Router>
      <Routes>
          {routes.map((route, index) => {
            let Layout = DefaultLayout
            const Page = route.component

            if(route.layout) {
              Layout = route.layout
            } else if(route.layout === null) {
              Layout = Fragment
            }

            return (
              // Có thể bỏ thẳng component vào nhưng nên thông qua một constain cho biết nó là component 
              <Route key={index} path={route.path} element={<Layout> <Page /> </Layout>} />)
          })}
      </Routes>
    </Router>
  );
}

export default App;
