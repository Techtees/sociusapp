import './global.css'
import { Routes, Route} from 'react-router-dom'
import SignInForm from './auth/forms/SignUp';
import SignupForm from './auth/forms/SignUp';

function App() {
    return ( 
        <div>
            <main className="flex h-screen">
                <Routes>
                    {/* Public routes */}
                    <Route  path="/sign-in" element={<SignInForm />}  />
                    <Route  path="/sign-up" element={<SignupForm />}  />

                    {/* Private Routes */}
                    <Route index element ={<Home />} />
                </Routes>
            </main>

        </div>
     );
}

export default App;