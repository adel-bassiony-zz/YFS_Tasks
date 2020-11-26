import React, {Suspense} from 'react';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import TasksTable from 'components/TasksTable/TasksTable';
import Loader from 'components/Loader/Loader';

function App() {
    return (
        <ErrorBoundary>
            <Suspense fallback={<Loader/>}>
                <div className="px-5">
                    <TasksTable />
                </div>
            </Suspense>
        </ErrorBoundary>
    );
}

export default App;
