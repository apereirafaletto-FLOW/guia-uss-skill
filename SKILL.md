---
name: guia-uss-colores-tipografia
description: "Genera documentos Word con formato institucional Universidad San Sebastián (USS). Usar siempre que el usuario pida crear apuntes, guías, informes o material académico con identidad USS. Incluye logo oficial USS (escudo con árbol dorado), paleta institucional (navy #0b1f3a, dorado #B8911D), colores pedagógicos (logrado, en desarrollo, crítico, pendiente), tipografía Calibri estandarizada, header con logo y separador dorado. También usar cuando el usuario pida aplicar formato USS a un documento existente, estandarizar colores de un diplomado o asignatura, o compartir guías de estilo con colegas. Aplica para Facultad de Odontología, diplomados de patología, y cualquier programa académico USS Sede Patagonia."
---

# Guía USS - Colores y Tipografía

Genera documentos Word profesionales con identidad visual Universidad San Sebastián - Sede Patagonia.

## Cuándo usar esta skill

- Crear guías de estilos para diplomados o asignaturas USS
- Aplicar formato institucional USS a documentos existentes
- Estandarizar apuntes, informes o material académico
- Generar documentos con logo, colores y tipografía USS
- Compartir formato con colegas docentes

## Recursos incluidos

### Logo
- **Ubicación:** `assets/logo_uss.png`
- **Contenido:** Escudo USS (árbol dorado, "Verdad, Razón, Virtud, 1989") + "UNIVERSIDAD SAN SEBASTIAN"
- **Sin acreditaciones** (versión limpia)

### Script generador
- **Ubicación:** `scripts/generar_guia_uss.js`
- **Dependencia:** `npm install -g docx`
- **Uso:** `node scripts/generar_guia_uss.js "Nombre Asignatura" "Contexto"`

## Paleta de colores USS

### Institucionales
| Color | Código | Uso |
|-------|--------|-----|
| Navy Primario | `#0b1f3a` | Títulos H1, acciones principales, header |
| Navy Hover | `#14305a` | Estados hover |
| Dorado USS | `#B8911D` | Subtítulos H2, separadores, acentos |
| Texto Base | `#1e293b` | Cuerpo de texto |
| Borde Cálido | `#d6d3c4` | Bordes de tablas |

### Estados pedagógicos/clínicos
| Color | Código | Uso |
|-------|--------|-----|
| Verde (Logrado) | `#16a34a` | Diagnósticos confirmados, competencias alcanzadas |
| Naranja (En desarrollo) | `#d97706` | Hallazgos en evaluación, alertas moderadas |
| Rojo (Crítico) | `#dc2626` | Hallazgos severos, competencias no alcanzadas |
| Púrpura (Pendiente) | `#7c3aed` | Casos en revisión, evaluaciones incompletas |

### Fondos y tintes
| Color | Código | Uso |
|-------|--------|-----|
| Tinte Navy Claro | `#eef2f8` | Fondos de encabezados de tabla |
| Tinte Navy Fuerte | `#dbe4f1` | Fondos de secciones destacadas |
| Fondo App | `#f8fafc` | Fondo general |
| Superficie | `#FFFFFF` | Superficies blancas |

## Tipografía

| Elemento | Familia | Tamaño | Estilo | Color |
|----------|---------|--------|--------|-------|
| Título H1 | Calibri | 16 pt | Negrita | Navy `#0b1f3a` |
| Subtítulo H2 | Calibri | 14 pt | Negrita | Dorado `#B8911D` |
| Subtítulo H3 | Calibri | 12 pt | Negrita | Navy `#0b1f3a` |
| Texto normal | Calibri | 11 pt | Regular | Texto base `#1e293b` |
| Notas/metadatos | Calibri | 8-9 pt | Italic | Gris `#808080` |

## Aplicar formato USS a documento existente

Para reformatear un documento `.docx` existente con identidad USS:

1. **Desempaquetar:** `python scripts/office/unpack.py documento.docx unpacked/`
2. **Cambiar fuentes** en `styles.xml` y `document.xml`: Arial → Calibri
3. **Reemplazar colores** en `document.xml`:
   - Azules genéricos → Navy USS `#0b1f3a`
   - Azules secundarios → Dorado USS `#B8911D`
   - Bordes → Borde cálido `#d6d3c4`
4. **Agregar logo** a `word/media/` y configurar relación en header
5. **Actualizar header:** logo + separador dorado + "USS — Odontología"
6. **Reempaquetar:** `python scripts/office/pack.py unpacked/ output.docx --original documento.docx`

## Header estándar USS

Todas las páginas deben incluir:
- **Izquierda:** Logo USS (escudo + nombre, sin acreditaciones)
- **Derecha:** "USS — Odontología" en navy, italic, 8pt
- **Separador:** Línea dorada `#B8911D` bajo el header

## Notas importantes

- **No usar** la paleta retirada `#3C6DBC` / `#CFB47B`
- **No volver** a Arial, Montserrat u Open Sans
- **No agregar** colores nuevos sin incluirlos en la paleta compartida
- El navy heredado `#1B3860` debe consolidarse hacia `#0b1f3a`
- Documentos formato A4, márgenes 1 pulgada (1440 DXA)
- Compatible con Microsoft Word 2016+
