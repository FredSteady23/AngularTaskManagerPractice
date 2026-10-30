export type Priority = 'low' | 'medium' |'high';
export type Filter = 'all' | 'active' | 'done';

export interface Task {
    id: number,
    title: string,
    done: boolean,
    priority: Priority,
    description?: string,
};

