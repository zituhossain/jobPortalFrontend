import { Badge } from "./ui/badge";

const LatestJobCards = () => {
  return (
    <div className="bg-white shadow-xl border border-gray-100 p-5 rounded-md cursor-pointer">
      <div>
        <h1 className="text-lg font-medium">Company Name</h1>
        <p className="text-gray-500 text-sm">Bangladesh</p>
      </div>
      <div>
        <h1 className="text-lg font-bold my-2">Job Title</h1>
        <p className="text-gray-600 text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
          expedita placeat aperiam unde reiciendis minus.
        </p>
      </div>
      <div className="flex gap-2 items-center mt-4">
        <Badge className="text-blue-500" variant="ghost">
          12 Position
        </Badge>
        <Badge className="text-red-500" variant="ghost">
          Remote
        </Badge>
        <Badge className="text-violet-600" variant="ghost">
          Part Time
        </Badge>
      </div>
    </div>
  );
};

export default LatestJobCards;
