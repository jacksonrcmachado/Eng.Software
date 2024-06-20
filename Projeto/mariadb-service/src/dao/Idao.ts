// src/dao/IDao.ts
export interface IDao {
    connect(): Promise<void>;
    disconnect(): Promise<void>;
    save(data: any): Promise<void>;
}
