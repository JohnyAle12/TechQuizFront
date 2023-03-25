import { Route, Routes } from 'react-router-dom'
import { Form } from '../components/Form'
import { Home } from '../Home'

export const AppRouter = () => {
  return (
    <Routes>
        <Route path="/crear" element={
            <Form />
        } />

        <Route path="/*" element={ <Home />} />
    </Routes>
  )
}
