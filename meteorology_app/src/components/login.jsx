import {useState} from 'react';
import {auth} from '../firebase';
import {signInWithEmailAndPassword, createUserWithEmailAndPassword} from 'firebase/auth';

export default function Login()
{
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [isRegister, setIsRegister] = useState(false);
    const [error, setError] = useState('');

    const handleAuth = async (e) => {

        e.preventDefault();
        setError('');
        try
        {
            if(isRegister)
            {
                await createUserWithEmailAndPassword(auth, email, pass);
            }
            else
            {
                await signInWithEmailAndPassword(auth, email, pass);
            }
        }
        catch (err)
        {
            setError(err.message.replace('Firebase: ', ''));
        }
    };

    return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100 p-4">
      <div className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-md">
        <h2 className="text-3xl font-bold text-center text-black-900 mb-8">
          {isRegister ? 'Create an account' : 'Welcome Back'}
        </h2>
        
        {error && <div className="bg-red-50 text-red-600 p-3 rounded-lg text-sm mb-4 text-center">{error}</div>}
        
        <form onSubmit={handleAuth} className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
            <input
              type="password"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-shadow"
              required
            />
          </div>
          <button 
            type="submit" 
            className="w-full bg-cyan-600 text-white py-3 rounded-lg hover:bg-cyan-800 transition-colors font-semibold shadow-md"
          >
            {isRegister ? 'Create Account' : 'Log In'}
          </button>
        </form>

        <p className="text-center mt-6 text-sm text-gray-600">
          {isRegister ? 'Already have an account? ' : "Don't have an account? "}
          <button 
            onClick={() => setIsRegister(!isRegister)}
            className="text-gray-600 font-semibold hover:underline"
          >
            {isRegister ? 'Log in' : 'Sign up'}
          </button>
        </p>
      </div>
    </div>
  );

    
    
    
    
}