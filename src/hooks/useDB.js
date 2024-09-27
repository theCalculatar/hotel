import { collection, getDocs } from "firebase/firestore"
import { db } from "../firebase/config";
import { useState } from "react";

export default function useDB () {
    const [rooms, setRooms] = useState([]);

    const getRooms = async () => {
        try {
            const res = await getDocs(collection(db, 'rooms'));
            const rooms_ = res.docs.map(data => data.data());
            setRooms(rooms_);
        } catch (error) {
            console.log(error)
        }
    }
    return {
        getRooms,
        rooms
    }
}