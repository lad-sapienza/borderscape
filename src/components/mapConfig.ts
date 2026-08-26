export const MACROTYPE_COLORS: Record<string, string> = {
  Campsite: '#00a5e3',
  Cemetery: '#8dd7bf',
  Inscription: '#ff90c5',
  'Isolated Building/Feature': '#ff5768',
  'Isolated/Scatter of Finds': '#ffbf65',
  'Rock Art': '#c05780',
  Settlement: '#cff800',
};

export const MACROTYPES = Object.keys(MACROTYPE_COLORS);

export const PHASE_LABELS: Record<number, string> = {
  1: 'Phase 1 (3800-3500 BCE)',
  2: 'Phase 2 (3500-3300 BCE)',
  3: 'Phase 3 (3300-3100 BCE)',
  4: 'Phase 4 (3100-2650 BCE)',
  5: 'Phase 5 (2650-2500 BCE)',
  6: 'Phase 6 (2500-2300 BCE)',
};

export const SITE_POPUP_TEMPLATE =
  "<p><strong>${CODEX}. ${Name} (${Locality})</strong><br/>— ${Macrotype} &gt; ${Site Type}<hr/>${Biblio}</p>";

export const SITE_POPUP_TEMPLATE_NO_MACROTYPE =
  "<p><strong>${CODEX}. ${Name} (${Locality})</strong><br/>— ${Site Type}<hr/>${Biblio}</p>";

export const FLOOD_POPUP_TEMPLATE =
  "<p><strong>${name}</strong><br/>Level: ${level}</p>";

export function macrotypeColorMatchExpression(defaultColor = '#ebebeb') {
  const expr: any[] = ['match', ['get', 'Macrotype']];
  for (const [type, color] of Object.entries(MACROTYPE_COLORS)) {
    expr.push(type, color);
  }
  expr.push(defaultColor);
  return expr;
}

export function siteCircleStyle(color: any) {
  return {
    type: 'circle',
    paint: {
      'circle-radius': 4,
      'circle-color': color,
      'circle-opacity': 0.8,
      'circle-stroke-color': '#000000',
      'circle-stroke-width': 1,
      'circle-stroke-opacity': 1,
    },
  };
}

export const FLOOD_FILL_STYLE = {
  type: 'fill',
  paint: {
    'fill-color': '#3388ff',
    'fill-opacity': 0.2,
    'fill-outline-color': '#3388ff',
  },
};

export { dataUrl } from '../utils/paths';
