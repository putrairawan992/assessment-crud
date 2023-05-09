This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

## Test Logika dan Algoritma

Deret Angka

```
function deretAngka(n) {
  const kata1 = 'NAR'
  const kata2 = 'UTO'

  let hasilDeretAngka = ''

  for (let i = 1; i <= n; i++) {
    if (i % 5 === 0 && i % 3 === 0) hasilDeretAngka += `${kata1}${kata2} `
    if (i % 3 === 0) hasilDeretAngka += `${kata1} `
    if (i % 5 === 0) hasilDeretAngka += `${kata2} `
  }

  return hasilDeretAngka
}
```
Hitung Karakter Paragraph
```
function hitungKarakter(n) {
  let karakter = n

  return karakter?.length
}
```
Format String
```
function split(str) {
  return str.
    split(' ').
    map(w => w[0].toUpperCase() + w.substr(1).toLowerCase()).
    join(' ');
}
```

