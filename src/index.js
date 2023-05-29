import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
// import AppProfile from './AppProfile';
// import AppCounter from './AppCounter';
// import AppProducts from './AppProducts';
// import AppXY from './AppXY';
// import AppMentor from './AppMentor';
// import AppMentors from './AppMentors';
// import AppWrap from './AppWrap';
// import AppCard from './components/AppCard';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <AppProfile /> */}
    {/* <AppCounter /> */}
    {/* <AppProducts /> */}
    {/* <AppXY /> 마우스 따라가기 */}
    {/* <AppMentor /> 중접객체 상태관리 */}
    {/* <AppWrap /> 컴포넌트 재사용 */}
    {/* <AppCard /> */}
    <App/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
