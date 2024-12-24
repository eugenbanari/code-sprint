import viteLogo from '/public/vite.svg';
import reactLogo from '/public/react.svg';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const App: React.FC = () => {
    const queryClient = new QueryClient();
    return (
        <QueryClientProvider client={queryClient}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', columnGap: '8px' }}>
                <img src={viteLogo} alt="Vite Logo" />
                <img src={reactLogo} alt="React Logo" />
            </div>
            <h1>Code Sprint</h1>
            <p>A frontend project built with React.</p>
        </QueryClientProvider>
    );
};

export default App;
