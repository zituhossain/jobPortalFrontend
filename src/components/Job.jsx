import { Bookmark } from "lucide-react";
import { Button } from "./ui/button";
import { Avatar, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";

const Job = () => {
  return (
    <div className="bg-white shadow-xl border border-gray-100 p-5 rounded-md cursor-pointer">
      <div className="flex justify-between items-center">
        <p className="text-gray-500 text-sm">2 days ago</p>
        <Button variant="outline" size="icon" className="rounded-full">
          <Bookmark />
        </Button>
      </div>

      <div className="flex items-center gap-2 my-2">
        <Button className="p-6" variant="ghost" size="icon">
          <Avatar>
            <AvatarImage
              src="https://www.shutterstock.com/image-vector/circle-line-simple-design-logo-600nw-2174926871.jpg"
              alt="@shadcn"
            />
          </Avatar>
        </Button>
        <div>
          <h1 className="text-lg font-medium">Company Name</h1>
          <p className="text-gray-500 text-sm">Bangladesh</p>
        </div>
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
      <div className="flex gap-4 mt-4">
        <Button variant="outline">Details</Button>
        <Button className="bg-[#7209b7]">Save For Later</Button>
      </div>
    </div>
  );
};

export default Job;
