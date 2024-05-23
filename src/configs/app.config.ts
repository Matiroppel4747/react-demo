export type AppConfig = {
    apiPrefix: string
    authenticatedEntryPath: string
    unAuthenticatedEntryPath: string
    tourPath: string
    locale: string
    enableMock: boolean
}

const apiUrl = import.meta.env.VITE_API_URL;
const buildMode = import.meta.env.MODE;

const appConfig: AppConfig = {
    apiPrefix: buildMode === 'prod' || buildMode === 'uat' ? apiUrl : '/api',
    authenticatedEntryPath: '/home',
    unAuthenticatedEntryPath: '/sign-in',
    tourPath: '/',
    locale: 'en',
    enableMock: true,
}

export default appConfig
