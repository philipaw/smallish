# smallish

A social media riff

1. Start the prisma server

```bash
cd packages/prisma
docker-compose up -d
```

2. From the project root, start the graphql server

```
yarn dev:prisma
```

3. start the web server

```
yarn start:web
```
