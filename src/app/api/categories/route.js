import Category from "../../../../Models/Category";
import connectDB from "../../lib/connectDB";

// Handle POST requests
export async function POST(req, res) {
    await connectDB();

    try {
        const category = new Category(await req.json());
        await category.save();
        return new Response(JSON.stringify(category), { status: 201 });
    } catch (error) {
        return new Response(JSON.stringify({ error: error.message }), { status: 400 });
    }
}

// Optionally handle other methods, like GET, DELETE, etc.
// Handle GET requests
export async function GET() {
    await connectDB();

    try {
        const categories = await Category.find({});
        return new Response(JSON.stringify(categories), { status: 200 });
    } catch (error) {
        return new Response(JSON.stringify({ error: error.message }), { status: 500 });
    }
}