export const headlinePoses = {
	exit: { opacity: 0, y: 30 },
	enter: {
		opacity: 1,
		y: 0,
		delay: ({ wordIndex }) => wordIndex * 300,
		transition: {
			opacity: { ease: "easeIn", duration: 1000 },
			duration: 600,
			ease: "circOut"
		}
	}
};

export const bodyPoses = {
	exit: { opacity: 0, y: 0 },
	enter: {
		opacity: 1,
		y: 0,
		delay: 1000,
		transition: {
			duration: 1000,
			ease: "easeIn"
		}
	}
};
