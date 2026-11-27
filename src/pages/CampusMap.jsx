import React from 'react';
import { Map as MapIcon } from 'lucide-react';

// 캠퍼스 지도 페이지 (자리만 잡아둔 상태)
// TODO: 학교 지도를 넣고 건물별 분실/보관 중인 물건 위치를 표시할 예정
export const CampusMap = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-6">
      <div>
        <h1 className="text-3xl font-extrabold text-slate-900 dark:text-white tracking-tight flex items-center gap-2">
          <MapIcon className="w-7 h-7 text-brand-500" />
          Campus Map
        </h1>
        <p className="text-xs text-slate-500 mt-1">
          See where items were lost and where found items are being kept across campus.
        </p>
      </div>

      {/* 지도 영역 (준비 중) */}
      <div className="h-[480px] rounded-3xl border-2 border-dashed border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-900 flex flex-col items-center justify-center text-center gap-2">
        <MapIcon className="w-10 h-10 text-slate-400" />
        <p className="text-sm font-bold text-slate-600 dark:text-slate-300">Campus map coming soon</p>
      </div>
    </div>
  );
};
