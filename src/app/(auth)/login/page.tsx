import React from 'react';
import Header from '@/components/Header/Header';
import LoginForm from './_components/LoginForm';
import SocialLogin from './_components/SocialLogin';
import Footer from '@/components/Footer/Footer';

const LoginPage: React.FC = () => { 
  return (
    <main className="flex overflow-hidden flex-col items-center bg-white">
      <div className="flex w-full min-h-[960px] max-md:max-w-full">
        <div className="flex flex-col flex-1 shrink justify-between w-full basis-0 min-w-[240px] max-md:max-w-full">
          <Header />
          <section className="flex flex-col items-center px-8 mt-16 w-full max-md:px-5 max-md:mt-10 max-md:max-w-full">
            <div className="flex flex-col max-w-full w-[416px]">
              <LoginForm />
              <SocialLogin />
            </div>
          </section>
          <Footer />
        </div>
      </div>
    </main>
  );
};

export default LoginPage;

// 'use client';
// import { signIn } from 'next-auth/react';

// const LoginPage = () => {
//   const handleGithubLogin = async () => {
//     signIn("github");
//   };

//   return (
//     <div>
//       <form action={handleGithubLogin}>
//         <button>LogIn</button>
//       </form>
//     </div>
//   );
// };

// export default LoginPage;