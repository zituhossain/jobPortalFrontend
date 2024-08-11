import { Label } from "./ui/label";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";

const filterData = [
  {
    filterType: "Location",
    filterValue: ["Bangladesh", "Canada", "India", "USA"],
  },
  {
    filterType: "Industry",
    filterValue: [
      "Frontend Developer",
      "Backend Developer",
      "Data Science",
      "Graphic Designer",
      "Full Stack Developer",
    ],
  },
  {
    filterType: "Salary",
    filterValue: ["10k - 20k", "20k - 30k", "30k - 40k", "40k - 50k"],
  },
];

const FilterCard = () => {
  return (
    <div className="w-full bg-white p-3 rounded-md">
      <h1 className="font-bold text-lg">Filter Jobs</h1>
      <hr className="mt-3" />
      <RadioGroup>
        {filterData.map((data, index) => (
          <div key={index}>
            <h1 className="font-bold text-lg">{data?.filterType}</h1>
            {data?.filterValue?.map((value, index) => {
              return (
                <div key={index} className="flex items-center space-x-2 my-2">
                  <RadioGroupItem value={value} />
                  <Label>{value}</Label>
                </div>
              );
            })}
          </div>
        ))}
      </RadioGroup>
    </div>
  );
};

export default FilterCard;
