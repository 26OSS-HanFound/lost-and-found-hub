// 한동대학교 캠퍼스 건물 목록
// 등록 폼(분실/습득)과 탐색 필터가 같은 목록을 사용해 입력·검색 기준을 맞춥니다.
// 건물이 추가·변경되면 이 파일만 수정하면 됩니다.
export const CAMPUS_NAME = 'Handong Global University';

export const BUILDINGS = [
  { id: 'newton', label: '뉴턴홀 (Newton Hall)' },
  { id: 'nehemiah', label: '느헤미야홀 (Nehemiah Hall)' },
  { id: 'hyundong', label: '현동홀 (Hyundong Hall)' },
  { id: 'olnations', label: '올네이션스홀 (Olnations Hall)' },
  { id: 'oseok', label: '오석관 / 도서관 (Oseok Library)' },
  { id: 'hakgwan', label: '학관 (Student Union)' },
  { id: 'ebenezer', label: '에벤에셀관 (Ebenezer Hall)' },
  { id: 'cornerstone', label: '코너스톤홀 (Cornerstone Hall)' },
  { id: 'hyoam', label: '효암채플 (Hyoam Chapel)' },
  { id: 'dormitory', label: '생활관 / 기숙사 (Dormitory)' },
  { id: 'gym', label: '체육관 · 운동장 (Gym & Field)' },
  { id: 'outdoor', label: '야외 · 도로 · 주차장 (Outdoor)' },
  { id: 'other', label: '기타 (Other)' },
];

export const getBuildingById = (id) => {
  return BUILDINGS.find((b) => b.id === id) || BUILDINGS[BUILDINGS.length - 1];
};
