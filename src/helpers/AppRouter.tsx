import React from "react"
import { Route, Routes } from "react-router-dom"
import { IPath } from "../types/types"
import { paths } from "../constants/paths"

const AppRouter: React.FC = () => {
    return (
        <Routes>
            {paths.map((el: IPath) => (
                <Route path={el.path} element={el.element} />
            ))}
        </Routes>
    )
}

export default AppRouter
