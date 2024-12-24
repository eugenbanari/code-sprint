import viteLogo from '/public/vite.svg';
import reactLogo from '/public/react.svg';

const App: React.FC = () => {
    return (
        <>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', columnGap: '8px' }}>
                <img src={viteLogo} alt="Vite Logo" />
                <img src={reactLogo} alt="React Logo" />
            </div>
            <h1>Code Sprint</h1>
            <p>A frontend project built with React.</p>
        </>
    );
};

export default App;
