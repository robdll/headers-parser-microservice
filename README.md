# **Header-parser microservice**

Microservice API to get requester information such us ip address, language and OS.

[Demo](https://headers-parser-microservice.vercel.app/)

## **Installation**

1. clone this repository

```bash
git clone git@github.com:robdll/headers-parser-microservice.git
```

2. move to the project directory and install dependecies

```bash
cd headers-parser-microservice
yarn
```

3. run locally

```bash
yarn dev
```

4. visit [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## **API usage**

### **URL**

> `<projecturl>`/api/whoami

### **RETURNED VALUE**

json object containing the following key/value

`ipaddress`: user ip address
`language`: browser language
`software`: user browser

### **EXAMPLE**

> `<projecturl>`/api/whoami

```
{
    "ipaddress":"159.20.14.100",
    "language":"en-US,en;q=0.5",
    "software":"Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:50.0) Gecko/20100101 Firefox/50.0"
}

```

## Deploy

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme)

Check out [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
