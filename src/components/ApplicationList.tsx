import { useApps } from '../hooks';

const ApplicationList: React.FC = () => {
    const { data: apps, isLoading, isError, isSuccess } = useApps({ pageNumber: 1, pageSize: 25 });
    console.log(JSON.stringify(apps, null, 2));
    return <div>{JSON.stringify(apps, null, 2)}</div>;
};
export default ApplicationList;
