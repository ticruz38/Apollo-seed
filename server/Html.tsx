import * as React from 'react'
import config from '../config'




export default function Html({ content, state }) {
    return (
        <html>
            <head>
                <meta charSet="UTF-8" />
                <title>{config.APP_TITLE}</title>
                <link rel="stylesheet" href={config.FRONT_END_URL + '/app.css'} />
                <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
            </head>
            <body>
                <div id="content" dangerouslySetInnerHTML={{ __html: content }} />
                <script
                    dangerouslySetInnerHTML={{
                        __html: `window.__APOLLO_STATE__=${JSON.stringify(state).replace(/</g, '\\u003c')};`
                    }}
                />
                <script src={config.FRONT_END_URL + '/vendors.js'} />
                <script src={config.FRONT_END_URL + '/app.js'} />
            </body>
        </html>
    )
}
