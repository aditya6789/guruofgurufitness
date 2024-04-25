
interface ITitle {
  name: string;
  desc?: string;
  classname?:string;
}

const Title = ({ name, desc , classname }: ITitle) => {
  return (
    <div className="my-10 flex flex-col justify-start items-start">
      <h1 className={`text-[30px] font-bold text-violet-500 uppercase ${classname}`}>{name}</h1>
      <p className="text-[20px] font-medium text-gray-500">{desc}</p>
    </div>
  );
};

export default Title;
