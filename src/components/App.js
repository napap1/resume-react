// Imports
//////////

// Dependencies
import React from 'react';

// Components
import Spinner from './common/Spinner';
import Header from './header/Header';
import ResumeContent from './resumeContent/ResumeContent';

// Hooks
import { useHttpRequest } from '../hooks/HttpRequest';

// Styling
import '../css/style.css';


// Component
////////////

function App() {
    // Hook to fetch the data on mount
    const [isLoading, fetchedData] =
        useHttpRequest('https://api.myjson.com/bins/fagtx', []);

    // Initialize & Generate the content
    let content;
    if (isLoading || !fetchedData) {
        content = <Spinner />
    } else {
        content = (
            <div>
                <Header />
                <ResumeContent resumeData={fetchedData}/>
            </div>
        )
    }

    return (
        <div className="container-fluid">
            { content }
        </div>
    );
}


// Export
/////////

export default App;