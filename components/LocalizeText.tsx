import React from 'react';
import Trans from 'next-translate/Trans';

const LocalizedText: React.FC<LocalizedProps> = ({t, ...props}) => (
    <Trans i18nKey={`common:${t}`} {...props} fallback={t} />
);

export {LocalizedText};
