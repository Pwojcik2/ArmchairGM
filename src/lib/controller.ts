import { getFirestore, collection, getDocs } from "firebase/firestore";
import { app } from "./firebase";

export const firestore = getFirestore(app);

//COLLECTIONS
export const rangersCollection = collection(firestore, "rangers");
export const rangersFinanceCollection = collection(firestore, "rangersFinance");

const fetchRangersCollection = async () => {
  try {
    const querySnapshot = await getDocs(rangersFinanceCollection);
    const rangers: any[] = [];
    querySnapshot.forEach((doc) => {
      rangers.push({ id: doc.id, ...doc.data() });
    });
    console.log("RANGERS COLLECTION:", rangers);
  } catch (error) {
    console.error("Error fetching rangers collection:", error);
  }
};

// Call the function to fetch and log the data
fetchRangersCollection();
