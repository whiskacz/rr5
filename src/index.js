import React from 'react';
import ReactDOM from 'react-dom/client';
import PageTable from './components/PageTable';

function RR5 () {
    return (
        <div>
            <PageTable />
        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RR5 />)
