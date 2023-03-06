export interface ITicket{
    id: number;
    openUserId: number;
    title: string;
    description: string;
    resolution: string;
    closingUserId: number;
    isClosed: boolean;
}