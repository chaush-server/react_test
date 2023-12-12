import {
  createBrowserRouter, createRoutesFromElements, Route, RouterProvider
} from 'react-router-dom'
import NotFound from './NotFound'
import InfoBody, {infoLoader} from './info/InfoBody'
import InfoError from './info/InfoError'
import RootLayout from './layouts/RootLayout'
import InfoLayout from './layouts/InfoLayout'

const router = createBrowserRouter(createRoutesFromElements(<Route path="/" element={<RootLayout/>}>
  <Route path="info" element={<InfoLayout/>} errorElement={<InfoError/>}>
      <Route
          index
          element={<InfoBody/>}
          loader={infoLoader}
          errorElement={<InfoError/>}
      />
  </Route>
  <Route path="*" element={<NotFound/>}/>
</Route>))

function App() {
  return (<RouterProvider router={router}/>);
}

export default App
