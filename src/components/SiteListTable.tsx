import { DataTb } from '@lad-sapienza/scms-core/components/DataTb';
import type { ColumnConfig } from '@lad-sapienza/scms-core/components/DataTb/types';
import { dataUrl } from '../utils/paths';

const columns: ColumnConfig[] = [
  {
    key: 'CODEX',
    header: 'Codex',
    width: '90px',
    // scms-core's CSV source parses numbers with PapaParse's dynamicTyping,
    // which strips the leading zeros from values like "001".
    render: (value) => String(value).padStart(3, '0'),
  },
  { key: 'Name', header: 'Name', width: '150px' },
  { key: 'Locality', header: 'Locality', width: '180px' },
  { key: 'Macrotype', header: 'Macrotype', width: '150px' },
  { key: 'Site Type', header: 'Site type', width: '170px' },
  { key: 'Phase 1', header: 'Phase 1' },
  { key: 'Phase 2', header: 'Phase 2' },
  { key: 'Phase 3', header: 'Phase 3' },
  { key: 'Phase 4', header: 'Phase 4' },
  { key: 'Phase 5', header: 'Phase 5' },
  { key: 'Phase 6', header: 'Phase 6' },
  { key: 'C14', header: 'C14', width: '150px' },
  { key: 'Accuracy', header: 'Accuracy' },
  { key: 'Biblio', header: 'Bibliography', width: '250px' },
  { key: 'Project', header: 'Project' },
  { key: 'xcoord', header: 'X coordinate' },
  { key: 'ycoord', header: 'Y coordinate' },
];

export default function SiteListTable() {
  return (
    <DataTb
      source={{ type: 'csv', url: dataUrl('borderscape-sites.csv') }}
      columns={columns}
      searchable
      pagination
    />
  );
}
