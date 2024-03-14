import { create } from 'zustand';

const useConversation = create((set) => ({
    seletedConversation: null,
    setSelectedConversation: (selectedConvesation) => set({selectedConversation}),
    messages:[],
    setMessages: (messages) => set({messages}),
}))

export default useConversation;