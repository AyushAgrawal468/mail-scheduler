export interface emailFormat {
    to: string,
    cc: string,
    bcc: string,
    subject: string,
    body: string,
    scheduledDate: string,
    scheduledTime: string,
    scheduledDateTime: number,
    mailConfigurationId: number,
    id?:number;
}