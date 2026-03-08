# Jardin Digital - Dia de la Mujer

Experiencia interactiva en React + Vite, personalizada para Diana Saenz Pahuara, donde cada flor revela un mensaje especial por el Dia Internacional de la Mujer.

## Stack Tecnologico

- React (componentes funcionales)
- Vite
- SCSS modular
- Framer Motion
- JavaScript ES6+

## Caracteristicas

- Pantalla de inicio personalizada en espanol
- Jardin animado con flores interactivas
- Mensajes dedicados para Diana en cada flor
- Animacion ambiental de petalos
- Mensaje final al desbloquear todas las flores
- Interfaz responsive optimizada para moviles

## Ejecutar en Local

```bash
npm install
npm run dev
```

## Build de Produccion

```bash
npm run build
npm run preview
```

## Despliegue en Vercel

1. Sube el proyecto a GitHub.
2. Ve a https://vercel.com y crea un proyecto nuevo importando este repositorio.
3. Usa esta configuracion:

- Framework Preset: `Vite`
- Build Command: `npm run build`
- Output Directory: `dist`

4. Pulsa `Deploy`.
5. Cada push a `main` desplegara cambios automaticamente.
6. El repositorio ya incluye `vercel.json` con configuracion lista.

## Despliegue en Netlify

1. Sube el proyecto a GitHub.
2. Ve a https://app.netlify.com y crea un sitio desde repositorio.
3. Usa esta configuracion:

- Build command: `npm run build`
- Publish directory: `dist`

4. Pulsa `Deploy site`.
5. Netlify actualizara el sitio automaticamente con cada push.
6. El repositorio ya incluye `netlify.toml` con configuracion lista.

## Recomendacion Profesional

Antes de publicar, ejecuta:

```bash
npm run build
```

Si no hay errores de compilacion, el proyecto esta listo para produccion.
