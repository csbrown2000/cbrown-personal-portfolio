import React, {useState} from 'react';

// Arrow buttons & Icons


// CSS file
import './PictureSwitcher.css';

// Function to ensure that an idx is within the bounds of the array
// automatically loops back to start/end as index increases/decreases
function cycler(idx, size){
	if (idx === size){
		return 0;
	}else if (idx < 0){
		return size - 1;
	}else {
		return idx;
	}
}

function PictureSwitcher(props) {
	const [idx, setIdx] = useState(0);

	const nextImg = () => {
		setIdx(cycler(idx + 1, props.img.length));
	};
	
	const prevImg = () => {
		setIdx(cycler(idx - 1, props.img.length));
	};

	return ( 
		<div className='picture-switcher'>
			<button className='material-symbols-outlined' onClick={prevImg}>chevron_left</button>
			<img src={props.img[idx]} alt="" />
			<button className='material-symbols-outlined' onClick={nextImg}>chevron_right</button>
		</div>
	 );
}

export default PictureSwitcher;