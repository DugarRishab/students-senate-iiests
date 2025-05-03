const AvatarCard = ({
    name,
    department,
    profilePic,
    bgColor = "bg-yellow",
    ringColor = "#4C4CED",
}) => {
    const arcWidth = 3; // thickness of ring in px
    const arcAngle = 110; // degrees of each purple arc
    const gapAngle = 180 - arcAngle;

    const gradient = `
        conic-gradient(
          ${ringColor}   0deg ${arcAngle}deg,
          transparent ${arcAngle}deg ${arcAngle + gapAngle}deg,
          ${ringColor}   ${arcAngle + gapAngle}deg ${2 * arcAngle + gapAngle}deg,
          transparent ${2 * arcAngle + gapAngle}deg 360deg
        )
      `;
    return (
        <div className="flex flex-col items-center max-w-xs mx-auto text-center">
            <div
                className={`relative rounded-full`}
                style={{
                    padding: arcWidth,
                    background: gradient,
                }}
            >
                <div
                    className={`relative rounded-full overflow-hidden size-32 ${bgColor}`}
                >
                    {profilePic ? (
                        <img
                            src={profilePic}
                            alt={`${name}'s avatar`}
                            className="w-full h-full object-contain"
                        />
                    ) : (
                        <div className="flex items-center justify-center h-full w-full">
                            <span className="text-4xl font-bold">
                                {name.charAt(0)}
                            </span>
                        </div>
                    )}
                </div>
            </div>

            <h2 className="mt-4 text-xl font-bold">{name}</h2>
            {/* Divider */}
            <div className="w-32 h-0.5 bg-gray-600 my-2"></div>
            <p className="text-center text-base max-w-xs">{department}</p>
        </div>
    );
};

export default AvatarCard;
