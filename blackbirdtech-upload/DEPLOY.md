# Despliegue — blackbirdtech.cl

Registrador del dominio: **Donweb** · Hosting: **GitHub Pages** (gratis, HTTPS automático)

---

## 1. Crear el repositorio en GitHub

1. Ir a https://github.com/new
2. Owner: tu usuario u organización (ej. `blackbirdtech`)
3. Repository name: **`blackbirdtech.github.io`**  ← con ese nombre exacto el sitio queda servido solo
4. Visibility: **Public**
5. **NO** marcar README, .gitignore, ni license (ya están en este repo)
6. Create repository

## 2. Subir los archivos (3 comandos)

Desde la carpeta `blackbirdtech-site/`:

```bash
git remote add origin https://github.com/blackbirdtech/blackbirdtech.github.io.git
git branch -M main
git push -u origin main
```

Si tu usuario no es `blackbirdtech`, reemplazalo en la URL.

## 3. Activar GitHub Pages

1. En el repo → **Settings → Pages**
2. Source: **Deploy from a branch**
3. Branch: `main` · carpeta: `/ (root)` → **Save**
4. En 1-2 min el sitio vive en `https://<tu-usuario>.github.io`

## 4. Configurar DNS en Donweb

Entrar al panel de Donweb:

1. https://clientes.donweb.com → iniciar sesión
2. **Mis servicios** → **Dominios** → click en `blackbirdtech.cl`
3. En el menú lateral: **Administrar DNS** (o "Zona DNS" / "Configurar DNS")
4. Borrar/editar los registros A y CNAME que venían por defecto
5. Crear exactamente estos 5 registros:

| Tipo  | Nombre / Host | Valor                         | TTL  |
|-------|---------------|-------------------------------|------|
| A     | @             | `185.199.108.153`             | 3600 |
| A     | @             | `185.199.109.153`             | 3600 |
| A     | @             | `185.199.110.153`             | 3600 |
| A     | @             | `185.199.111.153`             | 3600 |
| CNAME | www           | `<tu-usuario>.github.io.`     | 3600 |

> En Donweb "@" representa el dominio raíz (`blackbirdtech.cl`). Si el panel pide el dominio completo, usar `blackbirdtech.cl.` (con punto final).
> El CNAME termina con punto final: `blackbirdtech.github.io.` (reemplazá `<tu-usuario>`).

Guardar. Donweb propaga el cambio en 5 min a 24 h (normalmente ≤ 30 min).

## 5. Conectar el dominio en GitHub y activar HTTPS

El archivo `CNAME` del repo ya declara `blackbirdtech.cl`, GitHub lo lee solo. Igual hacé:

1. **Settings → Pages** → campo **Custom domain** verificá que diga `blackbirdtech.cl` → Save
2. Esperar que aparezca el ✓ verde de "DNS check successful" (tarda minutos)
3. Marcar **Enforce HTTPS** (GitHub emite el certificado Let's Encrypt gratis)

## 6. Verificación final

Probar en orden:
- `https://<tu-usuario>.github.io` → debería mostrar el sitio
- `https://blackbirdtech.cl` → debería mostrar el sitio
- `https://www.blackbirdtech.cl` → debería redirigir a `blackbirdtech.cl`
- Candado HTTPS verde en los tres

Si algo no funciona: esperar propagación DNS, luego volver a **Settings → Pages** y usar "Remove" + Save en Custom domain, volver a setear `blackbirdtech.cl`. GitHub re-verifica y re-emite el cert.

---

## Actualizar el sitio después

Cualquier cambio en `index.html`:

```bash
git add index.html
git commit -m "update copy"
git push
```

GitHub Pages re-publica en ~1 min.
