import React from 'react';
import { useAppOverview } from '../hooks';
import { Sidebar } from 'primereact/sidebar';
import { useParams } from 'react-router';
import { AppOverview } from '../api/types.ts';

const ApplicationOverview: React.FC = () => {
    const { appId } = useParams();
    const { data, isLoading } = useAppOverview(appId);
    const prevApplication = React.useRef<AppOverview>();
    const applicationOverview = data ?? prevApplication;
    React.useEffect(() => {
        if (applicationOverview) {
            prevApplication.current = applicationOverview as AppOverview;
        }
    }, [appId, applicationOverview]);
    if (!appId) return;

    return (
        <Sidebar
            className="w-1/2 shadow-lg border-2"
            modal={false}
            visible={true}
            dismissable={false}
            onHide={() => {}}
            position="right"
            header={
                <div className="flex gap-x-4">
                    <h2>App overview</h2> <span>{isLoading && 'Loading ...'}</span>
                </div>
            }
        >
            {JSON.stringify(applicationOverview)}
        </Sidebar>
    );
};
export default ApplicationOverview;
