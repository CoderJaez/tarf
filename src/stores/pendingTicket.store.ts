import { create } from "zustand";
import { PendingRequest } from "@/types";

interface PendingRequestState {
    pendingRequest: PendingRequest[],
    setPendingRequest: () => void,
    addPendingRequest: (data: PendingRequest) => void,
    deletePendingRequest: (id: number) => void,
}


const usePendingRequestStore = create<PendingRequestState>()((set) => ({
    pendingRequest: [],
    setPendingRequest: async () => {
        let data = await fetch('/api/tickets/pending')
        let tickets = await data.json();
        set(() => ({ pendingRequest: tickets as PendingRequest[] }))
    },
    addPendingRequest: (data: PendingRequest) => set((state) => ({ pendingRequest: [data, ...state.pendingRequest] })),
    deletePendingRequest: (id: number) => set((state) => ({ pendingRequest: state.pendingRequest.filter((request) => request.id) }))
}))

export default usePendingRequestStore