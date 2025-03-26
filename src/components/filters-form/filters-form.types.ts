export type TFilterType = 'TEXT' | 'NUMBER' | 'STATUS_SELECT';

export type TFilter = {
  key: string;
  label: string;
  type: TFilterType;
};

export type TFilters = TFilter[];
