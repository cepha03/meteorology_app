//importing required libraries and functions for post log/register
import { useState, useEffect } from 'react';
import { auth } from './firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import Login from './components/login';

function App() {
  const [user, setUser] = useState(null);
  const [load, setLoad] = useState(true);

  useEffect(() => {
    //verifies whether user has signed in. check to see if successful. 
    const uncheck = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoad(false);
    });
    return () => uncheck();
  }, []);

  if (load) {
    return <div className="min-h-screen flex items-center justify-center bg-slate-100 text-xl font-semibold text-blue-900">Loading..</div>;
  }

  //if no user present, show login page
  if (!user) {
    return <Login />;
  }

  //added the dashboard objects accessed upon successful log in/register
  return (
    <div className="min-h-screen bg-slate-100 p-4 md:p-8">
      <div className="max-w-5xl mx-auto">
        <header className="flex flex-col md:flex-row justify-between items-center bg-white p-6 rounded-2xl shadow-sm mb-6 gap-4">
          <h1 className="text-2xl font-bold text-blue-900">MeteoSpark Dashboard</h1>
          <div className="flex items-center gap-4">
            <span className="text-sm text-gray-500 hidden md:inline">{user.email}</span>
            <button 
              onClick={() => signOut(auth)}
              className="px-5 py-2 text-sm font-medium text-red-600 bg-red-100 rounded-lg hover:bg-red-200 transition-colors"
            >
              Log Out
            </button>
          </div>
        </header>
        
        <main className="bg-white p-8 text-center rounded-2xl shadow-sm min-h-[60vh]">
          <h2 className="text-xl font-semibold mb-4 text-black">Welcome to MeteoSpark</h2>
          <p className="text-gray-500">An intuitive platform to learn about the weather. Time to spark!</p>
        </main>
      </div>
    </div>
  );
}

export default App;