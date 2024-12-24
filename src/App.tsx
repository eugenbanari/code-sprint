import React from 'react';
import { QueryClientProvider } from '@tanstack/react-query';
import { BrowserRouter, Route, Routes } from 'react-router';
import NavigationMenu from './components/NavigationMenu';
import queryClient from './plugins/queryClient';

const ApplicationList = React.lazy(() => import('./components/ApplicationList'));

const App: React.FC = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <BrowserRouter>
                <NavigationMenu />
                <React.Suspense fallback={<div>Loading...</div>}>
                    <Routes>
                        <Route path="/apps/*" element={<ApplicationList />} />
                        <Route path="/data" element={<div>Data</div>} />
                        <Route path="/identities" element={<div>Identities</div>} />
                        <Route path="/alerts" element={<div>Alerts</div>} />
                        <Route path="/investigations" element={<div>Investigations Center</div>} />
                        <Route path="/configurations" element={<div>Configurations</div>} />
                    </Routes>
                </React.Suspense>
            </BrowserRouter>
        </QueryClientProvider>
    );
};

export default App;
