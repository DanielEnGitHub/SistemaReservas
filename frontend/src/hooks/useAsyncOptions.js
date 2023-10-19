import {
  //   addDoc,
  collection,
  getDocs,
  limit,
  query,
  where,
} from "firebase/firestore";
// import { isEmpty, isFinite } from "lodash";

import { db } from "../firebase/config";

export default function useAsyncOptions(
  collection_name,
  search_field_name = "name"
) {
  const asyncOptions = async (search) => {
    try {
      if (!collection_name) {
        console.log("collection_name is required");
        return [];
      }

      const categoriesCollection = collection(db, collection_name);
      const data = [];
      const q = query(
        categoriesCollection,
        where("active", "==", true),
        search
          ? where(search_field_name, "==", search)
          : where("active", "==", true),
        limit(10)
      );

      const categories = await getDocs(q);

      if (categories.empty) {
        console.log("No matching documents.");
        return [];
      }

      categories.forEach((doc) => {
        data.push({ ...doc.data(), id: doc.id });
      });

      return data;

      //   const _data = await api.get(collection_name, _params);
      //   if (_data && _data.results) return _data.results;
    } catch (e) {
      return [];
    }
  };

  return { asyncOptions };
}
