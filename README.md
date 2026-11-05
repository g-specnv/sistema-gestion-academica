# Sistema de Gestión Académica

Proyecto académico para implementar integración continua con GitHub Actions, pruebas automatizadas con Jest y notificaciones de resultados.

## Funcionalidades

- F01: registrar estudiantes.
- F02: validar datos del estudiante.
- F03: registrar calificaciones.
- F04: calcular el promedio académico.
- F05: consultar información del estudiante.
- F06: mostrar resultados académicos.

## Estructura del proyecto

```text
sistema-gestion-academica/
├── src/
│   ├── estudiante.js
│   ├── promedio.js
│   └── gestionAcademica.js
├── tests/
│   ├── estudiante.test.js
│   ├── promedio.test.js
│   └── gestionAcademica.test.js
├── .github/
│   └── workflows/
│       └── integracion-continua.yml
├── package.json
├── package-lock.json
├── README.md
├── .gitignore
└── node_modules/   (generado localmente al instalar dependencias)
```

## Instalación

```bash
npm install
```

## Ejecución de pruebas

```bash
npm test
```

## Flujo de integración continua

Cada vez que se hace push o se abre una pull request hacia la rama principal, GitHub Actions:

1. Descarga el código fuente.
2. Configura Node.js.
3. Instala dependencias con npm install.
4. Ejecuta Jest.
5. Reporta el resultado del proceso.

## Caso de uso principal

```javascript
const { SistemaGestionAcademica } = require('./src/gestionAcademica');

const sistema = new SistemaGestionAcademica();
sistema.registrarEstudiante('Juan Perez', '2026001', 'juan@gmail.com');
const estudiante = sistema.registrarCalificacion('2026001', 14, 16, 18);
console.log(estudiante.promedio);
```

## Resultado esperado

- Si todas las pruebas pasan, la integración continua finaliza con éxito.
- Si alguna prueba falla, el flujo marca error y permite detectar el problema rápidamente.

## Análisis técnico

La solución permite automatizar verificaciones y detectar fallos después de cada cambio. Esto reduce errores, acelera la validación del código y mejora la colaboración del equipo.

## Conclusión

La integración continua contribuye a mejorar la calidad del software, reducir errores, facilitar el trabajo colaborativo y mantener un proceso de desarrollo más controlado y confiable.
