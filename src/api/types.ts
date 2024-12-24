export type AppUsers = {
    appUsers: string[];
};

export type AppOverview = {
    appOverview: {
        appId: string;
        appName: string;
        appSources: string[];
        category: string;
    };
};

export type GetAppsPayload = {
    pageNumber?: number;
    pageSize?: number;
};

export type AppList = {
    appId: string;
    appName: string;
    appSources: string[];
    category: string;
}[];

export type AppListResponse = {
    appRows: AppList;
    totalCount: number;
};
