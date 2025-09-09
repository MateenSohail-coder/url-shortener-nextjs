import { redirect } from "next/navigation";
import clientPromise from "@/lib/mongodb";

export default async function Page({ params }) {
  const { Shorturl } = params; // ✅ no await

  const client = await clientPromise;
  const db = client.db("MintLinks");
  const collection = db.collection("url");

  const docs = await collection.findOne({ shorturl: Shorturl });

  if (docs) {
    redirect(docs.url);
  } else {
    redirect(process.env.NEXT_PUBLIC_HOST || "/");
  }

  // This will likely never render, since redirect() exits
  return <div>My Post: {docs?.url}</div>;
}
