# TS GraphQL country

[![Netlify Status](https://api.netlify.com/api/v1/badges/c7c00e32-e10f-4874-a85b-f1aca4d7a4b5/deploy-status)](https://app.netlify.com/sites/gallant-benz-11c0b6/deploys)

Use React, TypeScript and Apollo client to query language and country details from https://countries-274616.ew.r.appspot.com/. 

Languages retrieved are Korean, Japanese, English, Spanish, Portuguese, French, German and Dutch

## See it live

### Surge
[https://tart-connection-1.surge.sh/](https://tart-connection-1.surge.sh/)

### Netlify
[https://gallant-benz-11c0b6.netlify.app/](https://gallant-benz-11c0b6.netlify.app/)


## Run client-side app

### Locally

- Clone the repo

- Install dependencies
  ```sh
  $ npm install
  ```

- Run using parcel:
  ```sh
  $ npm run dev
  ```

- Open [http://localhost:1234](http://localhost:1234)

## Github Actions

- git push to master automatically builds and deploys application to Surge and Netlify respectively

- Netlify workflow file: .github/workflows/netlify.yml

- Surge workflow file: .github/workflows/surge.yml  