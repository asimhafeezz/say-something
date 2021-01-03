
import { DataI } from "../components/sayings"
import { firestore } from "./firebase"

interface sayingI {
    id?: string,
    saying: string,
    starCount: number,
    createdAt: Date
}

export const createSaying = async (dataToPost: sayingI): Promise<void> => {
    try{
        await firestore.collection('sayings').add(dataToPost)
    }catch (e: any){
        let err: Error = e
        console.log(err)
    }
}

export const getAllSayings = async (setData: React.Dispatch<React.SetStateAction<DataI[]>>): Promise<void> => {
    firestore.collection('sayings').orderBy('createdAt' , 'desc').onSnapshot(snapShot =>{
            const result = 
            snapShot
            .docs
            .map(item => ({id: item.id, saying: item.data().saying,starCount: item.data().starCount , createdAt: item.data().createdAt}))
            setData(result)
        })
}

export const updateStars = (id: string, starCount: number): void => {
    firestore.doc(`sayings/${id}`).update({starCount: starCount + 1})
}