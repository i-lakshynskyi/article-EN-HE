import React from 'react';
import './content.scss';

import { useTranslation } from 'react-i18next';
import '../../utils/i18next';

function Content(props) {
	// eslint-disable-next-line react/prop-types
	const { currencyList } = props;
	const currentLanguage = localStorage.getItem('i18nextLng');


	const {t} = useTranslation();

	return (
		<div className="content-wrapper">
			<div className={`title text ${currentLanguage}`}>
				<span>
					{t('title')}
				</span>
			</div>
			<div className={`content text ${currentLanguage}`}>
				<div>
					<p>
						{t('content.p-one')}
					</p>
				</div>
				<div>
					<p>
						{t('content.p-two')}
					</p>
				</div>
				<div>
					{
						<p>
							{t('content.shekel-exchange-rate', { currencyList })}
						</p>
					}
				</div>
			</div>
		</div>
	);
}

export default Content;