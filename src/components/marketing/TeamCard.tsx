const TeamCard = ({
  name,
  role,
  img,
}: {
  name: string;
  role: string;
  img: any;
}) => {
  return (
    <div className="card bg-base-100 shadow-xl rounded-none rounded-tl-[80px] rounded-br-[80px]">
      <figure>
        <div className="w-full h-[300px] relative">
          <img
            src={img.src}
            className="w-full h-full object-cover"
            alt="no-image"
          />
        </div>
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
        <p>{role}</p>
      </div>
    </div>
  );
};

export default TeamCard;
