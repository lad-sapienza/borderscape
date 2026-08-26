import { Map } from '@lad-sapienza/scms-core/components/Map';
import type { OverlayLayerConfig } from '@lad-sapienza/scms-core/components/Map';
import {
  MACROTYPES,
  MACROTYPE_COLORS,
  SITE_POPUP_TEMPLATE_NO_MACROTYPE,
  siteCircleStyle,
  dataUrl,
} from './mapConfig';

const sitesSource = { type: 'geojson' as const, url: dataUrl('borderscape-sites.geojson') };

interface PhaseMapProps {
  phase: number;
  height?: string;
}

export default function PhaseMap({ phase, height = '400px' }: PhaseMapProps) {
  const overlayLayers: OverlayLayerConfig[] = MACROTYPES.map((macrotype) => ({
    name: macrotype,
    source: sitesSource,
    style: siteCircleStyle(MACROTYPE_COLORS[macrotype]),
    popupTemplate: SITE_POPUP_TEMPLATE_NO_MACROTYPE,
    visible: true,
    filter: (f: any) =>
      f.properties[`Phase ${phase}`] === '1' && f.properties.Macrotype === macrotype,
  }));

  return (
    <Map
      height={height}
      center="24.173,32.911,9"
      baseLayers={['EsriSatellite', 'EsriTopo', 'OSM']}
      layerControl="top-right"
      navigationControl="top-left"
      fullscreenControl="top-right"
      overlayLayers={overlayLayers}
    />
  );
}
