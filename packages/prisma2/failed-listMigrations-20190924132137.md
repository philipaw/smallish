# Failed listMigrations at 2019-09-24T20:21:37.247Z
## RPC One-Liner
```json
{"id":1,"jsonrpc":"2.0","method":"listMigrations","params":{"projectInfo":"","sourceConfig":"generator photon {\n  provider = \"photonjs\"\n}\n\ngenerator nexus_prisma {\n  provider = \"nexus-prisma\"\n}\n\ndatasource db {\n  provider = \"postgresql\"\n  url      = \"postgresql://prisma2@localhost:5432/smallish\"\n}\n\nmodel Post {\n  id        String   @default(cuid()) @id\n  createdAt DateTime @default(now())\n  updatedAt DateTime @updatedAt\n  published Boolean  @default(true)\n  title     String\n  content   String?\n  author    User?\n}\n\nmodel User {\n  id       String  @default(cuid()) @id\n  email    String  @unique\n  password String\n  name     String?\n  posts    Post[]\n}"}}
```

## RPC Input Readable
```json
{
  "id": 1,
  "jsonrpc": "2.0",
  "method": "listMigrations",
  "params": {
    "projectInfo": "",
    "sourceConfig": "generator photon {\n  provider = \"photonjs\"\n}\n\ngenerator nexus_prisma {\n  provider = \"nexus-prisma\"\n}\n\ndatasource db {\n  provider = \"postgresql\"\n  url      = \"postgresql://prisma2@localhost:5432/smallish\"\n}\n\nmodel Post {\n  id        String   @default(cuid()) @id\n  createdAt DateTime @default(now())\n  updatedAt DateTime @updatedAt\n  published Boolean  @default(true)\n  title     String\n  content   String?\n  author    User?\n}\n\nmodel User {\n  id       String  @default(cuid()) @id\n  email    String  @unique\n  password String\n  name     String?\n  posts    Post[]\n}"
  }
}
```

## Stack Trace
```bash
[31m[1mError in migration engine: [22m[39mthread 'main' panicked at 'Box<Any>', migration-engine/core/src/main.rs:152:27
stack backtrace:
   0: std::panicking::default_hook::{{closure}}
   1: std::panicking::default_hook
   2: migration_engine::main::{{closure}}
   3: std::panicking::rust_panic_with_hook
   4: std::panicking::begin_panic
   5: migration_engine::main
   6: std::rt::lang_start::{{closure}}
   7: std::panicking::try::do_call
   8: __rust_maybe_catch_panic
   9: std::rt::lang_start_internal
  10: main
```
