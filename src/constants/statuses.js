export const STATUSES = {
  LOST: { id: 'lost', label: 'Lost', badgeClass: 'badge-lost', color: '#ef4444', icon: 'AlertCircle' },
  SPOTTED: { id: 'spotted', label: 'Spotted', badgeClass: 'badge-spotted', color: '#f59e0b', icon: 'Eye' },
  FOUND: { id: 'found', label: 'Found', badgeClass: 'badge-found', color: '#10b981', icon: 'CheckCircle2' },
  MATCHED: { id: 'matched', label: 'Matched', badgeClass: 'badge-matched', color: '#8b5cf6', icon: 'Sparkles' },
  VERIFIED: { id: 'verified', label: 'Verified', badgeClass: 'badge-verified', color: '#3b82f6', icon: 'ShieldCheck' },
  HANDOVER: { id: 'handover', label: 'Handover', badgeClass: 'badge-handover', color: '#06b6d4', icon: 'Handshake' },
  RETURNED: { id: 'returned', label: 'Returned', badgeClass: 'badge-returned', color: '#059669', icon: 'CheckCheck' },
  REUNITED: { id: 'reunited', label: 'Reunited', badgeClass: 'badge-reunited', color: '#0d9488', icon: 'Heart' }
};

// 탐색 필터용 단순화된 상태 그룹
// 내부 상태(8단계)는 그대로 두고, 사용자에게는 2가지로만 보여줍니다.
export const STATUS_FILTER_GROUPS = [
  {
    id: 'active',
    label: 'Still Searching / In Custody',
    statuses: ['lost', 'spotted', 'found', 'matched', 'verified', 'handover'],
  },
  {
    id: 'resolved',
    label: 'Returned to Owner',
    statuses: ['returned', 'reunited'],
  },
];

export const matchesStatusGroup = (status, groupId) => {
  if (!groupId || groupId === 'all') return true;
  const group = STATUS_FILTER_GROUPS.find((g) => g.id === groupId);
  return group ? group.statuses.includes(status) : true;
};

export const TRAIL_STAGES = [
  { key: 'lost', label: 'Lost', desc: 'Item reported missing by owner' },
  { key: 'spotted', label: 'Spotted', desc: 'Sighting reported by community helper' },
  { key: 'found', label: 'Found', desc: 'Item recovered & reported found' },
  { key: 'matched', label: 'Matched', desc: 'Smart algorithm detected report match' },
  { key: 'verified', label: 'Verified', desc: 'Private detail verification confirmed' },
  { key: 'handover', label: 'Handover', desc: 'Safe meetup & handover arranged' },
  { key: 'returned', label: 'Returned', desc: 'Item safely returned to owner' }
];

export const PET_TRAIL_STAGES = [
  { key: 'lost', label: 'Lost', desc: 'Pet reported missing by owner' },
  { key: 'spotted', label: 'Spotted', desc: 'Pet spotted in area by neighbor' },
  { key: 'found', label: 'Sheltered', desc: 'Pet safely sheltered by finder' },
  { key: 'verified', label: 'Verified', desc: 'Owner identity & tags verified' },
  { key: 'reunited', label: 'Reunited', desc: 'Pet happily reunited with family' }
];
