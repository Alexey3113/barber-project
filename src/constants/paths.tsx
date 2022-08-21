import MainPage from "../pages/main";
import { IPath } from "../types/types";

export const MAIN_ROUTE = '/'

//TODO: Добавить роль для url-a. Adminu не нужен барберов и услуг. 3 роли: anon, user and admin
export const paths: IPath[] = [
    {
        path: MAIN_ROUTE,
        element: <MainPage />
    }
]