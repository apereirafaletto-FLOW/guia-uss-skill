# Guía USS - Colores y Tipografía

**Skill para generar guías de estilos con identidad visual Universidad San Sebastián - Sede Patagonia**

## 📋 ¿Qué es?

Una skill que genera automáticamente documentos Word profesionales con:
- ✅ Logo institucional USS
- ✅ Paleta de colores officiales (Navy `#0b1f3a`, Dorado `#B8911D`)
- ✅ Tipografía estandarizada (Calibri)
- ✅ Colores de estado pedagógico (logrado, en desarrollo, crítico)
- ✅ Guías de aplicación y ejemplos
- ✅ Recomendaciones de formato

## 🚀 Cómo usar

### Desde Claude (chatbot)

**Simplemente describe lo que necesitas:**

```
"Crea una guía de colores y tipografía USS para el Diplomado de Patología Oral"
```

La skill automáticamente:
1. Generará un documento personalizado
2. Incluirá el logo USS
3. Adaptará los ejemplos a tu asignatura
4. Entregará un archivo listo para descargar

### Desde línea de comandos

```bash
node scripts/generar_guia_uss.js "Nombre del Diplomado" "Contexto Adicional"
```

**Ejemplo:**
```bash
node scripts/generar_guia_uss.js "Diplomado de Patología" "Facultad de Odontología 2026"
```

## 📁 Estructura

```
guia-uss-skill/
├── SKILL.md                          # Documentación de la skill
├── README.md                          # Este archivo
├── scripts/
│   └── generar_guia_uss.js          # Script principal
└── assets/
    └── logo_uss.png                  # Logo institucional
```

## 🎨 Colores incluidos

| Color | Código | Uso |
|-------|--------|-----|
| Navy Primario | `#0b1f3a` | Títulos, acciones |
| Dorado USS | `#B8911D` | Detalles, subtítulos |
| Verde | `#16a34a` | Confirmado/logrado |
| Naranja | `#d97706` | En desarrollo |
| Rojo | `#dc2626` | Crítico/alerta |
| Púrpura | `#7c3aed` | Pendiente revisión |

## 📝 Tipografía

- **Cuerpo:** Calibri 11 pt
- **Títulos:** Calibri 16 pt (bold)
- **Subtítulos:** Calibri 14 pt (bold)

## ✨ Características

- 🎓 Identidad visual institucional USS
- 📖 Documentos profesionales y educativos
- 🔄 Totalmente editable después de generado
- 💾 Descargables en formato Word (.docx)
- 🌐 Compatible con Microsoft Word 2016+
- 📱 Formato A4, márgenes estándar

## 🔧 Requisitos

- Node.js 14+
- Librería `docx`: `npm install docx`

## 📞 Soporte

Si necesitas ajustes o modificaciones a la guía:
- Especifica qué quieres cambiar
- Describe ejemplos adicionales
- Pide personalizaciones de colores o contenido

La skill se adapta a tus necesidades específicas.

---

**Creado para:** Universidad San Sebastián - Sede Patagonia 🎓
