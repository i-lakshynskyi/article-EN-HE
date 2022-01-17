import React from 'react';

import { useTranslation } from 'react-i18next';
import '../../utils/i18next';

function Languages() {
	const langArr = ['en', 'he'];
	const { i18n } = useTranslation();

	const changeLanguage = (lang) => {
		i18n.changeLanguage(lang);
	};

	return (
		<div>
			{langArr.map((l, idx) => <button key={`${l}${idx}`} onClick={() => changeLanguage(l)}>{l}</button>)}
		</div>
	);
}

export default Languages;
