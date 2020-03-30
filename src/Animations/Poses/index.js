export const headlinePoses = {
	exit: { opacity: 0, y: 30 },
	enter: {
		opacity: 1,
		y: 0,
		delay: ({ wordIndex }) => wordIndex * 300,
		transition: {
			opacity: { ease: "easeInOut", duration: 500 },
			duration: 1500,
			ease: [0.24, 0.89, 0.24, 1]
		}
	}
};

export const bodyPoses = {
	exit: { opacity: 0, y: 0 },
	enter: {
		opacity: 1,
		y: 0,
		delay: 2000,
		transition: {
			duration: 500,
			ease: "easeIn"
		}
	}
};
