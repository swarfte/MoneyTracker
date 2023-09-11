import { defineStore } from 'pinia';
import { EnumRecordMode, EnumRecordType } from '@/assets/enums/record';
import { IRecordForm } from '@/assets/interfaces/record';

interface IDefaultState {
  storage: IRecordForm[];
  isShowRecord: boolean;
  contextID: string;
  contextMode: EnumRecordMode | null;
}

export const useRecordStore = defineStore({
  id: 'recordStore',
  state: (): IDefaultState => {
    return {
      storage: [
        {
          'id': 'ebf961e0-3269-4f13-bbe0-a7d00bf11279',
          'category': 'breakfast',
          'price': 333,
          'store': 'rrr',
          'time': 1694438705666,
          'note': '',
          'tags': ['333', '888', 'fff'],
        },
      ],
      isShowRecord: false,
      contextID: '',
      contextMode: null,
    };
  },
  actions: {
    ADD_RECORD(payload: IRecordForm): void {
      const index: number = this.storage.findIndex(
        ({ id }) => id === payload.id
      );
      if (index >= 0) {
        this.storage.splice(index, 1);
      }
      this.storage.push(payload);
    },
    DELETE_RECORD(id: string): void {
      const index: number = this.storage.findIndex((item) => item.id === id);
      if (index >= 0) {
        this.storage.splice(index, 1);
      }
    },
    HANDLE_CLOSE(): void {
      this.contextID = '';
      this.contextMode = null;
      this.isShowRecord = false;
    },
    HANDLE_MODE_CREATOR(): void {
      this.contextID = '';
      this.contextMode = EnumRecordMode.CREATOR;
      this.isShowRecord = true;
    },
    HANDLE_MODE_EDITOR(id: string): void {
      this.contextID = id;
      this.contextMode = EnumRecordMode.EDITOR;
      this.isShowRecord = true;
    },
  },
  getters: {
    incomeRecords: (state: IDefaultState): IRecordForm[] => {
      return state.storage.filter(
        ({ category }) => useValidCategory(category) === EnumRecordType.INCOME
      );
    },
    expenseRecords: (state: IDefaultState): IRecordForm[] => {
      return state.storage.filter(
        ({ category }) => useValidCategory(category) === EnumRecordType.EXPENSE
      );
    },
    contextRecordType: (state: IDefaultState): EnumRecordType | null => {
      const currentRecord = state.storage.find(
        ({ id }) => state.contextID === id
      );

      if (currentRecord) {
        return useValidCategory(currentRecord.category);
      }
      return null;
    },
  },
});
