import { api } from "../axios/axios";

const resource = "/email";

export interface MailProps {
    from: string;
    message: string;
    subject: string;
    to: string;
}

const sendMail = async (data: MailProps) => {
    const response = await api.post(`${resource}`, data);
    return response;
};

export const emailAPi = {
    sendMail,
};
