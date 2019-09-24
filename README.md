# smallish

A social media riff

1. Start the prisma server

```bash
cd packages/prisma
docker-compose up -d
```

2. go back to the root

```
cd ../../
```

3. start the graphql server

```
yarn dev:prisma
```

4. start the web server

```
yarn start:web
```
