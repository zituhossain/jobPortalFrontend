import { Badge } from "./ui/badge";
import PropTypes from "prop-types";

const LatestJobCards = ({ job }) => {
  LatestJobCards.propTypes = {
    job: PropTypes.object,
  };

  return (
    <div className="bg-white shadow-xl border border-gray-100 p-5 rounded-md cursor-pointer">
      <div>
        <h1 className="text-lg font-medium">{job?.company?.name}</h1>
        <p className="text-gray-500 text-sm">{job?.location}</p>
      </div>
      <div>
        <h1 className="text-lg font-bold my-2">{job?.title}</h1>
        <p className="text-gray-600 text-sm">{job?.description}</p>
      </div>
      <div className="flex gap-2 items-center mt-4">
        <Badge className="text-blue-500" variant="ghost">
          {job?.position} Position
        </Badge>
        <Badge className="text-red-500" variant="ghost">
          {job?.jobType}
        </Badge>
        <Badge className="text-violet-600" variant="ghost">
          {job?.salary}
        </Badge>
      </div>
    </div>
  );
};

export default LatestJobCards;
