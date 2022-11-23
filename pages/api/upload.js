import { getXataClient } from "../../src/xata";
import cookie from "cookie";

// import cloudinary
import { v2 } from "cloudinary";

// Cloudinary config
v2.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_SECRET,
});

const xata = getXataClient();

const uploader = async (req, res) => {
  const cookies = cookie.parse(req.headers.cookie || "");

  // check if user is authenticated
  const isAuthenticated = cookies.token;
  if (!isAuthenticated) {
    console.log("not authenticated");
    res.status(401).end();
    return;
  }

  const { title, description, timeline, image } = JSON.parse(req.body);

  const result = await v2.uploader.upload(image, {
    // upload to cloudinary
    auto_tagging: 0.6,
  });

  await xata.db.timelines.create({
    title,
    description,
    user: cookies.userId,
    image_url: result.secure_url,
    timeline,
  });
  res.status(200).json(result);
};

export default uploader;

// Allow only a specific size limit
export const config = {
  api: {
    bodyParser: {
      sizeLimit: "10mb",
    },
  },
};
