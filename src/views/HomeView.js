import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const HomeView = () => {
  return (
    <h1 className="text-center">
      Добро пожаловать!{' '}
      <span role="img" aria-label="Иконка приветствия">
        😎
      </span>
    </h1>
  );
};

export default HomeView;
