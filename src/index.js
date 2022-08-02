import React from 'react';
import ReactDOM from 'react-dom/client';
import TaskList from './components/TaskList';
import './styles/index.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <TaskList />
    </React.StrictMode>
);
