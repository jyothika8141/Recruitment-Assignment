import { useState } from "react";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { auth, db } from "../firebase-config";

export const Chat = () => {
    const [newMessage, setNewMessage] = useState("");

    const messageRef = collection(db, "ramayana-chat")

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(newMessage)

        if (newMessage==="") return;

        await addDoc(messageRef, {
            text: newMessage,
            createdAt: serverTimestamp(),
            user: auth.currentUser.displayName,
        });

        setNewMessage("");
    }

    return (
        <div className="chat-page">
            <form onSubmit={ handleSubmit } className="new-message-form">
                <input 
                    className="new-messaage" 
                    placeholder="Type your next message..." 
                    onChange={(e) => setNewMessage(e.target.value)}
                    value={newMessage}
                />
                 <button type="submit" className="send-button">
                    Send
                 </button>
            </form>
            <div className="signout">
                <button className="signout-button"> Sign Out </button>
            </div>
        </div>

    )
}