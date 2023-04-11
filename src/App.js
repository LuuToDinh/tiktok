import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { publicRoutes as routes } from '~/routes'
import { DefaultLayout } from '~/component/Layout'

function App() {

  return (
    <Router>
      <Routes>
          {routes.map((route, index) => {
            const Layout = route.layout || DefaultLayout
            const Page = route.component
            return (
              // Có thể bỏ thẳng component vào nhưng nên thông qua một constain cho biết nó là component 
              <Route key={index} path={route.path} element={<Layout> <Page /> </Layout>} />)
          })}
      </Routes>
    </Router>
  );
}

export default App;
