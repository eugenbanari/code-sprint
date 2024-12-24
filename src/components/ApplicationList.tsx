import { useApps } from '../hooks';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { AppList } from '../api/types.ts';
import {Routes, Route, useNavigate, useParams} from 'react-router';
import React from "react";

const ApplicationOverview = React.lazy(() => import('./ApplicationOverview'))

const ApplicationList: React.FC = () => {
    const { data, isLoading } = useApps({ pageNumber: 1, pageSize: 25 }); // todo pagination
    const applications = data?.appRows as AppList;
    const navigate = useNavigate();
    const params = useParams();
    return (
        <>
            <Routes>
                <Route path=":appId" element={<ApplicationOverview />}></Route>
            </Routes>
        <div className="card">
            <h1>App Inventory</h1>
            <DataTable<AppList>
                onRowClick={(e) => {
                    navigate(`/apps/${e.data.appId}`);
                }}
                selection={applications?.find(app => app.appId === params['*'])}
                value={applications}
                loading={isLoading}
                showGridlines
                size="normal"
                selectionMode="single"
                paginator={!isLoading}
                rows={25}
                rowsPerPageOptions={[25, 50]}
            >
                <Column sortable field="appName" header="Name"></Column>
                <Column sortable field="category" header="Category"></Column>
                <Column
                    sortable
                    field="appSources"
                    header="Connector"
                    body={(value) => value.appSources?.join(', ')}
                ></Column>
            </DataTable>
        </div>
        </>
    );
};
export default ApplicationList;
