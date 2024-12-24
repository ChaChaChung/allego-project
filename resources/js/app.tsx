
import { createInertiaApp } from '@inertiajs/inertia-react'
import './Reducer/store'
import { createRoot } from 'react-dom/client'
import { Provider } from '@vteam_components/redux'
import vteamConfig from './vteamConfig'
import '../css/app.scss'
import 'bootstrap/dist/css/bootstrap.css';
import '@vteam_components/cloud/dist/style';
import '@vteam_components/shared/dist/style';
import api from './api'

window.api = api

createInertiaApp({
    resolve: (name) => {
        const module = require(`./Pages/${name}`)
        return module.default
    },
    setup({ el, App, props }) {
        const root = createRoot(el)
        root.render(
            <Provider vteamConfig={vteamConfig as any}>
                <App {...props} />
            </Provider>
        )
    }
})