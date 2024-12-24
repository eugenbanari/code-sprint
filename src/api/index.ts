import axios from 'axios';
import { AppListResponse, AppOverview, AppUsers, GetAppsPayload } from 'api/types.ts';

const API_CONFIG = {
    headers: {
        Accept: 'application/json',
        'ngrok-skip-browser-warning': '69420',
    },
};

export const getApps = async (payload: GetAppsPayload = {}): Promise<AppListResponse> => {
    const response = await axios.put('/api/v1/app-service/get-apps', payload, API_CONFIG);
    return response.data;
};

export const getAppOverview = async (appId: string): Promise<AppOverview> => {
    const response = await axios.get(`/api/v1/app-service/get-app-overview/${appId}`, API_CONFIG);
    return response.data;
};

export const getAppOverviewUsers = async (appId: string): Promise<AppUsers> => {
    const response = await axios.get(`/api/v1/app-service/get-app-overview-users/${appId}`, API_CONFIG);
    return response.data;
};
