import React from 'react';
import Style from './Page404.module.css';
import { useLocation, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
function Page404() {
  const location = useLocation();
  const navigate = useNavigate();
  useEffect(()=>{
    setTimeout(() => navigate(-1), 3000);
}, []);
  return (
    <div className={Style.body}>
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <br/>
      <p>
        The page <code>{location.pathname}</code> does not exist.
      </p>
      <br/>
      {/* <button className={Style.btn}
        onClick={() => {
          navigate('/');
        }}
      >
        <strong>Go to Home</strong>
      </button> */}
    </div>
  );
}

export default Page404;
