import {
  collection,
  getDocs,
  getDoc,
  doc,
  query,
  where,
  addDoc,
  serverTimestamp,
  writeBatch
} from "firebase/firestore";
import { db } from "./firebaseConfig";

const productsCol = () => collection(db, "products");
const ordersCol = () => collection(db, "orders");

export const fetchProducts = async (categoryId) => {
  const q = categoryId
    ? query(productsCol(), where("category", "==", categoryId))
    : productsCol();

  const snap = await getDocs(q);
  return snap.docs.map((d) => ({ id: d.id, ...d.data() }));
};

export const fetchProductById = async (itemId) => {
  const ref = doc(db, "products", itemId);
  const snap = await getDoc(ref);
  if (!snap.exists()) return null;
  return { id: snap.id, ...snap.data() };
};

export const createOrder = async (order) => {
  const batch = writeBatch(db);

  const newOrderRef = doc(ordersCol());

  batch.set(newOrderRef, {
    ...order,
    createdAt: serverTimestamp(),
  });

  for (const item of order.items) {
    const productRef = doc(db, "products", item.id);
    const productSnap = await getDoc(productRef);

    const currentStock = productSnap.data().stock;

    if (currentStock < item.quantity) {
      throw new Error(`Stock insuficiente para ${item.title}`);
    }

    batch.update(productRef, {
      stock: currentStock - item.quantity,
    });
  }

  await batch.commit();

  return newOrderRef.id;
};
