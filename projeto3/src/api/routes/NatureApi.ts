import { api } from "../axios/axios";

const resource = "/natures";

export interface NatureProps {
    name: string;
    id: number;
}

const getNatureList = async () => {
    const data = await api.get(`${resource}`);
    return data;
};

export const natureAPi = {
    getNatureList,
};
