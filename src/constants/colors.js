// 물건 색상 목록
// 등록 폼에서 선택한 label이 item.color에 저장되고, 탐색 필터도 같은 목록으로 검색합니다.
export const COLORS = [
  { id: 'black', label: 'Black' },
  { id: 'white', label: 'White' },
  { id: 'gray', label: 'Gray' },
  { id: 'silver', label: 'Silver' },
  { id: 'gold', label: 'Gold' },
  { id: 'red', label: 'Red' },
  { id: 'pink', label: 'Pink' },
  { id: 'orange', label: 'Orange' },
  { id: 'yellow', label: 'Yellow' },
  { id: 'green', label: 'Green' },
  { id: 'blue', label: 'Blue' },
  { id: 'navy', label: 'Navy' },
  { id: 'purple', label: 'Purple' },
  { id: 'brown', label: 'Brown' },
  { id: 'beige', label: 'Beige' },
  { id: 'transparent', label: 'Transparent' },
  { id: 'multi', label: 'Multicolor' },
];

// 리포트의 색상이 선택한 색상과 일치하는지 확인
// 기존 데이터의 자유 입력 값('Matte Black' 등)도 잡히도록 부분 일치로 비교합니다.
export const matchesColor = (reportColor, colorId) => {
  if (!colorId || colorId === 'all') return true;
  const target = COLORS.find((c) => c.id === colorId);
  if (!target || !reportColor) return false;
  return reportColor.toLowerCase().includes(target.label.toLowerCase());
};
