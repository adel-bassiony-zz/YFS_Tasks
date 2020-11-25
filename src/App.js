import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import TasksTable from 'components/TasksTable/TasksTable';

function App() {
    return (
        <ErrorBoundary>
            <div className="px-5">
                <TasksTable />
            </div>
        </ErrorBoundary>
    );
}

export default App;
