
import { firestore } from "./firebase"

interface sayingI {
    id?: string,
    saying: string,
    starCount: number,
    createdAt: Date
}

export const createSaying = async (dataToPost: sayingI): Promise<void> => {
    try{
        const createPost = await firestore.collection('sayings').add(dataToPost)
        console.log('post created.', createPost)
    }catch (e: any){
        let err: Error = e
        console.log(err)
    }
}

export const getAllSayings = async (setData: React.Dispatch<React.SetStateAction<sayingI[]>>): Promise<void> => {
    try{
        firestore.collection('sayings').onSnapshot(snapShot =>{
            const result = snapShot.docs.map(item => ({id: item.id, saying: item.data().saying,starCount: item.data().starCount , createdAt: item.data().createdAt}))
            console.log('this is result...' , result)
            setData(result)
        })
    }catch(e: any){
        let err: Error = e
        console.log(err)
    }
}