'use client';

import { useState } from 'react';

// Persian digits mapping
const persianDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];

// Convert English digits to Persian
const englishToPersian = (str: string): string =>
    str.replace(/\d/g, (d) => persianDigits[parseInt(d)]);

// Convert Persian digits to English
const persianToEnglish = (str: string): string =>
    str.replace(/[۰-۹]/g, (d) => String(persianDigits.indexOf(d)));

// Format price with Persian digits and commas
const formatPrice = (value: string): string => {
    const enDigits = persianToEnglish(value.replace(/,/g, ''));
    const number = parseInt(enDigits || '0', 10);
    if (isNaN(number) || !enDigits) return '';
    return englishToPersian(number.toLocaleString('en-US'));
};

// Define props interface with nullable HTML input attributes and custom error props
interface PriceConvertorProps extends React.InputHTMLAttributes<HTMLInputElement> {
    userCountry?: 'IRR' | 'EUR' | string; // Allow custom currencies
    errorMessage?: string; // Custom error message
    errorClassName?: string; // Custom error label styling
}

export default function PriceConvertor({
    userCountry = 'IRR',
    className = '',
    placeholder,
    errorMessage = 'لطفا فقط عدد وارد کنید',
    errorClassName = '',
    ...inputProps
}: PriceConvertorProps) {
    const [price, setPrice] = useState<string>('');
    const [rawPrice, setRawPrice] = useState<number | null>(null);
    const [error, setError] = useState<string>('');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const input = e.target.value;
        const cleanInput = persianToEnglish(input).replace(/[^0-9]/g, '');

        if (cleanInput === '') {
            setPrice('');
            setRawPrice(null);
            setError('');
            return;
        }

        const numericValue = parseInt(cleanInput, 10);
        if (isNaN(numericValue)) {
            setError(errorMessage);
            return;
        }

        setRawPrice(numericValue);
        setPrice(formatPrice(cleanInput));
        setError('');
    };

    // Determine default placeholder based on userCountry
    const defaultPlaceholder = `مبلغ مورد نظر ${userCountry === 'IRR' ? 'تومان' : userCountry === 'EUR' ? '€' : ''}`;

    return (
        <>
            <input
                type="text"
                value={price}
                onChange={handleInputChange}
                className={className}
                placeholder={placeholder || defaultPlaceholder}
                {...inputProps}
            />
            {error && (
                <p className={errorClassName}>{error}</p>
            )}
        </>
    );
}