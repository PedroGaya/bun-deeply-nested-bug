# bug

To install dependencies:

```bash
bun install
```

To run:

```bash
bun run index.ts
```

This project was created using `bun init` in bun v[5:0]u8@558ffb8fc781. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.

To reproduce the bug, run:

```bash
bun test
```

output is:


```bash
bun test v1.0.7 (b0393fba)

index.test.ts:
23 |         },
24 |     },
25 | };
26 | 
27 | test("Deeply nested floating point boogaloo", () => {
28 |     expect(testDeeplyNested).toEqual(expectedDeeplyNested);
        ^
error: expect(received).toEqual(expected)

  {
    prop: {
      prop: {
        prop: [Object ...]
      }
    }
  }

- Expected  - 0
+ Received  + 0

      at /home/gaya/git/bug/index.test.ts:28:4
✗ Deeply nested floating point boogaloo [0.41ms]

 0 pass
 1 fail
 1 expect() calls
Ran 1 tests across 1 files. [13.00ms]

```
