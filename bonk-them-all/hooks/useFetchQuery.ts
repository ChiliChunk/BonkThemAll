import { useQuery } from "@tanstack/react-query";
import { Platform } from "react-native";

const endpoint = Platform.OS === 'android' ? "http://10.0.2.2:3000/" : "http://localhost:3000/"
type API = {
    'monsters': {
        id: number;
        name: string;
        image: string;
    },
    'monster/[id]': {
        name: string;
        image: string;
        general_element_weaknesses:[{element: string, magnitude: number}];
        general_element_resistance:[{element: string, magnitude: number}];
        general_element_alteration:[{element: string, magnitude: number}];
        breakable_parts:[string];
    }
}


export function useFetchQuery<T extends keyof API>(path: T, params?: Record<string, string | number>) {
    const localUrl =
     endpoint +
     Object.entries(params ?? {}).reduce(
        (acc, [key, value]) => acc.replaceAll(`[${key}]`, value),
         path,
        );
    console.log('localUrl', localUrl)
    return useQuery({
        queryKey: [localUrl],
        queryFn: async () => {
            const response = await fetch(localUrl);
            return response.json() as Promise<API[T]>;
        }
    });
}

function wait (duration: number) {
    return new Promise(resolve => setTimeout(resolve, duration))
}