export const DELETE_FIELDS = [
  'レコード番号',
  'カテゴリー',
  'ステータス',
  '作成日時',
  '作成者',
  '作業者',
  '更新日時',
  '更新者'
]

export const DELETE_TYPES = [
  'RECORD_ID',
  '__REVISION__',
  'CREATOR',
  'MODIFIER',
  '__ID__',
  'CREATED_TIME',
  'UPDATED_TIME'
]
export const DELETE_KEYS = [
  'RECORD_NUMBER',
  'CATEGORY',
  'CREATED_TIME',
  'CREATOR',
  'UPDATED_TIME',
  'STATUS',
  'STATUS_ASSIGNEE',
  'REFERENCE_TABLE',
  'MODIFIER'
]

export const DISABLED_FIELDS: string[] = [
  'リスト番号',
  '法人番号',
  '漢字商号',
  '商号カナ',
  '代表者氏名',
  '代表者カナ',
  'URL',
  '電話番号',
  '郵便番号',
  '所在地',
  '事前備考',
  'DM発送月',
  '大分類業種',
  '中分類業種',
  '小分類業種',
  '細分類業種',
  '前々期決算期',
  '前々期売上高',
  '前々期売上高億万',
  '前期決算期',
  '前期売上高',
  '前期売上高億万',
  'コール数',
  'インバウンドコール数'
]

export const HIDDEN_FIELDS: string[] = [
  '番号重複レコード一覧1',
  '番号重複レコード一覧2',
  '番号重複レコード一覧3',
  'コール履歴',
  'インバウンド履歴',
  '大分類業種コード',
  '中分類業種コード',
  '小分類業種コード',
  '細分類業種コード',
  '従業員数',
  'inout',
  '案件名',
  '編集ステータス',
  '番号重複チェック',
  'エスカレーション有無',
  '日付',
  '時刻',
  'MG担当者',
  '終話タイミング',
  '終話詳細',
  '完了ステータス',
  '完了詳細',
  'NG詳細',
  'NGその他',
  '不通詳細',
  '完了日',
  '完了時担当者',
  'コール数',
  'インバウンドコール数',
  '数値表現売上高'
]

export const DEFAULT_ITEM = { label: '-----', value: '-----' }
