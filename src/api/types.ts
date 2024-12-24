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

export type App = {
    appId: string;
    appName: string;
    appSources: string[];
    category: string;
};

export type AppList = App[];

export type AppListResponse = {
    appRows: AppList;
    totalCount: number;
};
