import {useAppOverview} from "../hooks";

const ApplicationOverview: React.FC = () => {
    const {data:appOverview, isLoading, isError, isSuccess} = useAppOverview('box.com');
    console.log(JSON.stringify(appOverview, null, 2))
    return <div>
        <div>Loading: {isLoading}</div>
        <div>Error: {isError}</div>
        <div>Success: {isSuccess}</div>
        {JSON.stringify(appOverview, null, 2)}
    </div>;
};
export default ApplicationOverview;
