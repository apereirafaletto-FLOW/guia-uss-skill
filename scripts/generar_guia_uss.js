#!/usr/bin/env node

/**
 * Script para generar Guía de Colores y Tipografía USS
 * Universidad San Sebastián - Sede Patagonia
 * 
 * Uso: node generar_guia_uss.js [asignatura] [contexto]
 * Ejemplo: node generar_guia_uss.js "Patología Oral" "Diplomado"
 */

const { Document, Packer, Paragraph, TextRun, Table, TableRow, TableCell, ImageRun,
        AlignmentType, BorderStyle, WidthType, ShadingType, HeadingLevel, PageBreak } = require('docx');
const fs = require('fs');
const path = require('path');

// Colores Institucionales USS
const COLORES_USS = {
  navy_primario: "0b1f3a",
  navy_hover: "14305a",
  dorado_uss: "B8911D",
  logrado: "16a34a",
  en_desarrollo: "d97706",
  no_logrado: "dc2626",
  pendiente: "7c3aed",
  texto_base: "1e293b",
  superficie: "FFFFFF",
  fondo_app: "f8fafc",
  fondo_papel: "f5f5f0",
  borde_calido: "d6d3c4",
  tinta_navy_claro: "eef2f8",
  tinta_navy_fuerte: "dbe4f1",
  tinta_logrado: "dcfce7",
  tinta_desarrollo: "fef3c7",
  tinta_no_logrado: "fee2e2",
};

// Obtener parámetros
const asignatura = process.argv[2] || "Diplomado de Patología";
const contexto = process.argv[3] || "Facultad de Odontología 2026";

// Función para obtener el logo como buffer
function obtenerLogoBuffer() {
  const logoPath = path.join(__dirname, '..', 'assets', 'logo_uss.png');
  
  if (fs.existsSync(logoPath)) {
    return fs.readFileSync(logoPath);
  }
  
  console.warn("⚠️  Logo no encontrado en:", logoPath);
  console.warn("    La guía se generará sin logo. Verifica la ruta del archivo.");
  return null;
}

// Crear documento
const logoBuffer = obtenerLogoBuffer();
const children = [];

// Encabezado institucional
children.push(
  new Paragraph({
    border: { bottom: { style: BorderStyle.DOUBLE, size: 12, color: COLORES_USS.dorado_uss } },
    spacing: { after: 200 },
    children: [
      new TextRun({
        text: "Universidad San Sebastián - Sede Patagonia",
        font: "Calibri",
        size: 24,
        bold: true,
        color: COLORES_USS.navy_primario
      })
    ]
  })
);

children.push(
  new Paragraph({
    children: [new TextRun({
      text: "Ilumina el futuro",
      font: "Calibri",
      size: 20,
      italic: true,
      color: COLORES_USS.dorado_uss
    })],
    alignment: AlignmentType.CENTER,
    spacing: { after: 300 }
  })
);

// Logo si está disponible
if (logoBuffer) {
  children.push(
    new Paragraph({
      children: [
        new ImageRun({
          data: logoBuffer,
          transformation: { width: 200, height: 50 },
          type: "png"
        })
      ],
      alignment: AlignmentType.CENTER,
      spacing: { after: 300 }
    })
  );
}

// PORTADA
children.push(
  new Paragraph({ children: [new TextRun("")], spacing: { before: 1000 } }),
  
  new Paragraph({
    children: [new TextRun({
      text: "GUÍA DE ESTILOS",
      font: "Calibri",
      size: 48,
      bold: true,
      color: COLORES_USS.navy_primario
    })],
    alignment: AlignmentType.CENTER,
    spacing: { after: 100 }
  }),
  
  new Paragraph({
    children: [new TextRun({
      text: "Colores y Tipografía",
      font: "Calibri",
      size: 32,
      color: COLORES_USS.dorado_uss
    })],
    alignment: AlignmentType.CENTER,
    spacing: { after: 600 }
  }),
  
  new Paragraph({
    children: [new TextRun({
      text: asignatura,
      font: "Calibri",
      size: 26,
      bold: true,
      color: COLORES_USS.navy_primario
    })],
    alignment: AlignmentType.CENTER,
    spacing: { after: 100 }
  }),
  
  new Paragraph({
    children: [new TextRun({
      text: contexto,
      font: "Calibri",
      size: 22,
      color: COLORES_USS.texto_base
    })],
    alignment: AlignmentType.CENTER,
    spacing: { after: 200 }
  })
);

// SECCIÓN TIPOGRAFÍA
children.push(
  new PageBreak(),
  
  new Paragraph({
    heading: HeadingLevel.HEADING_1,
    children: [new TextRun("1. TIPOGRAFÍA")]
  }),
  
  new Paragraph({
    children: [new TextRun({
      text: "Se utilizan familias tipográficas para mantener claridad y jerarquía visual consistente con estándares institucionales USS.",
      color: COLORES_USS.texto_base
    })],
    spacing: { after: 300 }
  })
);

// Tabla de tipografía
const tipoTable = new Table({
  width: { size: 9026, type: WidthType.DXA },
  columnWidths: [2256, 2256, 2256, 2258],
  rows: [
    new TableRow({
      children: [
        new TableCell({
          borders: { top: { style: BorderStyle.SINGLE, size: 6, color: COLORES_USS.navy_primario },
                    bottom: { style: BorderStyle.SINGLE, size: 6, color: COLORES_USS.navy_primario },
                    left: { style: BorderStyle.SINGLE, size: 1, color: COLORES_USS.borde_calido },
                    right: { style: BorderStyle.SINGLE, size: 1, color: COLORES_USS.borde_calido } },
          shading: { fill: COLORES_USS.tinta_navy_claro, type: ShadingType.CLEAR },
          margins: { top: 80, bottom: 80, left: 120, right: 120 },
          children: [new Paragraph({ children: [new TextRun({ text: "Elemento", bold: true, color: COLORES_USS.navy_primario })] })]
        }),
        new TableCell({
          borders: { top: { style: BorderStyle.SINGLE, size: 6, color: COLORES_USS.navy_primario },
                    bottom: { style: BorderStyle.SINGLE, size: 6, color: COLORES_USS.navy_primario },
                    left: { style: BorderStyle.SINGLE, size: 1, color: COLORES_USS.borde_calido },
                    right: { style: BorderStyle.SINGLE, size: 1, color: COLORES_USS.borde_calido } },
          shading: { fill: COLORES_USS.tinta_navy_claro, type: ShadingType.CLEAR },
          margins: { top: 80, bottom: 80, left: 120, right: 120 },
          children: [new Paragraph({ children: [new TextRun({ text: "Familia", bold: true, color: COLORES_USS.navy_primario })] })]
        }),
        new TableCell({
          borders: { top: { style: BorderStyle.SINGLE, size: 6, color: COLORES_USS.navy_primario },
                    bottom: { style: BorderStyle.SINGLE, size: 6, color: COLORES_USS.navy_primario },
                    left: { style: BorderStyle.SINGLE, size: 1, color: COLORES_USS.borde_calido },
                    right: { style: BorderStyle.SINGLE, size: 1, color: COLORES_USS.borde_calido } },
          shading: { fill: COLORES_USS.tinta_navy_claro, type: ShadingType.CLEAR },
          margins: { top: 80, bottom: 80, left: 120, right: 120 },
          children: [new Paragraph({ children: [new TextRun({ text: "Tamaño", bold: true, color: COLORES_USS.navy_primario })] })]
        }),
        new TableCell({
          borders: { top: { style: BorderStyle.SINGLE, size: 6, color: COLORES_USS.navy_primario },
                    bottom: { style: BorderStyle.SINGLE, size: 6, color: COLORES_USS.navy_primario },
                    left: { style: BorderStyle.SINGLE, size: 1, color: COLORES_USS.borde_calido },
                    right: { style: BorderStyle.SINGLE, size: 1, color: COLORES_USS.borde_calido } },
          shading: { fill: COLORES_USS.tinta_navy_claro, type: ShadingType.CLEAR },
          margins: { top: 80, bottom: 80, left: 120, right: 120 },
          children: [new Paragraph({ children: [new TextRun({ text: "Uso", bold: true, color: COLORES_USS.navy_primario })] })]
        })
      ]
    }),
    new TableRow({
      children: [
        new TableCell({
          borders: { top: { style: BorderStyle.SINGLE, size: 1, color: COLORES_USS.borde_calido },
                    bottom: { style: BorderStyle.SINGLE, size: 1, color: COLORES_USS.borde_calido },
                    left: { style: BorderStyle.SINGLE, size: 1, color: COLORES_USS.borde_calido },
                    right: { style: BorderStyle.SINGLE, size: 1, color: COLORES_USS.borde_calido } },
          margins: { top: 80, bottom: 80, left: 120, right: 120 },
          children: [new Paragraph({ children: [new TextRun("Título Principal")] })]
        }),
        new TableCell({
          borders: { top: { style: BorderStyle.SINGLE, size: 1, color: COLORES_USS.borde_calido },
                    bottom: { style: BorderStyle.SINGLE, size: 1, color: COLORES_USS.borde_calido },
                    left: { style: BorderStyle.SINGLE, size: 1, color: COLORES_USS.borde_calido },
                    right: { style: BorderStyle.SINGLE, size: 1, color: COLORES_USS.borde_calido } },
          margins: { top: 80, bottom: 80, left: 120, right: 120 },
          children: [new Paragraph({ children: [new TextRun("Calibri")] })]
        }),
        new TableCell({
          borders: { top: { style: BorderStyle.SINGLE, size: 1, color: COLORES_USS.borde_calido },
                    bottom: { style: BorderStyle.SINGLE, size: 1, color: COLORES_USS.borde_calido },
                    left: { style: BorderStyle.SINGLE, size: 1, color: COLORES_USS.borde_calido },
                    right: { style: BorderStyle.SINGLE, size: 1, color: COLORES_USS.borde_calido } },
          margins: { top: 80, bottom: 80, left: 120, right: 120 },
          children: [new Paragraph({ children: [new TextRun("16 pt")] })]
        }),
        new TableCell({
          borders: { top: { style: BorderStyle.SINGLE, size: 1, color: COLORES_USS.borde_calido },
                    bottom: { style: BorderStyle.SINGLE, size: 1, color: COLORES_USS.borde_calido },
                    left: { style: BorderStyle.SINGLE, size: 1, color: COLORES_USS.borde_calido },
                    right: { style: BorderStyle.SINGLE, size: 1, color: COLORES_USS.borde_calido } },
          margins: { top: 80, bottom: 80, left: 120, right: 120 },
          children: [new Paragraph({ children: [new TextRun("Títulos de capítulos")] })]
        })
      ]
    }),
    new TableRow({
      children: [
        new TableCell({
          borders: { top: { style: BorderStyle.SINGLE, size: 1, color: COLORES_USS.borde_calido },
                    bottom: { style: BorderStyle.SINGLE, size: 1, color: COLORES_USS.borde_calido },
                    left: { style: BorderStyle.SINGLE, size: 1, color: COLORES_USS.borde_calido },
                    right: { style: BorderStyle.SINGLE, size: 1, color: COLORES_USS.borde_calido } },
          margins: { top: 80, bottom: 80, left: 120, right: 120 },
          children: [new Paragraph({ children: [new TextRun("Subtítulo")] })]
        }),
        new TableCell({
          borders: { top: { style: BorderStyle.SINGLE, size: 1, color: COLORES_USS.borde_calido },
                    bottom: { style: BorderStyle.SINGLE, size: 1, color: COLORES_USS.borde_calido },
                    left: { style: BorderStyle.SINGLE, size: 1, color: COLORES_USS.borde_calido },
                    right: { style: BorderStyle.SINGLE, size: 1, color: COLORES_USS.borde_calido } },
          margins: { top: 80, bottom: 80, left: 120, right: 120 },
          children: [new Paragraph({ children: [new TextRun("Calibri")] })]
        }),
        new TableCell({
          borders: { top: { style: BorderStyle.SINGLE, size: 1, color: COLORES_USS.borde_calido },
                    bottom: { style: BorderStyle.SINGLE, size: 1, color: COLORES_USS.borde_calido },
                    left: { style: BorderStyle.SINGLE, size: 1, color: COLORES_USS.borde_calido },
                    right: { style: BorderStyle.SINGLE, size: 1, color: COLORES_USS.borde_calido } },
          margins: { top: 80, bottom: 80, left: 120, right: 120 },
          children: [new Paragraph({ children: [new TextRun("14 pt")] })]
        }),
        new TableCell({
          borders: { top: { style: BorderStyle.SINGLE, size: 1, color: COLORES_USS.borde_calido },
                    bottom: { style: BorderStyle.SINGLE, size: 1, color: COLORES_USS.borde_calido },
                    left: { style: BorderStyle.SINGLE, size: 1, color: COLORES_USS.borde_calido },
                    right: { style: BorderStyle.SINGLE, size: 1, color: COLORES_USS.borde_calido } },
          margins: { top: 80, bottom: 80, left: 120, right: 120 },
          children: [new Paragraph({ children: [new TextRun("Títulos de subsecciones")] })]
        })
      ]
    }),
    new TableRow({
      children: [
        new TableCell({
          borders: { top: { style: BorderStyle.SINGLE, size: 1, color: COLORES_USS.borde_calido },
                    bottom: { style: BorderStyle.SINGLE, size: 1, color: COLORES_USS.borde_calido },
                    left: { style: BorderStyle.SINGLE, size: 1, color: COLORES_USS.borde_calido },
                    right: { style: BorderStyle.SINGLE, size: 1, color: COLORES_USS.borde_calido } },
          margins: { top: 80, bottom: 80, left: 120, right: 120 },
          children: [new Paragraph({ children: [new TextRun("Texto Normal")] })]
        }),
        new TableCell({
          borders: { top: { style: BorderStyle.SINGLE, size: 1, color: COLORES_USS.borde_calido },
                    bottom: { style: BorderStyle.SINGLE, size: 1, color: COLORES_USS.borde_calido },
                    left: { style: BorderStyle.SINGLE, size: 1, color: COLORES_USS.borde_calido },
                    right: { style: BorderStyle.SINGLE, size: 1, color: COLORES_USS.borde_calido } },
          margins: { top: 80, bottom: 80, left: 120, right: 120 },
          children: [new Paragraph({ children: [new TextRun("Calibri")] })]
        }),
        new TableCell({
          borders: { top: { style: BorderStyle.SINGLE, size: 1, color: COLORES_USS.borde_calido },
                    bottom: { style: BorderStyle.SINGLE, size: 1, color: COLORES_USS.borde_calido },
                    left: { style: BorderStyle.SINGLE, size: 1, color: COLORES_USS.borde_calido },
                    right: { style: BorderStyle.SINGLE, size: 1, color: COLORES_USS.borde_calido } },
          margins: { top: 80, bottom: 80, left: 120, right: 120 },
          children: [new Paragraph({ children: [new TextRun("11 pt")] })]
        }),
        new TableCell({
          borders: { top: { style: BorderStyle.SINGLE, size: 1, color: COLORES_USS.borde_calido },
                    bottom: { style: BorderStyle.SINGLE, size: 1, color: COLORES_USS.borde_calido },
                    left: { style: BorderStyle.SINGLE, size: 1, color: COLORES_USS.borde_calido },
                    right: { style: BorderStyle.SINGLE, size: 1, color: COLORES_USS.borde_calido } },
          margins: { top: 80, bottom: 80, left: 120, right: 120 },
          children: [new Paragraph({ children: [new TextRun("Cuerpo de texto, párrafos")] })]
        })
      ]
    })
  ]
});

children.push(tipoTable);
children.push(new Paragraph({ children: [new TextRun("")], spacing: { after: 300 } }));

// SECCIÓN COLORES
children.push(
  new PageBreak(),
  new Paragraph({
    heading: HeadingLevel.HEADING_1,
    children: [new TextRun("2. PALETA DE COLORES INSTITUCIONAL")]
  }),
  
  new Paragraph({
    children: [new TextRun({
      text: "Los colores corresponden a la identidad visual de la Universidad San Sebastián.",
      color: COLORES_USS.texto_base
    })],
    spacing: { after: 300 }
  })
);

// Navy Primario
children.push(
  new Paragraph({
    heading: HeadingLevel.HEADING_2,
    children: [new TextRun("Navy Primario")]
  }),
  
  new Paragraph({
    children: [
      new TextRun({ text: "Código: ", bold: true }),
      new TextRun("#0b1f3a  |  RGB: 11, 31, 58")
    ],
    spacing: { after: 100 }
  }),
  
  new Paragraph({
    children: [new TextRun({
      text: "Uso: Títulos principales, acciones primarias, navegación",
      color: COLORES_USS.texto_base
    })],
    spacing: { after: 200 }
  })
);

// Muestra de color Navy
const navyTable = new Table({
  width: { size: 1500, type: WidthType.DXA },
  columnWidths: [1500],
  rows: [
    new TableRow({
      children: [
        new TableCell({
          borders: { top: { style: BorderStyle.SINGLE, size: 12, color: COLORES_USS.navy_primario },
                    bottom: { style: BorderStyle.SINGLE, size: 12, color: COLORES_USS.navy_primario },
                    left: { style: BorderStyle.SINGLE, size: 12, color: COLORES_USS.navy_primario },
                    right: { style: BorderStyle.SINGLE, size: 12, color: COLORES_USS.navy_primario } },
          shading: { fill: COLORES_USS.navy_primario, type: ShadingType.CLEAR },
          margins: { top: 200, bottom: 200, left: 120, right: 120 },
          children: [new Paragraph({ children: [new TextRun("")] })]
        })
      ]
    })
  ]
});

children.push(navyTable);
children.push(new Paragraph({ children: [new TextRun("")], spacing: { after: 300 } }));

// Dorado USS
children.push(
  new Paragraph({
    heading: HeadingLevel.HEADING_2,
    children: [new TextRun("Dorado USS")]
  }),
  
  new Paragraph({
    children: [
      new TextRun({ text: "Código: ", bold: true }),
      new TextRun("#B8911D  |  RGB: 184, 145, 29")
    ],
    spacing: { after: 100 }
  }),
  
  new Paragraph({
    children: [new TextRun({
      text: "Uso: Detalles institucionales, separadores, acentos en títulos",
      color: COLORES_USS.texto_base
    })],
    spacing: { after: 200 }
  })
);

// Muestra de color Dorado
const doradoTable = new Table({
  width: { size: 1500, type: WidthType.DXA },
  columnWidths: [1500],
  rows: [
    new TableRow({
      children: [
        new TableCell({
          borders: { top: { style: BorderStyle.SINGLE, size: 12, color: COLORES_USS.dorado_uss },
                    bottom: { style: BorderStyle.SINGLE, size: 12, color: COLORES_USS.dorado_uss },
                    left: { style: BorderStyle.SINGLE, size: 12, color: COLORES_USS.dorado_uss },
                    right: { style: BorderStyle.SINGLE, size: 12, color: COLORES_USS.dorado_uss } },
          shading: { fill: COLORES_USS.dorado_uss, type: ShadingType.CLEAR },
          margins: { top: 200, bottom: 200, left: 120, right: 120 },
          children: [new Paragraph({ children: [new TextRun("")] })]
        })
      ]
    })
  ]
});

children.push(doradoTable);
children.push(new Paragraph({ children: [new TextRun("")], spacing: { after: 300 } }));

// COLORES DE ESTADO
children.push(
  new PageBreak(),
  new Paragraph({
    heading: HeadingLevel.HEADING_1,
    children: [new TextRun("3. COLORES DE ESTADO")]
  })
);

// Verde Logrado
children.push(
  new Paragraph({
    heading: HeadingLevel.HEADING_2,
    children: [new TextRun("Logrado / Confirmado")]
  }),
  
  new Paragraph({
    children: [
      new TextRun({ text: "Código: ", bold: true }),
      new TextRun("#16a34a  |  RGB: 22, 163, 74")
    ],
    spacing: { after: 100 }
  })
);

const verdeTable = new Table({
  width: { size: 1500, type: WidthType.DXA },
  columnWidths: [1500],
  rows: [
    new TableRow({
      children: [
        new TableCell({
          borders: { top: { style: BorderStyle.SINGLE, size: 12, color: COLORES_USS.logrado },
                    bottom: { style: BorderStyle.SINGLE, size: 12, color: COLORES_USS.logrado },
                    left: { style: BorderStyle.SINGLE, size: 12, color: COLORES_USS.logrado },
                    right: { style: BorderStyle.SINGLE, size: 12, color: COLORES_USS.logrado } },
          shading: { fill: COLORES_USS.logrado, type: ShadingType.CLEAR },
          margins: { top: 200, bottom: 200, left: 120, right: 120 },
          children: [new Paragraph({ children: [new TextRun("")] })]
        })
      ]
    })
  ]
});

children.push(verdeTable);
children.push(new Paragraph({ children: [new TextRun("")], spacing: { after: 300 } }));

// Naranja En Desarrollo
children.push(
  new Paragraph({
    heading: HeadingLevel.HEADING_2,
    children: [new TextRun("En Desarrollo")]
  }),
  
  new Paragraph({
    children: [
      new TextRun({ text: "Código: ", bold: true }),
      new TextRun("#d97706  |  RGB: 217, 119, 6")
    ],
    spacing: { after: 100 }
  })
);

const naranjaTable = new Table({
  width: { size: 1500, type: WidthType.DXA },
  columnWidths: [1500],
  rows: [
    new TableRow({
      children: [
        new TableCell({
          borders: { top: { style: BorderStyle.SINGLE, size: 12, color: COLORES_USS.en_desarrollo },
                    bottom: { style: BorderStyle.SINGLE, size: 12, color: COLORES_USS.en_desarrollo },
                    left: { style: BorderStyle.SINGLE, size: 12, color: COLORES_USS.en_desarrollo },
                    right: { style: BorderStyle.SINGLE, size: 12, color: COLORES_USS.en_desarrollo } },
          shading: { fill: COLORES_USS.en_desarrollo, type: ShadingType.CLEAR },
          margins: { top: 200, bottom: 200, left: 120, right: 120 },
          children: [new Paragraph({ children: [new TextRun("")] })]
        })
      ]
    })
  ]
});

children.push(naranjaTable);
children.push(new Paragraph({ children: [new TextRun("")], spacing: { after: 300 } }));

// Rojo Crítico
children.push(
  new Paragraph({
    heading: HeadingLevel.HEADING_2,
    children: [new TextRun("Crítico / Alerta")]
  }),
  
  new Paragraph({
    children: [
      new TextRun({ text: "Código: ", bold: true }),
      new TextRun("#dc2626  |  RGB: 220, 38, 38")
    ],
    spacing: { after: 100 }
  })
);

const rojoTable = new Table({
  width: { size: 1500, type: WidthType.DXA },
  columnWidths: [1500],
  rows: [
    new TableRow({
      children: [
        new TableCell({
          borders: { top: { style: BorderStyle.SINGLE, size: 12, color: COLORES_USS.no_logrado },
                    bottom: { style: BorderStyle.SINGLE, size: 12, color: COLORES_USS.no_logrado },
                    left: { style: BorderStyle.SINGLE, size: 12, color: COLORES_USS.no_logrado },
                    right: { style: BorderStyle.SINGLE, size: 12, color: COLORES_USS.no_logrado } },
          shading: { fill: COLORES_USS.no_logrado, type: ShadingType.CLEAR },
          margins: { top: 200, bottom: 200, left: 120, right: 120 },
          children: [new Paragraph({ children: [new TextRun("")] })]
        })
      ]
    })
  ]
});

children.push(rojoTable);
children.push(new Paragraph({ children: [new TextRun("")], spacing: { after: 300 } }));

// RECOMENDACIONES FINALES
children.push(
  new PageBreak(),
  new Paragraph({
    heading: HeadingLevel.HEADING_1,
    children: [new TextRun("4. RECOMENDACIONES FINALES")]
  }),
  
  new Paragraph({
    children: [new TextRun({
      text: "✓ Mantener colores Navy y Dorado USS en todos los documentos\n✓ Usar colores de estado consistentemente\n✓ Mantener márgenes mínimos de 1 cm\n✓ Espaciado de 1.5 líneas en textos largos",
      color: COLORES_USS.texto_base
    })],
    spacing: { after: 400 }
  }),
  
  new Paragraph({
    border: { top: { style: BorderStyle.SINGLE, size: 6, color: COLORES_USS.dorado_uss } },
    spacing: { before: 200 },
    children: [new TextRun({
      text: "Universidad San Sebastián - Sede Patagonia",
      italic: true,
      size: 20,
      color: COLORES_USS.navy_primario
    })]
  })
);

// Crear documento
const doc = new Document({
  styles: {
    default: {
      document: { run: { font: "Calibri", size: 22 } }
    },
    paragraphStyles: [
      {
        id: "Heading1",
        name: "Heading 1",
        basedOn: "Normal",
        next: "Normal",
        quickFormat: true,
        run: { size: 32, bold: true, font: "Calibri", color: COLORES_USS.navy_primario },
        paragraph: { spacing: { before: 240, after: 120 }, outlineLevel: 0 }
      },
      {
        id: "Heading2",
        name: "Heading 2",
        basedOn: "Normal",
        next: "Normal",
        quickFormat: true,
        run: { size: 28, bold: true, font: "Calibri", color: COLORES_USS.dorado_uss },
        paragraph: { spacing: { before: 180, after: 100 }, outlineLevel: 1 }
      }
    ]
  },
  sections: [{
    properties: {
      page: {
        size: { width: 11906, height: 16838 },
        margin: { top: 1440, right: 1440, bottom: 1440, left: 1440 }
      }
    },
    children: children
  }]
});

// Guardar documento
const outputPath = `/mnt/user-data/outputs/Guia_USS_${asignatura.replace(/\s+/g, '_')}_${new Date().getTime()}.docx`;

Packer.toBuffer(doc).then(buffer => {
  fs.writeFileSync(outputPath, buffer);
  console.log(`✓ Guía generada: ${outputPath}`);
  console.log(`  Asignatura: ${asignatura}`);
  console.log(`  Contexto: ${contexto}`);
}).catch(err => {
  console.error("❌ Error al generar documento:", err);
  process.exit(1);
});
