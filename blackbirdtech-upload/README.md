# Blackbird Tech — blackbirdtech.cl

Sitio oficial de **Blackbird Tech**. Compañía AI-native de LATAM. Diseñamos agentes de IA para la vida cotidiana humana.

Programas activos: **SR-71 Blackbird**, **Dragon Lady**, **Vulcan**.
Filosofía operacional: **NASA** (rigor) + **Skunk Works** (velocidad).

---

## Stack

Sitio estático de un solo archivo (`index.html`). Sin build, sin dependencias. Hosting por **GitHub Pages** sobre dominio propio `blackbirdtech.cl`.

## Estructura

```
.
├── index.html   # sitio completo, bilingüe ES/EN
├── CNAME        # dominio apex blackbirdtech.cl
└── README.md
```

## Despliegue

1. Repositorio público `blackbirdtech/blackbirdtech.github.io` (o cualquier nombre — este patrón sirve el sitio en `https://blackbirdtech.github.io` automáticamente).
2. Activar **GitHub Pages** en `Settings → Pages → Branch: main /root`.
3. Dominio custom: GitHub lee `CNAME` automáticamente. En el registrador del dominio `blackbirdtech.cl` apuntar:
   - `A` del apex → `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - `CNAME` del `www` → `blackbirdtech.github.io`
4. Esperar propagación DNS (minutos a 24 h). GitHub emite el certificado HTTPS automáticamente.

## Edición rápida

Todo el copy bilingüe vive en `index.html` con pares `data-i18n-es` / `data-i18n-en`. Para cambiar un texto se edita el par correspondiente.

## Licencia

© 2026 Blackbird Tech SpA — todos los derechos reservados.
