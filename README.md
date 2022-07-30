# Global Back Office

###### lastest version (v.0.0.1)

### Environment

- [nodejs] - v.16.14.1 (LTS)
- [ReactJS] - v.17.0.2

### Main Plugins

- [SWR] - Data caching & Auto fetch
- [axios] - HTTP request rest api
- [i18next] - Translation module with json
- [DAYJS] - JS dates and times
- [material-ui] - Free Icons from google
- [typescript] - Typing js syntax

### Development

Install the dependencies and devDependencies and start the server.

will be run at 127.0.0.1:9000

```bash
cd gbo-web
npm install
npm run-script dev
```

#### Build

Webpack build with production environment

```bash
npm run build
```

### Dependencies

`package.json`

```json
    "dependencies": {
"@ckeditor/ckeditor5-build-classic": "^33.0.0",
"@ckeditor/ckeditor5-react": "^4.0.1",
"@material-ui/core": "^4.12.3",
"@material-ui/icons": "^4.11.2",
"axios": "^0.26.0",
"dotenv-webpack": "^7.1.0",
"i18next": "^21.6.14",
"dayjs": "^1.11.1",
"query-string": "^7.1.1",
"react": "^17.0.2",
"react-activation": "^0.9.11",
"react-datepicker": "^4.7.0",
"react-dom": "^17.0.2",
"react-i18next": "^11.15.7",
"react-router": "^6.2.2",
"react-router-dom": "^6.2.1",
"swr": "^1.2.2",
"typescript": "^4.5.4"
},
"devDependencies": {
"@babel/core": "^7.16.10",
"@babel/plugin-proposal-object-rest-spread": "^7.16.7",
"@babel/plugin-proposal-optional-chaining": "^7.16.7",
"@babel/plugin-transform-object-assign": "^7.16.7",
"@babel/plugin-transform-runtime": "^7.17.0",
"@babel/preset-env": "^7.16.10",
"@babel/preset-typescript": "^7.16.7",
"@babel/runtime": "^7.17.8",
"@types/react": "^17.0.38",
"@types/react-datepicker": "^4.3.4",
"@types/react-dom": "^17.0.11",
"@types/react-router": "^5.1.18",
"@types/react-router-dom": "^5.3.3",
"autoprefixer": "^10.4.2",
"babel-loader": "^8.2.3",
"classnames": "^2.3.1",
"clean-webpack-plugin": "^4.0.0",
"css-loader": "^6.5.1",
"file-loader": "^6.2.0",
"fork-ts-checker-webpack-plugin": "^6.5.0",
"html-webpack-plugin": "^5.5.0",
"json-server": "^0.17.0",
"mini-css-extract-plugin": "^2.6.0",
"postcss-loader": "^6.2.1",
"prettier": "^2.5.1",
"sass": "^1.49.9",
"sass-loader": "^12.4.0",
"source-map-loader": "^3.0.1",
"style-loader": "^3.3.1",
"ts-loader": "^9.2.6",
"webpack": "^5.66.0",
"webpack-bundle-analyzer": "^4.5.0",
"webpack-cli": "^4.9.1",
"webpack-dev-server": "^4.7.3",
"webpack-merge": "^5.8.0"
}
```

## License

[//]: # (OutLinks)

[git-repo-url]: <https://github.com/EMBRACE-DEV/gbo-web.gitt>

[ReactJS]: <https://reactjs.org/>

[SWR]: <https://swr.vercel.app/ko>

[nodejs]: <https://nodejs.org/en/>

[axios]: <https://axios-http.com/docs/intro>

[dayjs]: <https://day.js.org/en/>

[i18next]: <https://www.i18next.com/>

[material-ui]: <https://mui.com/>

[typescript]: <https://www.typescriptlang.org/>
