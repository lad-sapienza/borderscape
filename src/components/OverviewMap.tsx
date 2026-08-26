import { Map } from '@lad-sapienza/scms-core/components/Map';
import type { OverlayLayerConfig } from '@lad-sapienza/scms-core/components/Map';
import {
  PHASE_LABELS,
  SITE_POPUP_TEMPLATE,
  FLOOD_POPUP_TEMPLATE,
  FLOOD_FILL_STYLE,
  macrotypeColorMatchExpression,
  siteCircleStyle,
  dataUrl,
} from './mapConfig';

const sitesSource = { type: 'geojson' as const, url: dataUrl('borderscape-sites.geojson') };
const floodSource = { type: 'geojson' as const, url: dataUrl('flooding-nile.geojson') };

// NOTE: swift.cloud.garr.it (the Corona tile bucket) sends no CORS headers,
// so MapLibre's fetch-based tile loading will very likely fail to load these
// tiles regardless of how the layer is configured — this is an external
// service limitation, not something fixable here. Wired correctly anyway.
const coronaOverlay: OverlayLayerConfig = {
  name: 'Corona (1960s satellite imagery)',
  source: {
    type: 'xyz',
    url: 'https://swift.cloud.garr.it/swift/v1/corona_sudan/{z}/{x}/{y}.png',
  },
  visible: true,
};

const floodOverlays: OverlayLayerConfig[] = [
  {
    name: 'Flooding Nile: 86',
    source: floodSource,
    style: FLOOD_FILL_STYLE,
    popupTemplate: FLOOD_POPUP_TEMPLATE,
    visible: false,
    filter: (f: any) => f.properties.level === 86,
  },
  {
    name: 'Flooding Nile: 94.5',
    source: floodSource,
    style: FLOOD_FILL_STYLE,
    popupTemplate: FLOOD_POPUP_TEMPLATE,
    visible: false,
    filter: (f: any) => f.properties.level === 94.5,
  },
];

const phaseColor = macrotypeColorMatchExpression();

const phaseOverlays: OverlayLayerConfig[] = Array.from({ length: 6 }, (_, i) => {
  const phase = i + 1;
  return {
    name: PHASE_LABELS[phase],
    source: sitesSource,
    style: siteCircleStyle(phaseColor),
    popupTemplate: SITE_POPUP_TEMPLATE,
    visible: true,
    fitToContent: true,
    filter: (f: any) => f.properties[`Phase ${phase}`] === '1',
  };
});

const overlayLayers: OverlayLayerConfig[] = [coronaOverlay, ...floodOverlays, ...phaseOverlays];

export default function OverviewMap() {
  return (
    <Map
      height="600px"
      baseLayers={['EsriSatellite', 'EsriTopo', 'OSM']}
      layerControl="top-right"
      navigationControl="top-left"
      overlayLayers={overlayLayers}
    />
  );
}
