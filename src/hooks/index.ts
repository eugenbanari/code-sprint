import { useQuery } from '@tanstack/react-query';
import { getAppOverview, getAppOverviewUsers, getApps } from '../api';
import { GetAppsPayload } from '../api/types.ts';

export const useApps = (params: GetAppsPayload) => {
    return useQuery({ queryKey: ['apps'], queryFn: () => getApps(params) });
};

export const useAppOverview = (appId?: string) => {
    return useQuery({ queryKey: ['app', appId], queryFn: () => getAppOverview(appId as string), enabled: Boolean(appId) });
};

export const useAppOverviewUsers = (appId: string) => {
    return useQuery({
        queryKey: ['appUsers', appId],
        queryFn: () => getAppOverviewUsers(appId),
        enabled: Boolean(appId),
    });
};
