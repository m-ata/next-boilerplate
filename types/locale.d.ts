import {TransProps} from 'next-translate';
declare global {
    interface LocalizedProps extends Omit<TransProps, 'i18nKey'> {
        t?: string;
    }
}