import clientPromise from "@/lib/mongodb";

export async function POST(req) {
  const body = await req.json();

  // resolve the promise to get the client
  const client = await clientPromise;

  // get the database
  const db = client.db("MintLinks");

  // get the collection
  const collection = db.collection("url");
  const docs = await collection.findOne({ shorturl: body.shorturl });
  if (docs) {
    return Response.json({
      success: false,
      error: true,
      message: "URL already exist",
    });
  }
  // insert document
  const result = await collection.insertOne({
    url: body.url,
    shorturl: body.shorturl,
  });

  return Response.json({
    success: true,
    error: false,
    message: "URL generated successfully",
  });
}
