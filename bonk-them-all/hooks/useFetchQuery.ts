import { useQuery } from "@tanstack/react-query";
import { Platform } from "react-native";

const endpoint = Platform.OS === 'android' ? "http://10.0.2.2:3000" : "http://localhost:3000"

export function useFetchQuery(path : string){

    return useQuery({
        queryKey: [path],
        queryFn: async () => {
            const response = await fetch(endpoint + path)
            return response.json()
        }
    })
}

function wait (duration: number) {
    return new Promise(resolve => setTimeout(resolve, duration))
}